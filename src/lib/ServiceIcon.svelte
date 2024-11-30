<script module lang="ts">
  import type { Component } from "svelte";
  import type { SVGAttributes } from "svelte/elements";

  export type ServiceIconProps =
    | {
        type: "iconify";
        // name: string;
        icon: Component<SVGAttributes<SVGSVGElement>>;
        color?: string;
      }
    | {
        type: "svg";
        name: SVGIconName;
        color?: string;
      };
</script>

<script lang="ts">
  import IconifyIcon from "./icon/IconifyIcon.svelte";
  import SVGIcon from "./icon/SVGIcon.svelte";
  import type { SVGIconName } from "./icon/SVGIcon.svelte";
  

  export let icon: ServiceIconProps;
</script>

{#if icon.type === "iconify"}
  <IconifyIcon icon={icon.icon} color={icon.color} size="1.1rem" />
{:else if icon.type === "svg"}
  <SVGIcon icon={icon.name} color={icon.color} size="1.1rem" />
{/if}
