<script lang="ts">
	import Logo from "./Logo.svelte";
</script>

<header>
	<Logo />
</header>

<style lang="scss">
	header {
		background-image: url("/images/road.jpg");
		background-size: cover;
		background-position: center;
		min-height: 80vh;
		width: 100%;
		padding: 32px;
	}
</style>
