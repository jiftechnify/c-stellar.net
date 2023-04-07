<script lang="ts">
  import Icon from "@iconify/svelte";

  export let icon: string;
  export let iconColor: string | undefined = undefined;
  export let name: string;
</script>

<div class="wrapper">
  <Icon icon={icon} width="18" height="18" color={iconColor} />
  <div>{name}</div>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
  }
</style>
