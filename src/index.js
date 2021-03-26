import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Amplify } from 'aws-amplify';
import config from './config';

Amplify.configure({
   Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "minions",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

ReactDOM.render(<Routes />, document.getElementById('root'));
reportWebVitals();
