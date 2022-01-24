"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaStack = void 0;
const path_1 = require("path");
const aws_cdk_lib_1 = require("aws-cdk-lib");
class LambdaStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        this.articlesLambda = new aws_cdk_lib_1.aws_lambda.Function(this, "ArticlesFunctions", {
            runtime: aws_cdk_lib_1.aws_lambda.Runtime.NODEJS_12_X,
            timeout: aws_cdk_lib_1.Duration.seconds(60),
            memorySize: (props === null || props === void 0 ? void 0 : props.envName) === "Prod" ? 128 : 256,
            handler: "articles.list",
            code: aws_cdk_lib_1.aws_lambda.Code.fromAsset((0, path_1.join)(__dirname, "../lambdas")),
        });
    }
}
exports.LambdaStack = LambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhbWJkYXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQTRCO0FBQzVCLDZDQUFnRjtBQU9oRixNQUFhLFdBQVksU0FBUSxtQkFBSztJQUdwQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXdCO1FBQ2hFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx3QkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDbkUsT0FBTyxFQUFFLHdCQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLHNCQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM3QixVQUFVLEVBQUUsQ0FBQSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxNQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ2pELE9BQU8sRUFBRSxlQUFlO1lBQ3hCLElBQUksRUFBRSx3QkFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzNELENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWRELGtDQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBTdGFjaywgU3RhY2tQcm9wcywgYXdzX2xhbWJkYSBhcyBsYW1iZGEsIER1cmF0aW9uIH0gZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuXG5pbnRlcmZhY2UgTGFtYmRhU3RhY2tQcm9wcyBleHRlbmRzIFN0YWNrUHJvcHMge1xuICBlbnZOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBMYW1iZGFTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgYXJ0aWNsZXNMYW1iZGE6IGxhbWJkYS5GdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IExhbWJkYVN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIHRoaXMuYXJ0aWNsZXNMYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiQXJ0aWNsZXNGdW5jdGlvbnNcIiwge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICB0aW1lb3V0OiBEdXJhdGlvbi5zZWNvbmRzKDYwKSxcbiAgICAgIG1lbW9yeVNpemU6IHByb3BzPy5lbnZOYW1lID09PSBcIlByb2RcIiA/IDEyOCA6IDI1NixcbiAgICAgIGhhbmRsZXI6IFwiYXJ0aWNsZXMubGlzdFwiLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KGpvaW4oX19kaXJuYW1lLCBcIi4uL2xhbWJkYXNcIikpLFxuICAgIH0pO1xuICB9XG59XG4iXX0=