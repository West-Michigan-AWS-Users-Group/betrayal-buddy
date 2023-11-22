# betrayal-buddy

![betrayal-buddy-logo](docs/betrayal-buddy-logo.png)

Keep a tally all your team kills, betrayals or other Discord shenanigans. 

Deployed with AWS Typescript CDK for use with Discord, written in node.js for the Lambda function.

App flow:
Discord -> AWS API Gateway -> AWS Lambda (language TBD) -> AWS DynamoDB

Refer to ./docs for further information.