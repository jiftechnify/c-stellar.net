<script lang="ts">
  import "iconify-icon";
  import type { Component } from "svelte";
  import type { SVGAttributes } from "svelte/elements";

  type IconifyIconProps = {
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
  }: IconifyIconProps = $props();

  let w = $derived(size ?? width ?? "1rem");
  let h = $derived(size ?? height ?? "1rem");
</script>

<Icon style={`${color ? `fill: ${color};` : ""}width: ${w};height: ${h}`} />

<!-- <iconify-icon
  style:--icon-w={w}
  style:--icon-h={h}
  style:--icon-color={color}
  {icon}
  {color}
  width={w}
  height={h}
></iconify-icon>

<style>
  iconify-icon {
    display: inline-block;
    width: var(--icon-w);
    height: var(--icon-h);
    color: var(--icon-color);
  }
</style> -->
