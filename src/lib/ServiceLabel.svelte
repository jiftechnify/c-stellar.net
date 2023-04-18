<script lang="ts">
  import Icon from "@iconify/svelte";

  export let icon: string;
  export let iconColor: string | undefined = undefined;
  export let name: string;
</script>

<div class="wrapper">
  <Icon icon={icon} width="1.1em" height="1.1em" color={iconColor} />
  <div class="name">{name}</div>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .name{
    font-size: 1em;
  }
</style>
