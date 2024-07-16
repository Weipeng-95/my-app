<script>
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        TableSearch,
        Button,
        Indicator,
        Modal,
        Card,
        Input, Label, Helper, Checkbox, A
    } from "flowbite-svelte";
    import PrimaryButton from "../lib/components/PrimaryButton.svelte";
    import SecondaryButton from "$lib/components/SecondaryButton.svelte";
    import {
        FileOutline,
        FolderOutline,
        UserOutline,
        ClockOutline,
    } from "flowbite-svelte-icons";
    import { text } from "@sveltejs/kit";
    let clickOutsideModal = false;

    let userName = "Username";
    let searchTerm = "";
    let items = [
        {
            id: 1,
            maker: "Toyotsdfadsfasdfsdfa",
            type: "ABadsfdasfC",
            make: 2017,
        },
        { id: 2, maker: "Ford", type: "CDE", make: 2018 },
        { id: 3, maker: "Volvo", type: "FGH", make: 2019 },
        { id: 4, maker: "Saab", type: "IJK", make: 2020 },
    ];
    $: filteredItems = items.filter(
        (item) =>
            item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1,
    );
</script>

<Navbar
    class="px-12 sm:px-48 py-5 fixed w-full z-20 top-0 start-0 border-b bg-[#47277D] text-white"
>
    <NavBrand href="/">
        <span
            class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
            >Silbernetz+ | Matching-System</span
        >
    </NavBrand>
    <NavHamburger class="hover:bg-[#321C59]" />
    <NavUl class="bg-[#47277D] hover:text-[#321C59]">
        <NavLi
            class="bg-[#47277D] text-white hover:bg-[#321C59]"
            href="/"
            active={true}>Abmelden</NavLi
        >
        <!-- <NavLi href="/about">About</NavLi>
        <NavLi href="/docs/components/navbar">Navbar</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi> -->
    </NavUl>
</Navbar>

<div class="relative px-12 xs:px-20 sm:px-48">
    <!-- <div class="overflow-scroll pb-12">
        <p class=""></p>
    </div> -->
    <h1
        class="mt-32 mb-8 text-5xl font-black text-black leading-[62px] max-md:mt-28 max-md:max-w-full max-md:text-4xl max-md:leading-[35px]"
    >
        Guten Tag,<br />{userName}
    </h1>
    <div class="flex justify-end mb-6">
        <Button
            on:click={() => (clickOutsideModal = true)}
            size="md"
            href=""
            class="bg-[#47277D] text-lg font-semibold hover:bg-[#321C59] hover:shadow-[0_0_10px_#6C5297]"
            ><FileOutline class="w-6 h-6 me-2" />
            Erste Aufnahme erstellen</Button
        >
    </div>

    <!-- 
    <SecondaryButton text="Person ansehen"></SecondaryButton>
    <SecondaryButton text="Unbehandelte Aufnahme"></SecondaryButton>
    <SecondaryButton text="Verlauf"></SecondaryButton> -->

    <div class="flex-warp mb-6">
        <Button
            size="sm"
            href=""
            class="mr-4 mb-2 relative bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]"
        >
            <UserOutline class="w-6 h-6 me-2" />Person ansehen
        </Button>

        <Button
            size="sm"
            href=""
            class="mr-4 mb-2 relative bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]"
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
            class="mb-2 relative bg-[#F8F8F9] text-lg text-[#47277D] font-semibold hover:bg-[#F8F8F9] hover:shadow-[0_0_10px_#6C5297] border-2 border-[#846EA8]"
        >
            <ClockOutline class="w-6 h-6 me-2" />Verlauf
        </Button>
    </div>

    <!-- <TableSearch
        placeholder="Suche Person nach Name"
        customColor=""
        hoverable={true}
        bind:inputValue={searchTerm}
    >
        <TableHead>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Make</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
            {#each filteredItems as item}
                <TableBodyRow>
                    <TableBodyCell>{item.id}</TableBodyCell>
                    <TableBodyCell>{item.maker}</TableBodyCell>
                    <TableBodyCell>{item.type}</TableBodyCell>
                    <TableBodyCell>{item.make}</TableBodyCell>
                    <TableBodyCell>
                        <a
                            href="/"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >Ansehen</a
                        >
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </TableSearch> -->

    <Modal bind:open={clickOutsideModal} autoclose outsideclose>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
        <div class="flex justify-center">
            <Button on:click={() => alert('Handle "success"')}>I accept</Button>
            <Button color="alternative">Decline</Button>
        </div>
      </Modal>
      <div class="grid gap-4 grid-cols-3">
      <Card class="bg-[#FEFCF9] shadow-[0_0_38px_rgba(108,82,151,0.2)] border border-[#C6BCD7]">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </Card>
      <Card class="bg-[#FEFCF9] shadow-[0_0_38px_rgba(108,82,151,0.2)] border border-[#C6BCD7]">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </Card>
      <Card class="bg-[#FEFCF9] shadow-[0_0_38px_rgba(108,82,151,0.2)] border border-[#C6BCD7]">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </Card>
      </div>
</div>

