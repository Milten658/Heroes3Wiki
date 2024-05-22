//

const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();

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

app.get('/creature', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const data = pool.request().query('select * from creature where faction = 4');
        data.then(res1 => {
            return res.json(res1);
        })
    }
    catch (err) {
        console.log('err');
    }
})

app.get('/', (req, res) => {
    return res.json("The backend has arrived B)");

})

app.listen(3000, () => {
    console.log("the server in running")
})