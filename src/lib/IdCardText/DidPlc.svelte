<script lang="ts">
  import Plain from "./Plain.svelte";

  type Props = {
    linkText: string;
  };
  let { linkText }: Props = $props();

  const parseDidPlc = (text: string) => {
    if (text.startsWith("did:plc:")) {
      return {
        isDidPlc: true,
        idPart: text.replace(/^did:plc:/, ""),
      };
    }
    return {
      isDidPlc: false,
    };
  };
  let parsed = $derived(parseDidPlc(linkText));
</script>

{#if parsed.isDidPlc}
  <span class="did-prefix">did:plc:</span><br />
  <span class="did-body">{parsed.idPart}</span>
{:else}
  <Plain {linkText} />
{/if}

<style lang="scss">
  span {
    font-family: monospace;

    &.did-prefix {
      font-size: 0.9rem;
    }

    &.did-body {
      font-size: 1.3rem;
      line-height: 0.9;
    }
  }
</style>
