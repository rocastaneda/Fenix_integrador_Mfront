import { EntryCollection } from 'contentful';
import { contenfulClient } from './client';

export const getContentfulContent = async (): Promise<
  EntryCollection<unknown>
> => {
  const pageContent = await contenfulClient.getEntries({
    content_type: 'landingFenixSimulador',
  });

  return pageContent;
};
