import serverless from "serverless-http";
import express from "express";
import RouteServiceProvider from "./app/Providers/RouteServiceProvider";
import DatabaseConnectionHandler from "./database/DatabaseConnectionHandler";

let app = express();

DatabaseConnectionHandler.handle()

app = RouteServiceProvider.handle(app)

const handler = serverless(app);

export {
  handler
}
