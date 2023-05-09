"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callExtAPI = void 0;
const axios_1 = __importDefault(require("axios"));
function callExtAPI(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data, status } = yield axios_1.default.get(url);
            //responseArray: Array = response.data;
            // console.log(JSON.stringify(data, null, 4));
            //console.log("Response status", status)
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error(`Error in 'callExtAPI(${url})': ${error}`);
        }
        //falta async Retry
        //crear una clase de esta funcion
    });
}
exports.callExtAPI = callExtAPI;
;
