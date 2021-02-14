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

	/* .border {
		position: absolute;
		z-index: -1;
		border: 2px dashed var(--color);
		top: 1em;
		bottom: 1em;
		left: 1em;
		right: 1em;
	} */
</style>

<main>
	<Canvas />
	<br />
	<Controls />
</main>
<ResizeHandler />
<!-- <div class="border" /> -->