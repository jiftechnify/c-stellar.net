<script lang="ts">
  type Props = {
    linkText: string;
  };
  let { linkText }: Props = $props();
</script>

<span>{linkText}</span>

<style>
  span {
    font-size: 1.8rem;
    font-weight: bold;
  }
</style>
