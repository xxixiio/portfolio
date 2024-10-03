const projects = [
  {
    name: "white---noise",
    description:
      "Search for albums and artists. See the tracklist and play some previews. Used Spotify API.",
    state: 0,
    built_with: ["Astro", "Api", "Web"],
    url: "https://white-noise.vercel.app/",
    image: "white---noise.jpg",
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
    image: "fast-food.png",
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
      "Verified Discord bot. Multipurpose bot including fun, interaction, administration commands, and more.",
    state: 3,
    built_with: ["Node.js", "Discord.js", "Bot"],
    url: "https://github.com/xxixiio/kuma",
    image: "kuma.jpg",
    translation: {
      es: {
        description:
          "Bot verificado de Discord. Bot multipropósito que incluye comandos de diversión, interacción, administración y más.",
      },
    },
  },
  {
    name: "wtxted",
    description: "Terminal based text editor for Unix-like systems.",
    state: 1,
    built_with: ["Rust", "CLI"],
    url: "https://github.com/xxixiio/wtxted",
    image: "wtxted.jpg",
    translation: {
      es: {
        description:
          "Editor de texto basado en terminal para sistemas tipo Unix.",
      },
    },
  },
];

export default projects;
