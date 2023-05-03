import serverless from 'serverless-http';
import express from 'express';
import RouteServiceProvider from './app/Providers/RouteServiceProvider';
import DatabaseConnectionHandler from './database/DatabaseConnectionHandler';

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

DatabaseConnectionHandler.handle();

app = RouteServiceProvider.handle(app);

const handler = serverless(app);

export { handler };
