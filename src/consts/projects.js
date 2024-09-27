const projects = [
  {
    name: "white---noise",
    description:
      "Search for albums and artists. See the tracklist and play some previews. Used Spotify API.",
    state: 0,
    built_with: ["Astro", "Api", "Web"],
    url: "https://white-noise.vercel.app/",
    image: "white---noise.jpg",
    github: "https://github.com/xxixiio/white---noise",
    translation: {
      es: {
        description:
          "Buscar álbumes y artistas. Ver la lista de canciones y reproducir algunas vistas previas. Utilizado API de Spotify.",
      },
    },
  },
  {
    name: "Waves Festival",
    description: "Concept webpage for a music festival. Made with Astro.",
    state: 2,
    built_with: ["Astro", "Web"],
    url: "https://xxixiio.github.io/waves-festival/",
    image: "waves-festival.jpg",
    github: "https://github.com/xxixiio/waves-festival",
    translation: {
      es: {
        description:
          "Página web conceptual para un festival de música. Hecha con Astro.",
      },
    },
  },
  {
    name: "Fast Food Restaurant",
    description:
      "Fast food restaurant web page, done with no frameworks.",
    state: 2,
    built_with: ["Web"],
    url: "https://xxixiio.github.io/burguers-web/",
    image: "agency-lp.jpg",
    github: "https://github.com/xxixiio/burguers-web",
    translation: {
      es: {
        description:
          "Página web de restaurante de comida rápida, hecha sin ningun framework.",
      },
    },
  },
  {
    name: "Kuma",
    description:
      "Verified Discord bot. Multipurpose bot including fun, interaction, administration commands, and more. Stopped its support on June 2023.",
    state: 3,
    built_with: ["Node.js", "Discord.js", "Bot"],
    url: null,
    image: "kuma.jpg",
    github: "https://github.com/xxixiio/kuma",
    translation: {
      es: {
        description:
          "Bot verificado de Discord. Bot multipropósito que incluye comandos de diversión, interacción, administración y más. Se dejó de dar soporte en junio de 2023.",
      },
    },
  },
  {
    name: "wtxted",
    description: "Terminal based text editor for Unix-like systems.",
    state: 1,
    built_with: ["Rust"],
    url: null,
    image: "wtxted.jpg",
    github: "https://github.com/xxixiio/wtxted",
    translation: {
      es: {
        description:
          "Editor de texto basado en terminal para sistemas tipo Unix.",
      },
    },
  },
];

export default projects;
