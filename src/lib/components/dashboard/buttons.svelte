<script>
    import { Button, Indicator, Modal } from "flowbite-svelte";
    import {
        FileOutline,
        FolderOutline,
        UserOutline,
        ClockOutline,
    } from "flowbite-svelte-icons";
    let clickOutsideModal = false;
</script>

<div class="grid mb-4 md:flex md:justify-end md:mb-6">
    <Button
        on:click={() => (clickOutsideModal = true)}
        size="md"
        href=""
        class="bg-[#47277D] text-lg font-semibold hover:bg-[#321C59] hover:shadow-[0_0_10px_#6C5297]"
        ><FileOutline class="w-6 h-6 me-2" />
        Erste Aufnahme erstellen</Button
    >
</div>
<div class="grid grid-clos-3 gap-4 md:flex md:flex-wrap mb-6">
    <Button
        size="sm"
        href=""
        class=" relative bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]"
    >
        <UserOutline class="w-6 h-6 me-2" />Person ansehen
    </Button>

    <Button
        size="sm"
        href=""
        class="relative bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]"
    >
        <FolderOutline class="w-6 h-6 me-2" /><Indicator
            color="red"
            size="xl"
            placement="top-right"
            class="text-xs text-white font-bold">1</Indicator
        >Unbehandelte Aufnahme
    </Button>

    <Button
        size="sm"
        href=""
        class="relative bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]"
    >
        <ClockOutline class="w-6 h-6 me-2" />Verlauf
    </Button>
</div>

<Modal bind:open={clickOutsideModal} autoclose outsideclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        With less than a month to go before the European Union enacts new
        consumer privacy laws for its citizens, companies around the world
        are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.)
        goes into effect on May 25 and is meant to ensure a common set of
        data rights in the European Union. It requires organizations to
        notify users as soon as possible of high-risk data breaches that
        could personally affect them.
    </p>
    <div class="flex justify-center">
        <Button on:click={() => alert('Handle "success"')}>I accept</Button>
        <Button color="alternative">Decline</Button>
    </div>
</Modal>