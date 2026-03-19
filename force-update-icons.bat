@echo off
echo.
echo ====================================
echo  强制替换所有Android图标
echo ====================================
echo.

REM 停止任何正在运行的构建进程
taskkill /F /IM java.exe 2>nul
taskkill /F /IM gradle.exe 2>nul

echo 步骤1: 清理所有构建缓存...
cd android
.\gradlew clean
.\gradlew --stop
cd ..

echo 步骤2: 删除所有现有图标...
del /Q "android\app\src\main\res\mipmap-*\ic_launcher*.png" 2>nul
del /Q "android\app\build\intermediates\*" /S /Q 2>nul

echo 步骤3: 复制新图标到所有目录...
for %%D in (hdpi mdpi xhdpi xxhdpi xxxhdpi) do (
    echo   复制到 %%D 目录...
    copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-%%D\ic_launcher.png" >nul
    copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-%%D\ic_launcher_round.png" >nul
    copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-%%D\ic_launcher_foreground.png" >nul
)

echo 步骤4: 更新配置文件...
echo   设置自适应图标配置...
echo ^<?xml version="1.0" encoding="utf-8"?^> > android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml
echo ^<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android"^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml
echo     ^<background android:drawable="@color/ic_launcher_background"/^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml
echo     ^<foreground android:drawable="@mipmap/ic_launcher_foreground"/^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml
echo ^^</adaptive-icon^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml

echo   设置圆形图标配置...
echo ^<?xml version="1.0" encoding="utf-8"?^> > android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml
echo ^<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android"^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml
echo     ^<background android:drawable="@color/ic_launcher_background"/^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml
echo     ^<foreground android:drawable="@mipmap/ic_launcher_foreground"/^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml
echo ^^</adaptive-icon^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml

echo 步骤5: 清理Gradle缓存...
rmdir /S /Q "android\.gradle" 2>nul
rmdir /S /Q "android\app\build" 2>nul
rmdir /S /Q "%USERPROFILE%\.gradle\caches" 2>nul

echo.
echo ====================================
echo  图标替换完成！
echo ====================================
echo.
echo 现在重新构建APK...
cd android
.\gradlew assembleDebug
cd ..

echo.
echo ====================================
echo  新APK构建完成！
echo ====================================
echo.
echo 安装命令: install-apk.bat
echo.
pause