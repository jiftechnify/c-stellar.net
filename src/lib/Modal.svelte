<script lang="ts">
  import Icon from "@iconify/svelte";

  export let showModal: boolean;

  let dialog: HTMLDialogElement | undefined;

  $: if (dialog && showModal) {
    dialog.showModal();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  bind:this={dialog}
  on:close={() => {
    showModal = false;
  }}
  on:click|self={() => dialog.close()}
>
  <button
    class="btn-close"
    type="button"
    on:click={() => {
      dialog.close();
    }}
  >
    <Icon
      icon="fluent:dismiss-12-filled"
      color="#333"
      width="1.1em"
      height="1.1em"
    />
  </button>
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
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }

  button.btn-close {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  @keyframes zoom {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
