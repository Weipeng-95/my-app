<script>
    import { Select, Label } from "flowbite-svelte";
    export let label;
    export let items;
    export let bindValue = "";
</script>

<Label class="text-md font-semibold">
    {label}
    <Select
        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
        {items}
        bind:value={bindValue}
    />
</Label>
