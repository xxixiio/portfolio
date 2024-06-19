import { getNowPlaying } from "../../utils/spotify/nowPlaying";

export const GET = async ({ params, request }) => {
    const data = await getNowPlaying();
    return new Response(JSON.stringify(data));
};
