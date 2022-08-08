<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import AboutMarkus from "$lib/about-markus/AboutMarkus.svelte";
	import Courses from "$lib/courses/Courses.svelte";
	import CtaDivider from "$lib/cta-divider/CtaDivider.svelte";
	import Description from "$lib/description/Description.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import Intro from "$lib/intro/Intro.svelte";
	import Testimonials from "$lib/testimonials/Testimonials.svelte";
	import Button from "../lib/button/Button.svelte";
	import Modal from "../lib/modal/Modal.svelte";

	let showModal = false;

	function openModal() {
		showModal = true;
		const scrollY = window.scrollY;
		const body = document.body;
		body.style.position = "fixed";
		body.style.paddingRight = "15px";
		body.style.top = `-${scrollY}px`;
	}

	function closeModal() {
		showModal = false;
		const body = document.body;
		const scrollY = body.style.top;
		body.style.position = "";
		body.style.paddingRight = "0";
		body.style.top = "";
		window.scrollTo(0, parseInt(scrollY || "0") * -1);
	}
</script>

<svelte:head>
    <title>Do things your way</title>
    <meta content="Svelte demo app" name="description"/>
</svelte:head>

<div>
    <Intro/>
    <Divider text="Få betalt för att vara dig själv."/>
    <Button onClick={openModal}>Visa modal</Button>
    <Modal on:close={closeModal} {showModal}/>
    <Description/>
    <CtaDivider/>
    <AboutMarkus/>
    <Divider text="Jobba inte hårdare, jobba smartare."/>
    <Courses/>
    <Testimonials/>
    <div class="image-wrapper">
        <img
                alt="En man och en kvinna står på en träbrygga framför en sjö. I bakgrunden syns berg och träd och gråa moln syns på himlen."
                src="/images/matilda-and-markus.jpeg"
        />
    </div>
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        width: 100%;

        .image-wrapper {
            padding: 0 16px;

            img {
                margin: var(--spacing-l);
                width: 600px;
                max-width: 100%;
                height: auto;
                border-radius: 8px;
            }
        }
    }
</style>
