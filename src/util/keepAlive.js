import https from 'https';

// Function to stop heroku app from idling
export const keepAlive = () => {
  console.log('Initializing keep alive function..');
  if (process.env.KEEP_ALIVE) https.get(`${process.env.URL}/ping`);
  setInterval(() => {
    if (process.env.KEEP_ALIVE) https.get(`${process.env.URL}/ping`);
  }, 300000);
};
