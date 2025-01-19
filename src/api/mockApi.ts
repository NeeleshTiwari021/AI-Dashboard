import aiData from './ai-data.json';

export const fetchMockData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(aiData);
    }, 1000);
  });
};
