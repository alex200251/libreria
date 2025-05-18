const fs = require('fs');
const path = require('path');
require('dotenv').config();

const envPath = path.resolve(__dirname, '.env');
console.log("¿Existe el archivo .env?:", fs.existsSync(envPath));
console.log("Ruta absoluta:", envPath);
console.log("Contenido crudo:");
console.log(fs.readFileSync(envPath, "utf8"));

console.log("\nVariables cargadas:");
console.log("HOST:", process.env.SQL_HOST);
console.log("DB:", process.env.SQL_DATABASE);
console.log("USER:", process.env.SQL_USER);
console.log("PASSWORD:", process.env.SQL_PASSWORD);
console.log("PORT:", process.env.SQL_PORT);
