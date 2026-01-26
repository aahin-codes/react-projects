const data = [
  {
    type: "single",
    title: "Single Selection Mode",
    shortDescription:
      "The 'One-at-a-time' style. Opening a new item automatically closes the previous one.",
    description:
      "Think of this like a standard radio button. You can only have one active at a time. When you click to open a new section, the code automatically finds the old one and shuts it. This is best for FAQs to keep the page short and clean.",
  },
  {
    type: "multiple",
    title: "Multi-Selection Mode",
    shortDescription:
      "The 'Open-all' style. You can expand multiple sections at the same time without closing others.",
    description:
      "Think of this like a list of checkboxes. You can toggle as many items as you want. Clicking a new section does NOT affect the others. This is great for menus or tutorials where a user might need to see Step 1 and Step 2 side-by-side.",
  },
];

export default data;