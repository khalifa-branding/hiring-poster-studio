@echo off
title Trescon Job Poster Generator
echo ==========================================
echo   Trescon Global - Job Poster Generator  
echo ==========================================
echo.
echo Starting local web server on port 3000...
start cmd /k "npx -y serve -l 3000 ."
echo Waiting for server to initialize...
timeout /t 3 >nul
echo Opening web browser to http://localhost:3000...
start http://localhost:3000
echo.
echo Generator is running successfully!
echo Close the command prompt window running "serve" when finished.
echo.
pause
