<script context="module" lang="ts">
  import type { ServiceProps } from "./ServiceLabel.svelte";

  type CardBgColor =
    | {
        type: "hue";
        hue: number;
      }
    | {
        type: "black";
      };

  type IdLink = {
    url: string;
    text: string;
    textStyle?: "nip-05" | "didplc" | "openpgp-fpr";
  };

  type QrCodeProps = {
    data: string;
    caption: string;
  };

  export type IdCardProps = {
    service: ServiceProps;
    idLink: IdLink | IdLink[];
    avater: string;
    bgColor: CardBgColor;
    qrCode?: QrCodeProps;
  };
</script>

<script lang="ts">
  import ServiceLabel from "./ServiceLabel.svelte";

  export let service: ServiceProps;
  export let idLink: IdLink | IdLink[];
  export let avater: string;
  export let bgColor: CardBgColor;
  export let qrCode: QrCodeProps | undefined = undefined;

  const calcColor = (bgColor: CardBgColor) => {
    switch (bgColor.type) {
      case "hue":
        return { hue: bgColor.hue, sat: 60 };
      case "black":
        return { hue: 0, sat: 0 };
    }
  };
  $: bgColorHS = calcColor(bgColor);

  let idLinkIdx = 0;
  $: currIdLink = Array.isArray(idLink) ? idLink[idLinkIdx] : idLink;
  const handleTurnText = () => {
    if (Array.isArray(idLink)) {
      idLinkIdx = (idLinkIdx + 1) % idLink.length;
    }
  };
</script>

<div
  class="card"
  style:--bg-hue={bgColorHS.hue}
  style:--bg-sat="{bgColorHS.sat}%"
>
  <!-- svelte-ignore a11y-missing-content -->
  <a href={currIdLink.url} target="_blank" rel="me noopener noreferrer" />
  <div class="link-inner">
    <div class="link-header">
      <div class="service">
        <ServiceLabel {...service} />
      </div>
      <div class="buttons">
        {#if Array.isArray(idLink)}
          <button on:click={handleTurnText}>toggle text</button>
        {/if}
      </div>
    </div>
    <div class="link-main">
      <div class="avater">
        <img class="avater-img" src={avater} alt="avater" />
      </div>
      <div class="identity">
        {currIdLink.text}
      </div>
    </div>
  </div>
</div>

<style>
  .card {
    position: relative;
    padding: 1em 1.25em;
    border-radius: 6px;
    background-color: hsl(var(--bg-hue), var(--bg-sat), 92%);
    box-shadow: 1px 1px 3px #9999;
    transition: background-color 0.2s, box-shadow 0.2s;
  }
  .card:hover {
    box-shadow: 2px 2px 6px #9999;
    background-color: hsl(var(--bg-hue), var(--bg-sat), 86%);
  }

  .card > a {
    position: absolute;
    inset: 0;
  }

  .link-inner {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .link-header {
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .service {
  }
  .buttons {
    z-index: 1;
  }

  .link-main {
    display: grid;
    grid-template-areas: 'avater identity';
    grid-template-columns: 3em minmax(0, 1fr);
    column-gap: 0.75em;
    height: 3em;
  }

  .avater {
    grid-area: avater;
  }
  .avater-img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 1px 1px 3px #9999;
  }

  .identity {
    grid-area: identity;
    align-self: center;
    font-size: 1.8em;
    font-weight: bold;
  }
</style>
