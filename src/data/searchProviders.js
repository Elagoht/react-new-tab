import searchIcons from "../assets/search";

const searchProviders = [
  {
    name: "Duckduckgo",
    icon: searchIcons.ddg,
    link: "https://duckduckgo.com/?q=",
  },
  {
    name: "Google",
    icon: searchIcons.google,
    link: "https://www.google.com/search?q=",
  },
  {
    name: "Youtube",
    icon: searchIcons.youtube,
    link: "https://www.youtube.com/results?search_query=",
  },
  {
    name: "Wikipedia",
    icon: searchIcons.wikipedia,
    link: "https://en.wikipedia.org/w/index.php?fulltext=1&search=",
  },
];

export default searchProviders;
