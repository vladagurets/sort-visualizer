<script>
  import { onMount } from 'svelte'
  import {
    canvas as canvasStore,
    dislayingArray,
    screenInfo,
    gameSettings
  } from 'src/store.js';
  import BarChart from 'src/helpers/BarChart.js'
  import { BASE_CHART_OPTS } from 'src/constants.js'
  import { getYAxisStep } from 'src/utils.js'

  let canvasRef;

  // Draw canvas on dislayingArray store changes
  $: drawCanvas($dislayingArray)

  function drawCanvas (items) {
    if (!canvasRef) return

    const ctx = canvasRef.getContext('2d')
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

    const chart = new BarChart({
      ...BASE_CHART_OPTS,
      gridScale: getYAxisStep($gameSettings.maxElementValue, 5),
      canvas: $canvasStore,
      data: items
    })

    chart.draw();
  }

  onMount(() => {
    canvasStore.set(canvasRef)

    // Draw initial array
    drawCanvas($dislayingArray)
  })

</script>

<canvas
  width={$screenInfo.width * 0.8}
	height={400}
  bind:this={canvasRef}
/>