import { getAccessToken } from "./getAccessToken.js";

const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken(
      client_id,
      client_secret,
      refresh_token
    );

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status > 400) {
      throw new Error("Unable to Fetch Song");
    } 
    // else if (response.status === 204) {
    //   throw new Error("Currently Not Playing");
    // }

    const song = await response.json();
    const albumImageUrl = !song.item.is_local ? song.item.album.images[0].url : null;
    const artist = song.item.artists.map((artist) => artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = !song.item.is_local ? song.item.external_urls.spotify : null;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = !song.item.is_local ? song.item.album.artists[0].external_urls.spotify : null;

    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl,
    };
  } catch (error) {
    //console.error("Error fetching currently playing song: ", error);
    return; // error.message.toString();
  }
};
