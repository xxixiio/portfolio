import React, { useState, useEffect, useRef } from "react";
import "./NowPlaying.css";
import { getNowPlaying } from "../../../utils/spotify/nowPlaying.js";
import ColorThief from "colorthief";

function NowPlaying({ className }) {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const response = await fetch("/api/get-now-playing");
      const data = await response.json();

      const titleMaxLength = 25;
      const artistsMaxLength = 50;

      if (data == "Currently Not Playing") {
        setBgColor("#1f1f1f80");
        setNowPlaying(null);
      } else {
        if (data && data.title.length > titleMaxLength) {
          data.title = data.title.slice(0, titleMaxLength) + "...";
        }
        if (data && data.artist.length > artistsMaxLength) {
          data.artist = data.artist.slice(0, artistsMaxLength) + "...";
        }

        setNowPlaying(data);
      }
    };

    fetchNowPlaying();

    const intervalId = setInterval(() => {
      fetchNowPlaying();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (nowPlaying && imgRef.current) {
      imgRef.current.onload = () => {
        const colorThief = new ColorThief();
        const img = imgRef.current;
        let color = colorThief.getColor(img);
        color = color.map((value) => Math.floor(value * 0.85));
        setBgColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
      };
    }
  }, [nowPlaying]);

  return (
    <a
      href={nowPlaying ? nowPlaying.songUrl : "https://open.spotify.com/"}
      target="_blank"
      className={`${className} bento-spotify__container`}
      style={{ backgroundColor: bgColor }}
    >
      {nowPlaying ? (
        <div>
          <img
            src={nowPlaying.albumImageUrl || "/img/default-music-cover.webp"}
            alt={nowPlaying.title + " cover"}
            className="bento-spotify__image"
            ref={imgRef}
            crossOrigin="anonymous"
          />
          <p className="bento-spotify__title">{nowPlaying.title}</p>
          <p className="bento-spotify__artists">{nowPlaying.artist}</p>
        </div>
      ) : (
        <div>
          <img className="bento-spotify__logo" src="/spotify.svg" alt="spotify logo" />
          <p>Not online</p>
        </div>
      )}
    </a>
  );
}

export default NowPlaying;
