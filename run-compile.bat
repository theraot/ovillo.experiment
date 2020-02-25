@echo off
SET mypath=%~dp0
pushd %mypath%
    SET mypath = %cd%
    CALL %mypath%\compile.bat
    START "" %mypath%\.compile\index.htm
popd