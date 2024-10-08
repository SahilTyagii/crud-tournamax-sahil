import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

const dbConnect = async (): Promise<void> => {
    if (connection.isConnected) {
        console.log("Using existing connection")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI as string)
        console.log(db)
        connection.isConnected = db.connections[0].readyState
        console.log("Database connection created");
    } catch (error) {
        console.error("Error connecting to database: ", error)
        process.exit(1)
    }
}

export default dbConnect;