import './_githubProfileFinder.scss';
import data from "./github-data";
import Rendering from "../RenderingComponent/Rendering";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
export default function GithubProfileFinder() {

    const [userName, setuserName] = useState('aahin-codes');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null);

    function handleSearch() {
        if (!userName.trim()) {
            return;
        }
        fetchGithubUserData();
    }

    async function fetchGithubUserData() {
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${userName}`);
            const result = await response.json();

            if (result) {
                setUserData(result)
                setLoading(false);
                setuserName('');
            }
        } catch (e) {
            setLoading(false);
            setErrorMsg("Error in fetching....")
        }

    }

    const renderingContent = (
        <>
            <div className="input-wrapper">
                <input name="search" type="text" placeholder="Search Github username..." value={userName} onChange={(e) => setuserName(e.target.value)} />
                <button onClick={(e) => { handleSearch() }}>Search</button>
            </div>

            <div className="profile">
                {userData !== null ? <UserCard user={userData} /> : <div>Rendering Error</div>}
            </div>
        </>
    )

    const loadingContent = <div className='loading'>Loading...</div>;
    const errorContent = <div className='error'>{errorMsg}</div>


    useEffect(() => {
        fetchGithubUserData();
    }, [])
    return (
        <Rendering data={data} renderingComponent={loading ? loadingContent : errorMsg ? errorContent : renderingContent} className={"github-profile-container"} />
    )
}
