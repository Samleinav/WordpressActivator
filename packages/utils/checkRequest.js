var Validator = require('jsonschema').Validator;
var v = new Validator();

var querySchema={
    "action": {"type": "string"},
    "installed_version": {"type": "number"},
    "php": {"type": "number"},
    "locale": {"type": "string"},
    "slug": {"type": "string"},
    "domain":{"type": "string"},
    "checking_for_updates":{"type": "number"}
};

function checkForUpdate(param){
    return  param===1? true : false;
}

function checkVersion(param,current_version){
    return param===current_version? true : false ;
}

function checkDomainAndKey(param,data){
    return param.key===data.key && param.domain === data.domain? true : false ;
}

function checkRequestQuery(queryUrl){
if(Object.keys(queryUrl).length === 0)return null;
return v.validate(queryUrl,querySchema);
}

function isAuthenticate(val){
    return val;
}
module.exports = {
    checkForUpdate,
    checkDomainAndKey,
    checkRequestQuery,
    checkVersion
}
