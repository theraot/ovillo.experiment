@echo off
SET mypath=%~dp0
pushd %mypath%
    SET mypath = %cd%
    CALL %mypath%\compile-make.bat
    START "" %mypath%\.compile\index.htm
popd