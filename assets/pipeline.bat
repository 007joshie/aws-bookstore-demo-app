@echo off
CheckName.py 
if errorlevel 1 (
    echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    echo FAILED: NAME NOT FOUND ON .ts FILE
    echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    exit /b
)

call npm install
call npm run build

if errorlevel 1 (
    echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    echo Build Failed
    echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    exit /b
)

cd ..
git add .
git commit -m %1
git push origin master
git status
