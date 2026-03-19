@echo off
echo 正在检查Java环境...

java -version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Java已安装
    java -version
) else (
    echo ❌ Java未安装
    echo.
    echo 请按以下步骤安装Java 17：
    echo 1. 访问: https://adoptium.net/
    echo 2. 下载Java 17 (LTS)
    echo 3. 安装并重启命令行
    echo.
    echo 或者使用Chocolatey安装：
    echo choco install temurin17
)

echo.
echo 检查JAVA_HOME环境变量...
echo %JAVA_HOME%
echo.
echo 按任意键退出...
pause >nul