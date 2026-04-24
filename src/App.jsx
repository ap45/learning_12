import { useState } from "react";

const pages = [
  {
    eyebrow: "Welcome",
    title: "Hey Medh❤️",
    body:
      "This little website is only for you, because I know I hurt your feelings and I wanted to say sorry properly. No drama, no pressure, just me trying to explain myself better and make you smile a little",
    button: "Read My Apology",
    scene: "intro",
  },
  {
    eyebrow: "Page 1",
    title: "I messed up",
    body:
      "I said something careless, and I understand why it hurt you. You deserved reassurance, not confusion. I am really sorry for making you feel compared, uncomfortable, or less special when that is the opposite of what you are to me. Full Popatlal-level mistake from my side.",
    button: "Next",
    scene: "sorry",
  },
  {
    eyebrow: "Page 2",
    title: "What I actually meant",
    body:
      "The past is only a memory. It happened, but it does not define what matters now. You are my present, and the one who matters to me in this moment. My heart is with you now, and I should have made that crystal clear. With you, I smile and overthink but its with you, it's more like a Splitsvilla on it's own.",
    button: "Next",
    scene: "promise",
  },
  {
    eyebrow: "Page 3",
    title: "Why you matter to me",
    list: [
      "Your smile is honestly way too beautiful and it fixes my mood so fast.",
      "You are emotional in the softest, realest way, and that makes you so precious to me.",
      "You get mad, but jaldi maan bhi jaati ho, and that little sweetness melts me.",
      "I can roast you, you roast me back, and somehow that makes us even more fun together.",
      "Your sense of humor is completely crack, and that full chaos is exactly why I like being with you so much.",
      "I like the little things that make you, you. No heavy promises, just honestly: I like you, and I like what we are becoming.",
    ],
    button: "One More Thing",
    scene: "reasons",
  },
  {
    eyebrow: "Page 4",
    title: "A song for you",
    body:
      "I picked this because it says the soft part better than I can. If autoplay does not start, just tap play once for me.",
    songTitle: "Tum Se Hi - Jab We Met",
    scene: "song",
  },
];

