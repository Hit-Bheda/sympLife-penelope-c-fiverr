import app from "./app";
import connectDB from "./db/connect-db";
import { infoLogger } from "./loggers/logger";

const server = async () => {
    try{
        const port = process.env.PORT || 5000;
        await connectDB();

        app.listen(port, () => {
            infoLogger.info(`Server is listening on port ${port}`)
        })

        app.on("error", (error) => {
            throw error
        })
    } catch(error){
        console.log(error);
    }
}

server()