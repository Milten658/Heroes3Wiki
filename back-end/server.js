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



app.get('/load', async (req, res) => {
    const faction = req.query.faction.charAt(0).toUpperCase() + req.query.faction.slice(1)
    console.log('Faction page request accepted: ' + faction)

    const faction_request = 'SELECT c.creature_id, c.name, f.name, c.building, c.attack, c.defence, c.health, c.speed, c.level FROM creature AS c INNER JOIN faction AS f ON c.faction = f.faction_id WHERE f.name =  \'' + faction + '\'';
    try {
        const pool = await sql.connect(config);
        const data = pool.request().query(faction_request);
        data.then(res1 => {
            return res.json(res1);
        })
        console.log(res1)
        return res.json(data)
    }
    catch (err) {
        console.log('err');
    }
})

app.get('/pair', (req, res) => {
    console.log('Request accepted')
    const pair = {
        creaure: '<h1>orc</h1>'
    }
    return res.json(pair);

})

app.listen(3000, () => {
    console.log("the server in running")
})