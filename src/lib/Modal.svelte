<script lang="ts">
  import type { EventHandler, MouseEventHandler } from "svelte/elements";
  import type { Snippet } from "svelte";
  import IconifyIcon from "./icon/IconifyIcon.svelte";

  import IconDismiss from "~icons/fluent/dismiss-12-filled";

  type ModalProps = {
    showModal: boolean;
    children: Snippet;
  };

  let { showModal = $bindable(), children }: ModalProps = $props();

  let dialog: HTMLDialogElement | undefined;

  $effect(() => {
    if (dialog && showModal) {
      dialog.showModal();
    }
  });

  // animation while the dialog is hiding
  let hiding = $state(false);

  const self = (fn: EventHandler) => {
    return (
      e: Event & {
        currentTarget: EventTarget & Element;
      },
    ) => {
      if (e.target === e.currentTarget) {
        fn(e);
      }
    };
  };

  const closeDialog = () => {
    if (dialog === undefined) {
      return;
    }
    hiding = true;
    dialog.addEventListener("animationend", didHide, false);
  };

  const handleClickDialog: MouseEventHandler<HTMLDialogElement> = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeDialog();
  };

  const handleClickCloseButton = () => {
    closeDialog();
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

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialog}
  onclose={() => {
    showModal = false;
  }}
  onclick={handleClickDialog}
  class:hiding
>
  <button class="btn-close" type="button" onclick={handleClickCloseButton}>
    <IconifyIcon icon={IconDismiss} color="#333" size="1.1rem" />
  </button>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div onclick={(e) => e.stopPropagation()}>
    {@render children()}
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
