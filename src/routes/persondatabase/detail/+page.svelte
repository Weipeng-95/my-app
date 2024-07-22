<!-- TODO:
 for und id für Input verbinden
 Möglcihe Code optimieren(Reuse)
  -->
<script>
    import {
        Input,
        Button,
        Breadcrumb,
        BreadcrumbItem,
        Badge,
        Select,
        Label,
        MultiSelect,
        Textarea,
    } from "flowbite-svelte";
    import {
        UsersOutline,
        UserEditOutline,
        FloppyDiskAltOutline,
    } from "flowbite-svelte-icons";
    import InfoRow from "$lib/dashboard/inforow.svelte";

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
        availability: [
            { times_a_week: "2 Mal pro Woche", daytime: "nachmittags" },
        ],
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
    let times_a_week = [
        { value: "1 Mal pro Woche", name: "1 Mal pro Woche" },
        { value: "2 Mal pro Woche", name: "2 Mal pro Woche" },
        { value: "3 Mal pro Woche", name: "3 Mal pro Woche" },
        { value: "Mehr als 3 Mal pro Woche", name: "Mehr als 3 Mal pro Woche" },
    ];
    let daytime = [
        { value: "morgens", name: "morgens" },
        { value: "vormittags", name: "vormittags" },
        { value: "mittags", name: "mittags" },
        { value: "nachmittags", name: "nachmittags" },
        { value: "abends", name: "abends" },
        { value: "nachts", name: "nachts" },
    ];
    let interest = [
        { value: "Lesen", name: "Lesen" },
        { value: "Musik", name: "Musik" },
        { value: "Fernsehen", name: "Fernsehen" },
        { value: "Spaziergang", name: "Spaziergang" },
        { value: "Kanu", name: "Kanu" },
        { value: "Fußball", name: "Fußball" },
    ];
    let pet = [
        { value: "Hund", name: "Hund" },
        { value: "Katze", name: "Katze" },
        { value: "Vogel", name: "Vogel" },
        { value: "Kaninchen", name: "Kaninchen" },
        { value: "Meerschweinchen", name: "Meerschweinchen" },
        { value: "Schlange", name: "Schlange" },
    ];
    let selected_interest = [];
    let selected_pet = [];
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
<div class="grid gap-4 mb-12 md:flex md:justify-end sticky top-32">
    {#if !isEditing}<Button
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
    {:else}
        <Button
            on:click={toggleEditMode}
            size="xs"
            href=""
            class="bg-[#47277D] text-md font-semibold hover:bg-[#321C59] hover:shadow-[0_0_10px_#6C5297]"
            ><FloppyDiskAltOutline class="w-6 h-6 me-2" />
            Änderungen speichern</Button
        >
    {/if}
</div>

{#if isEditing}
    <div class="grid md:grid-cols-[0.35fr_0.8fr]">
        <div class="container mb-8">
            <div class="text-xl font-bold mb-1">Persönliche Daten</div>
            <p class="text-sm text-neutral-700 w-72">
                Hier sind die grundlegende Informationen von dieser Person
            </p>
        </div>

        <div>
            <div class="grid gap-3 md:grid-cols-2 md:gap-6 mb-3">
                <Label class="text-md font-semibold">
                    Anrede
                    <Select
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        items={title}
                        bind:value={person.title}
                    />
                </Label>
                <div>
                    <Label class="text-md font-semibold">Name</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.name}
                    />
                </div>
            </div>

            <div class="grid gap-3 md:grid-cols-2 md:gap-6 mb-3">
                <Label class="text-md font-semibold">
                    Type
                    <Select
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        items={type}
                        bind:value={person.type}
                    />
                </Label>
                <div>
                    <Label class="text-md font-semibold">Alter</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="number"
                        bind:value={person.age}
                    />
                </div>
            </div>

            <div class="grid gap-3 md:grid-cols-2 md:gap-6 mb-3">
                <Label class="text-md font-semibold">
                    Geschlecht
                    <Select
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        items={gender}
                        bind:value={person.gender}
                    />
                </Label>
                <div>
                    <Label class="text-md font-semibold">Anschrift</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.address}
                    />
                </div>
            </div>

            <div class="grid gap-3 md:grid-cols-2 md:gap-6 mb-3">
                <Label class="text-md font-semibold">
                    Bundesland
                    <Select
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        items={state}
                        bind:value={person.state}
                    />
                </Label>
                <div>
                    <Label class="text-md font-semibold">Einrichtung</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.facility}
                    />
                </div>
            </div>

            <div class="grid gap-3 md:grid-cols-2 md:gap-6 mb-3">
                <div>
                    <Label class="text-md font-semibold">Festnetz</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.tel}
                    />
                </div>
                <div>
                    <Label class="text-md font-semibold">Mobil</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.mobile}
                    />
                </div>
            </div>
        </div>
    </div>
{:else}
    <div class="grid md:grid-cols-[0.25fr_0.65fr]">
        <div class="container mb-8">
            <div class="text-xl font-bold mb-1">Persönliche Daten</div>
            <p class="text-sm text-neutral-700 w-72">
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
<div class="border border-primary-100 mt-4 mb-6"></div>

