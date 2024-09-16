<script lang="ts" context="module">
  export type QrCodeProps = {
    data: string;
    caption: string;
  };
</script>

<script lang="ts">
  import Icon from "@iconify/svelte";
  import QRCode from "qrcode";

  export let data: string;
  export let caption: string;

  const qrImgUrl = QRCode.toDataURL(data, { width: 200 });

  let copied = false;
  let copiedClearTimer = undefined;
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(data);

    copied = true;
    if (copiedClearTimer) {
      clearTimeout(copiedClearTimer);
    }
    copiedClearTimer = setTimeout(() => {
      copied = false;
    }, 1000);
  };
</script>

<div class="wrapper">
  <figure>
    <figcaption>{caption}</figcaption>
    {#await qrImgUrl}
      <div />
    {:then imgUrl}
      <img src={imgUrl} alt={caption} width={200} height={200} />
    {/await}
  </figure>
  <div class="data-text">
    <input type="text" readonly value={data} />
    <button class="btn-copy" on:click={() => copyToClipboard()}>
      {#if copied}
        <Icon
          icon="fluent:checkmark-12-filled"
          color="#0a0"
          width="1.2rem"
          height="1.2rem"
        />
      {:else}
        <Icon
          icon="fluent:clipboard-multiple-16-regular"
          width="1.2rem"
          height="1.2rem"
        />
      {/if}
    </button>
  </div>
</div>

<style lang="scss">
  .wrapper {
    padding: 1rem;
    max-width: 30rem;
  }

  figure {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  figcaption {
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
  }

  div.data-text {
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      flex-grow: 1;
      height: 1.2rem;
    }

    button.btn-copy {
      display: flex;
      align-items: center;
      padding: 4px;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
</style>
