<script lang="ts">
	export let onClick: () => void = () => {};
	export let secondary = false;
</script>

<button class={secondary ? "secondary button" : "button"} on:click={onClick}>
	<slot />
</button>

<style lang="scss">
</style>
