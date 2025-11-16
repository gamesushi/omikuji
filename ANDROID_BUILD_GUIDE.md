# PWA转Android应用打包指南

## 环境要求

### 1. 安装Java JDK
- 下载并安装Java JDK 11或更高版本
- 设置JAVA_HOME环境变量
- 将Java bin目录添加到PATH

### 2. 安装Android Studio
- 下载并安装Android Studio
- 安装Android SDK
- 配置Android SDK路径

### 3. 环境变量配置
```bash
# Windows
set JAVA_HOME=C:\Program Files\Java\jdk-17
set ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
set PATH=%PATH%;%JAVA_HOME%in;%ANDROID_HOME%	ools;%ANDROID_HOME%\platform-tools
```

## 打包步骤

### 1. 生成签名证书（重要！）
```bash
cd android
keytool -genkey -v -keystore omikuji-release.keystore -alias omikuji -keyalg RSA -keysize 2048 -validity 10000
```

### 2. 配置签名信息
编辑 `android/keystore.properties`：
```
RELEASE_STORE_FILE=omikuji-release.keystore
RELEASE_STORE_PASSWORD=your_password
RELEASE_KEY_ALIAS=omikuji
RELEASE_KEY_PASSWORD=your_password
```

### 3. 构建发布版本
```bash
cd android
./gradlew assembleRelease
```

### 4. 输出文件
生成的APK文件位于：
`android/app/build/outputs/apk/release/app-release.apk`

## Google Play发布

### 1. 准备材料
- 应用图标（512x512）
- 应用截图（至少2张）
- 应用描述
- 隐私政策链接

### 2. 创建开发者账户
- 注册Google Play开发者账户（$25一次性费用）
- 完成身份验证

### 3. 发布应用
- 登录Google Play Console
- 创建新应用
- 上传APK文件
- 填写应用信息
- 提交审核

## 重要提醒

1. **备份签名证书**：签名证书丢失将无法更新应用
2. **版本号管理**：每次发布需要增加versionCode
3. **测试充分**：发布前进行全面测试
4. **遵守政策**：确保应用符合Google Play政策

## 常见问题

### Q: 签名证书丢失了怎么办？
A: 无法恢复，需要重新发布应用（新的包名）

### Q: 如何更新应用？
A: 使用相同的签名证书，增加versionCode，重新构建

### Q: 构建失败怎么办？
A: 检查环境变量配置，确保所有依赖已安装