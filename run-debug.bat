@echo off
SET mypath=%~dp0
pushd %mypath%
    SET mypath = %cd%
    CALL %mypath%\build-debug.bat
    START "" %mypath%\.debug\index.htm
popd