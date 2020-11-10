var AWS = require('aws-sdk')


AWS.config.update({
    accessKeyId: 'AKIAX5FKX2ADSQ3QNJTU', 
    secretAccessKey:'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',
    region:'us-east-1'
});

s3 = new AWS.S3({apiVersion: '2006-03-01'});
const Bucket = 'packages-wp';
const Expires = 60*5;

function generateUrlDownload(slug){
    let url;
    try{
        url = s3.getSignedUrl('getObject', {Bucket:Bucket, Key:`${slug}.zip`, Expires:Expires});
        console.log(slug);
    }catch{
        return url = null;
    }finally{
        return url;
    }  
};

module.exports={
    generateUrlDownload:generateUrlDownload
};