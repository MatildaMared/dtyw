<script lang="ts">
	export let imgUrl: string;
	export let altText: string;
	export let heading: string;
</script>

<li>
	<img src={imgUrl} alt={altText} />
	<h3>{heading}</h3>
	<p>
        <slot />
    </p>
</li>

<style lang="scss">
    li {
        width: 100%;
        max-width: 350px;
        border: 1px solid blue;
    }
</style>
