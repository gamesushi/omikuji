# Java环境安装指南

## 问题诊断

您的系统当前缺少Java环境，这是构建Android应用所必需的。

## 安装步骤

### 1. 下载Java JDK

访问Oracle官网下载JDK 17（推荐版本）：
https://www.oracle.com/java/technologies/downloads/#java17

或者使用OpenJDK（免费开源）：
https://adoptium.net/

### 2. 安装JDK

1. 运行下载的安装程序
2. 选择安装路径（建议使用默认路径）
3. 完成安装

### 3. 配置环境变量

#### Windows 10/11:

1. **打开系统属性**：
   - 右键"此电脑" → "属性"
   - 点击"高级系统设置"
   - 点击"环境变量"

2. **新建JAVA_HOME**：
   - 变量名：`JAVA_HOME`
   - 变量值：`C:\Program Files\Java\jdk-17`（根据实际安装路径调整）

3. **更新PATH**：
   - 找到"Path"变量，点击"编辑"
   - 添加新项：`%JAVA_HOME%\bin`

4. **验证安装**：
   打开新的命令提示符，运行：
   ```cmd
   java -version
   javac -version
   ```

#### 自动配置脚本

创建 `setup-java-env.bat`：
```batch
@echo off
echo 正在配置Java环境变量...

REM 设置JAVA_HOME（根据实际路径修改）
setx JAVA_HOME "C:\Program Files\Java\jdk-17" /M

REM 添加到PATH
setx PATH "%PATH%;%%JAVA_HOME%%\bin" /M

echo Java环境变量配置完成！
echo 请重新打开命令提示符或重启电脑使配置生效。
pause
```

### 4. 安装Android Studio

1. 下载Android Studio：
   https://developer.android.com/studio

2. 安装Android Studio（包含Android SDK）

3. 配置Android SDK路径：
   - 默认路径：`C:\Users\[用户名]\AppData\Local\Android\Sdk`

### 5. 验证完整环境

创建验证脚本 `verify-environment.ps1`：
```powershell
Write-Host "=== 环境验证 ===" -ForegroundColor Green

# 检查Java
Write-Host "检查Java..." -ForegroundColor Yellow
try {
    $javaVersion = java -version 2>&1
    Write-Host "✓ Java已安装: $javaVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Java未安装" -ForegroundColor Red
}

# 检查Android SDK
Write-Host "检查Android SDK..." -ForegroundColor Yellow
$androidHome = $env:USERPROFILE + "\AppData\Local\Android\Sdk"
if (Test-Path $androidHome) {
    Write-Host "✓ Android SDK found at: $androidHome" -ForegroundColor Green
} else {
    Write-Host "✗ Android SDK not found" -ForegroundColor Red
}

# 检查环境变量
Write-Host "检查环境变量..." -ForegroundColor Yellow
Write-Host "JAVA_HOME: $env:JAVA_HOME" -ForegroundColor Cyan
Write-Host "ANDROID_HOME: $env:ANDROID_HOME" -ForegroundColor Cyan
```

## 常见问题

### Q: 安装后java命令仍不可用？
A: 需要重新打开命令提示符或重启电脑

### Q: 多个Java版本冲突？
A: 确保JAVA_HOME指向正确的版本

### Q: Android SDK找不到？
A: 安装Android Studio时会自动安装SDK

### Q: 构建仍然失败？
A: 检查所有路径是否正确，重启电脑后再试

## 下一步

完成Java安装后，重新运行构建脚本：
```powershell
.\build-android.ps1
```