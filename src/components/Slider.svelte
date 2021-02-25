<script>
  import { gameSettings, dislayingArray } from 'src/store.js'

  $: ({ stepIndex, sortableArray } = $gameSettings)

  function getMaxLength () {
    return sortableArray ? sortableArray.history.length - 1 : 0
  }

  function onChange ({ target: { valueAsNumber }}) {
    const array = sortableArray.history[stepIndex - 1]
    dislayingArray.set(array)

    gameSettings.set({
      ...$gameSettings,
      isPause: true,
      stepIndex: valueAsNumber
    })
  }

</script>

<style>
  div {
    width: 100%;
    height: 32px;
    text-align: center;
  }
  input {
    width: 70%;
  }
</style>

<div>
  {#if stepIndex > 0}
    <input type="range" min="1" max={getMaxLength()} value={stepIndex} on:input={onChange}>
  {/if}
</div>