<script lang="ts">
  import type { Component } from "svelte";
  import type { SVGAttributes } from "svelte/elements";

  type StyledIconProps = {
    icon: Component<SVGAttributes<SVGSVGElement>>;
    color?: string;
    size?: string;
    width?: string;
    height?: string;
  };

  let {
    icon: Icon,
    color = "#000",
    size = undefined,
    width = undefined,
    height = undefined,
  }: StyledIconProps = $props();

  let w = $derived(size ?? width ?? "1rem");
  let h = $derived(size ?? height ?? "1rem");
</script>

<Icon
  width={w}
  height={h}
  style={`${color ? `fill: ${color}; color: ${color}` : ""}`}
/>
