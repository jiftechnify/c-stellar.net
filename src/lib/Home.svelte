<script lang="ts">
  import IdentityCard, { type IdCardProps } from "./IdentityCard.svelte";

  import aegis from "../assets/aegis.webp";
  import leafDark from "../assets/leaf_dark.webp";
  import leafCastella from "../assets/leaf_castella.webp";

  import StyledIcon from "./StyledIcon.svelte";
  import IconMingcuteXLine from "~icons/mingcute/social-x-line";
  import IconMingcuteBluesky from "~icons/mingcute/bluesky-social-fill";
  import IconFeGithubAlt from "~icons/fe/github-alt";
  import IconNotoKey from "~icons/noto/key";
  import IconMdiGithub from "~icons/mdi/github";
  import IconNostr from "~icons/custom/nostr";
  import IconConcrnt from "~icons/custom/concrnt";

  const bioItems = [
    "🇯🇵 Japanese",
    "👨‍💻 Full-stack™ SWE",
    "🥁 Amateur Percussionist",
    "🎹 Rhythm Game Mania",
    "🎒 Travel Lover",
  ];

  const identities: IdCardProps[] = [
    {
      service: {
        name: "X",
        icon: {
          icon: IconMingcuteXLine,
          color: "#000",
        },
      },
      idLink: { text: "@cstl_fy", url: "https://x.com/cstl_fy" },
      avatar: aegis,
      bgColor: {
        type: "hue",
        hue: 203,
      },
    },
    {
      service: {
        name: "Nostr",
        icon: {
          icon: IconNostr,
          color: "hsl(265, 100%, 50%)",
        },
      },
      idLink: [
        {
          text: "jiftechnify@c-stellar.net",
          textStyle: "nip-05",
          url: "https://nostter.app/jiftechnify@c-stellar.net",
        },
        {
          text: "npub168ghgug469n4r2tuyw05dmqhqv5jcwm7nxytn67afmz8qkc4a4zqsu2dlc",
          textStyle: "bech32",
          url: "https://nostter.app/npub168ghgug469n4r2tuyw05dmqhqv5jcwm7nxytn67afmz8qkc4a4zqsu2dlc",
        },
      ],

      avatar: leafCastella,
      bgColor: {
        type: "hue",
        hue: 265,
      },
      qrCode: {
        data: "npub168ghgug469n4r2tuyw05dmqhqv5jcwm7nxytn67afmz8qkc4a4zqsu2dlc",
        caption: "Nostr Public Key",
      },
    },
    {
      service: {
        name: "Bluesky",
        icon: {
          icon: IconMingcuteBluesky,
          color: "#1185FE",
        },
      },
      idLink: [
        {
          text: "@c-stellar.net",
          url: "https://bsky.app/profile/c-stellar.net",
        },
        {
          text: "did:plc:p2czmqffycnlvftrikeuafvz",
          textStyle: "did-plc",
          url: "https://bsky.app/profile/did:plc:p2czmqffycnlvftrikeuafvz",
        },
      ],
      avatar: leafDark,
      bgColor: {
        type: "hue",
        hue: 211,
      },
    },
    {
      service: {
        name: "Concrnt",
        icon: {
          icon: IconConcrnt,
        },
      },
      idLink: [
        {
          text: "@c-stellar.net",
          url: "https://concrnt.world/c-stellar.net",
        },
        {
          text: "con107uc3dgc99t2htuw2u33d5ra7cu5wjqj8tg8dj",
          textStyle: "bech32",
          url: "https://concrnt.world/con107uc3dgc99t2htuw2u33d5ra7cu5wjqj8tg8dj",
        },
      ],
      avatar: leafCastella,
      bgColor: {
        type: "hue",
        hue: 191,
      },
    },
    {
      service: {
        name: "GitHub",
        icon: {
          icon: IconFeGithubAlt,
          color: "#333",
        },
      },
      idLink: { text: "jiftechnify", url: "https://github.com/jiftechnify" },
      avatar: leafDark,
      bgColor: {
        type: "black",
      },
    },
    {
      service: {
        name: "OpenPGP",
        icon: {
          icon: IconNotoKey,
        },
      },
      idLink: {
        text: "2B5188D6E094B91FF21FCE20009040DA8C4F544C",
        textStyle: "openpgp-fpr",
        url: "https://keyoxide.org/2B5188D6E094B91FF21FCE20009040DA8C4F544C",
      },
      avatar: leafDark,
      bgColor: {
        type: "hue",
        hue: 50,
      },
      qrCode: {
        data: "openpgp4fpr:2B5188D6E094B91FF21FCE20009040DA8C4F544C",
        caption: "OpenPGP Key Fingerprint",
      },
    },
  ];
</script>

<main>
  <img class="hero-avatar" src={leafDark} alt="jiftechnify's avatar" />
  <h1 class="title">
    jiftechnify<span class="title-domain"
      ><span class="title-atmark">&#8203;@&#8203;</span>c-stellar.net</span
    >
  </h1>
  <p class="bio">
    {#each bioItems as bioItem, i}
      <span class="bio-item">
        {i === bioItems.length - 1 ? bioItem : `${bioItem}, `}
      </span>
    {/each}
  </p>
  <div class="contents">
    <div class="links">
      <div class="link-group">
        <h2 class="link-group-title">🪪 Identities on the Internet</h2>
        <div class="link-cards">
          {#each identities as ident (ident.service.name)}
            <IdentityCard {...ident} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</main>
<footer>
  <div class="footer-content">
    <span class="copyright"> © jiftechnify </span>
    <a
      href="https://github.com/jiftechnify/c-stellar.net"
      aria-label="GitHub repository for this site"
    >
      <StyledIcon icon={IconMdiGithub} size="1.1rem" />
    </a>
  </div>
</footer>

<style lang="scss">
  :root {
    font-size: 0.75rem;
    font-size: clamp(0.75rem, 0.539vw + 0.615rem, 1rem);
  }

  :global(body) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: min(87.5vw, 1000px);
    padding-block: 3rem;
  }

  img.hero-avatar {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 1.1;
    margin: 0;
    padding-block: 0.75rem;
  }
  .title-domain {
    display: inline-block;
  }
  .title-atmark {
    color: #404a52;
  }
  p.bio {
    margin: 0;
    font-size: 1rem;
  }
  .bio-item {
    display: inline-block;
    white-space: pre;
  }
  .contents {
    margin-top: 2rem;
    text-align: start;
    width: 100%;
  }
  .link-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .link-group-title {
    margin: 0;
  }
  .link-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    gap: 0.8rem;
  }

  footer {
    position: sticky;
    top: 100vh;
    padding-bottom: 1rem;
    color: #666;

    .footer-content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    .copyright {
      font-size: 0.9rem;
    }

    a {
      display: flex;
      text-decoration: none;
      color: #666;
    }
  }
</style>
