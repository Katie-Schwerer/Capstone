const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

app.listen(3001);

app.get("", index);
app.get('/', index);
app.get('/index', index);
app.get('/resource', resource);
app.get('/FormForResource', formForResources);
app.get('/languagequiz', quiz);
app.get('/landing', landing);

app.use(express.static('public'));
app.use(wicsError);

function wicsError(req, res) {
    res.status(401);
    res.end(createBasePage("<h1>401 Not Found</h1>\n"));
}

function index(req, res) {
    res.redirect(301, '/index.html');
}

function resource(req, res) {
    res.redirect(301, '/resource.html');
}

function formForResources(req, res) {
    res.redirect(301, '/FormForResource.html');
}

function quiz(req, res) {
    res.redirect(301, '/languagequiz.html');
}

async function landing(req, res) {
    const urlObj = req.query;
	let body = "";
    try {
        let result = await saveToMongo(urlObj);
        if (result.insertedId) {
            body += "<p>Your comments were saved</p>\n";
        } else {
            body += "<p>Sorry. There was an error saving your data</p>\n";
        }
        res.send(createBasePage(body));
    } catch (error) {
        console.error(error);
        res.status(500).send(createBasePage("<p>Sorry. There was an error processing your request</p>\n"));
    }
}



async function saveToMongo(urlObj) {
    const uri = "mongodb://director:ladies@localhost:4260/girls_events_db";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected successfully to server");
        const db = client.db("girls_events_db");
        const result = await db.collection("events").insertOne(urlObj);
        console.log(`New listing created with the following id: ${result.insertedId}`);
        return result;
    } finally {
        await client.close();
        console.log("Connection closed");
    }
}

function createBasePage(body) {
     let html = '';
      html += '<!DOCTYPE html>\n';
      html += '<html lang="en">\n';
      html += '<head>\n';
      html += '<meta charset="utf-8">\n';
      html += '<title>Quiz</title>\n';
      html += '<link href="style.css" rel="stylesheet" type="text/css" />\n';
      html += '<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>\n';
      html += '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">\n';
      html += '</head>\n';
      html += '<body>\n';
      html += '<nav>\n';
      html += '<a href="index.html">Homepage</a>\n';
      html += '<div class="right">\n';
      html += '<a href="languagequiz.html">Where to Start Coding</a>\n';
      html += '<a href="resource.html">Search For Resources</a>\n';
      html += '<a href="FormForResources.html">Add a Resource</a>\n';
      html += '</div>\n';
      html += '</nav>\n';
      html += '<form class="flex">\n';
	  html += body;
      html += '</form>\n';
      html += '<script src="https://replit.com/public/js/replit-badge.js" theme="yellow" defer></script>\n';
      html += '</body>\n';
      html += '</html>\n';
      return html;
}

