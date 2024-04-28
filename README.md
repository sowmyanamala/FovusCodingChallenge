# FovusCodingChallenge

Fovus Project
This project contains a React frontend and an AWS CDK backend for managing cloud resources and Lambda functions. This README outlines the steps necessary to setup and run the application.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14.x or later)
npm (comes with Node.js)
AWS CLI (v2.x)
AWS CDK Toolkit


Clone the Repository

git clone https://example.com/fovus-project.git
cd fovus-project

Install Dependencies:Navigate to the project directory and install the necessary npm packages:
npm install

AWS Configuration
Configure AWS CLI:You must have the AWS CLI configured with the appropriate credentials. If you have not configured AWS CLI yet, run:

aws configure

Enter your AWS Access Key ID, Secret Access Key, and default region when prompted.

Bootstrap AWS CDK:If this is the first time you are using AWS CDK in this region with your account, you need to bootstrap AWS CDK:

cd fovus-cdk-app
cdk bootstrap
Deploy the CDK Stack:Deploy the CDK stack to set up the AWS resources (S3, Lambda, etc.):
bash
cdk deploy


Running the Application
Start the React Application:Navigate back to the react project directory and start the React application:

npm start

This will run the app in development mode. Open http://localhost:3000 to view it in the browser.
