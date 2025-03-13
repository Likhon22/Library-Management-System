// server will be there
// example server

import { Server } from 'http';

import config from './app/config';
import { app } from './app';

let server: Server;
async function main() {
  try {
    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on('unhandledRejection', (reason, err) => {
  console.error(
    'Unhandled Rejection at caught.Shutting down the server ....',
    reason,
    err,
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.error('Unhandled Exception caught.Shutting down the server ....');
  process.exit(1);
});
