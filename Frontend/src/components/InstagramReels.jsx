import { Camera } from "lucide-react";

const profileUrl = "https://www.instagram.com/mgs_water_tank_cleaning/";
const reels = [
  { id: "DeLyDfKCFiJ", label: "MGS Care cleaning clip 1" },
  { id: "DeI12asiy8u", label: "MGS Care cleaning clip 2" },
  { id: "DeFCpKVCCwm", label: "MGS Care cleaning clip 3" },
  { id: "DGqJCOjIUT-", label: "MGS Care cleaning clip 4" },
];

export default function InstagramReels() {
  return (
    <section className="instagram-section" id="instagram">
      <div className="site-container">
        <div className="instagram-heading">
          <span className="section-kicker">FOLLOW OUR WORK</span>
          <h2>MGS Care on Instagram</h2>
          <p>Watch our cleaning team at work and see more from MGS Care.</p>
          <a href={profileUrl} target="_blank" rel="noreferrer" className="instagram-profile-link">
            <Camera size={18} />
            @mgs_water_tank_cleaning
          </a>
        </div>

        <div className="instagram-grid">
          {reels.map((reel) => (
            <article className="instagram-reel-card" key={reel.id}>
              <iframe
                title={reel.label}
                src={`https://www.instagram.com/reel/${reel.id}/embed`}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
