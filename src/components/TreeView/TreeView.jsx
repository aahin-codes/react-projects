import "./_treeView.scss";
import Rendering from "../RenderingComponent/Rendering";
import MenuList from "./MenuList";
import data from "./tree-view-data";
import { menus } from "./tree-view-data";

export default function TreeView({ menu = menus }) {
  const renderingContent = (
      <>
        <MenuList list={menu} />
      </>
    )
  
  return (
    <>
      <Rendering data={data} renderingComponent={renderingContent} className={"tree-view"} />
    </>
  )
}
