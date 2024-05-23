//

const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();

app.use(express.static('../front-end'))

app.use(cors());

var config = {
    "user": "sa",
    "password": "46810101220",
    "server": "DESKTOP-SH7GAD3",
    "database": "Heroes3",
    "options": {
        "encrypt": false
        // instancename: "MSSQLSERVER"
    },
    //port: 1433
}

sql.connect(config, err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful");
});

app.get('/table', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const data = pool.request().query('select * from creature where Name = \'Gog\'');
        data.then(res1 => {
            return res.json(res1);
        })
    }
    catch (err) {
        console.log('err');
    }
})

app.get('/pair', (req, res) => {
    console.log('Request accepted')
    const pair = {
        creaure: 'orc'
    }
    return res.json(pair);

})

app.listen(3000, () => {
    console.log("the server in running")
})