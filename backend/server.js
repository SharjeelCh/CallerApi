const express = require("express");
const connectDb = require("./Connection/dbConnection");
const PORT = process.env.port || 5000;

connectDb();

const app = express();

app.use(express.json());

app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use("/api/users", require("./Routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
