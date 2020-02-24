@echo off
SET mypath=%~dp0
pushd %mypath%
    SET mypath = %cd%
    CALL %mypath%\ovillo\bat\release-build.bat %mypath%\src
popd