const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.getPreUrllambdaHandler = async (event) => {
  let presignedGETURL = s3.getSignedUrl('putObject', { // putObject => 파일을 추가하겠다는 의미
    Bucket: process.env.BucketName, // 버킷명
    Key: 'test.jpeg', // 생성할 파일명
    Expires: 3600 // 3600초후 만료
  });
  console.log(`presignedGETURL :`, presignedGETURL);
  // 클라이언트에게 pre-URL 반환
  const response = {
    statusCode: 200,
    body: presignedGETURL
  };

  return response;
}
