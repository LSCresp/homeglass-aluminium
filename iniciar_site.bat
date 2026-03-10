@echo off
echo Iniciando Landing Page Celere...
echo Aguarde a inicializacao do servidor. O navegador abrira automaticamente.

cd /d "%~dp0"
start "Servidor Next.js Célere" cmd /c "npm run dev"

:: Aguarda 5 segundos par dar tempo do servidor subir
timeout /t 5 /nobreak > nul

:: Abre a aba do navegador
start http://localhost:3000

echo Tudo pronto! Caso a pagina mostre algum erro logo ao abrir, apenas aguarde alguns segundos extras para o Next.js compilar inteiramente a pagina.
