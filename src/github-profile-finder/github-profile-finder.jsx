import data from "./github-data";
import Rendering from "../rendering-component/rendering";
import { useCallback, useEffect, useState } from "react";
import UserCard from "./user-card";
export default function GithubProfileFinder() {

    const [userName, setuserName] = useState('aahin-codes');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false)

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
            // console.log(e.message);
        }

    }

    function renderingBox() {
        return (
            <div className="demo-box github-profile-container">
                <div className="input-wrapper">
                    <input name="search" type="text" placeholder="Search Github username..." value={userName} onChange={(e) => setuserName(e.target.value)} />
                    <button onClick={(e) => { handleSearch() }}>Search</button>
                </div>

                <div className="profile">
                    {userData !== null ? <UserCard user={userData} /> : <div>Rendering Error</div>}
                </div>
            </div>
        )
    }

    useEffect(() => {
        fetchGithubUserData();
    }, [])
    return (
        <Rendering data={data} demoBox={renderingBox()} />
    )
}
