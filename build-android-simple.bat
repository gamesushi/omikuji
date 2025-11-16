# 简化构建脚本
@echo off
echo === Android构建开始 ===

REM 检查Java
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：未找到Java，请先安装Java JDK 11+
    echo 下载地址: https://adoptium.net/
    pause
    exit /b 1
)

echo Java检查通过

REM 检查Android SDK
if not exist "%USERPROFILE%\AppData\Local\Android\Sdk" (
    echo 警告：未找到Android SDK
    echo 请安装Android Studio: https://developer.android.com/studio
)

echo 开始构建...
cd android

echo 构建调试版本...
call gradlew assembleDebug

if %errorlevel% equ 0 (
    echo.
    echo === 构建成功！===
    echo APK文件位置:
    dir /s /b "app\build\outputs\apk\debug\*.apk"
) else (
    echo.
    echo === 构建失败 ===
    echo 请检查错误信息
)

echo.
pause
cd ..