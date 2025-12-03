<script lang="ts">
    import { draw, fly } from "svelte/transition";
    import { fibonacci, generateSpiralPath } from "./goldenRatioMath";
    import { cubicOut, quadOut } from "svelte/easing";
    import { onMount } from "svelte";

    let width = $state(0);
    let height = $state(0);
    let ready = $state(false);
    let animationFinished = $state(false);
    let num = 18;
    // console.log(fibonacci(num).filter((n) => n > 0));
    const rawData = fibonacci(num).filter((n) => n > 0);
    const pathData = generateSpiralPath(rawData);

    const maxRadius = rawData[rawData.length - 1];
    // dynamic calculation of scale to occupy 50% of the screen
    const scale = $derived((Math.min(width, height) / maxRadius) * 0.8 || 0.1);

    onMount(() => {
        ready = true;
    });
</script>

<div
    class="absolute inset-0 -z-10 overflow-hidden flex items-center justify-center"
    bind:clientHeight={height}
    bind:clientWidth={width}
>
    <svg {height} {width} class="w-full h-full">
        <g
            transform=" translate({width / 1.37}, {height /
                3.5}) scale({scale}) rotate(-90)"
        >
            {#if ready}
                <path
                    d={pathData}
                    stroke="oklch(64.71% 0.21732 36.839)"
                    stroke-width={2 / scale}
                    fill="none"
                    stroke-linecap="round"
                    transition:draw={{
                        duration: 4000, // 4 seconds to draw
                        easing: quadOut,
                    }}
                    onintroend={() => {
                        console.log("Spiral Done. Triggering Text.");
                        animationFinished = true;
                    }}
                />
            {/if}
        </g>
    </svg>

    {#if animationFinished}
        <div
            class="z-10 text-center"
            in:fly={{ y: 50, duration: 1000, easing: cubicOut }}
        >
            <h1 class="text-6xl font-bold text-white mb-4">Vishwa</h1>
            <p class="text-xl text-gray-400">
                Frontend Developer & Data Science Enthusiast
            </p>
        </div>
    {/if}
</div>
