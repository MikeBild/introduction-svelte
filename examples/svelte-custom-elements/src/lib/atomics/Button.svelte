<svelte:options tag="atomic-button" />

<script lang="ts">
  export let label = "Click Me!";

  function onClickHandler() {
    alert("Hello Svelte!");
  }
</script>

<button type="button" class="border" on:click={onClickHandler}>{label}</button>

<style>
  .border {
    border: 1px solid black;
  }
</style>
