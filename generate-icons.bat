@echo off
echo.
echo ====================================
echo  生成Android应用图标
echo ====================================
echo.

REM 检查原始图标文件
if not exist "..\public\images\common\tong.png" (
    echo 错误：找不到原始图标文件 tong.png
    echo 请确保文件存在于：public\images\common\tong.png
    pause
    exit /b 1
)

echo 正在生成不同尺寸的Android图标...

REM 创建临时目录
mkdir temp_icons 2>nul

REM 复制原始图标到Android资源目录
echo 正在复制图标到Android资源目录...

REM 生成不同尺寸的图标（使用内置的PowerShell进行简单的图像缩放）
powershell -Command "
# 加载原始图像
$original = [System.Drawing.Image]::FromFile('..\public\images\common\tong.png')

# 定义需要的尺寸
$sizes = @(
    @{Name='hdpi'; Size=72},
    @{Name='mdpi'; Size=48},
    @{Name='xhdpi'; Size=96},
    @{Name='xxhdpi'; Size=144},
    @{Name='xxxhdpi'; Size=192}
)

foreach ($size in $sizes) {
    # 创建新位图
    $bitmap = New-Object System.Drawing.Bitmap($size.Size, $size.Size)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    
    # 设置高质量缩放
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    # 绘制缩放后的图像
    $graphics.DrawImage($original, 0, 0, $size.Size, $size.Size)
    
    # 保存到对应的Android资源目录
    $outputPath = '..\android\app\src\main\res\mipmap-' + $size.Name + '\ic_launcher.png'
    $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    # 也保存圆形图标版本
    $outputRoundPath = '..\android\app\src\main\res\mipmap-' + $size.Name + '\ic_launcher_round.png'
    $bitmap.Save($outputRoundPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    Write-Host \"  生成 $($size.Name) 尺寸图标 ($($size.Size)x$($size.Size))\"
    
    # 清理资源
    $graphics.Dispose()
    $bitmap.Dispose()
}

# 清理原始图像
$original.Dispose()
Write-Host '图标生成完成！'
"

if %errorlevel% equ 0 (
    echo.
    echo ====================================
    echo  图标生成成功！
    echo ====================================
    echo.
    echo 已生成以下尺寸的图标：
    echo - hdpi: 72x72px
    echo - mdpi: 48x48px  
    echo - xhdpi: 96x96px
    echo - xxhdpi: 144x144px
    echo - xxxhdpi: 192x192px
    echo.
    echo 图标已保存到 Android 资源目录
) else (
    echo.
    echo ====================================
    echo  图标生成失败！
    echo ====================================
    echo 请确保 PowerShell 可以正常运行
)

echo.
pause