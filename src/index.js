import ReactDom from 'react-dom';
import React from 'react';
import App from './app';
import {UserContextProvider} from '@ajanthan/wso2identity-js';

const loginConfig = {
    client_id: 'A3x7hnhf3zCWKFfrs50fnof53xAa',
    redirect_url: 'https://ajanthan.github.io/microstore-ui/redirect.html',
    logout_url: 'https://identity.us.to/oidc/logout',
    epConfig: {
      authorization_endpoint: 'https://identity.us.to/oauth2/authorize',
      token_endpoint: 'https://identity.us.to/oauth2/token',
      revocation_endpoint: 'https://identity.us.to/oauth2/revoke',
      userinfo_endpoint: 'https://identity.us.to/oauth2/userinfo'
    }
  };

ReactDom.render(
    <UserContextProvider config={loginConfig}><App /></UserContextProvider>
,
    document.getElementById('root'));