const menuActions = [
  {
    id: "aboutme",
    name: "About me",
    shortcut: ["s", "a"],
    keywords: "me",
    section: "navigation",
    perform: () => (window.location.href = "/#"),
  },
  {
    id: "experience",
    name: "Experience",
    shortcut: ["s", "e"],
    keywords: "xp",
    section: "navigation",
    perform: () => (window.location.href = "/#experience"),
  },
  {
    id: "projects",
    name: "Projects",
    shortcut: ["s", "p"],
    keywords: "works",
    section: "navigation",
    perform: () => (window.location.href = "/#projects"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["s", "c"],
    keywords: "email hi hello",
    section: "contact",
    perform: () => (window.location.href = "/#contact"),
  },
  {
    id: "email",
    name: "Email",
    shortcut: ["e", "m"],
    keywords: "hi hello contact",
    section: "contact",
    perform: () => window.open("mailto:hi@sebjf.dev", "_blank"),
  },
  {
    id: "github",
    name: "Github",
    shortcut: ["g", "h"],
    keywords: "repo",
    section: "links",
    perform: () => window.open("https://github.com/xxixiio/", "_blank"),
  },
];

export default menuActions;
