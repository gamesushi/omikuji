@echo off
echo 生成发布版App Bundle（推荐）...
cd d:\web\omikuji\omikuji-pwa\android
.\gradlew bundleRelease
echo 发布版App Bundle生成完成！
echo 文件位置：app\build\outputs\bundle\release\
pause