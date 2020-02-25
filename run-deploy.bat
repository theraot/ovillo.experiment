@echo off
SET mypath=%~dp0
pushd %mypath%
    SET mypath = %cd%
    CALL %mypath%\deploy.bat
    START "" %mypath%\.deploy\index.htm
popd