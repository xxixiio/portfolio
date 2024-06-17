/*
States:
- 0 - Building
- 1 - Completed and in production
- 2 - Completed
*/

const projects = [
  {
    name: "white---noise",
    description:
      "Search for albums and artists. See the tracklist and play some previews. Used Spotify API.",
    state: 0,
    built_with: ["Astro", "Api", "Web"],
    url: "https://white-noise.vercel.app/",
    image: "white---noise.png",
    github: "https://github.com/xxixiio/white---noise",
  },
  {
    name: "Kuma",
    description:
      "Verified Discord bot. Multipurpose bot including fun, interaction, administration commands... Available in English and Spanish. Stopped its support on June 2023.",
    state: 2,
    built_with: ["Node.js", "Discord.js", "Bot"],
    url: null,
    image: "kuma.png",
    github: "https://github.com/xxixiio/kuma",
  },
  {
    name: "Waves Festival",
    description:
      "Concept webpage for a music festival.",
    state: 1,
    built_with: ["Astro"],
    url: "https://xxixiio.github.io/waves-festival/",
    image: "waves-festival.png",
    github: "https://github.com/xxixiio/waves-festival",
  },
];

export default projects;
