<script lang="ts" context="module">
  declare global {
    interface Window {
      nostr: {
        getPublicKey: () => Promise<string>;
      };
    }
  }
  type Status = "before-req" | "pending" | "ok" | "err";
</script>

<script lang="ts">
  import { nip19 } from "nostr-tools";

  let nip07ExtAvailable: boolean | undefined = undefined;
  let numChecks = 0;
  const MAX_CHECKS = 5;

  let nip07CheckInterval = setInterval(() => {
    if (window.nostr) {
      nip07ExtAvailable = true;
      clearInterval(nip07CheckInterval);
    } else if (numChecks > MAX_CHECKS) {
      nip07ExtAvailable = false;
    } else {
      numChecks++;
    }
  }, 300);

  let status: Status = "before-req";
  const sendRequest = async (hexPubkey: string) => {
    status = "pending";

    try {
      const resp = await fetch("https://nositifier.c-stellar.net/", {
        method: "POST",
        body: hexPubkey,
      });
      if (resp.status !== 200) {
        status = "err";
        return;
      }
      const body = (await resp.json()) as { ok: boolean };
      status = body.ok ? "ok" : "err";
      if (body.ok) {
        setTimeout(() => rediectToHome(), 1000);
      }
    } catch (err) {
      console.error(err);
      status = "err";
    }
  };

  const useNip07Ext = async () => {
    const pubkey = await window.nostr.getPublicKey();
    await sendRequest(pubkey);
  };

  let npub = "";
  const useInputNpub = async () => {
    try {
      const { type, data } = nip19.decode(npub);
      if (type !== "npub") {
        console.error("not npub:", npub);
        status = "err";
        return;
      }
      await sendRequest(data as string);
    } catch (err) {
      console.error(err);
      status = "err";
    }
  };

  const rediectToHome = () => {
    location.href = "./";
  };
</script>

<main>
  {#if status === "before-req"}
    <p>NostrのDMで名刺(?)を送ります</p>
    {#if nip07ExtAvailable === undefined}
      ...
    {:else if nip07ExtAvailable}
      <button type="button" on:click={useNip07Ext}>NIP-07拡張機能を使う</button>
    {:else}
      <input type="text" placeholder="npub1..." bind:value={npub} />
      <button type="button" on:click={useInputNpub}>送信</button>
    {/if}
  {:else if status === "pending"}
    <p>処理中...</p>
  {:else if status === "ok"}
    <p>成功!</p>
  {:else if status === "err"}
    <p>エラー発生</p>
    <button
      type="button"
      on:click={() => {
        status = "before-req";
      }}>やり直す</button
    >
  {/if}
</main>

<style>
  main {
    width: 320px;
    margin: auto;
    text-align: center;
  }
</style>
