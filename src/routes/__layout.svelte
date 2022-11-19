<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import "../styles/variables.scss";
	import "../styles/reset.scss";
	import "../styles/global.scss";
import Footer from "$lib/footer/Footer.svelte";
</script>

<main>
	<slot />
</main>

<Footer />

<style>
</style>
