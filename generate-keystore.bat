@echo off
echo 正在生成Android签名证书...

REM 检查是否已安装Java
where java >nul 2>nul
if %errorlevel% neq 0 (
    echo 错误：未找到Java，请先安装Java JDK
    exit /b 1
)

echo 请手动运行以下命令生成签名证书：
echo.
echo keytool -genkey -v -keystore omikuji-release.keystore -alias omikuji -keyalg RSA -keysize 2048 -validity 10000
echo.
echo 重要提醒：
echo 1. 请设置安全的密码并修改keystore.properties中的密码
echo 2. 备份此证书文件，丢失将无法更新应用
echo 3. 不要将此文件提交到Git仓库
echo.
echo 按任意键继续...
pause