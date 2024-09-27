<script lang="ts">
  import IconifyIcon from "./icon/IconifyIcon.svelte";

  export let showModal: boolean;

  let dialog: HTMLDialogElement | undefined;

  $: if (dialog && showModal) {
    dialog.showModal();
  }

  // animation while the dialog is hiding
  let hiding = false;
  const closeDialog = () => {
    if (dialog === undefined) {
      return;
    }
    hiding = true;
    dialog.addEventListener("animationend", didHide, false);
  };
  const didHide = () => {
    if (dialog === undefined) {
      return;
    }
    hiding = false;
    dialog.close();
    dialog.removeEventListener("animationend", didHide, false);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => {
    showModal = false;
  }}
  on:click|self={() => closeDialog()}
  class:hiding
>
  <button
    class="btn-close"
    type="button"
    on:click={() => {
      closeDialog();
    }}
  >
    <IconifyIcon icon="fluent:dismiss-12-filled" color="#333" size="1.1rem" />
  </button>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <slot />
  </div>
</dialog>

<style>
  dialog {
    width: fit-content;
    height: fit-content;
    border: none;
    padding: 0;
    border-radius: 8px;
  }
  dialog[open] {
    animation: zoomin 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  dialog.hiding {
    animation: zoomout 0.15s;
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }
  dialog[open]::backdrop {
    animation: fadein 0.2s ease-out;
  }
  dialog.hiding::backdrop {
    animation: fadeout 0.15s ease-out;
  }

  button.btn-close {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    padding: 4px;
  }

  @keyframes zoomin {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes zoomout {
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    to {
      opacity: 0;
    }
  }
</style>
