@echo off
SET mypath=%~dp0
pushd %mypath%
    SET mypath = %cd%
    CALL %mypath%\ovillo\bat\deploy.bat %mypath%\src
popd