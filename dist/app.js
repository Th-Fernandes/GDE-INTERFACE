"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./backend/routes/index"));
const register_1 = __importDefault(require("./backend/routes/register"));
const app = (0, express_1.default)();
const port = 3000;
//ROUTER CONFIG
app.use('/', index_1.default);
app.use('/register', register_1.default);
app.listen(port);
