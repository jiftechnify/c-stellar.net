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

  export type IdCardProps = {
    service: ServiceProps;
    idLink: IdLink | IdLink[];
    avater: string;
    bgColor: CardBgColor;
    qrCode?: QrCodeProps;
  };
</script>

<script lang="ts">
  import Icon from "@iconify/svelte";
  import { quintOut } from "svelte/easing";
  import { slide } from "svelte/transition";
  import IdCardText, { type IdLink } from "./IdCardText";
  import Modal from "./Modal.svelte";
  import type { QrCodeProps } from "./QrCodeView.svelte";
  import QrCodeView from "./QrCodeView.svelte";
  import ServiceLabel from "./ServiceLabel.svelte";

  export let service: ServiceProps;
  export let idLink: IdLink | IdLink[];
  export let avater: string;
  export let bgColor: CardBgColor;
  export let qrCode: QrCodeProps | undefined = undefined;

  const calcColorHS = (bgColor: CardBgColor) => {
    switch (bgColor.type) {
      case "hue":
        return { hue: bgColor.hue, sat: 60 };
      case "black":
        return { hue: 0, sat: 0 };
    }
  };
  $: bgColorHS = calcColorHS(bgColor);

  let idLinkIdx = 0;
  $: currIdLink = Array.isArray(idLink) ? idLink[idLinkIdx] : idLink;
  const handleToggleIdLink = () => {
    if (Array.isArray(idLink)) {
      idLinkIdx = (idLinkIdx + 1) % idLink.length;
    }
  };

  $: linkTextComponent = (() => {
    if (currIdLink.textStyle === undefined) {
      return IdCardText.Plain;
    }
    switch (currIdLink.textStyle) {
      case "nip-05":
        return IdCardText.Nip05;
      case "did-plc":
        return IdCardText.DidPlc;
      case "openpgp-fpr":
        return IdCardText.OpenpgpFpr;
    }
  })();

  let showModal = false;
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
      <ServiceLabel {...service} />
      <div class="buttons">
        {#if Array.isArray(idLink)}
          <button on:click={handleToggleIdLink}>
            <Icon icon="ci:arrows-reload-01" width="1.2em" height="1.2em" />
          </button>
        {/if}
        {#if qrCode}
          <button
            on:click={() => {
              showModal = true;
            }}
          >
            <Icon
              icon="fluent:qr-code-24-regular"
              width="1.2em"
              height="1.2em"
            />
          </button>
        {/if}
      </div>
    </div>
    <div class="link-main">
      <div class="avater">
        <img class="avater-img" src={avater} alt="avater" />
      </div>
      <div class="link-text">
        {#key currIdLink}
          <div transition:slide={{ duration: 300, easing: quintOut }}>
            <svelte:component
              this={linkTextComponent}
              linkText={currIdLink.text}
            />
          </div>
        {/key}
      </div>
    </div>
  </div>
</div>

{#if qrCode}
  <Modal bind:showModal>
    <QrCodeView {...qrCode} />
  </Modal>
{/if}

<style lang="scss">
  .card {
    position: relative;
    padding: 1em 1.25em;
    border-radius: 6px;
    background-color: hsl(var(--bg-hue), var(--bg-sat), 92%);
    box-shadow: 1px 1px 3px #9999;
    transition:
      background-color 0.2s,
      box-shadow 0.2s;

    &:hover {
      box-shadow: 2px 2px 6px #9999;
      background-color: hsl(var(--bg-hue), var(--bg-sat), 86%);
    }

    > a {
      position: absolute;
      inset: 0;
    }
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

  .buttons {
    z-index: 1;
  }

  .buttons > button {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.08);
    transition: background-color 0.1s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.12);
    }
  }

  .link-main {
    display: grid;
    grid-template-areas: "avater identity";
    grid-template-columns: 3em minmax(0, 1fr);
    column-gap: 0.75em;
    height: 3em;
  }

  .avater {
    grid-area: avater;
    height: 3em;
  }
  .avater-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    border-radius: 50%;
    box-shadow: 1px 1px 3px #9999;
  }

  .link-text {
    grid-area: identity;
    align-self: center;
  }
</style>
