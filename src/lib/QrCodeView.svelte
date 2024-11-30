<script module lang="ts">
  export type QrCodeProps = {
    data: string;
    caption: string;
  };
</script>

<script lang="ts">
  import IconifyIcon from "./icon/IconifyIcon.svelte";
  import QRCode from "qrcode";

  import IconCheckmark from "~icons/fluent/checkmark-12-filled";
  import IconClipboard from "~icons/fluent/clipboard-multiple-16-regular";

  let { data, caption }: QrCodeProps = $props();

  const qrImgUrl = QRCode.toDataURL(data, { width: 200 });

  let copied = $state(false);
  let copiedClearTimer: ReturnType<typeof setTimeout> | undefined;
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
      <div></div>
    {:then imgUrl}
      <img src={imgUrl} alt={caption} width={200} height={200} />
    {/await}
  </figure>
  <div class="data-text">
    <input type="text" readonly value={data} />
    <button type="button" name="copy-button" onclick={() => copyToClipboard()}>
      {#if copied}
        <IconifyIcon icon={IconCheckmark} color="#0a0" size="1.2rem" />
      {:else}
        <IconifyIcon icon={IconClipboard} size="1.2rem" />
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
    padding-block-start: 24px;
    padding-block-end: 16px;
    padding-inline: 40px;
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

    button {
      display: flex;
      align-items: center;
      padding: 4px;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
</style>
