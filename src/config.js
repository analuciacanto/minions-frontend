const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "minions-images-app",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://amobi9hq0a.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_qgzSUtvQv",
    APP_CLIENT_ID: "482d81seeb8pua3so3p7mbesig",
    IDENTITY_POOL_ID: "us-east-2:0e1e65f3-746d-4cd0-ad03-3542d770f170",
  },
};

export default config;
