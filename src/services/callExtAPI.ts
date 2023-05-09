import axios, {AxiosResponse} from "axios";

export async function callExtAPI<T>(url:string): Promise<AxiosResponse> {
    try {
         const response = await axios.get(url);
         console.log(response);
         return response;
     } catch (error) {
         console.log(error);
         throw new Error(`Error in 'callExtAPI(${url})': ${error}`);
     }
     //falta async Retry
     //crear una clase de esta funcion
   }; 
 