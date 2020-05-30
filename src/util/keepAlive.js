import https from 'https';
import http from 'http';

// Function to stop heroku app from idling
const keepAlive = httpLib => {
  console.log('Initializing keep alive function..');
  if (process.env.KEEP_ALIVE) httpLib.get(`${process.env.URL}/ping`);
  setInterval(() => {
    if (process.env.KEEP_ALIVE) httpLib.get(`${process.env.URL}/ping`);
  }, 300000);
};

export const keepAliveHttps = () => keepAlive(https);
export const keepAliveHttp = () => keepAlive(http);
