import * as cdk from '@aws-cdk/core';
import * as apprunner from '@aws-cdk/aws-apprunner';

export class AppRunnerExampleStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    
    // GITHub
    new apprunner.Service(this, 'Service', {
      serviceName: "appRunnerService",
      source: apprunner.Source.fromGitHub({
        repositoryUrl: 'https://github.com/Harshithapatel11/apprunner-using-git/tree/master',
        branch: 'master',
        configurationSource: apprunner.ConfigurationSourceType.REPOSITORY,
        connection: apprunner.GitHubConnection.fromConnectionArn('arn:aws:apprunner:us-east-1:598815891177:connection/apprunnerGithubConnector/f2efde17d29c44f48e27c783d9a13603'),
      }),
    });
    
  }
}
