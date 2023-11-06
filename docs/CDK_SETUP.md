## Setting up CDK

- Configure your AWS profile configured on your system as outlined [here](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_auth).

- Setup your local development environment here as outlined [here](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html).

```bash
npm -g install typescript
npm install -g aws-cdk
npm install aws-cdk-lib
```

- Login to your aws account

```bash
aws sso login --profile <profile-name>
```

- Bootstrap your S3 bucket for CDK use
```bash
cdk bootstrap aws://ACCOUNT-NUMBER/REGION
```
Example-output:

```bash
cdk bootstrap aws://ACCOUNT-NUMBER/us-east-2           
 ⏳  Bootstrapping environment aws://ACCOUNT-NUMBER/us-east-2...
Trusted accounts for deployment: (none)
Trusted accounts for lookup: (none)
Using default execution policy of 'arn:aws:iam::aws:policy/AdministratorAccess'. Pass '--cloudformation-execution-policies' to customize.
CDKToolkit: creating CloudFormation changeset...
 ✅  Environment aws://ACCOUNT-NUMBER/us-east-2 bootstrapped.

➜  betrayal-buddy git:(main) ✗ 
```


## Setting up the project

```bash
mkdir -p src/cdk && cd src/cdk
cdk init app --language typescript
```

### Add dependencies

Add dotenv to be able to inject sensitive information into the CDK stack
```bash
npm install dotenv
touch .env

cat <<EOF > .env
DEV_ACCOUNT=123456789012
PROD_ACCOUNT=123456789012
EOF

```


### CDK deployment

```bash
AWS_REGION=us-east-2 cdk deploy
```