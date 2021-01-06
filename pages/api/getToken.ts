import getAuthToken from '../../services/nmp-api/getAuthToken';
import { NextApiRequest, NextApiResponse } from 'next';

const getTokenHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const tokenRequest = getAuthToken();

  switch (req.method) {
    case 'GET':
      return tokenRequest
        .then((value) => res.status(200).send(value))
        .catch((error) => res.status(400).send(error));

    default:
      return res.status(404).send('invalid request');
  }
};

export default getTokenHandler;
