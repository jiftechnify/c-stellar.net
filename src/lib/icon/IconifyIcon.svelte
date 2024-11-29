<script lang="ts">
  import "iconify-icon";

  type IconifyIconProps = {
    icon: string;
    color?: string;
    size?: string;
    width?: string;
    height?: string;
  };

  let {
    icon,
    color = "#000",
    size = undefined,
    width = undefined,
    height = undefined,
  }: IconifyIconProps = $props();

  let w = $derived(size ?? width ?? "1rem");
  let h = $derived(size ?? height ?? "1rem");
</script>

<iconify-icon
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
</style>
