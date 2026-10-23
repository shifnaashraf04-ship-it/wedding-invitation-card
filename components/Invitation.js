import Countdown from "@/components/Countdown";

const WEDDING_DATE = "2026-11-22T11:00:00";
const WEDDING_TIME = "11:00 AM – 3:00 PM";
const VENUE_NAME = "Alif Auditorium";
const VENUE_ADDRESS =
  "Kachinikkad - Vellila Road, Perinthalmanna, Malappuram, Kerala 676507";
const GOOGLE_MAPS_URL = "https://share.google/1obZSud06JWezScTD";
const RIFA_PHONE = "+919207080938";
const RIFA_PHONE_DISPLAY = "+91 92070 80938";
const SALAM_PHONE = "+919645233620";
const SALAM_PHONE_DISPLAY = "+91 96452 33620";
const EMAIL = "riffaahk@gmail.com";

function formatDate(value) {
  const date = new Date(value);
  return [
    String(date.getDate()).padStart(2, "0"),
    String(date.getMonth() + 1).padStart(2, "0"),
    date.getFullYear(),
  ].join(" · ");
}

export default function Invitation({ topName }) {
  return (
    <>
      <div className="top-names">
        Rifa
        <span className="top-names-amp">&amp;</span>
        Salam
      </div>

      <header className="hero" id="home">
        <aside className="side-panel">
          <div className="side-panel-inner">
            <p className="side-small">The Wedding Of</p>

            <div className="side-names">
              Rifa
              <div className="side-amp">&amp;</div>
              Salam
            </div>

            <div className="side-line" />

            <p className="side-note">
              Two hearts
              <br />
              One journey
              <br />
              Forever
            </p>
          </div>
        </aside>

        <div className="hero-main">
          {topName && <p className="hero-guest">Dear {topName},</p>}

          <p className="eyebrow">Together with our families</p>

          <h1>
            Rifa
            <br />
            Salam
          </h1>

          <p className="hero-subtitle">Here begins our forever</p>

          <div className="ornament">──── ♡ ────</div>

          <div className="video-frame">
            <img
              src="/rifa-invitation-card.png"
              alt="Rifa and Salam wedding invitation card"
            />
          </div>

          <p className="video-caption">Our wedding invitation</p>
        </div>
      </header>

      <section className="section date-section" id="date">
        <p className="section-label">Save the date</p>

        <h2 className="date-display">{formatDate(WEDDING_DATE)}</h2>

        <p className="date-time">{WEDDING_TIME}</p>

        <p className="date-caption">Our wedding day</p>

        <Countdown targetDate={WEDDING_DATE} />
      </section>

      <section className="section location-section" id="location">
        <p className="section-label">We can&apos;t wait to see you</p>
        <h2 className="section-title">Our Location</h2>

        <div className="location-card">
          <img
            className="location-image"
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85"
            alt="Elegant wedding venue"
          />

          <div>
            <h3 className="location-name">{VENUE_NAME}</h3>

            <p className="location-address">{VENUE_ADDRESS}</p>

            <a
              className="map-link"
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps ↗
            </a>
          </div>

          <div className="directions">
            <a
              className="directions-button"
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ♧ &nbsp; Get Directions
            </a>

            <p className="directions-note">We look forward to welcoming you</p>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <p className="section-label">With love</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">We would love to hear from you</p>

        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">♡</div>
            <h3>Rifa</h3>
            <p>
              <a href={`tel:${RIFA_PHONE}`}>{RIFA_PHONE_DISPLAY}</a>
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">♡</div>
            <h3>Salam</h3>
            <p>
              <a href={`tel:${SALAM_PHONE}`}>{SALAM_PHONE_DISPLAY}</a>
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉</div>
            <h3>Send Us a Message</h3>
            <p>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        Thank you for being a part of our special day
        <span>        With love, Rifa &amp; Salam ♡</span>
      </footer>
    </>
  );
}
