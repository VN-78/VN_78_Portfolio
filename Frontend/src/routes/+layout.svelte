<script lang="ts">
	import './layout.css';
	// import favicon from '$lib/assets/favicon.svg';
	import vnicon from "$lib/assets/vn-svgrepo-com.svg"
	import { ModeWatcher } from 'mode-watcher';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={vnicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<ModeWatcher />
{@render children()}
