import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017'

const MONGODB_DB_NAME = 'itmanager'

const client = await MongoClient.connect(url)

const db = client.db(MONGODB_DB_NAME)

export const MongoConnect = () => {}

export default db
