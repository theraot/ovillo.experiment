@echo off
SET mypath=%~dp0
pushd %mypath%
    SET mypath = %cd%
    CALL %mypath%\ovillo\bat\make-compile.bat %mypath%\src
popd