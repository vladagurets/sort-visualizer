<script>
	import Canvas from './components/Canvas.svelte'
	import Controls from './components/Controls.svelte'
	import ResizeHandler from './components/ResizeHandler.svelte'
</script>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<main>
	<Canvas />
	<br />
	<Controls />
</main>
<ResizeHandler />