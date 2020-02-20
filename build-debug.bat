@echo off
SET mypath=%~dp0
IF "%mypath:~-1%"=="\" SET "mypath=%mypath:~0,-1%"
CALL %mypath%\ovillo\build-debug.bat %mypath%\ovillo\src %mypath%\src
xcopy "%mypath%\ovillo\.debug\*.*" "%mypath%\.debug\" /S /Y