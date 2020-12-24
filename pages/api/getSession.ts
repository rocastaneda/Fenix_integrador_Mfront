import { NextApiRequest, NextApiResponse } from 'next';
import generateSession from '../../services/nmp-api/generateSession';
import getAuthToken from '../../services/nmp-api/getAuthToken';

const getSession = async (req: NextApiRequest, res: NextApiResponse) => {
  const newToken = await getAuthToken().then((value) => value.access_token);

  const sessionInfo = generateSession(await newToken);

  switch (req.method) {
    case 'GET':
      return sessionInfo
        .then((value) => res.status(200).send(value))
        .catch((error) => res.status(400).send(error));

    default:
      return res.status(404).send('invalid request');
  }
};

export default getSession;
