<script>
  import { onMount } from 'svelte';
  import { canvas as _canvas, array, screenInfo } from 'src/store.js';
  import BarChart from 'src/helpers/BarChart.js'
  import { BASE_CHART_OPTS } from 'src/constants.js'

  let canvasRef;

  $: drawCanvas($array)

  function drawCanvas (items) {
    if (!$_canvas) return
    
    const ctx = canvasRef.getContext('2d')
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

    const chart = new BarChart({
      ...BASE_CHART_OPTS,
      canvas: $_canvas,
      data: items
    })

    chart.draw();
  }

  onMount(() => {
    _canvas.set(canvasRef)

    drawCanvas($array)
  })

</script>

<canvas
  width={$screenInfo.width * 0.8}
	height={400}
  bind:this={canvasRef}
/>