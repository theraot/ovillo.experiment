@echo off
SET mypath=%~dp0
pushd %mypath%
    SET mypath = %cd%
    CALL %mypath%\build-release.bat
    START "" %mypath%\.release\index.htm
popd