
import MenuList from './MenuList'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
export default function MenuItem({ item }) {
    const [currentChildren, setCurrentChildren] = useState({});
    function handleToggle(label) {
        setCurrentChildren(prev => ({
            ...prev,
            [label]: !prev[label]
        }));
    }
    return (
        <li className='menu-item'>
            {item.label}
            {item.children && item.children.length > 0 && <span onClick={(e) => {
                // e.stopPropagation();
                handleToggle(item.label)
            }}>{currentChildren[item.label] ? <FaMinus /> : <FaPlus />}</span>}
            {item.children && item.children.length > 0 && currentChildren[item.label] && <MenuList list={item.children} />}
        </li>
    )
}
