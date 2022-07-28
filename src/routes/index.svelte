<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import CtaDivider from "$lib/cta-divider/CtaDivider.svelte";
	import Divider from "$lib/divider/Divider.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Divider text="Få betalt för att vara dig själv." />
	<Divider text="Jobba inte hårdare, jobba smartare." />
	<CtaDivider />
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
