const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// ****** Database Connection with Mongoose ****** //
// mongoose.connect("mongodb://127.0.0.1:27017/aman-api", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(
  "mongodb+srv://amanverma07:anikaverma21@cluster0.tkucqgj.mongodb.net/hospital-api?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

// ****** Connection Error Handling ****** //
db.on("error", console.error.bind(console, "Error connecting to the databse"));

// ****** Connection Error Successful ****** //
db.once("open", function () {
  console.log("Successfully connected to the Database");
});
