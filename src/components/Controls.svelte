<script>
  import { SORT_TYPE_OPTS } from 'src/constants.js'
  import { dislayingArray, gameSettings } from 'src/store.js'
  import { generateRandomArray } from 'src/utils.js'
  import SortableArray from 'src/helpers/SortableArray.js'

  // TODO:
  // 2) Play sound on each iteration
  // 3) Add other algorithms

  let isPause = false

  $: ({
    elementsCount,
    maxElementValue,
    maxElementValue,
    drawDelay,
    sortType,
    stepIndex,
    sortableArray
  } = $gameSettings)

  function onRun () {
    const sortableArray = new SortableArray($dislayingArray, sortType)

    updateSettings('sortableArray', sortableArray)
    updateSettings('stepIndex', 0)

    setTimeout(() => {
      updateDisplay()
    }, 0)
  }

  function onTogglePause () {
    isPause = !isPause
  }

  function onContinueRun () {
    onTogglePause()
    setTimeout(() => {
      updateDisplay()
    }, 0)
  }

  function onRefresh () {
    isPause = false
    updateSettings('sortableArray', null)
    updateSettings('stepIndex', null)
    dislayingArray.set(generateRandomArray(elementsCount, maxElementValue))
  }

  function onCountChange ({ target: { valueAsNumber }}) {
    updateSettings('elementsCount', valueAsNumber)
  }

  function onMaxChange ({ target: { valueAsNumber }}) {
    updateSettings('maxElementValue', valueAsNumber)
  }

  function onDelayChange ({ target: { valueAsNumber }}) {
    updateSettings('drawDelay', valueAsNumber)
  }

  function onSelect ({ target: { value }}) {
    updateSettings('sortType', value)
  }

  function updateSettings (field, value) {
    gameSettings.set({
      ...$gameSettings,
      [field]: value
    })
  }

  function updateDisplay () {
    if (isPause) return

    setTimeout(() => {
      if (sortableArray && stepIndex < sortableArray.history.length) {
        // Get new step from history ans save it to store
        const array = sortableArray.history[stepIndex]
        dislayingArray.set(array)

        gameSettings.set({
          ...$gameSettings,
          stepIndex: stepIndex + 1
        })

        updateDisplay()
      }
    }, drawDelay);
  }

</script>

<style>
  button {
    padding: 0 1rem;
    font-weight: bold;
    cursor: pointer;
    flex: 1;
    margin: 0 5px;
    min-width: 145px;
  }

  select, input, label {
    padding: 5px;
    margin: 1px 5px;
    flex: 1;
    min-width: 145px;
  }

  .flex {
    display: flex;
    margin-left: -2.5px;
  }

  .form-item {
    align-items: center;
    justify-content: space-between;
  }

  .flex-column {
    flex-direction: column;
  }

  [disabled] {
    cursor: not-allowed;
  }
</style>

<div>
  <div class="flex">
    {#if stepIndex == null}
      <button disabled={!$gameSettings.sortType} on:click={onRun}>
        Sort
      </button>
    {:else if stepIndex != null && !isPause}
      <button on:click={onTogglePause}>
        Pause
      </button>
    {:else}
      <button on:click={onContinueRun}>
        Continue
      </button>
    {/if}
    <button on:click={onRefresh}>
      Refresh array
    </button>
  </div>
  <br />
  <div class="flex flex-column">
    <div class="flex form-item">
      <label for="method">Algorithm:</label>
       <!-- svelte-ignore a11y-no-onchange -->
      <select name='method' on:change={onSelect} value={$gameSettings.sortType}>
        <option value="">-</option>
        {#each SORT_TYPE_OPTS as opt}
        <option value={opt.value}>{opt.label}</option>
        {/each}
      </select>
    </div>
    <div class="flex form-item">
      <label for="count">Elements:</label>
      <input name="count" type="number" min="10" value={$gameSettings.elementsCount} on:change={onCountChange}>
    </div>
    <div class="flex form-item">
      <label for="maxValue">Max value:</label>
      <input name="maxValue" type="number" min="10" value={$gameSettings.maxElementValue} on:change={onMaxChange}>
    </div>
    <div class="flex form-item">
      <label for="delay">Delay:</label>
      <input name="delay" type="range" min="100" max="1000" value={$gameSettings.drawDelay} on:change={onDelayChange}>
    </div>
  </div>
</div>