@echo off
echo.
echo ====================================
echo  完全重新创建Android项目
echo ====================================
echo.
echo 警告：这将删除当前的Android项目并重新创建！
echo.
echo 按任意键继续，或关闭窗口取消...
pause > nul

echo 步骤1: 备份重要文件...
if not exist "backup" mkdir backup
copy /Y "android\app\src\main\res\mipmap-*\ic_launcher*.png" backup\ >nul 2>&1
copy /Y "android\keystore.properties" backup\ >nul 2>&1

echo 步骤2: 删除现有Android项目...
rmdir /S /Q android

echo 步骤3: 重新添加Android平台...
call npx cap add android

echo 步骤4: 恢复图标文件...
if exist "backup" (
    echo 恢复图标文件...
    xcopy /E /Y "backup\*" "android\app\src\main\res\" >nul 2>&1
    copy /Y "backup\keystore.properties" android\ >nul 2>&1
)

echo 步骤5: 复制tong.png图标到所有目录...
for %%D in (hdpi mdpi xhdpi xxhdpi xxxhdpi) do (
    copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-%%D\ic_launcher.png" >nul
    copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-%%D\ic_launcher_round.png" >nul
    copy /Y "public\images\common\tong.png" "android\app\src\main\res\mipmap-%%D\ic_launcher_foreground.png" >nul
)

echo 步骤6: 更新自适应图标配置...
echo ^<?xml version="1.0" encoding="utf-8"?^> > android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml
echo ^<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android"^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml
echo     ^<background android:drawable="@android:color/white"/^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml
echo     ^<foreground android:drawable="@mipmap/ic_launcher_foreground"/^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml
echo ^^</adaptive-icon^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher.xml

echo ^<?xml version="1.0" encoding="utf-8"?^> > android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml
echo ^<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android"^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml
echo     ^<background android:drawable="@android:color/white"/^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml
echo     ^<foreground android:drawable="@mipmap/ic_launcher_foreground"/^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml
echo ^^</adaptive-icon^> >> android\app\src\main\res\mipmap-anydpi-v26\ic_launcher_round.xml

echo 步骤7: 同步Capacitor...
call npx cap sync android

echo 步骤8: 构建新APK...
cd android
call .\gradlew assembleDebug
cd ..

echo.
echo ====================================
echo  完成！新的Android项目已创建
echo ====================================
echo.
echo 安装命令: install-apk.bat
echo.
if exist "backup" rmdir /S /Q backup
pause