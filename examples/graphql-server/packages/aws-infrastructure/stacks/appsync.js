"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSyncStack = void 0;
const path_1 = require("path");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_appsync_alpha_1 = require("@aws-cdk/aws-appsync-alpha");
class AppSyncStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const api = new aws_appsync_alpha_1.GraphqlApi(this, "GraphQL-Api", {
            name: "Blog",
            schema: aws_appsync_alpha_1.Schema.fromAsset((0, path_1.join)(__dirname, "../../graphql-server/schema.graphql")),
            authorizationConfig: {
                defaultAuthorization: {
                    authorizationType: aws_appsync_alpha_1.AuthorizationType.API_KEY,
                },
            },
        });
        const articlesDataSource = api.addLambdaDataSource("ArticleDataSource", props.articlesLambda);
        api.createResolver({
            fieldName: "articles",
            typeName: "Query",
            dataSource: articlesDataSource,
        });
    }
}
exports.AppSyncStack = AppSyncStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcHN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQTRCO0FBQzVCLDZDQUE0RDtBQUU1RCxrRUFJb0M7QUFNcEMsTUFBYSxZQUFhLFNBQVEsbUJBQUs7SUFDckMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUF3QjtRQUNoRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLEdBQUcsR0FBRyxJQUFJLDhCQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUM5QyxJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSwwQkFBTSxDQUFDLFNBQVMsQ0FDdEIsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLHFDQUFxQyxDQUFDLENBQ3ZEO1lBQ0QsbUJBQW1CLEVBQUU7Z0JBQ25CLG9CQUFvQixFQUFFO29CQUNwQixpQkFBaUIsRUFBRSxxQ0FBaUIsQ0FBQyxPQUFPO2lCQUM3QzthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsbUJBQW1CLENBQ2hELG1CQUFtQixFQUNuQixLQUFLLENBQUMsY0FBYyxDQUNyQixDQUFDO1FBQ0YsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNqQixTQUFTLEVBQUUsVUFBVTtZQUNyQixRQUFRLEVBQUUsT0FBTztZQUNqQixVQUFVLEVBQUUsa0JBQWtCO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXpCRCxvQ0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IFN0YWNrLCBTdGFja1Byb3BzLCBhd3NfbGFtYmRhIH0gZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHtcbiAgR3JhcGhxbEFwaSxcbiAgU2NoZW1hLFxuICBBdXRob3JpemF0aW9uVHlwZSxcbn0gZnJvbSBcIkBhd3MtY2RrL2F3cy1hcHBzeW5jLWFscGhhXCI7XG5cbmludGVyZmFjZSBBcHBTeW5jU3RhY2tQcm9wcyBleHRlbmRzIFN0YWNrUHJvcHMge1xuICBhcnRpY2xlc0xhbWJkYTogYXdzX2xhbWJkYS5GdW5jdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcFN5bmNTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFwcFN5bmNTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCBhcGkgPSBuZXcgR3JhcGhxbEFwaSh0aGlzLCBcIkdyYXBoUUwtQXBpXCIsIHtcbiAgICAgIG5hbWU6IFwiQmxvZ1wiLFxuICAgICAgc2NoZW1hOiBTY2hlbWEuZnJvbUFzc2V0KFxuICAgICAgICBqb2luKF9fZGlybmFtZSwgXCIuLi8uLi9ncmFwaHFsLXNlcnZlci9zY2hlbWEuZ3JhcGhxbFwiKVxuICAgICAgKSxcbiAgICAgIGF1dGhvcml6YXRpb25Db25maWc6IHtcbiAgICAgICAgZGVmYXVsdEF1dGhvcml6YXRpb246IHtcbiAgICAgICAgICBhdXRob3JpemF0aW9uVHlwZTogQXV0aG9yaXphdGlvblR5cGUuQVBJX0tFWSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgYXJ0aWNsZXNEYXRhU291cmNlID0gYXBpLmFkZExhbWJkYURhdGFTb3VyY2UoXG4gICAgICBcIkFydGljbGVEYXRhU291cmNlXCIsXG4gICAgICBwcm9wcy5hcnRpY2xlc0xhbWJkYVxuICAgICk7XG4gICAgYXBpLmNyZWF0ZVJlc29sdmVyKHtcbiAgICAgIGZpZWxkTmFtZTogXCJhcnRpY2xlc1wiLFxuICAgICAgdHlwZU5hbWU6IFwiUXVlcnlcIixcbiAgICAgIGRhdGFTb3VyY2U6IGFydGljbGVzRGF0YVNvdXJjZSxcbiAgICB9KTtcbiAgfVxufVxuIl19