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

<div class="service">
  <ServiceIcon {icon} />
  <div class="name">{name}</div>
</div>

<style>
  .service {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .name {
    font-size: 1.05rem;
  }
</style>
