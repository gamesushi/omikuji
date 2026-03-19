@echo off
echo 正在创建签名密钥库...
echo 请按提示输入信息
cd /d "%~dp0app"
"C:\Program Files\Java\jdk-17\bin\keytool.exe" -genkey -v -keystore omikuji-release.keystore -alias omikuji -keyalg RSA -keysize 2048 -validity 10000
echo.
echo 密钥库创建完成！
echo 文件位置：app\omikuji-release.keystore
echo.
echo 现在可以构建发布版本了：
echo cd.. && .\gradlew bundleRelease
echo.
pause