import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connect to MongoDB DataBase ${conn.connection.host} `.bgMagenta.white
    );
  } catch (err) {
    console.log(`error = ${err} `.bgRed.white);
  }
};

export default connectDB;
