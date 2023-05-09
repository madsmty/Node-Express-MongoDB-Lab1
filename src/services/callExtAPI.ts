import axios, {AxiosResponse} from "axios";

export async function callExtAPI<T>(url:string): Promise<AxiosResponse> {
    
    try {
         const {data, status} = await axios.get(url);
         //responseArray: Array = response.data;
        // console.log(JSON.stringify(data, null, 4));
         //console.log("Response status", status)
         return data;
     } catch (error) {
         console.log(error);
         throw new Error(`Error in 'callExtAPI(${url})': ${error}`);
     }
     //falta async Retry
     //crear una clase de esta funcion
   }; 
 