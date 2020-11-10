const fs = require('fs');
const dirMetadata = "packages/metadata";

/**
 * search metadata file .json on metadata directory.
 * @param {*} slug slug unique of plugin
 */
function getContentMetadata(slug){
    try { 
        return  JSON.parse(fs.readFileSync(`${dirMetadata}/${slug}.json`));
      } catch(err) {
        console.log(err)
        return null;
      }
};

/**
 * Can use this function if no use .json file for metadata packages.
 * @param {*} slug 
 * @param {*} cb 
 */
function jsonReader(slug, cb){
    fs.readFile(`${dirMetadata}/${slug}.txt`, (err, fileData) => {
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
    getContentMetadata,
    jsonReader
}