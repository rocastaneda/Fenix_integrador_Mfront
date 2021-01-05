import { createClient, CreateClientParams } from 'contentful';

const clientParams: CreateClientParams = {
  space: 't5ncw9ql6tt2',
  accessToken: 'm12mn6BYrSHmtQKQDsrFO_PTdJFIZCCpuuTyYLuQffM',
};

export const contenfulClient = createClient(clientParams);
