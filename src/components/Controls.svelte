<script>
  import { SORT_TYPE_OPTS } from 'src/constants.js'
  import { array, sortType, elementsCount, maxElementValue, drawDelay } from 'src/store.js'
  import { lazySort, generateRandomArray } from 'src/utils.js'

  function onRun () {
    // Pause, continue
    lazySort({
      array: $array,
      iterationDelay: $drawDelay,
      arrayStore: array,
      sortType: $sortType
    })
  }

  function onRefresh () {
    array.set(generateRandomArray($elementsCount, $maxElementValue))
  }

  function onCountChange ({ target: { valueAsNumber }}) {
    elementsCount.set(valueAsNumber)
  }

  function onMaxChange ({ target: { valueAsNumber }}) {
    maxElementValue.set(valueAsNumber)
  }

  function onDelayChange ({ target: { valueAsNumber }}) {
    drawDelay.set(valueAsNumber)
  }

  function onSelect ({ target: { value }}) {
    sortType.set(value)
  }
</script>

<style>
  button {
    padding: .5rem 1rem;
    color: var(--bg-color);
    font-weight: bold;
    cursor: pointer;
    flex: 1;
    margin: 0 5px;
    min-width: 150px;
  }

  select, input, label {
    padding: 5px;
    margin: 1px 5px;
    flex: 1;
  }

  .flex {
    display: flex;
    margin-left: -5px;
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
    <button disabled={!$sortType} on:click={onRun}>
      Sort
    </button>
    <button on:click={onRefresh}>
      Refresh array
    </button>
  </div>
  <br />
  <div class="flex flex-column">
    <div class="flex form-item">
      <label for="method">Algorythm:</label>
       <!-- svelte-ignore a11y-no-onchange -->
      <select name='method' on:change={onSelect} value={$sortType}>
        <option value="">-</option>
        {#each SORT_TYPE_OPTS as opt}
        <option value={opt.value}>{opt.label}</option>
        {/each}
      </select>
    </div>
    <div class="flex form-item">
      <label for="count">Elements:</label>
      <input name="count" type="number" min="10" value={$elementsCount} on:change={onCountChange}>
    </div>
    <div class="flex form-item">
      <label for="maxValue">Max value:</label>
      <input name="maxValue" type="number" min="10" value={$maxElementValue} on:change={onMaxChange}>
    </div>
    <div class="flex form-item">
      <label for="delay">Delay:</label>
      <input name="delay" type="range" min="100" max="2000" value={$drawDelay} on:change={onDelayChange}>
    </div>
  </div>
</div>