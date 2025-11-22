const data = [
  {
    title: "Tree View Component",
    shortDescription:
      "A collapsible hierarchical navigation component used to display nested data structures in an organized, expandable format.",
    description:
      "The Tree View Component provides a structured way to display multi-level hierarchical data such as file directories, categories, or organizational charts. Users can expand or collapse nodes to reveal or hide child elements, helping them navigate complex datasets with ease. The component supports features like lazy loading of nested items, custom icons, keyboard navigation, checkboxes for multi-select, and smooth animations. Developers can integrate dynamic data sources, control expansion states programmatically, or customize node rendering to create highly intuitive and flexible navigational experiences.",
  },
];
export const menus = [
    {label:"Home", path:'/'},
    {label:"Profile", path:'/profile', children:[{label:"Details", path:'/details', children:[{label:"Personal", path:'/personal'}]}]},
     {label:"Profile", path:'/profile',children:[{label:"Details", path:'/details'}]}
]
export default data;
