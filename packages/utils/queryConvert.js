
function checkValue(value){
    if (typeof value !== 'undefined' && value !== null) {
        return false;
    }
    return true;
};
function getquery(query){
    if(Object.keys(query).length === 0) {
        return false;
    }
    return query;
};
function getSchemaQueryActivation(query){
    let schema = {};
    var data = getquery(query);
    //if query is null
    if(!data)return null;
    //validate query keys and save query date types
    for(var key in query){
        if(checkValue(query[key])){
            var value = query[key];
            schema[key] = typeof(value);
        }
    }
    return schema;
}

/**
 * validate if query activation /desactivarion haved these key on query request
 * @param {*} query // query url
 */
function isLicenceExist(query){
    !("licence" in query) ? true: false;
}
function iskeyExist(query){
    !("key" in query) ? true: false;
}
 function isDomainExist(query){
    !("domain" in query) ? true: false;
 }
 function isStatusExist(query){
    !("status" in query) ? true: false;
 }
 function isActionExist(query){
    !("action" in query) ? true: false;
 }
 function isSlugExist(query){
    !("slug" in query) ? true: false;
 }

 /**
  * validate typeof values
  */
 function isBoolean(arg) {
    return typeof arg === 'boolean';
  }
  
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  
  function isString(arg) {
    return typeof arg === 'string';
  }
  
  function isFunction(arg) {
    return typeof arg === 'function';
  }

  module.exports={
      getSchemaQueryActivation,
      isActionExist,
      isDomainExist,
      isLicenceExist,
      isSlugExist,
      isStatusExist,
      iskeyExist,
      isBoolean,
      isNumber,
      isString
  }