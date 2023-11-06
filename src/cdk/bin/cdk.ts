#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';
import * as dotenv from 'dotenv';

dotenv.config();

const envDev = {
    account: process.env.DEV_ACCOUNT || '123456789012',
    region: 'us-east-2',
};

const devApp = new cdk.App();

new CdkStack(devApp, 'betrayal-buddy-dev', {
  env: envDev,
});
