import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb+srv://testUser:<5mI8n2LN6fOpFyIA>@mongodbtest.yxsef.mongodb.net/<test-db>?retryWrites=true&w=majority",//"mongodb+srv://testUser:<FWEMXfr2eh4wdgBA>@mongodbtest.yxsef.mongodb.net/<test-db>?retryWrites=true&w=majority"
  "bodyLimit": "100kb"
}
