<script>
    import { Button } from "flowbite-svelte";
    import { FileOutline } from "flowbite-svelte-icons";

    export let href = "";
    export let icon = "";
    export let text = "Secondary Button";
</script>

<Button
    size="md"
    {href}
    class="bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]"
>
    {#if icon}
        <svelte:component this={icon} class="w-6 h-6 me-2" />
    {/if}{text}
</Button>
