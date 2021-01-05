import { development } from './development';
import { EnvVariables } from './EnvVariables';
import { production } from './production';

const APP_MODE = process.env.APP_MODE || 'dev';

const getEnvVars = (): EnvVariables => {
  switch (APP_MODE) {
    case 'dev':
      return development;

    case 'production':
      return production;

    default:
      throw new Error(
        "couldn't load environment variables, please check the APP_MODE in your enviroment variable file/list"
      );
  }
};

export default getEnvVars;
