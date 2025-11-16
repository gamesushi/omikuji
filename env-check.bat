@echo off
chcp 65001 >nul
echo === Android构建环境检查 ===

echo.
echo 检查Java环境...
where java >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Java已安装
    java -version
) else (
    echo ✗ Java未安装，请先安装Java JDK 11+
    echo 下载地址: https://adoptium.net/
)

echo.
echo 检查Gradle...
where gradle >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Gradle已安装
    gradle --version
) else (
    echo ✗ Gradle未安装
)

echo.
echo 检查Android SDK...
if exist "%USERPROFILE%\AppData\Local\Android\Sdk" (
    echo ✓ Android SDK found
) else (
    echo ⚠ Android SDK not found
)

echo.
echo 检查项目文件...
if exist "android\gradlew.bat" (
    echo ✓ Android项目已配置
) else (
    echo ✗ Android项目未找到
)

echo.
echo === 总结 ===
echo.
echo 如果Java已安装，可以直接构建Android项目：
echo   cd android
echo   gradlew assembleDebug
echo.
echo 如果缺少Java，请先安装Java JDK 11+
echo.
pause