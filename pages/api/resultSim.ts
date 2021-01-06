import { NextApiRequest, NextApiResponse } from 'next';
import makeSimRequest from '../../services/nmp-api/makeSimRequest';

const resultSimHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const monto = req.body.monto;
  const cuota = req.body.cuota;
  const tipoPrestamo = req.body.tipoPrestamo;
  const token = req.body.token;

  if (!token) {
    return res.status(400).send('invalid token');
  }

  const simData = makeSimRequest(token, monto, cuota, tipoPrestamo);

  switch (req.method) {
    case 'POST':
      return simData
        .then((value) => res.status(200).send(value))
        .catch((error) => res.status(400).send(error));

    default:
      return res.status(404).send('invalid request');
  }
};

export default resultSimHandler;
