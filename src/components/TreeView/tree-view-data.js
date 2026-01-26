const data = [
  {
    title: "Tree View (Recursive Menu)",
    shortDescription:
      "A menu inside a menu inside a menu. Like the folders on your computer or the sidebar on VS Code.",
    description:
      "This project introduces the toughest concept for beginners: **Recursion**. Imagine you have a folder. Inside that folder, you might have files, or you might have *more folders*. You can't write code for 'Level 1' and 'Level 2' manually because you don't know how deep it goes. Instead, we write a component that 'calls itself'. The logic is: *'Render this item. If it has children, run this same component again for the children.'* It allows infinite nesting with just one block of code.",
  },
];

export const menus = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Profile",
    path: "/profile",
    children: [
      {
        label: "User Details",
        path: "details",
        children: [
          {
            label: "Edit Name",
            path: "edit-name",
          },
          {
            label: "Change Avatar",
            path: "change-avatar",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    path: "/settings",
    children: [
      {
        label: "Account",
        path: "account",
      },
      {
        label: "Security",
        path: "security",
        children: [
          {
            label: "Login",
            path: "login",
          },
          {
            label: "Register",
            path: "register",
          },
        ],
      },
    ],
  },
];

export default data;