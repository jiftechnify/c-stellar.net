<script lang="ts">
  import LinkCardTextPlain from "./LinkCardTextPlain.svelte";

  export let linkText: string;
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
  $: parsed = parseDidPlc(linkText);
</script>

{#if parsed.isDidPlc}
  did:plc:<br />
  <span class="id-part">{parsed.idPart}</span>
{:else}
  <LinkCardTextPlain {linkText} />
{/if}

<style>
  span.id-part{
    font-family: monospace;
    font-weight: bold;
    font-size: 1.5em;
    line-height: 0.9em;
  }
</style>
