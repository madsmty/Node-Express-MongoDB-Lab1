import axios, {AxiosResponse} from "axios";

export async function callExtAPI<T>(url:string): Promise<AxiosResponse> {
    try {
         const response:AxiosResponse = await axios.get(url);
         console.log(response.data);
         return response.data;
     } catch (error) {
         console.log(error);
         throw new Error(`Error in 'callExtAPI(${url})': ${error}`);
     }
     //falta async Retry
     //crear una clase de esta funcion
   }; 
 