#!/bin/bash

# 设置环境变量并构建Android应用

echo "设置环境变量..."

# 设置Java环境（请根据实际安装路径修改）
export JAVA_HOME="/usr/lib/jvm/java-17-openjdk-amd64"
export ANDROID_HOME="$HOME/Android/Sdk"

# 将Java和Android工具添加到PATH
export PATH="$JAVA_HOME/bin:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH"

# 显示环境变量状态
echo "JAVA_HOME: $JAVA_HOME"
echo "ANDROID_HOME: $ANDROID_HOME"

# 检查Java版本
java -version

# 检查Android SDK
if [ -f "$ANDROID_HOME/tools/bin/sdkmanager" ]; then
    echo "Android SDK found"
else
    echo "Android SDK not found, please install Android Studio"
fi

# 构建发布版本
echo "开始构建Android发布版本..."
cd "$(dirname "$0")/android"
./gradlew assembleRelease

echo "构建完成！APK文件位于: android/app/build/outputs/apk/release/app-release.apk"