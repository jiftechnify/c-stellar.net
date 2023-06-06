<script lang="ts">
  import Plain from "./Plain.svelte";

  export let linkText: string
  const parseNip05 = (text: string) => {
    const atIdx = text.indexOf("@")
    return atIdx >= 0 ? {
      isNip05: true,
      username: text.slice(0, atIdx),
      domain: text.slice(atIdx)
    } : {isNip05: false}
  }
  $: parsed = parseNip05(linkText)
</script>

{#if parsed.isNip05}
  <span class="name">{parsed.username}</span><span class="domain">{parsed.domain}</span>
{:else}
  <Plain {linkText} />
{/if}

<style>
  span.name {
    font-size: 1.8em;
    font-weight: bold;
  }
  span.domain {
    font-size: 1em;
    font-weight: normal;
  }
</style>
