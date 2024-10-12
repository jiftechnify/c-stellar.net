<script lang="ts">
  export let linkText: string;

  type Bech32Parts = {
    prefix: string;
    body: string;
  };

  const parseBech32 = (text: string): Bech32Parts => {
    const sepIdx = text.indexOf("1");
    if (sepIdx < 0) {
      return {
        prefix: "",
        body: text,
      };
    }
    return {
      prefix: text.substring(0, sepIdx + 1),
      body: text.substring(sepIdx + 1),
    };
  };
  $: parsed = parseBech32(linkText);
</script>

<div class="bech32" tabindex="-1">
  <span class="bech32-prefix">{parsed.prefix}</span><br />
  <span class="bech32-body">{parsed.body}</span>
</div>

<style lang="scss">
  .bech32 {
    width: 100%;
    white-space: no-wrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-family: monospace;
    line-height: 0;

    &.bech32-prefix {
      font-size: 0.9rem;
    }

    &.bech32-body {
      font-size: 1.2rem;
    }
  }
</style>
