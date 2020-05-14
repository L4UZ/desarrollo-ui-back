import http from 'http';
import app, { homePath } from './index';

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Visit ${process.env.URL}:${process.env.PORT}${homePath}`);
});
