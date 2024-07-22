<script>
  import Form from "$lib/components/form.svelte";
    import { Button, Indicator, Modal } from "flowbite-svelte";
    import {
        FileOutline,
        FolderOutline,
        UserOutline,
        ClockOutline,
    } from "flowbite-svelte-icons";
    let showForm = false;
    let clickOutsideModal = false;
    let indicatorCount = 1;

    function openForm() {
    showForm = true;
  }
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
        href="/persondatabase"
        class=" relative bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]"
    >
        <UserOutline class="w-6 h-6 me-2" />Person ansehen
    </Button>

    <Button
        size="sm"
        href=""
        class="relative bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]"
    >
        <FolderOutline class="w-6 h-6 me-2" />{#if indicatorCount > 0}
            <Indicator
                color="red"
                size="xl"
                placement="top-right"
                class="text-xs text-white font-bold">{indicatorCount}</Indicator
            >
        {/if}Unbehandelte Aufnahme
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
    <div class="flex justify-center">
        <Button on:click={openForm}>SNF</Button>
        <Button on:click={openForm}>ALT</Button>
    </div>
</Modal>

{#if showForm}
  <Modal bind:open={showForm} autoclose outsideclose>
    <Form />
  </Modal>
{/if}