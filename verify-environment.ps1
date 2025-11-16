# 环境验证脚本
Write-Host "=== Android构建环境验证 ===" -ForegroundColor Green

# 检查Java
Write-Host "`n检查Java环境..." -ForegroundColor Yellow
try {
    $javaOutput = & java -version 2>&1
    if ($javaOutput -match "version") {
        Write-Host "✓ Java已安装" -ForegroundColor Green
        $javaOutput | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }
    } else {
        throw "Java not found"
    }
} catch {
    Write-Host "✗ Java未安装或不在PATH中" -ForegroundColor Red
    Write-Host "  请安装Java JDK 11+ 并配置环境变量" -ForegroundColor Yellow
}

# 检查Android SDK
Write-Host "`n检查Android SDK..." -ForegroundColor Yellow
$androidPaths = @(
    "$env:USERPROFILE\AppData\Local\Android\Sdk",
    "$env:ANDROID_HOME",
    "C:\Android\Sdk"
)

$androidFound = $false
foreach ($path in $androidPaths) {
    if ($path -and (Test-Path $path)) {
        Write-Host "✓ Android SDK found at: $path" -ForegroundColor Green
        $androidFound = $true
        break
    }
}

if (-not $androidFound) {
    Write-Host "✗ Android SDK not found" -ForegroundColor Red
    Write-Host "  请安装Android Studio" -ForegroundColor Yellow
}

# 检查环境变量
Write-Host "`n检查环境变量..." -ForegroundColor Yellow
Write-Host "JAVA_HOME: $env:JAVA_HOME" -ForegroundColor Cyan
Write-Host "ANDROID_HOME: $env:ANDROID_HOME" -ForegroundColor Cyan

# 检查Gradle
Write-Host "`n检查Gradle..." -ForegroundColor Yellow
$gradlePath = "android\gradlew.bat"
if (Test-Path $gradlePath) {
    Write-Host "✓ Gradle wrapper found" -ForegroundColor Green
} else {
    Write-Host "✗ Gradle wrapper not found" -ForegroundColor Red
}

# 总体状态
Write-Host "`n=== 总结 ===" -ForegroundColor Green
if ($androidFound -and ($javaOutput -match "version")) {
    Write-Host "✓ 环境基本配置完成，可以尝试构建" -ForegroundColor Green
    Write-Host "  运行: .\build-android.ps1" -ForegroundColor Cyan
} else {
    Write-Host "✗ 环境配置不完整，请按以下步骤操作：" -ForegroundColor Red
    Write-Host "  1. 安装Java JDK 11+" -ForegroundColor Yellow
    Write-Host "  2. 安装Android Studio" -ForegroundColor Yellow
    Write-Host "  3. 配置环境变量" -ForegroundColor Yellow
    Write-Host "  详细指南: JAVA_INSTALL_GUIDE.md" -ForegroundColor Cyan
}

Write-Host "`n按任意键退出..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")