<script lang="ts">
  import Plain from "./Plain.svelte";

  type Props = {
    linkText: string;
  };
  let { linkText }: Props = $props();

  const splitFpr = (text: string) => {
    const rows = [text.slice(0, 20), text.slice(20)];
    return rows.map((r) =>
      [0, 1, 2, 3, 4].map((i) => r.slice(i * 4, (i + 1) * 4)).join(" "),
    );
  };

  let [r1, r2] = $derived(splitFpr(linkText));
</script>

{#if linkText.length === 40}
  <span class="fpr">{r1}</span><br />
  <span class="fpr">{r2}</span>
{:else}
  <Plain {linkText} />
{/if}

<style>
  span.fpr {
    font-family: monospace;
    font-size: 1.3rem;
    line-height: 1rem;
  }
</style>
