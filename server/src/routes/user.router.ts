import { Router}  from "express";
import { Route } from "../types/types";
import { test } from "../controllers/user.controller";
import { TryCatch } from "../utils/try-catch.util";

const userRouter = Router();

const routes: Route[] = [
    {
        path: "/test",
        method: "get",
        handler: test
    }
]

routes.forEach((route) => {
    userRouter[route.method](route.path, TryCatch(route.handler))
})
export default userRouter;