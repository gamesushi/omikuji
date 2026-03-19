@echo off
echo Checking Java environment...

java -version >nul 2>&1
if %errorlevel% equ 0 (
    echo Java is installed
    java -version
) else (
    echo Java is NOT installed
    echo.
    echo Please install Java 17:
    echo 1. Visit: https://adoptium.net/
    echo 2. Download Java 17 (LTS)
    echo 3. Install and restart command line
)

echo.
echo Checking JAVA_HOME environment variable...
echo %JAVA_HOME%
echo.
echo Press any key to exit...
pause >nul