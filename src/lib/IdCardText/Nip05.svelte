<script lang="ts">
  import Plain from "./Plain.svelte";

  type Props = {
    linkText: string;
  };
  let { linkText }: Props = $props();

  const parseNip05 = (text: string) => {
    const atIdx = text.indexOf("@");
    return atIdx >= 0
      ? {
          isNip05: true,
          username: text.slice(0, atIdx),
          domain: text.slice(atIdx),
        }
      : { isNip05: false };
  };
  let parsed = $derived(parseNip05(linkText));
</script>

{#if parsed.isNip05}
  <span class="name">{parsed.username}</span>&#8203;<span class="domain"
    >{parsed.domain}</span
  >
{:else}
  <Plain {linkText} />
{/if}

<style>
  span.name {
    font-size: 1.8rem;
    font-weight: bold;
  }
  span.domain {
    font-size: 1rem;
    font-weight: normal;
  }
</style>
