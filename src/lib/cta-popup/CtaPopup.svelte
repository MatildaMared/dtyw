<script lang="ts">
	import Modal from "../modal/Modal.svelte";
	import {
		addStylesWhenModalIsOpen,
		removeStylesWhenModalIsClosed
	} from "../../utils/modalHelpers";
	import {onMount} from "svelte";

	let showModal = false;

	function openModal() {
		showModal = true;
		addStylesWhenModalIsOpen();
	}

	function closeModal() {
		showModal = false;
		removeStylesWhenModalIsClosed();
	}

	onMount(() => {
		setTimeout(() => {
			openModal();
		}, 10000);
	});
    
</script>

<Modal on:close={closeModal} {showModal}>
    <div class="content">
        <h1>Modal</h1>
        <p>
            This is a modal.
        </p>
    </div>
</Modal>

<style lang="scss">
    .content {
        width: 700px;
        max-width: 90%;
    }
</style>