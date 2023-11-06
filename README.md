# betrayal-buddy
Keep a tally all your team kills, betrayals or other Discord shenanigans. 

Deployed with AWS CDK, written in Typescript, deployed with CodePipeline. 

App flow:
Discord -> AWS API Gateway -> AWS Lambda (language TBD) -> AWS DynamoDB

Refer to ./docs for further information.