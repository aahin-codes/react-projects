const data = [
  {
    title: "Tabs Navigation",
    shortDescription:
      "Just like tabs in your web browser. Click a button to swap the content below it instantly.",
    description:
      "Think of this component like a physical file binder with dividers. You have a stack of different pages, but you only want to look at one at a time. When you click a Tab Label (the divider), React updates a 'current index' number in its state (0, 1, 2...). It keeps the selected page visible and hides the others. It's perfect for saving screen space on things like 'Login/Register' forms or 'Settings' panels.",
  },
];

export default data;

export const tabsData = [
    {
        label: 'Home',
        content: '👋 Welcome! This is the main dashboard area. We show this by default because it is the first item in the array (Index 0).'
    },
    {
        label: 'Profile',
        content: '👤 User Details: Here you would display the user name, avatar, and bio. Notice how the "Home" content disappeared when you clicked this?'
    },
    {
        label: 'Settings',
        content: '⚙️ Preferences: This is a great place for toggle switches, theme changes, or password updates. It keeps technical stuff hidden until needed.'
    },
    {
        label: 'Messages',
        content: '📩 Inbox: You have 3 unread messages. Tabs are great for organizing different categories of data without making the user scroll down a long page.'
    }
]