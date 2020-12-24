import Axios, { AxiosRequestConfig } from 'axios';

const getSimResultFromClient: (
  token: string,
  monto: string,
  cuota: string,
  tipoPrestamo: string
) => Promise<any> = async (
  token: string,
  monto: string,
  cuota: string,
  tipoPrestamo: string
): Promise<any> => {
  const configRequest: AxiosRequestConfig = {
    url: '/api/resultSim',
    data: {
      token: token,
      monto: monto,
      cuota: cuota,
      tipoPrestamo: tipoPrestamo,
    },
    method: 'POST',
  };

  const request = await Axios(configRequest);
  const data = request.data;

  return await data;
};

export default getSimResultFromClient;
