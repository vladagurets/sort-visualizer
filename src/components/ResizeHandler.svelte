<script>
  import { screenInfo } from 'src/store.js'
  import { getScreenInfo, debounce } from 'src/utils.js'

  const debouncedResize = debounce(handleResize, 500)

  function handleResize () {
    screenInfo.set(getScreenInfo())
  }
</script>

<svelte:window on:resize|passive={debouncedResize} />