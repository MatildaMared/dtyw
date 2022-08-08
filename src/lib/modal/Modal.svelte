<script lang="ts">
	import {createEventDispatcher} from "svelte";
	import {fade} from "svelte/transition";
	import {XIcon} from "svelte-feather-icons";

	export let showModal;
	let modal;
	const dispatch = createEventDispatcher();
	const close = () => dispatch("close");

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "Escape") {
			close();
			return;
		}

		if (e.key === "Tab") {
			// trap focus
			const nodes = modal.querySelectorAll("*");
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if showModal}
    <div class="modal-background" on:click={close} transition:fade={{duration: 250}}></div>
    <div class="modal" transition:fade bind:this={modal}>
        <button class="close-btn" autofocus on:click={close}>
            <span class="screen-reader-text">Stäng fönster</span>
            <XIcon/>
        </button>
        <h1>Detta är en modal</h1>
    </div>
{/if}

<style lang="scss">
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.75);
        z-index: 1;
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
        z-index: 1;
    }

    .close-btn {
        color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 16px;
        right: 16px;
        padding: 6px;
        z-index: 2;
        border-radius: 50%;
        background: transparent;
        cursor: pointer;
        transition: all .2s ease-in-out;
        border: none;
        outline: 2px solid transparent;

        &:hover, &:focus {
            color: #000;
            outline: 2px solid #000;
        }
    }
</style>