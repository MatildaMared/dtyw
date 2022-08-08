<script lang="ts">
	import AboutMarkus from "$lib/about-markus/AboutMarkus.svelte";
	import Courses from "$lib/courses/Courses.svelte";
	import CtaDivider from "$lib/cta-divider/CtaDivider.svelte";
	import Description from "$lib/description/Description.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import Intro from "$lib/intro/Intro.svelte";
	import Testimonials from "$lib/testimonials/Testimonials.svelte";
	import CtaPopup from "../lib/cta-popup/CtaPopup.svelte";
</script>

<svelte:head>
    <title>Do things your way</title>
    <meta content="Svelte demo app" name="description"/>
</svelte:head>

<div>
    <Intro/>
    <Divider text="Få betalt för att vara dig själv."/>
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
    <CtaPopup/>
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
