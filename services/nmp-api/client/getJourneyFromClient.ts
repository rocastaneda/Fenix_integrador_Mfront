import Axios, { AxiosRequestConfig } from "axios";

const getJourneyFromClient: (
  token: string,
  isNextState?: boolean
) => Promise<any> = async (
  token: string,
  isNextState?: boolean
): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: "post",
    url: "/api/getJourney",
    data: {
      token: token,
      isNextState: isNextState,
    },
  };

  const request = await Axios(config);
  const data = request.data;

  return await data;
};

export default getJourneyFromClient;
