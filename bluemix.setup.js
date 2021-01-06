const shell = require('shelljs');
const cfenv = require('cfenv');

const appEnv = cfenv.getAppEnv();

const PORT = appEnv.port;
const HOSTNAME = appEnv.bind;

shell.exec(`npm run next-start -- -p ${PORT} -H ${HOSTNAME}`);
