<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import AboutMarkus from "$lib/about-markus/AboutMarkus.svelte";
	import Courses from "$lib/courses/Courses.svelte";
	import CtaDivider from "$lib/cta-divider/CtaDivider.svelte";
	import Description from "$lib/description/Description.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import Intro from "$lib/intro/Intro.svelte";
import Testimonials from "$lib/testimonials/Testimonials.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<Intro />
	<Divider text="Få betalt för att vara dig själv." />
	<Description />
	<CtaDivider />
	<AboutMarkus />
	<Divider text="Jobba inte hårdare, jobba smartare." />
	<Courses />
	<Testimonials />
	<img
		src="/images/matilda-and-markus.jpeg"
		alt="En man och en kvinna står på en träbrygga framför en sjö. I bakgrunden syns berg och träd och gråa moln syns på himlen."
	/>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;

		> img {
			margin: var(--spacing-l) 0;
			max-width: 600px;
			height: auto;
			border-radius: 8px;
		}
	}
</style>
