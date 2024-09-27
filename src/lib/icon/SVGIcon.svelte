<script context="module" lang="ts">
  import nostrSvg from "../../assets/nostr.svg?component";

  const icons = {
    nostr: nostrSvg,
  };
  export type SVGIconName = keyof typeof icons;
</script>

<script lang="ts">
  export let icon: SVGIconName;
  export let color: string = "#000";

  export let size: string | undefined = undefined;
  export let width: string | undefined = undefined;
  export let height: string | undefined = undefined;

  $: w = size ?? width ?? "1rem";
  $: h = size ?? height ?? "1rem";
</script>

<svelte:component
  this={icons[icon]}
  style={`fill: ${color}; width: ${w}; height: ${h}`}
/>
