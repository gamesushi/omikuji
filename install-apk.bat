@echo off
echo.
echo ====================================
echo  安装御神签APK到Android设备
echo ====================================
echo.

REM 检查APK文件是否存在
if not exist "android\app\build\outputs\apk\debug\app-debug.apk" (
    echo 错误：APK文件不存在！
    echo 请先运行 build-local-en.bat 构建APK
    pause
    exit /b 1
)

echo 正在安装APK到连接的Android设备...
echo.

cd android
adb install app\build\outputs\apk\debug\app-debug.apk

if %errorlevel% equ 0 (
    echo.
    echo ====================================
    echo  安装成功！
    echo ====================================
    echo.
    echo 您可以在设备的应用列表中找到"御神签"应用
    echo 或者运行以下命令启动应用：
    echo adb shell am start -n com.omikuji.app/.MainActivity
) else (
    echo.
    echo ====================================
    echo  安装失败！
    echo ====================================
    echo.
    echo 请确保：
    echo 1. 设备已连接并启用了USB调试
    echo 2. 已安装Android Debug Bridge (ADB)
    echo 3. 设备允许安装未知来源应用
)

echo.
pause