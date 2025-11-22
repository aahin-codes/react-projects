

import Rendering from "../rendering-component/rendering"
import MenuList from "./menu-list";
import data from "./tree-view-data";
import { menus } from "./tree-view-data";
export default function TreeviewComp({ menu = menus }) {
  function renderingBox() {
    return (
      <div className="demo-box tree-view-comp">
        <MenuList list={menu} />
      </div>
    )
  }
  return (
    <>
      <Rendering data={data} demoBox={renderingBox()} />
    </>
  )
}
