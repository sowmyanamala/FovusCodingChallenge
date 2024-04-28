# FovusCodingChallenge

This project contains a React frontend and an AWS CDK backend for managing cloud resources and Lambda functions. 

**Prerequisites**
Before you begin, ensure you have the following installed:
- Node.js (v14.x or later)
- npm (comes with Node.js)
- AWS CLI (v2.x)
- AWS CDK Toolkit

**Clone the Repository**
cd fovus-project
Navigate to the project directory and install the necessary npm packages using 

``` bash
npm install
```

**AWS Configuration**
Configure AWS CLI:You must have the AWS CLI configured with the appropriate credentials. If you have not configured AWS CLI yet, run:

```bash
aws configure
```

Then Enter your AWS Access Key ID, Secret Access Key, and default region when prompted for you IAM User.

Next go to the Bootstrap AWS CDK api
cd fovus-cdk-app <br />

you need to bootstrap AWS CDK using : 
```bash
cdk bootstrap
```

**Deploy the CDK Stack**
```bash
cdk deploy
```

Run the Application
Navigate back to the react project directory and start the React application:

**Development env** <br />
```bash
npm start
```
**Production env** <br />

```bash
npm run build
serve -s build
```

This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

**Installations made:**

Install AWS SDK V3 Packages
- npm install aws-sdk
- npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner - For uploading files to S3 and possibly generating pre-signed URLs directly from the client

Install AWS CDK
- npm install -g aws-cdk

- npm install aws-cdk-lib
- npm install constructs

Install AWS CLI
- brew install awscli

Add necessary AWS packages
- npm install @aws-cdk/aws-s3 @aws-cdk/aws-iam @aws-cdk/aws-lambda @aws-cdk/aws-apigateway @aws-cdk/aws-dynamodb @aws-cdk/aws-ec2   - for the services you will use (S3, IAM, Lambda, API Gateway, DynamoDB, EC2)

Output Screenshots:
