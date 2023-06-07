<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Nositifier from "./pages/Nositifier.svelte";
</script>

<Router>
  <Route path="">
    <Home />
  </Route>
  <Route path="/nos">
    <Nositifier />
  </Route>
</Router>
