import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from './database';

let service;

const start = async () => {
    service = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    routes.forEach(route => service.route(route));

    db.connect()
    await service.start();
    console.log(`Server is listining on ${service.info.uri}`)
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping server...');
    await service.stop({ timeout: 10000 });
    db.end();
    console.log('Server stopped');
    process.exit(0);
});

start();