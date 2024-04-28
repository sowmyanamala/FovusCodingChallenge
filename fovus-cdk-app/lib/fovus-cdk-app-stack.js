"use strict";
// import { Stack, StackProps } from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
// import * as lambda from 'aws-cdk-lib/aws-lambda';
// import * as apigateway from 'aws-cdk-lib/aws-apigateway';
Object.defineProperty(exports, "__esModule", { value: true });
exports.FovusCdkAppStack = void 0;
// export class FovusCdkAppStack extends cdk.Stack {
//   constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
//     super(scope, id, props);
//     // S3 bucket for storing files
//     const bucket = new s3.Bucket(this, 'FovusProjectBucket', {
//       blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
//       removalPolicy: cdk.RemovalPolicy.DESTROY // Only use in dev/test environments
//     });
//     // DynamoDB table for storing file metadata and inputs
//     const table = new dynamodb.Table(this, 'FovusDynamoDBTable', {
//       partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
//       removalPolicy: cdk.RemovalPolicy.DESTROY // Only use in dev/test environments
//     });
//     // Lambda function for handling requests
//     const lambdaFunction = new lambda.Function(this, 'FovusLambdaFunction', {
//       runtime: lambda.Runtime.NODEJS_14_X, // Confirm the latest supported version
//       code: lambda.Code.fromAsset('lambda/fovus-function'), // Correct path
//       handler: 'index.handler',
//       environment: {
//         BUCKET_NAME: bucket.bucketName,
//         TABLE_NAME: table.tableName
//       }
//     });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
const dynamodb = require("aws-cdk-lib/aws-dynamodb");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigateway = require("aws-cdk-lib/aws-apigateway");
const aws_cdk_lib_2 = require("aws-cdk-lib");
class FovusCdkAppStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // S3 bucket for storing files
        const bucket = new s3.Bucket(this, 'FovusProjectBucket', {
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            removalPolicy: aws_cdk_lib_2.RemovalPolicy.DESTROY // Only use in dev/test environments
        });
        // DynamoDB table for storing file metadata and inputs
        const table = new dynamodb.Table(this, 'FovusDynamoDBTable', {
            partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
            removalPolicy: aws_cdk_lib_2.RemovalPolicy.DESTROY // Only use in dev/test environments
        });
        // Lambda function for handling requests
        const lambdaFunction = new lambda.Function(this, 'FovusLambdaFunction', {
            runtime: lambda.Runtime.NODEJS_20_X, // Confirm the latest supported version
            code: lambda.Code.fromAsset('lambda/fovus-function'), // Correct path
            handler: 'index.handler',
            environment: {
                BUCKET_NAME: bucket.bucketName,
                TABLE_NAME: table.tableName
            }
        });
        // API Gateway to expose the Lambda function
        const api = new apigateway.LambdaRestApi(this, 'FovusApiGateway', {
            handler: lambdaFunction
        });
    }
}
exports.FovusCdkAppStack = FovusCdkAppStack;
//     // API Gateway to expose the Lambda function
//     const api = new apigateway.LambdaRestApi(this, 'FovusApiGateway', {
//       handler: lambdaFunction
//     });
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm92dXMtY2RrLWFwcC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvdnVzLWNkay1hcHAtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1EQUFtRDtBQUNuRCwwQ0FBMEM7QUFDMUMsNENBQTRDO0FBQzVDLHdEQUF3RDtBQUN4RCxvREFBb0Q7QUFDcEQsNERBQTREOzs7QUFFNUQsb0RBQW9EO0FBQ3BELDRFQUE0RTtBQUM1RSwrQkFBK0I7QUFFL0IscUNBQXFDO0FBQ3JDLGlFQUFpRTtBQUNqRSwyREFBMkQ7QUFDM0Qsc0ZBQXNGO0FBQ3RGLFVBQVU7QUFFViw2REFBNkQ7QUFDN0QscUVBQXFFO0FBQ3JFLDJFQUEyRTtBQUMzRSxzRkFBc0Y7QUFDdEYsVUFBVTtBQUVWLCtDQUErQztBQUMvQyxnRkFBZ0Y7QUFDaEYscUZBQXFGO0FBQ3JGLDhFQUE4RTtBQUM5RSxrQ0FBa0M7QUFDbEMsdUJBQXVCO0FBQ3ZCLDBDQUEwQztBQUMxQyxzQ0FBc0M7QUFDdEMsVUFBVTtBQUNWLFVBQVU7QUFHViw2Q0FBZ0Q7QUFFaEQseUNBQXlDO0FBQ3pDLHFEQUFxRDtBQUNyRCxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELDZDQUE0QztBQUU1QyxNQUFhLGdCQUFpQixTQUFRLG1CQUFLO0lBQ3pDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsOEJBQThCO1FBQzlCLE1BQU0sTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDdkQsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVM7WUFDakQsYUFBYSxFQUFFLDJCQUFhLENBQUMsT0FBTyxDQUFDLG9DQUFvQztTQUMxRSxDQUFDLENBQUM7UUFFSCxzREFBc0Q7UUFDdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRTtZQUMzRCxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUNqRSxhQUFhLEVBQUUsMkJBQWEsQ0FBQyxPQUFPLENBQUMsb0NBQW9DO1NBQzFFLENBQUMsQ0FBQztRQUVILHdDQUF3QztRQUN4QyxNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ3RFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSx1Q0FBdUM7WUFDNUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsZUFBZTtZQUNyRSxPQUFPLEVBQUUsZUFBZTtZQUN4QixXQUFXLEVBQUU7Z0JBQ1gsV0FBVyxFQUFFLE1BQU0sQ0FBQyxVQUFVO2dCQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFNBQVM7YUFDNUI7U0FDRixDQUFDLENBQUM7UUFFSCw0Q0FBNEM7UUFDNUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUNoRSxPQUFPLEVBQUUsY0FBYztTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFoQ0QsNENBZ0NDO0FBRUQsbURBQW1EO0FBQ25ELDBFQUEwRTtBQUMxRSxnQ0FBZ0M7QUFDaEMsVUFBVTtBQUNWLE1BQU07QUFDTixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG4vLyBpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbi8vIGltcG9ydCAqIGFzIHMzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zMyc7XG4vLyBpbXBvcnQgKiBhcyBkeW5hbW9kYiBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZHluYW1vZGInO1xuLy8gaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuLy8gaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtYXBpZ2F0ZXdheSc7XG5cbi8vIGV4cG9ydCBjbGFzcyBGb3Z1c0Nka0FwcFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbi8vICAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbi8vICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuLy8gICAgIC8vIFMzIGJ1Y2tldCBmb3Igc3RvcmluZyBmaWxlc1xuLy8gICAgIGNvbnN0IGJ1Y2tldCA9IG5ldyBzMy5CdWNrZXQodGhpcywgJ0ZvdnVzUHJvamVjdEJ1Y2tldCcsIHtcbi8vICAgICAgIGJsb2NrUHVibGljQWNjZXNzOiBzMy5CbG9ja1B1YmxpY0FjY2Vzcy5CTE9DS19BTEwsXG4vLyAgICAgICByZW1vdmFsUG9saWN5OiBjZGsuUmVtb3ZhbFBvbGljeS5ERVNUUk9ZIC8vIE9ubHkgdXNlIGluIGRldi90ZXN0IGVudmlyb25tZW50c1xuLy8gICAgIH0pO1xuXG4vLyAgICAgLy8gRHluYW1vREIgdGFibGUgZm9yIHN0b3JpbmcgZmlsZSBtZXRhZGF0YSBhbmQgaW5wdXRzXG4vLyAgICAgY29uc3QgdGFibGUgPSBuZXcgZHluYW1vZGIuVGFibGUodGhpcywgJ0ZvdnVzRHluYW1vREJUYWJsZScsIHtcbi8vICAgICAgIHBhcnRpdGlvbktleTogeyBuYW1lOiAnaWQnLCB0eXBlOiBkeW5hbW9kYi5BdHRyaWJ1dGVUeXBlLlNUUklORyB9LFxuLy8gICAgICAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWSAvLyBPbmx5IHVzZSBpbiBkZXYvdGVzdCBlbnZpcm9ubWVudHNcbi8vICAgICB9KTtcblxuLy8gICAgIC8vIExhbWJkYSBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgcmVxdWVzdHNcbi8vICAgICBjb25zdCBsYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0ZvdnVzTGFtYmRhRnVuY3Rpb24nLCB7XG4vLyAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCwgLy8gQ29uZmlybSB0aGUgbGF0ZXN0IHN1cHBvcnRlZCB2ZXJzaW9uXG4vLyAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ2xhbWJkYS9mb3Z1cy1mdW5jdGlvbicpLCAvLyBDb3JyZWN0IHBhdGhcbi8vICAgICAgIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbi8vICAgICAgIGVudmlyb25tZW50OiB7XG4vLyAgICAgICAgIEJVQ0tFVF9OQU1FOiBidWNrZXQuYnVja2V0TmFtZSxcbi8vICAgICAgICAgVEFCTEVfTkFNRTogdGFibGUudGFibGVOYW1lXG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG5cblxuaW1wb3J0IHsgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIHMzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zMyc7XG5pbXBvcnQgKiBhcyBkeW5hbW9kYiBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZHluYW1vZGInO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtYXBpZ2F0ZXdheSc7XG5pbXBvcnQgeyBSZW1vdmFsUG9saWN5IH0gZnJvbSAnYXdzLWNkay1saWInO1xuXG5leHBvcnQgY2xhc3MgRm92dXNDZGtBcHBTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBTMyBidWNrZXQgZm9yIHN0b3JpbmcgZmlsZXNcbiAgICBjb25zdCBidWNrZXQgPSBuZXcgczMuQnVja2V0KHRoaXMsICdGb3Z1c1Byb2plY3RCdWNrZXQnLCB7XG4gICAgICBibG9ja1B1YmxpY0FjY2VzczogczMuQmxvY2tQdWJsaWNBY2Nlc3MuQkxPQ0tfQUxMLFxuICAgICAgcmVtb3ZhbFBvbGljeTogUmVtb3ZhbFBvbGljeS5ERVNUUk9ZIC8vIE9ubHkgdXNlIGluIGRldi90ZXN0IGVudmlyb25tZW50c1xuICAgIH0pO1xuXG4gICAgLy8gRHluYW1vREIgdGFibGUgZm9yIHN0b3JpbmcgZmlsZSBtZXRhZGF0YSBhbmQgaW5wdXRzXG4gICAgY29uc3QgdGFibGUgPSBuZXcgZHluYW1vZGIuVGFibGUodGhpcywgJ0ZvdnVzRHluYW1vREJUYWJsZScsIHtcbiAgICAgIHBhcnRpdGlvbktleTogeyBuYW1lOiAnaWQnLCB0eXBlOiBkeW5hbW9kYi5BdHRyaWJ1dGVUeXBlLlNUUklORyB9LFxuICAgICAgcmVtb3ZhbFBvbGljeTogUmVtb3ZhbFBvbGljeS5ERVNUUk9ZIC8vIE9ubHkgdXNlIGluIGRldi90ZXN0IGVudmlyb25tZW50c1xuICAgIH0pO1xuXG4gICAgLy8gTGFtYmRhIGZ1bmN0aW9uIGZvciBoYW5kbGluZyByZXF1ZXN0c1xuICAgIGNvbnN0IGxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnRm92dXNMYW1iZGFGdW5jdGlvbicsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLCAvLyBDb25maXJtIHRoZSBsYXRlc3Qgc3VwcG9ydGVkIHZlcnNpb25cbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhL2ZvdnVzLWZ1bmN0aW9uJyksIC8vIENvcnJlY3QgcGF0aFxuICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgQlVDS0VUX05BTUU6IGJ1Y2tldC5idWNrZXROYW1lLFxuICAgICAgICBUQUJMRV9OQU1FOiB0YWJsZS50YWJsZU5hbWVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFQSSBHYXRld2F5IHRvIGV4cG9zZSB0aGUgTGFtYmRhIGZ1bmN0aW9uXG4gICAgY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhUmVzdEFwaSh0aGlzLCAnRm92dXNBcGlHYXRld2F5Jywge1xuICAgICAgaGFuZGxlcjogbGFtYmRhRnVuY3Rpb25cbiAgICB9KTtcbiAgfVxufVxuXG4vLyAgICAgLy8gQVBJIEdhdGV3YXkgdG8gZXhwb3NlIHRoZSBMYW1iZGEgZnVuY3Rpb25cbi8vICAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFSZXN0QXBpKHRoaXMsICdGb3Z1c0FwaUdhdGV3YXknLCB7XG4vLyAgICAgICBoYW5kbGVyOiBsYW1iZGFGdW5jdGlvblxuLy8gICAgIH0pO1xuLy8gICB9XG4vLyB9XG4iXX0=