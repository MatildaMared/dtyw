<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Divider from "$lib/divider/Divider.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Do things your way</h1>
	<Divider text="Få betalt för att vara dig själv." />
	<Divider text="Jobba inte hårdare, jobba smartare." />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
		font-family: var(--font-secondary);
	}
</style>
