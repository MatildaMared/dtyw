<script>
	import Divider from "$lib/divider/Divider.svelte";
	import { onMount } from 'svelte';

	onMount(() => {
		const el = document.getElementById('hiddenButton');
		el.style.visibility = "hidden";

		setTimeout(() => {
			el.style.visibility = 'visible';
		}, 300000); 
	});

</script>

<main>
	<h1>Tre råd som förändrade mitt liv och mitt företag</h1>
	<div
		id="Container"
		style="padding-bottom:56.25%; position:relative; display:block; width: 100%"
	>
		<iframe
			id="UstreamIframe"
			src="https://player.vimeo.com/video/787887511?h=9ca390475c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
			width="100%" height="100%"
			style="position:absolute; top:0; left: 0"
			allowfullscreen
			webkitallowfullscreen
			frameborder="0"
			referrerpolicy="no-referrer-when-downgrade"
		>
		</iframe>
	</div>

	<a href="https://calendly.com/markusmattsson/strategisamtal?utm_source=homepage&utm_medium=email&utm_campaign=treradsomforandrademittlivochmittforetag" 
		class="button" id="hiddenButton" target="_blank">
		Boka ditt gratis samtal nu!
	</a>
</main>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 800px;
		margin: var(--spacing-xl) auto;
		padding: 0 16px;
		gap: var(--spacing-s);

		h1 {
			text-align: center;
			font-size: var(--font-size-xl);
			margin-bottom: var(--spacing-m);
		}

		h2 {
			width: 100%;
		}
	}
</style>
