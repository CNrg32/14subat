//app.js
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const { OpenAI } = require("openai");
//app.js ile .alıştırılma işlemi yaptırılacak sonra public in içine bi tane js dosyası açılacak ve sırayla pageleri çalıştıracak devamında front yazılacak;
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
//const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

//const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

app.use(express.static("public"));



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
