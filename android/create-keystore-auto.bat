@echo off
echo 创建签名密钥库 - 自动版本
echo 注意：此版本使用预设密码，请确保在生产环境中使用安全密码
cd /d "%~dp0app"

set STORE_PASS=omikuji123
set KEY_PASS=omikuji123
set DNAME=CN=Omikuji App, OU=Development, O=YourCompany, L=YourCity, S=YourState, C=CN

echo 正在创建密钥库...
"C:\Program Files\Java\jdk-17\bin\keytool.exe" -genkey -v -keystore omikuji-release.keystore -alias omikuji -keyalg RSA -keysize 2048 -validity 10000 -storepass %STORE_PASS% -keypass %KEY_PASS% -dname "%DNAME%"

if exist omikuji-release.keystore (
    echo.
    echo ✅ 密钥库创建成功！
    echo 文件位置：app\omikuji-release.keystore
    echo.
    echo ⚠️  重要提示：
    echo - 请妥善保管此密钥文件和密码
    echo - 丢失密钥将无法更新应用
    echo - 建议备份到安全位置
) else (
    echo ❌ 密钥库创建失败
)

echo.
pause