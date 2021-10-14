const mongodb = require('mongodb');
const connectionURL = 'mongodb://localhost:27017';
const dbName = 'tourit';

module.exports = {
    connectionURL,
    dbName,
    QID: mongodb.ObjectID
}