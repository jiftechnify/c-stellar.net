<script module lang="ts">
  import type { Component } from "svelte";
  import type { SVGAttributes } from "svelte/elements";

  export type ServiceIconProps = {
    icon: Component<SVGAttributes<SVGSVGElement>>;
    color?: string;
  };
</script>

<script lang="ts">
  import StyledIcon from "./StyledIcon.svelte";

  export let icon: ServiceIconProps;
</script>

<StyledIcon icon={icon.icon} color={icon.color} size="1.1rem" />
