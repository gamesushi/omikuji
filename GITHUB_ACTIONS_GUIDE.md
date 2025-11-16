# GitHub Actions自动构建指南

## 概述

我为您创建了GitHub Actions工作流，可以自动构建Android APK，无需本地Java环境配置。

## 使用方法

### 1. 上传到GitHub仓库
```bash
# 初始化git仓库（如果还没做）
git init
git add .
git commit -m "Initial commit with GitHub Actions"

# 创建GitHub仓库并推送
gh repo create omikuji-pwa --private --source=. --remote=origin
# 或手动在GitHub创建仓库后：
git remote add origin https://github.com/你的用户名/omikuji-pwa.git
git push -u origin main
```

### 2. 触发构建
- 推送代码到main分支自动触发
- 手动触发：GitHub仓库 → Actions → Build Android APK → Run workflow

### 3. 下载APK
构建完成后：
- 进入GitHub仓库 → Actions → 最新构建
- 下载Artifacts中的apk-files

## 工作流说明

### 构建环境
- **操作系统**: Ubuntu Latest
- **Java**: Temurin 17 (自动安装)
- **Node.js**: 18 (自动安装)
- **Android SDK**: 自动配置

### 构建步骤
1. 检出代码
2. 安装Node.js和依赖
3. 安装Java 17
4. 配置Android SDK
5. 构建Web应用
6. 同步Capacitor
7. 构建APK文件
8. 上传构建结果

### 输出文件
- `app-debug.apk` - 调试版本（总是生成）
- `app-release.apk` - 发布版本（如果有签名配置）

## 签名配置（可选）

如需构建发布版本，添加仓库密钥：

1. **创建签名证书**（一次性）:
```bash
keytool -genkey -v -keystore omikuji-release.keystore -alias omikuji -keyalg RSA -keysize 2048 -validity 10000
```

2. **GitHub Secrets配置**:
   - `KEYSTORE_FILE`: Base64编码的keystore文件
   - `KEYSTORE_PASSWORD`: Keystore密码
   - `KEY_ALIAS`: 密钥别名
   - `KEY_PASSWORD`: 密钥密码

3. **更新工作流**（我已预留了位置）

## 优势

✅ **无需本地环境配置**
✅ **自动构建和测试**
✅ **支持调试和发布版本**
✅ **构建历史记录**
✅ **多人协作友好**

## 常见问题

### Q: 构建失败怎么办？
A: 检查Actions日志，通常是依赖问题或配置错误

### Q: APK文件在哪里？
A: GitHub仓库 → Actions → 构建记录 → Artifacts

### Q: 如何加快构建速度？
A: 启用缓存配置，我已设置了基础缓存

### Q: 支持iOS构建吗？
A: GitHub Actions不支持macOS免费构建，需要付费方案

## 下一步

1. 推送代码到GitHub
2. 等待自动构建完成
3. 下载APK文件
4. 直接上传到Google Play Console

这样您就可以完全跳过本地环境配置的麻烦了！