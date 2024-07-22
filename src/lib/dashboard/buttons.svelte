<script>
    import Form from "$lib/components/FirstContactForm.svelte";
    import { Button, Card, Indicator, Modal } from "flowbite-svelte";
    import {
        FileOutline,
        FolderOutline,
        UserOutline,
        ClockOutline,
    } from "flowbite-svelte-icons";
    import snf_icon from "../icons/SNF_Icon.svg";
    import senior_icon from "../icons/Senior_Icon.svg";
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
    <h1
    class="mb-8 text-5xl font-black text-black leading-[62px] max-md:mt-28 max-md:max-w-full max-md:text-4xl max-md:leading-[35px] flex justify-center"
    >
    Erste Aufnahme
    </h1> 
    <h2> Bitte wählen Sie die Art der Person aus, um Informationen schnell zu aufnehmen.</h2>
    <div class="flex justify-center">
        <Button size="xl" 
         class="mr-4 relative bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]" on:click={openForm}>
            <img src={senior_icon} class="w-6 h-6 me-2" alt="Icon Description" />
        </Button>
        <Button size="xl" class="mr-4 relative bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]" on:click={openForm}>
            <img src={snf_icon} class="w-6 h-6 me-2" alt="Icon Description" />
        </Button>
    </div>
</Modal>

{#if showForm}
  <Modal bind:open={showForm} autoclose outsideclose>
    <Form />
  </Modal>
{/if}