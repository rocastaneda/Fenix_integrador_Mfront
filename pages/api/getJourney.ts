import { NextApiRequest, NextApiResponse } from 'next';
import getJourneySessionRequest from '../../services/nmp-api/getJourneySession';

const getJourneyHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const isNextState: boolean = req.body.isNextState;
  const token: string = req.body.token;

  console.log();

  const request = getJourneySessionRequest(token);

  switch (req.method) {
    case 'POST':
      return request
        .then((value) => res.status(200).send(value))
        .catch((error) => res.status(400).send(error));

    default:
      return res.status(404).send('invalid request');
  }
};

export default getJourneyHandler;
