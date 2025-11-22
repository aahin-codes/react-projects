import MenuItem from "./menu-item";
export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.map((listitem, index) => <MenuItem item={listitem} key={index} />)}
    </ul>
  )
}
