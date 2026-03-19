@echo off
echo ====================================
echo  Local Android APK Build
echo ====================================

echo Step 1: Building web application...
call npm run build
if %errorlevel% neq 0 (
    echo FAILED: Web application build failed
    pause
    exit /b 1
)

echo Step 2: Syncing Capacitor...
call npx cap sync android
if %errorlevel% neq 0 (
    echo FAILED: Capacitor sync failed
    pause
    exit /b 1
)

echo Step 3: Building Android APK...
cd android
call gradlew.bat assembleDebug
if %errorlevel% neq 0 (
    echo FAILED: APK build failed
    pause
    exit /b 1
)

echo.
echo ====================================
echo SUCCESS: APK built successfully!
echo ====================================
echo APK file location:
echo %cd%\app\build\outputs\apk\debug\app-debug.apk
echo.
echo Press any key to open the file location...
pause >nul

explorer "%cd%\app\build\outputs\apk\debug"