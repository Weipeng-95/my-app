<script>
    import {Button} from "flowbite-svelte";
    import { FileOutline } from "flowbite-svelte-icons";
    
    export let href = "";
    export let icon = "";
    export let text = "Primary Button";
</script>

<Button
    size="md"
    href={href}
    class="bg-[#47277D] text-lg font-semibold hover:bg-[#321C59] hover:shadow-[0_0_10px_#6C5297]"
>
{#if icon}
<svelte:component this={icon} class="w-6 h-6 me-2" />
{/if}{text}
</Button>