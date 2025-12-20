import Rendering from "../rendering-component/rendering";
import data from "./search-data";
import { useEffect, useState } from "react";
import Suggestion from "./suggestion";
export default function SearchAutocomplete() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([])

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const result = await response.json();

            if (result && result.users.length) {
                setUsers(result.users.map((userItem) => userItem.firstName));
                setLoading(false)
            }
        }
        catch (e) {
            setLoading(false);
            console.log(e.message);
         }

    }
    
    function handleChange(event){
        const query = event.target.value.toLowerCase();
        console.log(query.length > 1);
        
        setSearchParam(query);
        if(query.length>=1){

            const filteredData = users && users.length ? users.filter((item)=> item.toLowerCase().indexOf(query) > -1 ): [];
            console.log(filteredData, users);
            
            setFilteredUsers(filteredData)
            setShowDropdown(true)
        }else{
            setShowDropdown(false);
        }
    }
   
    function handleClick(e){
        setSearchParam(e.target.innerText.toLowerCase());
        setShowDropdown(false);
        setFilteredUsers([]);
    }

    function renderingBox() {

        return (
            <div className="demo-box search-autocomplete">
                <div className="input-wrapper">
                    <input type="text" value={searchParam} name="search-user" placeholder="Search users here..." onChange={handleChange} />
                </div>
                {showDropdown && <Suggestion data={filteredUsers} handleclick={handleClick}/>}
            </div>
        )

    }

    useEffect(()=>{
        fetchListOfUsers();
    },[])
    // console.log(searchParam, filteredUsers, showDropdown);
    return (
        <Rendering data={data} demoBox={renderingBox()} />
    )
}
