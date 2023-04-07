<script lang="ts">
  import LinkCard from "../lib/LinkCard.svelte";
  import ServiceLabel from "../lib/ServiceLabel.svelte";

  import aegis from "../assets/aegis.jpg";
  import leafBlack from "../assets/leaf_black.webp";
  import leafCastella from "../assets/leaf_castella.webp";
</script>

<main>
  <img class="large-icon" src={leafBlack} alt="icon" />
  <h1 class="header">jiftechnify<span class="atmark">@</span>c-stellar.net</h1>
  <p>
    🇯🇵Japanese, 👨‍💻Full-stack™ SWE, 🥁Amature Percussionist, 🎹Rhythm Game Mania
  </p>
  <div class="contents">
    <div class="links">
      <div class="link-group">
        <h2 class="link-group-title">🪪 Identities on the Internet</h2>
        <div class="link-cards">
          <LinkCard
            href="https://twitter.com/cstl_fy"
            iconSrc={aegis}
            colorType="hue"
            hue={203}
          >
            <ServiceLabel
              slot="service"
              icon="brandico:twitter-bird"
              iconColor="#1da1f2"
              name="Twitter"
            />
            <span slot="identity">@cstl_fy</span>
          </LinkCard>
          <LinkCard
            href="https://nostx.shino3.net/npub168ghgug469n4r2tuyw05dmqhqv5jcwm7nxytn67afmz8qkc4a4zqsu2dlc"
            iconSrc={leafCastella}
            colorType="hue"
            hue={275}
          >
            <ServiceLabel slot="service" icon="noto:dodo" name="Nostr" />
            <span slot="identity">
              <span>jiftechnify</span><span class="nip05-domain"
                >@c-stellar.net</span
              >
            </span>
          </LinkCard>
          <LinkCard
            href="https://staging.bsky.app/profile/c-stellar.net"
            iconSrc={leafBlack}
            colorType="hue"
            hue={185}
          >
            <ServiceLabel
              slot="service"
              icon="noto:diamond-with-a-dot"
              name="Bluesky"
            />
            <span slot="identity">@c-stellar.net</span>
          </LinkCard>
          <LinkCard
            href="https://misskey.io/@jiftechnify"
            iconSrc={leafBlack}
            colorType="hue"
            hue={75}
          >
            <ServiceLabel
              slot="service"
              icon="skill-icons:misskey-light"
              name="Misskey.io"
            />
            <span slot="identity">@jiftechnify</span>
          </LinkCard>
          <LinkCard href="https://github.com/jiftechnify" iconSrc={leafBlack}>
            <ServiceLabel
              slot="service"
              icon="brandico:github"
              iconColor="#333"
              name="GitHub"
            />
            <span slot="identity">jiftechnify</span>
          </LinkCard>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    width: 1000px;
    text-align: center;
    margin: 0 auto;
  }
  .header {
    font-size: 3.2em;
    line-height: 1.1;
    margin: 0;
  }
  .atmark {
    color: #404a52;
  }
  .large-icon {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  .links {
    text-align: start;
  }
  .link-group {
    margin-top: 24px;
  }
  .link-group-title {
    margin: 0;
  }
  .link-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .nip05-domain {
    font-size: 20px;
    font-weight: normal;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
