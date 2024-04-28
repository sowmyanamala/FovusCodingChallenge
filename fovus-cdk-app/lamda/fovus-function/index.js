const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3Client = new S3Client({ region: 'us-east-2' });

exports.handler = async (event) => {
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,GET,PUT,POST,DELETE",
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent"
    };

    if (event.httpMethod === "OPTIONS") {
        return { statusCode: 204, headers, body: '' };
    }

    const fileName = event.queryStringParameters.fileName;
    if (!fileName) {
        return { statusCode: 400, headers, body: JSON.stringify({ message: "FileName parameter is missing" }) };
    }

    const getObjectParams = { Bucket: process.env.BUCKET_NAME, Key: fileName };
    try {
        const getUrl = await getSignedUrl(s3Client, new GetObjectCommand(getObjectParams), { expiresIn: 3600 });
        const putUrl = await getSignedUrl(s3Client, new PutObjectCommand(getObjectParams), { expiresIn: 3600 });
        return { statusCode: 200, headers, body: JSON.stringify({ getUrl, putUrl }) };
    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: "Error generating URLs", error: error.message }) };
    }
};


