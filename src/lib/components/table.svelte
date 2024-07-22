<script>
    import {
        TableSearch,
        TableHead,
        TableHeadCell,
        TableBody,
        TableBodyRow,
        TableBodyCell,
    } from "flowbite-svelte";
    let searchTerm = "";
    let items = [
        {
            name: "Toyota",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Ford",
            type: "Senior",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Volvo",
            type: "Senior",
            gender: "weblich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
        {
            name: "Saab",
            type: "SNF",
            gender: "männlich",
            age: 30,
            status: "Neuzugang",
            tel: "012343395732",
        },
    ];
    $: filteredItems = items.filter(
        (item) =>
            item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1,
    );
</script>

<TableSearch
    tableBodyClass="bg-black"
    classInput="mb-6 bg-secondary-50 border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
    placeholder="Suche Person nach Name"
    customColor=""
    hoverable={true}
    bind:inputValue={searchTerm}
>
    <TableHead>
        <TableHeadCell class="bg-primary-50">Name</TableHeadCell>
        <TableHeadCell class="bg-primary-50">Typ</TableHeadCell>
        <TableHeadCell class="bg-primary-50">Geschlecht</TableHeadCell>
        <TableHeadCell class="bg-primary-50">Alter</TableHeadCell>
        <TableHeadCell class="bg-primary-50">Status</TableHeadCell>
        <TableHeadCell class="bg-primary-50">Telefonnr.</TableHeadCell>
        <TableHeadCell class="bg-primary-50 sticky right-0 shadow-md"
            >Aktion</TableHeadCell
        >
    </TableHead>
    <TableBody tableBodyClass="divide-y">
        {#each filteredItems as item}
            <TableBodyRow>
                <TableBodyCell class="bg-[#FEFCF9]">{item.name}</TableBodyCell>
                <TableBodyCell class="bg-[#FEFCF9]">{item.type}</TableBodyCell>
                <TableBodyCell class="bg-[#FEFCF9]">{item.gender}</TableBodyCell
                >
                <TableBodyCell class="bg-[#FEFCF9]">{item.age}</TableBodyCell>
                <TableBodyCell class="bg-[#FEFCF9]">{item.status}</TableBodyCell
                >
                <TableBodyCell class="bg-[#FEFCF9]">{item.tel}</TableBodyCell>
                <TableBodyCell class="bg-[#FEFCF9] sticky right-0">
                    <a
                        href="/persondatabase/detail"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >Ansehen</a
                    >
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</TableSearch>
