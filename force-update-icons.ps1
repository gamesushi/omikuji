# 强制替换Android图标 - PowerShell脚本
Write-Host "强制替换Android应用图标..." -ForegroundColor Green

# 停止Gradle进程
Write-Host "停止Gradle进程..."
cd android
.\gradlew --stop 2>$null
cd ..

# 清理构建缓存
Write-Host "清理构建缓存..."
Remove-Item -Path "android\app\build" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "android\.gradle" -Recurse -Force -ErrorAction SilentlyContinue

# 强制替换所有图标文件
Write-Host "替换所有图标文件..."
$iconSizes = @(
    @{Name='hdpi'; Size=72},
    @{Name='mdpi'; Size=48},
    @{Name='xhdpi'; Size=96},
    @{Name='xxhdpi'; Size=144},
    @{Name='xxxhdpi'; Size=192}
)

foreach ($size in $iconSizes) {
    $launcherPath = "android\app\src\main\res\mipmap-$($size.Name)\ic_launcher.png"
    $roundPath = "android\app\src\main\res\mipmap-$($size.Name)\ic_launcher_round.png"
    $foregroundPath = "android\app\src\main\res\mipmap-$($size.Name)\ic_launcher_foreground.png"
    
    Write-Host "  替换 $($size.Name) 尺寸图标..."
    Copy-Item -Path "public\images\common\tong.png" -Destination $launcherPath -Force
    Copy-Item -Path "public\images\common\tong.png" -Destination $roundPath -Force
    Copy-Item -Path "public\images\common\tong.png" -Destination $foregroundPath -Force
}

# 更新自适应图标配置
Write-Host "更新自适应图标配置..."
$adaptiveIconContent = @'<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@android:color/white"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>
'@

$adaptiveIconContent | Out-File -FilePath "android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml" -Encoding UTF8 -Force
$adaptiveIconContent | Out-File -FilePath "android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml" -Encoding UTF8 -Force

# 重新构建
Write-Host "重新构建APK..."
cd android
.\gradlew clean
.\gradlew assembleDebug

Write-Host "图标更新完成！" -ForegroundColor Green
Write-Host "新APK位置: android\app\build\outputs\apk\debug\app-debug.apk" -ForegroundColor Yellow