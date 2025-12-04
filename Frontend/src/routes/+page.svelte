<script>
    import NavBar from "@/components/molecules/navbar/NavBar.svelte";
    import GoldenRatioAnimation from "@/components/animations/HeroAnimation/GoldenRatioAnimation.svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    let showText = $state(false);
</script>

<div class=" bg-background">
    <NavBar />
    <GoldenRatioAnimation animationFinished={() => (showText = true)} />

    {#if showText}
        <div
            class="z-10  "
            in:fly={{ y: 100, duration: 1000, easing: cubicOut }}
        >
            <h1
                class="text-4xl md:text-6xl font-bold  text-primary-foreground mb-4"
            >
                {` Software Developer `}
            </h1>
        </div>
        {/if}
</div>
