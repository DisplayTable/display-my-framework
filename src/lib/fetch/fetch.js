import deepmerge from "deepmerge";
import { useDMFConfigProvider } from "../config/config";

export const useDMFInterceptedFetch = () => {

    const config = useDMFConfigProvider();

    const interceptedFetch = async (fetchData, interceptors = []) => {
        
        const response = await window.fetch(...fetchData);
        const mergedInterceptors = deepmerge(interceptors, config.interceptors);
        const interceptor = mergedInterceptors.find(f => f.status === response.status);

        if(interceptor && interceptor.callback && typeof interceptor.callback === 'function') {
            interceptor.callback(response);
        }
        return response;
    }

    return {interceptedFetch}
    
}