###  Example XX

Run the example using
`
npm install
node main.js
`
Si al instalar paquetes nos pide sudo es porque tenemos el directorio .npm con privilegios.

Arreglalo usando
`
sudo chown -R $(whoami) ~/.npm
`
