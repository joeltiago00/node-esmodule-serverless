import database from "../config/database";
import MongoDBConnector from "./Instances/MongoDBConnector";

class DatabaseConnectionHandler {
    handle() {
        let db

        switch (database.DB_CONNECTION) {
            case 'mongodb': db = MongoDBConnector; break;
            default: throw new Error('Database connection not supported.')
        }

        db.connect()
    }
}

export default new DatabaseConnectionHandler()