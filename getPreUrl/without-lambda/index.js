const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-northeast-2', credentials: new AWS.SharedIniFileCredentials({profile: 'default'})});

// Now you can use the AWS SDK to access your AWS resources
const s3 = new AWS.S3();
// 버킷 리스트 출력
s3.listBuckets((err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    data.Buckets = data.Buckets.map(v => v.Name);
    console.log("Bucket List", data.Buckets);
  }
});

var presignedGETURL = s3.getSignedUrl('putObject', {
    Bucket: 'bk-pre-url',
    Key: 'test.jpeg', //filename
    Expires: 3600 //time to expire in seconds
});

console.log(`presignedGETURL :`, presignedGETURL);
