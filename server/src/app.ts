import express  from "express";
import cors from "cors";
import userRouter from "./routes/user.router";
import { errorHandler } from "./middlewares/error-handler.middleware";
import morgan from "morgan";
import { morganData, morganFormate } from "./loggers/morgan";

const app = express();

app.use(morgan(morganFormate, morganData))
app.use(express.json());
app.use(cors({
    origin: "*",
}))

app.use("/api/v1",userRouter);
app.use(errorHandler)

app.all("*", (req, res) => {
    res.status(404).json({
        message: "Page not found"
    })
})

export default app;