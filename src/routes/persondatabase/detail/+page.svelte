<script>
    import {
        Input,
        Button,
        Breadcrumb,
        BreadcrumbItem,
        Badge,
        Select,
        Label,
    } from "flowbite-svelte";
    import { UsersOutline, UserEditOutline } from "flowbite-svelte-icons";
    import InfoRow from "$lib/dashboard/inforow.svelte";
    import SelectField from "$lib/dashboard/selectfield.svelte";
    import InputField from "$lib/dashboard/inputfield.svelte";

    let person = {
        title: "Frau",
        name: "Greda Schultz",
        type: "Senior",
        age: 71,
        gender: "Weblich",
        address: "Karl-Marx-Straße 12A, 12043 Berlin",
        state: "Berlin",
        facility: 'Alloheim Senioren-Residenz "Am Müggelpark"',
        tel: "+49 30 12345678",
        mobile: "+49 171 98765432",
        availability: [{ times_a_week: 2, daytime: "nachmittags" }],
        living_form:
            "Alleinlebend in einer kleinen Wohnung in der Nähe seiner Familie",
        interests: ["Lesen", "Fernsehen", "Musik", "Spaziergang"],
        pet: ["Hund", "Katze"],
        dialect: "/",
        speaking_style: "Ruhig und bedacht",
        general_mood: "/",
        id: 736,
        status: "Neuzugang",
        stammnr: "00493092031302",
        ddi: "114",
        entry_date: "27-10-2023",
        cancellation_date: "/",
        matchings: [],
        last_change: "02-04-2024",
        operator: "Martina Müller",
        notes: "Lorem ipsum dolor sit amet, error virtute vix eu, falli timeam vulputate at per. Diceret accusam scriptorem sea ne, mel ad nihil causae. Facer quidam feugait nam in, ut mel congue definiebas, tota animal fabellas",
    };

    let isEditing = false;
    function toggleEditMode() {
        isEditing = !isEditing;
    }

    let selected = "";
    let title = [
        { value: "Frau", name: "Frau" },
        { value: "Herr", name: "Herr" },
    ];
    let type = [
        { value: "Senior", name: "Senior" },
        { value: "SNF", name: "SNF" },
    ];
    let gender = [
        { value: "Weblich", name: "Weblich" },
        { value: "Männlich", name: "Männlich" },
        { value: "Divers", name: "Divers" },
    ];
    let state = [
        { value: "Baden-Württemberg", name: "Baden-Württemberg" },
        { value: "Bayern", name: "Bayern" },
        { value: "Berlin", name: "Berlin" },
        { value: "Brandenburg", name: "Brandenburg" },
        { value: "Bremen", name: "Bremen" },
        { value: "Hamburg", name: "Hamburg" },
        { value: "Hessen", name: "Hessen" },
        { value: "Mecklenburg-Vorpommern", name: "Mecklenburg-Vorpommern" },
        { value: "Niedersachsen", name: "Niedersachsen" },
        { value: "Nordrhein-Westfalen", name: "Nordrhein-Westfalen" },
        { value: "Rheinland-Pfalz", name: "Rheinland-Pfalz" },
        { value: "Saarland", name: "Saarland" },
        { value: "Sachsen", name: "Sachsen" },
        { value: "Sachsen-Anhalt", name: "Sachsen-Anhalt" },
        { value: "Schleswig-Holstein", name: "Schleswig-Holstein" },
        { value: "Thüringen", name: "Thüringen" },
    ];
</script>

<!-- Breadcrumb, showing the routes -->
<Breadcrumb aria-label="Default breadcrumb example">
    <BreadcrumbItem href="/" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/persondatabase">Personendatenbank</BreadcrumbItem>
    <BreadcrumbItem>Ansehen</BreadcrumbItem>
</Breadcrumb>
<!-- Site Title -->
<h1
    class="mt-4 mb-6 text-4xl font-black text-black leading-[62px] max-md:mt-6 max-md:max-w-full max-md:text-3xl max-md:leading-[35px]"
>
    Personendaten ansehen
</h1>
<div class="grid gap-4 mb-12 md:flex md:justify-end md:sticky top-32">
    <Button
        size="xs"
        href=""
        class="bg-[#47277D] text-md font-semibold hover:bg-[#321C59] hover:shadow-[0_0_10px_#6C5297]"
        ><UsersOutline class="w-6 h-6 me-2" />
        Match tätigen</Button
    >
    <Button
        on:click={toggleEditMode}
        size="xs"
        href=""
        class="bg-[#47277D] text-md font-semibold hover:bg-[#321C59] hover:shadow-[0_0_10px_#6C5297]"
        ><UserEditOutline class="w-6 h-6 me-2" />
        Bearbeiten</Button
    >
</div>

