import Countdown from "@/components/Countdown";

const WEDDING_DATE = "2026-10-20T10:00:00";
const VENUE_NAME = "Gokulam Resort";
const VENUE_ADDRESS = "Kozhikode, Kerala, India";
const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Gokulam+Resort+Kozhikode";
const PHONE = "+918714714355";
const PHONE_DISPLAY = "+91 87147 14355";
const EMAIL = "shifnaashraf04@gmail.com";

function formatDate(value) {
  const date = new Date(value);
  return [
    String(date.getDate()).padStart(2, "0"),
    String(date.getMonth() + 1).padStart(2, "0"),
    date.getFullYear(),
  ].join(" · ");
}

export default function Invitation({ topName = "Fasil" }) {
  return (
    <>
      <div className="top-names">Hy {topName}</div>

      <header className="hero" id="home">
        <aside className="side-panel">
          <div className="side-panel-inner">
            <p className="side-small">The Wedding Of</p>

            <div className="side-names">
              Shifna
              <div className="side-amp">&amp;</div>
              Navas
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
          <p className="eyebrow">Together with our families</p>

          <h1>
            Shifna weds
            <br />
            Navas
          </h1>

          <p className="hero-subtitle">Here begins our forever</p>

          <div className="ornament">──── ♡ ────</div>

          <div className="video-frame">
            <video autoPlay muted playsInline loop disablePictureInPicture controls={false}>
              <source src="/wedding-video.mp4" type="video/mp4" />
              Your browser does not support this video.
            </video>
          </div>

          <p className="video-caption">Our wedding invitation</p>
        </div>
      </header>

      <section className="section date-section" id="date">
        <p className="section-label">Save the date</p>

        <h2 className="date-display">{formatDate(WEDDING_DATE)}</h2>

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
            <h3>Shifna</h3>
            <p>
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">♡</div>
            <h3>Navas</h3>
            <p>
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
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
        <span>        With love, Shifna &amp; Navas ♡</span>
      </footer>
    </>
  );
}
