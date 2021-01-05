export const encode = (string: string): string => {
  const buffer = Buffer.from(string);
  return buffer.toString('base64');
};

export const decode = (hash: string): string => {
  const buffer = Buffer.from(hash, 'base64');
  return buffer.toString();
};
