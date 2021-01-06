import Axios from 'axios';

const getSessionFromClient: () => Promise<any> = async (): Promise<any> => {
  const request = await Axios.get(`/api/getSession`);
  const data = request.data;

  return await data;
};

export default getSessionFromClient;