{#if isEditing}
    <div class="grid md:grid-cols-[0.35fr_0.8fr]">
        <div class="container mb-8">
            <div class="text-xl font-bold mb-1">Persönlichkeit</div>
            <p class="text-sm text-neutral-700 w-72">
                Hier sind die Informationen, die für das Match wichtig sind
            </p>
        </div>

        <div>
            <div class="grid gap-3 md:grid-cols-2 md:gap-6 mb-3">
                <div class="md:flex md:flex-nowrap">
                    <Label class="text-md font-semibold md:mr-5 mb-3 md:mb-0">
                        Erreichbarkeit-Häufigkeit
                        <Select
                            class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                            items={times_a_week}
                            bind:value={person.availability[0].times_a_week}
                        />
                    </Label>
                    <Label class="text-md font-semibold">
                        Erreichbarkeit-Tageszeit
                        <Select
                            class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                            items={daytime}
                            bind:value={person.availability[0].daytime}
                        />
                    </Label>
                </div>
                <div>
                    <Label class="text-md font-semibold">Lebnesform</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.living_form}
                    />
                </div>
            </div>

            <div class="grid gap-3 md:grid-cols-2 md:gap-6 mb-3 h-auto">
                <div>
                    <Label class="text-md font-semibold">Interessen</Label>
                    <MultiSelect
                        class="mt-1 bg-secondary-50 font-normal text-sm border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        items={interest}
                        bind:value={person.interests}
                    />
                </div>

                <div>
                    <Label class="text-md font-semibold">Haustier</Label>
                    <MultiSelect
                        class="mt-1 bg-secondary-50 font-normal text-sm border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        items={pet}
                        bind:value={person.pet}
                    />
                </div>
            </div>

            <div class="grid gap-3 md:grid-cols-2 md:gap-6 mb-3">
                <div>
                    <Label class="text-md font-semibold">Dialekt</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.dialect}
                    />
                </div>
                <div>
                    <Label class="text-md font-semibold">Sprechweise</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.speaking_style}
                    />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                <div>
                    <Label class="text-md font-semibold">Grundstimmung</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.general_mood}
                    />
                </div>
            </div>
        </div>
    </div>
{:else}
    <div class="grid md:grid-cols-[0.25fr_0.65fr]">
        <div class="container mb-8">
            <div class="text-xl font-bold mb-1">Persönlichkeit</div>
            <p class="text-sm text-neutral-700 w-72">
                Hier sind die Informationen, die für das Match wichtig sind
            </p>
        </div>
        <div class="container md:ml-24">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <div class="text-md font-semibold">Erreichbarkeit</div>
                    <p class="mb-6">
                        {person.availability[0].times_a_week}, {person
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
{/if}

<!-- Divide -->
<div class="border border-primary-100 mt-4 mb-6"></div>
{#if isEditing}
    <div class="grid md:grid-cols-[0.35fr_0.8fr]">
        <div class="container mb-8">
            <div class="text-xl font-bold mb-1">
                Organisatorische Informationen
            </div>
            <p class="text-sm text-neutral-700 w-72">
                Hier sind die Informationen, die für interne Mitarbeiter/-in
                relevant sind
            </p>
        </div>

        <div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                <div>
                    <Label class="text-md font-semibold">ID</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.id}
                    />
                </div>
                <div>
                    <Label class="text-md font-semibold">Status</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.status}
                    />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                <div>
                    <Label class="text-md font-semibold">Stammnr.</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.stammnr}
                    />
                </div>
                <div>
                    <Label class="text-md font-semibold">DDI</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="number"
                        bind:value={person.ddi}
                    />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                <div>
                    <Label class="text-md font-semibold">Zugangsdatum</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.entry_date}
                    />
                </div>
                <div>
                    <Label class="text-md font-semibold">Abgangsdatum</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.cancellation_date}
                    />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                <div>
                    <Label class="text-md font-semibold">Matchings</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.matchings}
                    />
                </div>
                <div>
                    <Label class="text-md font-semibold">Letzte Änderung</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.last_change}
                    />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                <div>
                    <Label class="text-md font-semibold">Bearbeiter/-in</Label>
                    <Input
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        type="text"
                        bind:value={person.operator}
                    />
                </div>
            </div>
            <div class="grid grid-cols-1 gap-6 mb-3">
                <div>
                    <Label class="text-md font-semibold">Notizen</Label>
                    <Textarea
                        class="mt-1 bg-secondary-50 font-normal border-2 border-[#846EA8] focus:border-[#47277D] focus:ring-transparent hover:shadow-[0_0_10px_#6C5297] focus:shadow-[0_0_10px_#6C5297]"
                        placeholder="Hier die Notizen für die Person..."
                        rows="4"
                        bind:value={person.notes}
                    />
                </div>
            </div>
        </div>
    </div>
{:else}
    <div class="grid md:grid-cols-[0.25fr_0.65fr]">
        <div class="container mb-8">
            <div class="text-xl font-bold mb-1">
                Organisatorische Informationen
            </div>
            <p class="text-sm text-neutral-700 w-72">
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
                <InfoRow
                    label="Abgangsdatum"
                    value={person.cancellation_date}
                />
            </div>

            <div class="grid grid-cols-2 gap-4">
                <InfoRow label="Matchings" value={person.matchings} />
                <InfoRow label="Letzte Änderung" value={person.last_change} />
            </div>

            <InfoRow label="Bearbeiter/-in" value={person.operator} />

            <InfoRow label="Notizen" value={person.notes} />
        </div>
    </div>
{/if}