{#if isEditing}
    <div class="grid md:grid-cols-[0.35fr_0.8fr]">
        <div class="container mb-8">
            <div class="text-xl font-bold mb-1">Persönliche Daten</div>
            <p class="text-sm text-neutral-700">
                Hier sind die grundlegende Informationen von dieser Person
            </p>
        </div>
        <div>
            <div class="grid grid-cols-2 gap-4 mb-3">
                <SelectField
                    label="Anrede"
                    items={title}
                    bindValue={person.title}
                />
                <InputField label="Name" type="text" bindValue={person.name} />
            </div>

            <div class="grid grid-cols-2 gap-4 mb-3">
                <SelectField
                    label="Type"
                    items={type}
                    bindValue={person.type}
                />
                <InputField
                    label="Alter"
                    type="number"
                    bindValue={person.age}
                />
            </div>

            <div class="grid grid-cols-2 gap-4 mb-3">
                <SelectField
                    label="Geschlecht"
                    items={gender}
                    bindValue={person.gender}
                />
                <InputField
                    label="Anschrift"
                    type="text"
                    bindValue={person.address}
                />
            </div>

            <div class="grid grid-cols-2 gap-4 mb-3">
                <SelectField
                    label="Bundesland"
                    items={state}
                    bindValue={person.state}
                />
                <InputField
                    label="Einrichtung"
                    type="text"
                    bindValue={person.facility}
                />
            </div>

            <div class="grid grid-cols-2 gap-4 mb-3">
                <InputField
                    label="Festnetz"
                    type="text"
                    bindValue={person.tel}
                />
                <InputField
                    label="Mobil"
                    type="text"
                    bindValue={person.mobile}
                />
            </div>
        </div>
    </div>
{:else}
    <div class="grid md:grid-cols-[0.25fr_0.65fr]">
        <div class="container mb-8">
            <div class="text-xl font-bold mb-1">Persönliche Daten</div>
            <p class="text-sm text-neutral-700">
                Hier sind die grundlegende Informationen von dieser Person
            </p>
        </div>
        <div class="container md:ml-24">
            <div class="grid grid-cols-2 gap-4">
                <InfoRow label="Anrede" value={person.title} />
                <InfoRow label="Name" value={person.name} />
            </div>

            <div class="grid grid-cols-2 gap-4">
                <InfoRow label="Typ" value={person.type} />
                <InfoRow label="Alter" value={person.age} />
            </div>

            <div class="grid grid-cols-2 gap-4">
                <InfoRow label="Geschlecht" value={person.gender} />
                <InfoRow label="Anschrift" value={person.address} />
            </div>

            <div class="grid grid-cols-2 gap-4">
                <InfoRow label="Bundesland" value={person.state} />
                <InfoRow label="Einrichtung" value={person.facility} />
            </div>
            <div class="grid grid-cols-2 gap-4">
                <InfoRow label="Festnetz" value={person.tel} />
                <InfoRow label="Mobil" value={person.mobile} />
            </div>
        </div>
    </div>
{/if}

<!-- Divide -->
<div class="border-b border-primary-100 mt-4 mb-4"></div>

<div class="grid md:grid-cols-[0.25fr_0.65fr]">
    <div class="container mb-8">
        <div class="text-xl font-bold mb-1">Persönlichkeit</div>
        <p class="text-sm text-neutral-700">
            Hier sind die Informationen, die für das Match wichtig sind
        </p>
    </div>
    <div class="container md:ml-24">
        <div class="grid grid-cols-2 gap-4">
            <div>
                <div class="text-md font-semibold">Erreichbarkeit</div>
                <p class="mb-6">
                    {person.availability[0].times_a_week} Mal pro Woche, {person
                        .availability[0].daytime}
                </p>
            </div>
            <InfoRow label="Lebnesform" value={person.living_form} />
        </div>

        <div class="grid grid-cols-2 gap-4">
            <div class="mb-6">
                <div class="text-md font-semibold">Interessen</div>
                {#each person.interests as interest, index}
                    <Badge class="mt-1 mr-1" large>
                        {interest}
                    </Badge>
                {/each}
            </div>
            <div class="mb-6">
                <div class="text-md font-semibold">Haustier</div>
                {#each person.pet as pet, index}
                    <Badge class="mt-1 mr-1" large>
                        {pet}
                    </Badge>
                {/each}
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <InfoRow label="Dialekt" value={person.dialect} />
            <InfoRow label="Sprechweise" value={person.speaking_style} />
        </div>

        <div class="grid grid-cols-2 gap-4">
            <InfoRow label="Grundstimmung" value={person.general_mood} />
        </div>
    </div>
</div>

<!-- Divide -->
<div class="border-b border-primary-100 pt-4 mb-4"></div>

<div class="grid md:grid-cols-[0.25fr_0.65fr]">
    <div class="container mb-8">
        <div class="text-xl font-bold mb-1">Organisatorische Informationen</div>
        <p class="text-sm text-neutral-700">
            Hier sind die Informationen, die für interne Mitarbeiter/-in
            relevant sind
        </p>
    </div>
    <div class="container md:ml-24">
        <div class="grid grid-cols-2 gap-4">
            <InfoRow label="ID" value={person.id} />
            <InfoRow label="Status" value={person.status} />
        </div>

        <div class="grid grid-cols-2 gap-4">
            <InfoRow label="Stammnr." value={person.stammnr} />
            <InfoRow label="DDI" value={person.ddi} />
        </div>

        <div class="grid grid-cols-2 gap-4">
            <InfoRow label="Zugangsdatum" value={person.entry_date} />
            <InfoRow label="Abgangsdatum" value={person.cancellation_date} />
        </div>

        <div class="grid grid-cols-2 gap-4">
            <InfoRow label="Matchings" value={person.matchings} />
            <InfoRow label="Letzte Änderung" value={person.last_change} />
        </div>

        <InfoRow label="Bearbeiter/-in" value={person.operator} />

        <InfoRow label="Notizen" value={person.notes} />
    </div>
</div>
