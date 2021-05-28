call npm install
call npm run build

if errorlevel 1 (
    echo "Build Failed"
    exit /b
)
cd ..
git add .
git commit -m %1
git push origin master
git status
