# 🚀 GitHub Actions构建状态检查指南

## 📍 如何查看构建状态

### 1. 直接访问链接
```
https://github.com/hebeihang/omikuji/actions
```

### 2. 手动导航步骤
1. 打开 https://github.com/hebeihang/omikuji
2. 点击顶部的 "Actions" 标签
3. 查看最新的工作流运行状态

## 🔍 工作流详情

### 工作流名称
- **工作流1**: `Build Android APK` (build-android.yml)
- **工作流2**: `Build Android APK` (android-build.yml)

### 触发条件
- ✅ 推送到 `main` 分支时自动触发
- ✅ 手动触发（通过GitHub网页界面）

## 🎯 手动触发构建

### 方法1：GitHub网页界面
1. 访问：https://github.com/hebeihang/omikuji/actions
2. 点击 "Build Android APK" 工作流
3. 点击右侧的 "Run workflow" 按钮
4. 选择分支（main）并点击 "Run workflow"

### 方法2：推送新提交
```bash
# 创建空提交来触发构建
git commit --allow-empty -m "Trigger GitHub Actions build"
git push origin main
```

## 📊 构建状态说明

### 状态图标含义
- 🟢 **绿色勾** - 构建成功
- 🟡 **黄色圆圈** - 构建中
- 🔴 **红色叉** - 构建失败
- ⚪ **灰色圆圈** - 等待中

### 构建步骤
1. **Checkout repository** - 检出代码
2. **Setup Node.js** - 安装Node.js
3. **Install dependencies** - 安装依赖
4. **Build web app** - 构建Web应用
5. **Setup Java** - 安装Java
6. **Setup Android SDK** - 配置Android SDK
7. **Sync Capacitor** - 同步Capacitor
8. **Build debug APK** - 构建APK
9. **Upload APK** - 上传构建结果

## 📥 下载APK文件

### 步骤
1. 等待构建完成（绿色勾）
2. 点击构建记录进入详情页
3. 滚动到 "Artifacts" 部分
4. 点击 "omikuji-debug-apk" 下载

### 文件内容
下载的压缩包包含：
- `app-debug.apk` - Android调试版应用

## 🛠️ 常见问题排查

### 问题1：没有看到Actions标签
**原因**：仓库可能没有启用Actions
**解决**：
1. 进入仓库 Settings → Actions → General
2. 确保Actions权限已启用

### 问题2：工作流没有触发
**原因**：工作流文件可能不在正确位置
**验证**：
- 确认 `.github/workflows/android-build.yml` 文件存在
- 检查文件内容是否正确

### 问题3：构建失败
**查看日志**：
1. 点击失败的构建记录
2. 点击具体的失败步骤
3. 查看详细错误信息

## 📞 如果仍然无法看到构建

### 立即验证
```bash
# 检查工作流文件是否存在
ls -la .github/workflows/

# 检查GitHub远程状态
git remote -v
```

### 替代方案
如果GitHub Actions暂时不可用，我可以提供：
1. **本地构建方案** - 安装Java后直接构建
2. **在线构建服务** - 使用其他CI/CD平台
3. **手动构建指导** - 详细的本地构建步骤

## 🎊 下一步

一旦看到构建状态，您就可以：
1. 下载APK文件
2. 安装到Android设备测试
3. 准备Google Play发布材料
4. 上传到Google Play Console

需要我帮您检查具体状态或提供替代方案吗？