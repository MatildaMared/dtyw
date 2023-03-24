<script>
	import Divider from "$lib/divider/Divider.svelte";
	import AboutMarkus from "$lib/homepage/about-markus/AboutMarkus.svelte";

</script>

<main>
	<h1>Grattis! 🎉</h1>
	<h2>Du är kvar på maillistan och fortsätter få info och inspiration om stress och företagande</h2>
</main>
<div id="about">
	<AboutMarkus/>	
</div>

<style lang="scss">
	@use "../../styles/breakpoints.scss" as *;

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 800px;
		margin: var(--spacing-xl) auto 0;
		padding: 0 100px;
		gap: var(--spacing-s);

		h1 {
			text-align: center;
			font-size: var(--font-size-xl);
			margin-bottom: var(--spacing-m);
		}

		h2 {
			width: 100%;
			text-align: center;
		}
	}

	#about {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		padding: 0 100px;
		gap: var(--spacing-s);
	}
</style>
