import { useEffect, useState, useRef } from "react"


export default function useFetch(url = "", options = {}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const optionsRef = useRef(options);

    async function fetchData() {
        try {

            setLoading(true);
            const response = await fetch(url, { ...options });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const responseData = await response.json();

            if (responseData) {
                setData(responseData);
                setLoading(false)
            }

        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {

                setLoading(true);
                const response = await fetch(url, optionsRef.current);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const responseData = await response.json();

                if (responseData) {
                    setData(responseData);
                    setLoading(false)
                }

            } catch (error) {
                setError(error.message);
                setLoading(false)
            }
        }
        fetchData();
    }, [url,])
    return { data, error, loading }
}

