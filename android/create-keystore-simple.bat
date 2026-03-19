cd /d "%~dp0app"

REM 检查密钥是否已存在
if exist omikuji-release.keystore (
    echo 密钥文件已存在！
    goto :eof
)

echo 正在创建签名密钥库...
echo 密码将设置为：omikuji123
echo.

REM 使用keytool创建密钥（无交互）
"C:\Program Files\Java\jdk-17\bin\keytool.exe" -genkey -v -keystore omikuji-release.keystore -alias omikuji -keyalg RSA -keysize 2048 -validity 10000 -storepass omikuji123 -keypass omikuji123 -dname "CN=Omikuji App, OU=Development, O=YourCompany, L=YourCity, ST=YourState, C=CN"

if exist omikuji-release.keystore (
    echo.
    echo ✅ 密钥库创建成功！
    echo 📁 文件位置：app\omikuji-release.keystore
    echo 🔑 密码：omikuji123
    echo.
    echo ⚠️  重要：请妥善保管此文件和密码！
) else (
    echo ❌ 创建失败，请检查Java安装
)

echo.
pause