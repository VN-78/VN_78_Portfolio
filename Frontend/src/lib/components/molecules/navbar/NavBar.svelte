<script lang="ts">
    // import * as NavigationMenu from "@/components/ui/navigation-menu";
    import ThemeButton from "@/components/atoms/buttons/ThemeButton.svelte";
    import * as Avatar from "@/components/ui/avatar/index";
    import vnIcon from "@/assets/vn-svgrepo-com.svg";
</script>

<div
    class=" bg-foreground text-primary w-full h-fit flex justify-between items-center p-2  px-4 "
>
    <Avatar.Root class=" bg-foreground-primary w-12 h-12  p-2" >
        <Avatar.Image src={vnIcon} alt="@vn-78" />
        <Avatar.Fallback>VN</Avatar.Fallback>
    </Avatar.Root>
    <ThemeButton variant="outline"></ThemeButton>

</div>
