#!/bin/bash

# 生成签名证书
# 注意：请妥善保存此证书，它是发布应用所必需的

echo "正在生成Android签名证书..."

# 检查是否已安装Java
if ! command -v java &> /dev/null; then
    echo "错误：未找到Java，请先安装Java JDK"
    exit 1
fi

# 生成签名证书
keytool -genkey -v \
    -keystore omikuji-release.keystore \
    -alias omikuji \
    -keyalg RSA \
    -keysize 2048 \
    -validity 10000 \
    -storepass omikuji123 \
    -keypass omikuji123 \
    -dname "CN=Omikuji App, OU=Development, O=Omikuji, L=Tokyo, S=Tokyo, C=JP"

echo "签名证书生成完成！"
echo "证书文件：omikuji-release.keystore"
echo "别名：omikuji"
echo "请妥善保存此文件，不要提交到版本控制"
echo ""
echo "重要提醒："
echo "1. 请修改keystore.properties中的密码为您自己的安全密码"
echo "2. 备份此证书文件，丢失将无法更新应用"
echo "3. 不要将此文件提交到Git仓库"