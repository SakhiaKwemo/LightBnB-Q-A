const {Pool} = require('pg')

const pool = new Pool({
    database: 'postgres',
    host: 'localhost', 
    user: 'postgres',
    password: 'Sakhia', 
    port: 5432
})

const testFunction = () => {
    pool.query(`INSERT INTO groceryStore (id, name, location) 
    VALUES (3, 'Maxi', 'Toronto')`)
    .then()
    .catch()
}

testFunction()