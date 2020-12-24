import Axios, { AxiosRequestConfig } from 'axios';
import qs from 'querystring';

const getAuthToken = async () => {
  const bodyToEncode = {
    grant_type: 'password',
    username: 'xgicasta',
    password: 'mML8uWBgT',
    scope: 'UserProfile.me',
  };

  const config: AxiosRequestConfig = {
    method: 'post',
    url: 'https://iamdr.montepiedad.com.mx:4444/NMP/oauth2/v1',
    headers: {
      usuario: 'usuario',
      idConsumidor: '52',
      idDestino: '20',
      Authorization: 'Basic ZmVuaXg6SnFOeUdEbVdueG0w',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(bodyToEncode),
  };

  const request = Axios(config)
    .then((value) => value.data)
    .catch((error) => console.log(error));

  return await request;
};

export default getAuthToken;
