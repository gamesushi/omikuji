@echo off
echo === Android构建环境检查 ===

echo.
echo 检查Java环境...
java -version >nul 2>&1
if %errorlevel% equ 0 (
    echo Java已安装
) else (
    echo Java未安装，请先安装Java JDK 11+
)

echo.
echo 检查Android SDK...
if exist "%USERPROFILE%\AppData\Local\Android\Sdk" (
    echo Android SDK found at: %USERPROFILE%\AppData\Local\Android\Sdk
) else (
    echo Android SDK not found
)

echo.
echo 检查Gradle...
if exist "android\gradlew.bat" (
    echo Gradle wrapper found
) else (
    echo Gradle wrapper not found
)

echo.
echo === 总结 ===
echo 如果Java和Android SDK都已安装，运行：
echo   build-android-simple.bat
echo.
echo 如果缺少环境，请参考：JAVA_INSTALL_GUIDE.md
echo.
pause