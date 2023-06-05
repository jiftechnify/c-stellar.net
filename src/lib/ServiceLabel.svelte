<script lang="ts" context="module">
  import type { ServiceIconProps } from "./ServiceIcon.svelte";

  export type ServiceProps = {
    name: string;
    icon: ServiceIconProps;
  };
</script>

<script lang="ts">
  import ServiceIcon from "./ServiceIcon.svelte";

  export let name: string;
  export let icon: ServiceIconProps;
</script>

<div class="wrapper">
  <ServiceIcon {icon} />
  <div class="name">{name}</div>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .name {
    font-size: 1em;
  }
</style>
