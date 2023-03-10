const mysql = require('mysql');
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "onlinestore",
    password: ""
});

exports.showCategory = (req, res)=>{
   connection.query('SELECT * FROM category',(eror, result)=>{
    if(eror){
        console.log(eror);
    }
    return res.status(200).send(result);
   })
}

exports.showProducts = (req, res) =>{
    const idCategory = req.query.id;
    connection.query(`SELECT * FROM products WHERE CategoryName = ${idCategory}`, (eror, result)=>{
        if(eror){console.log(eror)}
        return res.status(200).send(result);
    })
}

    