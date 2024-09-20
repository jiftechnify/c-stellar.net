<script lang="ts">
  import "iconify-icon";

  export let icon: string;

  export let color: string = "#000";

  export let size: string | undefined = undefined;
  export let width: string | undefined = undefined;
  export let height: string | undefined = undefined;

  $: w = size ?? width ?? "1rem";
  $: h = size ?? height ?? "1rem";
</script>

<iconify-icon
  style:--icon-w={w}
  style:--icon-h={h}
  style:--icon-color={color}
  {icon}
  {color}
  width={w}
  height={h}
/>

<style>
  iconify-icon {
    display: inline-block;
    width: var(--icon-w);
    height: var(--icon-h);
    color: var(--icon-color);
  }
</style>
