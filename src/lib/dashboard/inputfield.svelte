<script lang="ts">
    import { Input, Label } from "flowbite-svelte";
    export let label;
    export let type;
    export let bindValue: any;
</script>

<div>
    <Label class="text-md font-semibold">
        {label}
    </Label>
    <Input
        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
        {type}
        bind:value={bindValue}
    />
</div>
