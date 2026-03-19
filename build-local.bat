@echo off
echo ====================================
echo  本地构建Android APK
echo ====================================

echo 步骤1: 构建Web应用...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Web应用构建失败
    pause
    exit /b 1
)

echo 步骤2: 同步Capacitor...
call npx cap sync android
if %errorlevel% neq 0 (
    echo ❌ Capacitor同步失败
    pause
    exit /b 1
)

echo 步骤3: 构建Android APK...
cd android
call gradlew.bat assembleDebug
if %errorlevel% neq 0 (
    echo ❌ APK构建失败
    pause
    exit /b 1
)

echo.
echo ====================================
echo ✅ APK构建成功！
echo ====================================
echo APK文件位置:
echo %cd%\app\build\outputs\apk\debug\app-debug.apk
echo.
echo 按任意键打开文件位置...
pause >nul

explorer "%cd%\app\build\outputs\apk\debug"