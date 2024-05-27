//

const express = require("express");
const sql = require("mssql");
const cors = require("cors");
const { stringify } = require("querystring");

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


app.get('/page_load', async (req, res) => {

    //const request_data = await req.json();




    if (req.query.faction == 'all_creatures') {
        console.log('Creatures page request accepted')

        const creatures_request = 'SELECT c.name, f.name AS faction,  c.price, c.attack, c.defence,' +
            ' c.health, c.speed, c.level, c.img' +
            ' FROM creature AS c ' +
            'INNER JOIN faction AS f ON c.faction = f.faction_id';
        try {
            const pool = await sql.connect(config);
            const data = pool.request().query(creatures_request, (err, result) => {
                if (err) {
                    console.error("Error executing query:", err);
                } else {
                    res.send(result.recordset);
                    console.dir(result.recordset);
                }
            });
        }
        catch (err) {
            console.log(err);
        }

    } else {

        if (req.query.faction.charAt(0).toLowerCase() == req.query.faction.charAt(0)) {

            const faction = req.query.faction.charAt(0).toUpperCase() + req.query.faction.slice(1)
            console.log('Faction page request accepted: ' + faction)

            const faction_request = 'SELECT c.name, ' +
                ' c.price, c.attack, c.defence, c.health, c.speed, c.level, c.img' +
                ' FROM creature AS c' +
                ' INNER JOIN faction AS f ON c.faction = f.faction_id WHERE f.name =  \'' + faction + '\'';
            try {
                const pool = await sql.connect(config);
                const data = pool.request().query(faction_request, (err, result) => {
                    if (err) {
                        console.error("Error executing query:", err);
                    } else {
                        res.send(result.recordset);
                        //console.dir(result.recordset);
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        } else {
            const creature_name = req.query.faction
            console.log('Creature page request accepted: ' + creature_name)

            const creature_request = `SELECT c.name, f.name AS faction, c.price, c.attack,` +
                ` c.defence, c.health, c.speed, c.level, c.img, c.building` +
                ` FROM creature AS c` +
                ` INNER JOIN faction AS f ON c.faction = f.faction_id WHERE c.name = \'` + creature_name + `\';`;
            try {
                const pool = await sql.connect(config);
                const data = pool.request().query(creature_request, (err, result) => {
                    if (err) {
                        console.error("Error executing query:", err);
                    } else {
                        res.send(result.recordset);
                        console.dir(result.recordset);
                    }
                });
            }
            catch (err) {
                console.log(err);
            }
        }
    }

})

app.listen(3000, () => {
    console.log("the server in running")
})