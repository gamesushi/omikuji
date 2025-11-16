# 设置环境变量并构建Android应用

Write-Host "=== Android构建环境检查 ===" -ForegroundColor Green

# 自动检测Java安装路径
$javaPaths = @(
    "C:\Program Files\Java\jdk-17",
    "C:\Program Files\Java\jdk-11",
    "C:\Program Files\Java\jdk-1.8",
    "C:\Program Files\Java\jdk-21"
)

$javaFound = $false
foreach ($path in $javaPaths) {
    if (Test-Path "$path\bin\java.exe") {
        $env:JAVA_HOME = $path
        $javaFound = $true
        Write-Host "✓ 找到Java: $path" -ForegroundColor Green
        break
    }
}

if (-not $javaFound) {
    Write-Host "✗ 未找到Java安装" -ForegroundColor Red
    Write-Host "请先安装Java JDK 11+，访问: https://adoptium.net/" -ForegroundColor Yellow
    exit 1
}

# 设置Android SDK路径
$env:ANDROID_HOME = "$env:USERPROFILE\AppData\Local\Android\Sdk"

# 将Java和Android工具添加到PATH
$env:PATH = "$env:JAVA_HOME\bin;$env:ANDROID_HOME\tools;$env:ANDROID_HOME\platform-tools;$env:PATH"

# 显示环境变量状态
Write-Host "`n环境变量设置:" -ForegroundColor Yellow
Write-Host "JAVA_HOME: $env:JAVA_HOME" -ForegroundColor Cyan
Write-Host "ANDROID_HOME: $env:ANDROID_HOME" -ForegroundColor Cyan

# 检查Java版本
Write-Host "`nJava版本:" -ForegroundColor Yellow
try {
    java -version
} catch {
    Write-Host "Java运行失败，请检查安装" -ForegroundColor Red
    exit 1
}

# 检查Android SDK
if (Test-Path "$env:ANDROID_HOME\tools\bin\sdkmanager.bat") {
    Write-Host "`n✓ Android SDK found" -ForegroundColor Green
} else {
    Write-Host "`n⚠ Android SDK not found, please install Android Studio" -ForegroundColor Yellow
    Write-Host "下载地址: https://developer.android.com/studio" -ForegroundColor Cyan
}

# 检查Gradle包装器
$gradlePath = "$PSScriptRoot\android\gradlew.bat"
if (-not (Test-Path $gradlePath)) {
    Write-Host "`n✗ Gradle wrapper not found" -ForegroundColor Red
    exit 1
}

# 构建发布版本
Write-Host "`n=== 开始构建Android发布版本 ===" -ForegroundColor Green
Set-Location "$PSScriptRoot\android"

# 检查签名配置
if (-not (Test-Path "..\keystore.properties")) {
    Write-Host "⚠ 签名配置文件不存在，将生成调试版本" -ForegroundColor Yellow
    .\gradlew assembleDebug
} else {
    Write-Host "✓ 使用发布签名配置" -ForegroundColor Green
    .\gradlew assembleRelease
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ 构建成功！" -ForegroundColor Green
    
    # 查找生成的APK文件
    $apkFiles = Get-ChildItem -Path "app\build\outputs\apk" -Filter "*.apk" -Recurse
    if ($apkFiles) {
        Write-Host "生成的APK文件:" -ForegroundColor Yellow
        foreach ($file in $apkFiles) {
            Write-Host "  $($file.FullName)" -ForegroundColor Cyan
            Write-Host "  大小: $([math]::Round($file.Length/1MB, 2)) MB" -ForegroundColor Gray
        }
    }
} else {
    Write-Host "`n✗ 构建失败，请检查错误信息" -ForegroundColor Red
}

Write-Host "`n构建完成！" -ForegroundColor Green