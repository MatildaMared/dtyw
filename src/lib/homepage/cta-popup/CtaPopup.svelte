<script lang="ts">
	import Modal from "$lib/modal/Modal.svelte";
	import {
		addStylesWhenModalIsOpen,
		removeStylesWhenModalIsClosed
	} from "./../../../utils/modalHelpers";
	import { onMount } from "svelte";
	import Button from "$lib/button/Button.svelte";

	let showModal = false;

	function openModal() {
		showModal = true;
		addStylesWhenModalIsOpen();
	}

	function closeModal() {
		showModal = false;
		removeStylesWhenModalIsClosed();
	}

	function onClick() {
		removeStylesWhenModalIsClosed();
		window.open("https://www.dothingsyourway.com/webbinarie");
	}

	onMount(() => {
		setTimeout(() => {
			openModal();
		}, 10000);
	});
</script>

<Modal on:close={closeModal} {showModal}>
	<div class="content">
		<h1>Hej där! 👋</h1>
		<p>
			Vill du lära dig de <strong
				>fem bästa stegen för att maximera din tid, energi och produktivitet</strong
			> för att få ett bättre och mer lönsamt företag?
		</p>
		<p>
			Då tycker jag verkligen att du ska anmäla dig till nästa webbinarium 😊 Det är såklart helt
			kostnadsfritt så du har inget att förlora!
		</p>
		<Button {onClick}>Anmäl dig här</Button>
	</div>
</Modal>

<style lang="scss">
	.content {
		width: 700px;
		max-width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			font-size: var(--font-size-xl);
			margin-bottom: var(--spacing-m);
		}

		p {
			margin-bottom: 16px;
			width: 100%;
		}
	}
</style>
