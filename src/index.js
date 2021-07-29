const config = require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8000;
const path = require('path');

const app = express();

// init client

const getJobs = require('./utils/notions');


// (async ()=>{
//     const newBlogs = await getBlogs();
//     console.log(newBlogs);
// })();

// can use to list all databases and see properties like database id etc.
// const listDatabases = async()=>{
//     const res = await notion.databases.list();
//     console.log(res);
// }

// listDatabases();

app.use(express.json());


app.use(express.static(path.join(__dirname, "../public")));

app.get('/jobs', async (req,res)=>{
    const newJobs = await getJobs();
    res.send(newJobs);
});

app.listen(PORT, (req,res)=>{
    console.log("Running on port", PORT);
})