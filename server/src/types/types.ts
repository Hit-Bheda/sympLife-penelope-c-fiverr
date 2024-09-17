import { RequestHandler } from "express";

export interface ErrorResponse {
    message: string;
    stack?: string;
}

export interface Route {
    path: string;
    method: "get" | "post" | "put" | "delete";
    handler: RequestHandler;
  }