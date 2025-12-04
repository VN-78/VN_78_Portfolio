<script lang="ts">
    import { draw, fly } from "svelte/transition";
    import { fibonacci, generateSpiralPath } from "./goldenRatioMath";
    import { cubicOut, quadOut } from "svelte/easing";
    import { onMount } from "svelte";

    let width = $state(0);
    let height = $state(0);
    let ready = $state(false);
    let { animationFinished }: { animationFinished?: () => void } = $props();
    let num = 18;
    // console.log(fibonacci(num).filter((n) => n > 0));
    const rawData = fibonacci(num).filter((n) => n > 0);
    const pathData = generateSpiralPath(rawData);

    // 2. Responsive Scaling
    // Calculate how much to zoom to fit 80% of the screen
    // We check both width and height to ensure it fits on mobile too
    const scale = $derived(
        (Math.min(width, height) / Math.max(pathData.width, pathData.height)) *
            1.3 || 0.1,
    );

    onMount(() => {
        ready = true;
    });
</script>

<div
    class="absolute inset-0 -z-10 overflow-hidden flex items-center justify-center"
    bind:clientHeight={height}
    bind:clientWidth={width}
>
    <svg
        {height}
        {width}
        class="w-full h-full absolute inset-0 pointer-events-none transition-transform duration-300"
    >
        <g
            transform=" translate({width / 2}, {height /
                2}) scale({scale}) scale(-1,1) rotate(90) translate({-pathData.centerX}, {-pathData.centerY})"
        >
            {#if ready}
                <path
                    d={pathData.path}
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
                        animationFinished?.();
                    }}
                />
            {/if}
        </g>
    </svg>
</div>
