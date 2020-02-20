@echo off
SET mypath=%~dp0
IF "%mypath:~-1%"=="\" SET "mypath=%mypath:~0,-1%"
CALL %mypath%\build-debug.bat
START "" %mypath%\.debug\index.htm