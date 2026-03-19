@echo off
echo.
echo ====================================
echo  设置Android应用图标
echo ====================================
echo.

REM 检查原始图标文件
if not exist "public\images\common\tong.png" (
    echo 错误：找不到原始图标文件 tong.png
    echo 请确保文件存在于：public\images\common\tong.png
    pause
    exit /b 1
)

echo 正在复制图标到Android资源目录...
echo.

REM 复制图标到各个分辨率目录
copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-hdpi\ic_launcher.png"
copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-hdpi\ic_launcher_round.png"

copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-mdpi\ic_launcher.png"
copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-mdpi\ic_launcher_round.png"

copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-xhdpi\ic_launcher.png"
copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-xhdpi\ic_launcher_round.png"

copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-xxhdpi\ic_launcher.png"
copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-xxhdpi\ic_launcher_round.png"

copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-xxxhdpi\ic_launcher.png"
copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-xxxhdpi\ic_launcher_round.png"

echo.
echo 图标复制完成！
echo.
echo 正在更新配置文件...

REM 更新图标配置文件
echo 更新 ic_launcher_background.xml...
echo ^<?xml version="1.0" encoding="utf-8"?^> > android\app\src\main\res\values\ic_launcher_background.xml
echo ^<resources^> >> android\app\src\main\res\values\ic_launcher_background.xml
echo     ^<color name="ic_launcher_background"^>#FFFFFF^</color^> >> android\app\src\main\res\values\ic_launcher_background.xml
echo ^</resources^> >> android\app\src\main\res\values\ic_launcher_background.xml

echo.
echo ====================================
echo  Android图标设置完成！
echo ====================================
echo.
echo 下一步：
echo 1. 重新构建APK：运行 build-local-en.bat
echo 2. 安装到设备：运行 install-apk.bat
echo.
pause