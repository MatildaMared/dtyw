<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import AboutMarkus from "$lib/about-markus/AboutMarkus.svelte";
	import CtaDivider from "$lib/cta-divider/CtaDivider.svelte";
	import Description from "$lib/description/Description.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import Intro from "$lib/intro/Intro.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Intro />
	<Divider text="Få betalt för att vara dig själv." />
	<Description />
	<CtaDivider />
	<AboutMarkus />
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
</style>
