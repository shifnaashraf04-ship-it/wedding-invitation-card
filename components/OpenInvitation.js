"use client";

import { useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/wedding-song.mp3";

export default function OpenInvitation({ children }) {
  const audioRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const open = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.6;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }

    setOpened(true);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />

      {opened && (
        <button
          type="button"
          className="music-toggle"
          onClick={toggleMusic}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? "❚❚" : "♪"}
        </button>
      )}

      {!opened && (
        <div className="gate">
          <div className="gate-inner">
            <p className="gate-small">The Wedding Of</p>

            <div className="gate-names">
              Rifa
              <div className="gate-amp">&amp;</div>
              Salam
            </div>

            <div className="gate-line" />

            <p className="gate-date">22 · 11 · 2026</p>

            <button type="button" className="gate-btn" onClick={open}>
              Open Invitation
            </button>

            <p className="gate-hint">Rifa &amp; Salam request the pleasure of your company</p>
          </div>
        </div>
      )}

      <div className={`invitation${opened ? " invitation-open" : ""}`}>
        {children}
      </div>
    </>
  );
}
