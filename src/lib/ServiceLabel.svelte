<script module lang="ts">
  import type { ServiceIconProps } from "./ServiceIcon.svelte";

  export type ServiceProps = {
    name: string;
    icon: ServiceIconProps;
  };
</script>

<script lang="ts">
  import ServiceIcon from "./ServiceIcon.svelte";

  let { name, icon }: ServiceProps = $props();
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
