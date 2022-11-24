const Application = require("./app/server")
require('dotenv').config()

const PORT=3500
const DB_URL="mongodb://127.0.0.1:27017/ProjectControllerDB"

new Application(PORT,DB_URL )