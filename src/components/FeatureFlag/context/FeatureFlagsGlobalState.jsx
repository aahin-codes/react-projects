import { createContext, useEffect, useState } from "react";
import fetaureFlagDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState(null);

    async function fetchFlags(){
        try {
            setLoading(true);
            const response = await fetaureFlagDataServiceCall();
            
            if(response){
                setEnabledFlags(response);
                setLoading(false)
            }
            
        } catch (error) {
            setLoading(false)
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
        fetchFlags();
    },[])
    return (
        <FeatureFlagsContext.Provider value={{loading,enabledFlags}}>{children}</FeatureFlagsContext.Provider>
    )
}
