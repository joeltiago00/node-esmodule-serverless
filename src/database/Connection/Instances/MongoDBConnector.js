import mongoose from 'mongoose';
import database from '../../../config/database';

class MongoDBConnector {
  connect() {
    mongoose.connect(database.DB_HOST);
  }
}

export default new MongoDBConnector();
