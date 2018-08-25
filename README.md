# DevOps Task: Using AWS API creating EC2 instance

The task is the following:

Create a simple script, using your language of choice, that creates an AWS EC2 instance and outputs its launch time. The script should:

* Utilize the AWS API

* Accept the arguments: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, INSTANCE_TYPE

* Wait for an instance to come online, and then return the instance launch time to STDOUT

## Solution

1. I created the AWS account here: <https://aws.amazon.com/free/>.

2. In IAM Console, I created both access keys for the User - **Access Key ID** and **Secret Access Key**.

3. I decided to load the AWS security credentials (Access Key ID & Secret Access Key) in Node.js from the Shared Credentials File. If you want to run my code, you will have to do the same according to these instructions: <https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html>.

**Please note:** `credentials` is a file in the directory `~/.aws`. You have to create both the directory and the file with your AWS security credentials.

4. I wrote my runner file in JavaScript and use the method `runInstances` for creating an AWS EC2 instance. The file outputs the LaunchTime.

**Please note:** the instance is created only once because I set the `MaxCount` parameter to number `1`. It can be easily changed.

5. Additionaly, I wrote a simple Makefile for more understandable file execution.

### File Execution & Setup

For the installation of the AWS-SDK dependency, run the following command:

```
npm install
```

For the script execution and a new AWS EC2 instance with the launch time, write this command into your shell:

```
make EC2-instance
```

### Suggestions for Improvement

* There could be written a test for the runner file.
* It is good to be aware of security and change the access keys on regular basis, therefore I would implement the access keys rotation and also configure the MFA.