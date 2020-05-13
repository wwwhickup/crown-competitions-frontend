import {
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angularx-social-login';

export const environment = {
  production: true,
  server: {
    BASE_URL: 'http://localhost',
    API_VERSION: 'api'
  },
  STRIPE_PUB_KEY: 'pk_live_UsJI3Ts8tB4WW1F6IfvFQrm900Q1b4PtAp',
  AUTH_CONFIG: new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        '457048883074-2k0unm1ah7bm363s1r82fhb0ode4jobn.apps.googleusercontent.com'
      )
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('555523141825080')
    }
  ]),
  piwikServer: 'https://crowncompetitions.matomo.cloud/'
};