function SceneArt({ scene }) {
  if (scene === "sorry") {
    return (
      <div className="scene scene-sorry" aria-hidden="true">
        <div className="sparkle sparkle-one" />
        <div className="sparkle sparkle-two" />
        <div className="teddy teddy-small teddy-sad">
          <span className="ear ear-left" />
          <span className="ear ear-right" />
          <span className="face">
            <span className="eye eye-left" />
            <span className="eye eye-right" />
            <span className="nose" />
            <span className="mouth mouth-sad" />
            <span className="tear" />
          </span>
        </div>
        <div className="sorry-note">I am sorry</div>
      </div>
    );
  }

  if (scene === "promise") {
    return (
      <div className="scene scene-promise" aria-hidden="true">
        <div className="moon" />
        <div className="teddy teddy-left teddy-blush">
          <span className="ear ear-left" />
          <span className="ear ear-right" />
          <span className="face">
            <span className="eye eye-left" />
            <span className="eye eye-right" />
            <span className="nose" />
            <span className="mouth mouth-smile" />
            <span className="blush blush-left" />
            <span className="blush blush-right" />
          </span>
          <span className="arm arm-left" />
          <span className="arm arm-right" />
        </div>
        <div className="promise-ribbon">you matter now</div>
        <div className="teddy teddy-right teddy-rose">
          <span className="ear ear-left" />
          <span className="ear ear-right" />
          <span className="face">
            <span className="eye eye-left" />
            <span className="eye eye-right" />
            <span className="nose" />
            <span className="mouth mouth-smile" />
          </span>
          <span className="arm arm-left" />
          <span className="arm arm-right" />
          <span className="rose" />
        </div>
      </div>
    );
  }

  if (scene === "reasons") {
    return (
      <div className="scene scene-reasons" aria-hidden="true">
        <div className="star star-one" />
        <div className="star star-two" />
        <div className="star star-three" />
        <div className="teddy teddy-center teddy-crown">
          <span className="ear ear-left" />
          <span className="ear ear-right" />
          <span className="face">
            <span className="eye eye-left" />
            <span className="eye eye-right" />
            <span className="nose" />
            <span className="mouth mouth-smile" />
            <span className="blush blush-left" />
            <span className="blush blush-right" />
          </span>
          <span className="crown" />
          <span className="arm arm-left" />
          <span className="arm arm-right" />
        </div>
        <div className="mini-heart mini-heart-one" />
        <div className="mini-heart mini-heart-two" />
      </div>
    );
  }

  if (scene === "song") {
    return (
      <div className="scene scene-song" aria-hidden="true">
        <div className="music-note note-one">♪</div>
        <div className="music-note note-two">♫</div>
        <div className="teddy teddy-left teddy-headphones">
          <span className="ear ear-left" />
          <span className="ear ear-right" />
          <span className="headband" />
          <span className="headphone headphone-left" />
          <span className="headphone headphone-right" />
          <span className="face">
            <span className="eye eye-left" />
            <span className="eye eye-right" />
            <span className="nose" />
            <span className="mouth mouth-smile" />
          </span>
          <span className="arm arm-left" />
          <span className="arm arm-right" />
        </div>
        <div className="cassette">Tum Se Hi</div>
      </div>
    );
  }

  return (
    <div className="scene scene-intro" aria-hidden="true">
      <div className="cloud cloud-left" />
      <div className="cloud cloud-right" />
      <div className="teddy teddy-left">
        <span className="ear ear-left" />
        <span className="ear ear-right" />
        <span className="face">
          <span className="eye eye-left" />
          <span className="eye eye-right" />
          <span className="nose" />
          <span className="mouth mouth-smile" />
        </span>
        <span className="arm arm-left" />
        <span className="arm arm-right" />
      </div>
      <div className="heart-bubble">love</div>
      <div className="teddy teddy-right">
        <span className="ear ear-left" />
        <span className="ear ear-right" />
        <span className="face">
          <span className="eye eye-left" />
          <span className="eye eye-right" />
          <span className="nose" />
          <span className="mouth mouth-smile" />
        </span>
        <span className="arm arm-left" />
        <span className="arm arm-right" />
      </div>
    </div>
  );
}

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const page = pages[pageIndex];
  const isLastPage = pageIndex === pages.length - 1;

  return (
    <main className="app-shell">
      <div className="floating floating-one" />
      <div className="floating floating-two" />
      <div className="floating floating-three" />

      <section className="card">
        <div className="progress">
          {pages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index <= pageIndex ? "active" : ""}`}
            />
          ))}
        </div>

        <SceneArt scene={page.scene} />

        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>

        {page.body ? <p className="body-text">{page.body}</p> : null}

        {page.list ? (
          <ul className="reason-list">
            {page.list.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        ) : null}

        {page.songTitle ? (
          <div className="song-card">
            <p className="song-label">{page.songTitle}</p>
            <div className="video-wrap">
              <iframe
                src="https://www.youtube-nocookie.com/embed/mt9xg0mmt28?autoplay=1&rel=0&playsinline=1"
                title="A song for you"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              className="song-link"
              href="https://www.youtube.com/watch?v=mt9xg0mmt28"
              target="_blank"
              rel="noreferrer"
            >
              If the player does not load, tap here to open the song on YouTube
            </a>
          </div>
        ) : null}

        <div className="actions">
          {pageIndex > 0 ? (
            <button
              type="button"
              className="secondary-button"
              onClick={() => setPageIndex((current) => current - 1)}
            >
              Back
            </button>
          ) : null}

          {!isLastPage ? (
            <button
              type="button"
              className="primary-button"
              onClick={() => setPageIndex((current) => current + 1)}
            >
              {page.button}
            </button>
          ) : (
            <button
              type="button"
              className="primary-button"
              onClick={() => setPageIndex(0)}
            >
              Smile, coz you are amazing!
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
