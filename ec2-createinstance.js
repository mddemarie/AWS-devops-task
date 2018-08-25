// Load the SDK for JavaScript
const AWS = require('aws-sdk');

const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID;
const awsRegion = 'us-west-2';
const instanceType = 't2.micro';

function createInstance(public, secret, reg, instType) {
    // Set the region and credentials
    AWS.config.update({
        secretAccessKey: secret,
        accessKeyId: public,
        region: reg
    });

    // Create EC2 service object
    const ec2 = new AWS.EC2({ apiVersion: '2018-01-28' });

    const params = {
        ImageId: 'ami-f2d3638a',
        InstanceType: instType,
        MinCount: 1,
        MaxCount: 1
    };

    // Create the instance
    ec2.runInstances(params, function (err, data) {
        if (err) {
            console.log('Could not create instance', err);
            return;
        };
        // const instanceId = data.Instances[0].InstanceId;
        const launchTime = data.Instances[0].LaunchTime;
        console.log('Created instance at:', launchTime);
    });
    return;
};

createInstance(awsAccessKeyId, awsSecretAccessKey, awsRegion, instanceType);
