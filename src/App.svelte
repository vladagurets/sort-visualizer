<script>
	import Canvas from './components/Canvas.svelte'
	import Controls from './components/Controls.svelte'
	import Slider from './components/Slider.svelte'
	import ResizeHandler from './components/ResizeHandler.svelte'
</script>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>

<main>
	<Slider />
	<Canvas />
	<Controls />
</main>
<ResizeHandler />
