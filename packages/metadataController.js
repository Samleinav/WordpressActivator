const fs = require('fs');
const dirMetadata = "packages/metadata";

function getContentMetadata(slug){
    try { 
        return  JSON.parse(fs.readFileSync(`${dirMetadata}/${slug}.json`));
      } catch(err) {
        console.log(err)
        return null;
      }
};

function jsonReader(slug, cb){
    fs.readFile(`${dirMetadata}/${slug}.json`, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
};

module.exports={
    getContentMetadata:getContentMetadata,
    jsonReader:jsonReader
}