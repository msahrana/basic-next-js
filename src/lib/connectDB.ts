import mongoose from "mongoose";

// let db;
export const connectDb = async () => {
  try {
    /* create by mongoose */
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDb connected successfully");
    });
    connection.on("error", (error) => {
      console.log("MongoDB connection error: ", error);
      process.exit(1);
    });
    /* create by mongodb */
    // if(db) return db;
    // const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    // try {
    //     const client = new MongoClient(uri, {
    //         serverApi: {
    //             version: ServerApiVersion.v1,
    //             strict: true,
    //             deprecationErrors: true
    //         },
    //     });
    //     db = client.db('quiz_lytics_database');
    //     return db;
  } catch (error: any) {
    console.log(error);
  }
};
