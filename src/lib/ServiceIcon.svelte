<script lang="ts" context="module">
  export type ServiceIconProps =
    | string
    | {
        name: string;
        color: string;
      };
</script>

<script lang="ts">
  import Icon from "@iconify/svelte";

  export let icon: ServiceIconProps;
  $: name = typeof icon === 'string' ? icon : icon.name
  $: color = typeof icon === 'string' ? undefined : icon.color
</script>

<Icon icon={name} {color} width="1.1em" height="1.1em" />
