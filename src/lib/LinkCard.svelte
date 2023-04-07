<script lang="ts">
  export let href: string;
  export let iconSrc: string;
  export let colorType: "hue" | "black" = "black";
  export let hue: number = 0;

  const calcColor = (type: "hue" | "black", hue: number) => {
    switch (type) {
      case "hue":
        return { h: hue, s: 60 };
      case "black":
        return { h: 0, s: 0 };
    }
  };
  $: bgColor = calcColor(colorType, hue);
</script>

<a {href} target="_blank" rel="noopener noreferrer">
  <div
    class="card"
    style="--bg-hue: {bgColor.h}; --bg-saturation: {bgColor.s}%"
  >
    <div class="service">
      <slot name="service" />
    </div>
    <div class="icon">
      <img class="icon-img" src={iconSrc} alt="icon" />
    </div>
    <div class="identity">
      <slot name="identity" />
    </div>
  </div>
</a>

<style>
  a {
    color: inherit;
    text-decoration: none;
  }
  .card {
    padding: 16px 24px;
    display: grid;
    grid-template-areas:
      "service service service"
      "icon identity comments";
    grid-template-rows: 24px 48px;
    grid-template-columns: 48px minmax(0, 1fr);
    row-gap: 8px;
    column-gap: 12px;
    border-radius: 6px;
    background-color: hsl(var(--bg-hue), var(--bg-saturation), 92%);
    box-shadow: 1px 1px 3px #9999;
    transition: background-color 0.2s, box-shadow 0.2s;
  }
  .card:hover {
    box-shadow: 2px 2px 6px #9999;
    background-color: hsl(var(--bg-hue), var(--bg-saturation), 86%);
  }
  .service {
    grid-area: service;
  }
  .identity {
    grid-area: identity;
    align-self: center;
    font-size: 28px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
  }
  .icon {
    grid-area: icon;
  }
  .icon-img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 1px 1px 3px #9999;
  }
</style>
