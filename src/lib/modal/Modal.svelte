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
    <div class="modal-background" on:click={close}></div>
    <div class="modal">
        <h1>Detta är en modal</h1>
        <button autofocus on:click={close}>close modal</button>
    </div>
{/if}

<style lang="scss">
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .modal {
        background-color: var(--color-white);
        padding: 32px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 16px;
        overflow: auto;
    }
</style>