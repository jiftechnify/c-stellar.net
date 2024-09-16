<script lang="ts">
  import IdentityCard, { type IdCardProps } from "../lib/IdentityCard.svelte";

  import Icon from "@iconify/svelte";
  import aegis from "../assets/aegis.jpg";
  import leafBlack from "../assets/leaf_black.webp";
  import leafCastella from "../assets/leaf_castella.webp";

  const bioItems = [
    "🇯🇵Japanese",
    "👨‍💻Full-stack™ SWE",
    "🥁Amateur Percussionist",
    "🎹Rhythm Game Mania",
    "🎒Travel Lover",
  ];

  const identities: IdCardProps[] = [
    {
      service: {
        name: "X",
        icon: {
          name: "simple-icons:x",
          color: "#000",
        },
      },
      idLink: { text: "@cstl_fy", url: "https://twitter.com/cstl_fy" },
      avater: aegis,
      bgColor: {
        type: "hue",
        hue: 203,
      },
    },
    {
      service: {
        name: "Nostr",
        icon: "noto:dodo",
      },
      idLink: {
        text: "jiftechnify@c-stellar.net",
        textStyle: "nip-05",
        url: "https://nostr.com/npub168ghgug469n4r2tuyw05dmqhqv5jcwm7nxytn67afmz8qkc4a4zqsu2dlc",
      },

      avater: leafCastella,
      bgColor: {
        type: "hue",
        hue: 275,
      },
      qrCode: {
        data: "npub168ghgug469n4r2tuyw05dmqhqv5jcwm7nxytn67afmz8qkc4a4zqsu2dlc",
        caption: "Nostr Public Key",
      },
    },
    {
      service: {
        name: "Bluesky",
        icon: "noto:diamond-with-a-dot",
      },
      idLink: [
        {
          text: "@c-stellar.net",
          url: "https://bsky.app/profile/did:plc:p2czmqffycnlvftrikeuafvz",
        },
        {
          text: "did:plc:p2czmqffycnlvftrikeuafvz",
          textStyle: "did-plc",
          url: "https://bsky.app/profile/did:plc:p2czmqffycnlvftrikeuafvz",
        },
      ],
      avater: leafBlack,
      bgColor: {
        type: "hue",
        hue: 185,
      },
    },
    {
      service: {
        name: "Misskey.io",
        icon: "skill-icons:misskey-light",
      },
      idLink: { text: "@jiftechnify", url: "https://misskey.io/@jiftechnify" },

      avater: leafBlack,
      bgColor: {
        type: "hue",
        hue: 75,
      },
    },
    {
      service: {
        name: "GitHub",
        icon: {
          name: "brandico:github",
          color: "#333",
        },
      },
      idLink: { text: "jiftechnify", url: "https://github.com/jiftechnify" },
      avater: leafBlack,
      bgColor: {
        type: "black",
      },
    },
    {
      service: {
        name: "OpenPGP",
        icon: "noto:key",
      },
      idLink: {
        text: "2B5188D6E094B91FF21FCE20009040DA8C4F544C",
        textStyle: "openpgp-fpr",
        url: "https://keyoxide.org/2B5188D6E094B91FF21FCE20009040DA8C4F544C",
      },
      avater: leafBlack,
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
  <img class="large-icon" src={leafBlack} alt="icon" />
  <h1 class="title">
    jiftechnify<span class="title-domain"
      ><span class="title-atmark">@</span>c-stellar.net</span
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
    <a href="https://github.com/jiftechnify/c-stellar.net">
      <Icon icon="mdi:github" width="1.1rem" height="1.1rem" />
    </a>
  </div>
</footer>

<style lang="scss">
  :root {
    font-size: 16px;
  }

  main {
    width: min(90%, 1000px);
    text-align: center;
    margin: 0 auto;
    padding-top: 2rem;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 1.1;
    margin: 0;
  }

  img.large-icon {
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 50%;
  }
  .title-domain {
    display: inline-block;
  }
  .title-atmark {
    color: #404a52;
  }
  p.bio {
    font-size: 1rem;
  }
  .bio-item {
    display: inline-block;
    white-space: pre;
  }
  .links {
    text-align: start;
  }
  .link-group {
    margin-top: 1rem;
  }
  .link-group-title {
    margin: 0;
  }
  .link-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  footer {
    position: sticky;
    top: 100vh;
    padding: 1rem;
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
      all: unset;
      cursor: pointer;
      display: flex;
    }
  }

  @media screen and (max-width: 1080px) {
    :root {
      font-size: 14px;
    }

    main {
      width: min(90%, 560px);
    }
    .link-cards {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 599px) {
    :root {
      font-size: 12px;
    }
    main {
      width: min(90%, 400px);
    }
  }
</style>
