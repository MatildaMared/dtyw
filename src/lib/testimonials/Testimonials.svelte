<script lang="ts">
	import testimonials from "../../data/testimonials";
	import { ChevronRightIcon, ChevronLeftIcon } from "svelte-feather-icons";
	import Testimonial from "./Testimonial.svelte";

	const elementWidth = 332;

	$: numToDisplay = 3;
	$: totalWidth = elementWidth * numToDisplay;
	$: windowWidth = 0;
	$: offset = 0;
	$: atStart = offset === 0;
	$: atEnd = offset <= elementWidth * (testimonials.length - numToDisplay) * -1;

	$: {
		if (windowWidth > 1000) {
			numToDisplay = 3;
		} else if (windowWidth > 680) {
			numToDisplay = 2;
		} else {
			numToDisplay = 1;
		}
	}

	enum Direction {
		Left = "left",
		Right = "right"
	}

	function scroll(direction: Direction): void {
		if (direction === Direction.Left && !atStart) {
			offset += elementWidth;
		} else if (direction === Direction.Right && !atEnd) {
			offset -= elementWidth;
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<section>
	<h2>Detta säger tidigare kunder..</h2>
	<div class="testimonials-container" style="width: {totalWidth}px;">
		<div class="testimonials" style="transform: translateX({offset}px);">
			{#each testimonials as testimonial}
				<Testimonial {testimonial} />
			{/each}
		</div>
	</div>
	<div class="buttons">
		<button on:click={() => scroll(Direction.Left)} disabled={atStart}>
			<ChevronLeftIcon />
			<span class="screen-reader-text" title="Föregående">Föregående</span>
		</button>
		<button on:click={() => scroll(Direction.Right)} disabled={atEnd}>
			<ChevronRightIcon />
			<span class="screen-reader-text" title="Nästa">Nästa</span>
		</button>
	</div>
</section>

<style lang="scss">
	section {
		margin: var(--spacing-l) 0;
		width: 100%;
		padding: var(--spacing-l);
		background-color: var(--color-primary-dark);
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			color: var(--color-white);
			font-size: var(--font-size-xl);
			margin-bottom: var(--spacing-m);
		}

		.testimonials-container {
			overflow: hidden;
		}

		.testimonials {
			display: flex;
			transition: transform 0.4s ease-in-out;
			margin: var(--spacing-m) 0;
		}

		.buttons {
			display: flex;
			gap: 16px;

			button {
				border: none;
				background: transparent;
				color: var(--color-primary-light);
				cursor: pointer;
				transition: ease-in-out 0.25s;

				&:disabled {
					opacity: 0.5;
					cursor: not-allowed;
				}

				&:hover {
					color: var(--color-white);
				}
			}
		}

		.screen-reader-text {
			border: 0;
			clip: rect(1px, 1px, 1px, 1px);
			clip-path: inset(50%);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
			word-wrap: normal !important;
		}
	}
</style>
