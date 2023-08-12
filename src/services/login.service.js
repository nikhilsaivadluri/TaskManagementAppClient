import { Backend } from "../Utils/axios";

export async function loginUser(payload){
    return await Backend.post('/user/login',payload);
 }