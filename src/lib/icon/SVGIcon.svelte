<script module lang="ts">
  import nostrSvg from "../../assets/nostr.svg?component";
  import concrntSvg from "../../assets/concrnt.svg?component";

  const icons = {
    nostr: nostrSvg,
    concrnt: concrntSvg,
  };
  export type SVGIconName = keyof typeof icons;
</script>

<script lang="ts">
  type SVGIconProps = {
    icon: SVGIconName;
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
  }: SVGIconProps = $props();

  let w = $derived(size ?? width ?? "1rem");
  let h = $derived(size ?? height ?? "1rem");

  let Icon = $derived(icons[icon]);
</script>

<Icon style={`${color ? `fill: ${color};` : ""}width: ${w};height: ${h}`} />
