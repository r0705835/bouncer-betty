import { connect } from "mongoose";

export const connectDatabase = async () => {
    await connect(process.env.mongoURI as string);
    console.log("Database Connected!");
}
