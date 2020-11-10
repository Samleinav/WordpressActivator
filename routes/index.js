var express = require('express');
var router = express.Router();
var metadata = require('../packages/metadataController');
var urlgenerator = require('../packages/pluginController');

/* GET home page. */
router.get('*', function(req, res, next) {
  let param = req.query;
  console.log(req.headers);
  console.log(req.body);
  console.log(param);

  var metadataplugin = metadata.getContentMetadata(param.slug);
  if(metadataplugin){
    var url = urlgenerator.generateUrlDownload(param.slug)
    metadataplugin.download_url = url;
    res.json(metadataplugin).status(200);
  }
  
});


module.exports = router;
