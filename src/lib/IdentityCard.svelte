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
    avatar: string;
    bgColor: CardBgColor;
    qrCode?: QrCodeProps;
  };
</script>

<script lang="ts">
  import { quintOut } from "svelte/easing";
  import { slide } from "svelte/transition";
  import IdCardText, { type IdLink } from "./IdCardText";
  import Modal from "./Modal.svelte";
  import type { QrCodeProps } from "./QrCodeView.svelte";
  import QrCodeView from "./QrCodeView.svelte";
  import ServiceLabel from "./ServiceLabel.svelte";
  import Icon from "./Icon.svelte";

  export let service: ServiceProps;
  export let idLink: IdLink | IdLink[];
  export let avatar: string;
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

  $: idCardTextComponent = (() => {
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
  class="id-card"
  style:--bg-hue={bgColorHS.hue}
  style:--bg-sat="{bgColorHS.sat}%"
>
  <a href={currIdLink.url} target="_blank" rel="me noopener noreferrer"
    >{service.name}</a
  >
  <div class="contents">
    <div class="header">
      <ServiceLabel {...service} />
      <div class="buttons">
        {#if Array.isArray(idLink)}
          <button
            type="button"
            aria-label="show an alternative identity"
            on:click={handleToggleIdLink}
          >
            <Icon icon="ci:arrows-reload-01" size="1.2rem" />
          </button>
        {/if}
        {#if qrCode}
          <button
            type="button"
            aria-label="show QR code for the identity"
            on:click={() => {
              showModal = true;
            }}
          >
            <Icon icon="fluent:qr-code-24-regular" size="1.2rem" />
          </button>
        {/if}
      </div>
    </div>
    <div class="main">
      <div class="avatar">
        <img
          class="avatar-img"
          src={avatar}
          alt={`avatar on ${service.name}`}
        />
      </div>
      <div class="text">
        {#key currIdLink}
          <div transition:slide={{ duration: 300, easing: quintOut }}>
            <svelte:component
              this={idCardTextComponent}
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
  .id-card {
    position: relative;
    padding: 1rem 1.25rem;
    border-radius: 6px;
    background-color: hsl(var(--bg-hue), var(--bg-sat), 92%);
    box-shadow: 1px 1px 3px #9999;
    transition:
      background-color 0.2s,
      box-shadow 0.2s;

    /* hovered, or one of children is focus-visible */
    &:has(:focus-visible) {
      box-shadow: 2px 2px 6px #9999;
      background-color: hsl(var(--bg-hue), var(--bg-sat), 82%);
    }

    @media (any-hover: hover) {
      &:hover {
        box-shadow: 2px 2px 6px #9999;
        background-color: hsl(var(--bg-hue), var(--bg-sat), 82%);
      }
    }

    /* one of children except <button> is focus-visible */
    &:has(:focus-visible):not(:has(button:focus-visible)) {
      outline: solid;
    }

    > a {
      position: absolute;
      inset: 0;
      opacity: 0;
    }
  }

  .contents {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    pointer-events: none;
  }

  .header {
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .buttons {
    pointer-events: auto;
  }

  .buttons > button {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.08);
    transition: background-color 0.1s;

    &:focus-visible {
      background-color: rgba(0, 0, 0, 0.12);
    }

    @media (any-hover: hover) {
      &:hover {
        background-color: rgba(0, 0, 0, 0.12);
      }
    }
  }

  .main {
    display: grid;
    grid-template-areas: "avatar identity";
    grid-template-columns: 3rem minmax(0, 1fr);
    column-gap: 1rem;
    height: 3rem;
  }

  .avatar {
    grid-area: avatar;
    height: 3rem;
  }
  .avatar-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    border-radius: 50%;
    box-shadow: 1px 1px 3px #9999;
  }

  .text {
    grid-area: identity;
    align-self: center;
  }
</style>
