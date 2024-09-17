import { Router}  from "express";
import { Route } from "../types/types";
import { test } from "../controllers/user.controller";

const userRouter = Router();

const routes: Route[] = [
    {
        path: "/test",
        method: "get",
        handler: test
    }
]

routes.forEach((route) => {
    userRouter[route.method](route.path, route.handler)
})
export default userRouter;