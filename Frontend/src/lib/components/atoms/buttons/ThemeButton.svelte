<script lang="ts">
    import Button from "@/components/ui/button/button.svelte";
    import { toggleMode } from "mode-watcher";

    import halfCircle from "@/assets/half-circle-svgrepo-com.svg";
    let {
        class: className  = "",
        variant = "default",
    } = $props<{
        class? : String;
        variant? : 'default' | 'outline' | 'ghost' | 'link';
    }>();

</script>

<div>
    <Button onclick={toggleMode} class={className}  variant={variant} size="icon" >
        <img src={halfCircle} alt="toggle mode" class=" h-6 w-6 dark:rotate-180" />
    </Button>
</div>
