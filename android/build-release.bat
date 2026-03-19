@echo off
echo 生成发布版APK...
cd d:\web\omikuji\omikuji-pwa\android
.\gradlew assembleRelease
echo 发布版APK生成完成！
echo 文件位置：app\build\outputs\apk\release\
pause