import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb+srv://testUser:<"HTh5MyH3A10RSznM">@mongodbtest.yxsef.mongodb.net/<database>?retryWrites=true&w=majority",//"mongodb+srv://testUser:<FWEMXfr2eh4wdgBA>@mongodbtest.yxsef.mongodb.net/<test-db>?retryWrites=true&w=majority"
  "bodyLimit": "100kb"
}
