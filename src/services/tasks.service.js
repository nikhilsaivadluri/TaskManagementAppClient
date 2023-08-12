import { Backend } from "../Utils/axios";

export async function getTaskList(){
   return await Backend.get('/tasks');
}


export async function getTaskDetailsById(taskId){
    return await Backend.get(`/tasks/${taskId}`);
 }

export async function deleteTaskById(taskId){
    return await Backend.delete(`/tasks/${taskId}`);
}

export async function updateTaskDetailsById(taskId,payload){
    return await Backend.put(`/tasks/${taskId}`,payload);
}

export async function createNewTask(payload){
    return await Backend.post('/tasks',payload);
}