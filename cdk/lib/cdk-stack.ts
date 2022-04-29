import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib';
import { join } from 'path';
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';

//TODO: Pass DB name to Lambda

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const lambdaFunction = new lambda.Function(this, 'lambda-function', {
      runtime: lambda.Runtime.NODEJS_14_X,
      memorySize: 1024,
      timeout: Duration.seconds(5),
      handler: 'registration-handler.handler',
      code: lambda.Code.fromAsset(join(__dirname, '../../src/lambda')),
    });

    const table = new dynamodb.Table(this, id, {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      partitionKey: {name: 'userID', type: dynamodb.AttributeType.STRING},
      tableName: 'BrendanFitnessTable',
    });
    
    const api = new apigateway.RestApi(this, 'api', {
      description: 'Brendan Fitness App User Api',
      restApiName: 'FitnessDataBaseAPI',
    });
    const registerPath = api.root.addResource('register')
    const lambdaIntegration = new apigateway.LambdaIntegration(lambdaFunction, {
      proxy: true,
    });
    registerPath.addMethod('POST', lambdaIntegration);
  }
}
