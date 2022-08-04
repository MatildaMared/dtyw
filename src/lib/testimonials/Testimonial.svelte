<script lang="ts">
	import type { Testimonial } from "../../interfaces/Testimonial";
	export let testimonial: Testimonial;

	const { name, image, text } = testimonial;
</script>

<article class="testimonial">
	<img src={image} alt={name} />
	<h3>{name}</h3>
	<p>{text}</p>
</article>

<style lang="scss">
	.testimonial {
		margin: 0 16px;
		min-width: 300px;
		height: auto;
		padding: var(--spacing-m);
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color-white);
		border-radius: 16px;

		img {
			border-radius: 50%;
			max-width: 50%;
			margin-bottom: 16px;
		}

		h3 {
			font-size: var(--font-size-m);
			margin-bottom: 16px;
		}
	}
</style>
