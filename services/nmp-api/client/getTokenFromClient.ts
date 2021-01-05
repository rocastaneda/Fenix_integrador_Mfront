import Axios from 'axios';

const getTokenFromClient: () => Promise<any> = async (): Promise<any> => {
  const request = await Axios.get(`/api/getToken`);
  const data = request.data;
  const { expires_in, token_type, ...rest } = data;

  return await rest;
};

export default getTokenFromClient;
