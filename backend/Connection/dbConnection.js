const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
       'mongodb+srv://sharjeel:1234@cluster0.byu2acx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log(
      `MongoDb Connected: `,connect.connection.host,connect.connection.name,
    );
  } catch (error) {
    console.log(`Error Connecting: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
