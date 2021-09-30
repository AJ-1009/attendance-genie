// const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
var app = require("express")();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.post('/',function(req,res){
    var list=req.body.content;
    for(var i in list){
        if(list[i][0])
            client.sendMessage(list[i][1] + "@c.us", "Marked " + list[i][2]);
        else
            client.sendMessage(list[i][1] + "@c.us", "Failed to mark " + list[i][2]);
    }
    res.send("Message sent");
});
http.listen(3000, function(){
    console.log('listening...');
});

// // Path where the session data will be stored
// const SESSION_FILE_PATH = './session.json';

// // Load the session data if it has been previously saved
// let sessionCfg;
// if(fs.existsSync(SESSION_FILE_PATH)) {
//     sessionCfg = require(SESSION_FILE_PATH);
// }

// Use the saved values
const client = new Client({
    // puppeteer: { headless: true }
    // clientId: 'remote'
});

// Save session values to the file upon successful auth
client.on('authenticated', () => {
    console.log('youre in');
    // sessionData = session;
    // fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
    //     if (err) {
    //         console.error(err);
    //     }
    // });
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    // client.sendMessage("918592988798@c.us", "Hello!");
});

client.initialize();

