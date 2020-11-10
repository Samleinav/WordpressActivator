var db = require('../utils/dbConfig');
const tablename = "key_test"
const column="medatada"
db.connect();

function getMetadaByKey(res,data){
    db.query(`SELECT ${column} FROM ${tablename} WHERE licence = ${data.key}`,function(error,result,fields){
        db.release();
        if (error){ 
            res.json({
                message: "Error",
                error: "key no valid"
                }).status(404);
        };
        res.status(200).json(result);
    });
}



module.exports= getMetadaByKey;