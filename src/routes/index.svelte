<script lang="ts">
	import AboutMarkus from "$lib/homepage/about-markus/AboutMarkus.svelte";
	import Courses from "$lib/homepage/courses/Courses.svelte";
	import CtaDivider from "$lib/homepage/cta-divider/CtaDivider.svelte";
	import Description from "$lib/homepage/description/Description.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import Intro from "$lib/homepage/intro/Intro.svelte";
	import Testimonials from "$lib/homepage/testimonials/Testimonials.svelte";
	import CtaPopup from "../lib/homepage/cta-popup/CtaPopup.svelte";
	import BottomCta from "../lib/homepage/bottom-cta/BottomCta.svelte";
	import Header from "$lib/homepage/header/Header.svelte";
</script>

<svelte:head>
	<title>Do things your way</title>
	<meta
		content="Jag hälper de som har problem med stress att gå från anställd till företagare."
		name="description"
	/>
</svelte:head>

<Header />

<div>
	<Intro />
	<Divider secondary text="Få betalt för att vara dig själv." />
	<Description />
	<CtaDivider />
	<AboutMarkus />
	<Divider secondary text="Jobba inte hårdare, jobba smartare." />
	<Courses />
	<Testimonials />
	<div class="image-wrapper">
		<img
			alt="En man och en kvinna står på en träbrygga framför en sjö. I bakgrunden syns berg och träd och gråa moln syns på himlen."
			src="/images/matilda-and-markus.jpeg"
		/>
	</div>
	<BottomCta />
	<!-- <CtaPopup /> -->
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		width: 100%;

		.image-wrapper {
			padding: 0 16px;

			img {
				margin: var(--spacing-l);
				width: 600px;
				max-width: 100%;
				height: auto;
				border-radius: 8px;
			}
		}
	}
</style>
