var req = require('request');

const token = "b97b9a1fb371d0a3ed39b3d2401c3c333a3f1a8c";
const type = "application/vnd.github.v3.raw";
const ownerGitHub = "Samleinav";
const branch ="master";
    function getGithubContent(slug){
     var metadata= req({
        url:`https://api.github.com/repos/${ownerGitHub}/${slug}/contents/${slug}.json`,
        headers:{
            'Authorization': token,
            'Accept': type
        }
    });
    return JSON.parse(metadata.body);
};

module.exports.getSlugMetadata= function getSlugMetadata(slug){
    let metadata = getGithubContent(slug);
    if(metadata!=null){
        return metadata;
    }
    return null;
};

function isAuthenticated(val){
    return val;
};
