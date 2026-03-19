@echo off
echo 正在创建签名密钥库...
"C:\Program Files\Java\jdk-17\bin\keytool.exe" -genkey -v -keystore omikuji-release.keystore -alias omikuji -keyalg RSA -keysize 2048 -validity 10000 -storepass omikuji123 -keypass omikuji123 -dname "CN=Omikuji App, OU=Development, O=YourCompany, L=YourCity, S=YourState, C=CN"
echo 密钥库创建完成！
pause