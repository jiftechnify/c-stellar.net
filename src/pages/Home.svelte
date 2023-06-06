<script lang="ts">
  import LinkCard, { type IdCardProps } from "../lib/LinkCard.svelte";

  import aegis from "../assets/aegis.jpg";
  import leafBlack from "../assets/leaf_black.webp";
  import leafCastella from "../assets/leaf_castella.webp";

  const bioItems = [
    "🇯🇵Japanese",
    "👨‍💻Full-stack™ SWE",
    "🥁Amature Percussionist",
    "🎹Rhythm Game Mania",
    "🎒Travel Lover",
  ];

  const identites: IdCardProps[] = [
    {
      service: {
        name: "Twitter",
        icon: {
          name: "brandico:twitter-bird",
          color: "#1da1f2",
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
      idLink: 
        {
          text: "jiftechnify@c-stellar.net",
          textStyle: "nip-05",
          url: "https://nostx.shino3.net/npub168ghgug469n4r2tuyw05dmqhqv5jcwm7nxytn67afmz8qkc4a4zqsu2dlc",
        },
        
      avater: leafCastella,
      bgColor: {
        type: "hue",
        hue: 275,
      },
      qrCode: {
        data: "nostr:npub168ghgug469n4r2tuyw05dmqhqv5jcwm7nxytn67afmz8qkc4a4zqsu2dlc",
        caption: "Nostr URI to the profile",
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
          url: "https://staging.bsky.app/profile/did:plc:p2czmqffycnlvftrikeuafvz",
        },
        {
          text: "did:plc:p2czmqffycnlvftrikeuafvz",
          textStyle: "did-plc",
          url: "https://staging.bsky.app/profile/did:plc:p2czmqffycnlvftrikeuafvz",
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
  <h1 class="header">
    jiftechnify<span class="header-domain"
      ><span class="atmark">@</span>c-stellar.net</span
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
          {#each identites as ident (ident.service.name)}
            <LinkCard {...ident} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    max-width: 900px;
    text-align: center;
    margin: 0 auto;
    padding: 2.5em 1.5em 1em 1.5em;
  }

  .header {
    font-size: 3.2em;
    line-height: 1.1;
    margin: 0;
  }
  .header-domain {
    display: inline-block;
  }
  .atmark {
    color: #404a52;
  }
  .large-icon {
    width: 12.5em;
    height: 12.5em;
    border-radius: 50%;
  }
  .bio {
    font-size: 1em;
  }
  .bio-item {
    display: inline-block;
    white-space: pre;
  }
  .links {
    text-align: start;
  }
  .link-group {
    margin-top: 1.5em;
  }
  .link-group-title {
    margin: 0;
  }
  .link-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75em;
  }

  @media screen and (max-width: 900px) {
    main {
      max-width: 600px;
      font-size: 14px;
    }
    .link-cards {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 599px) {
    main {
      max-width: 400px;
    }
  }
</style>
