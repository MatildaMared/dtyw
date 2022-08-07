<script lang="ts">
	import {createEventDispatcher} from "svelte";

	export let showModal;

	const dispatch = createEventDispatcher();
	const close = () => dispatch("close");

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			close();
			return;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if showModal}
    <div class="modal">
        <h1>Detta är en modal</h1>
        <button autofocus on:click={close}>close modal</button>
    </div>
{/if}

<style lang="scss"></style>