<script>
    import {
        Input,
        Breadcrumb,
        BreadcrumbItem,
        Tooltip,
    } from "flowbite-svelte";
    import { Section, Page404 } from "flowbite-svelte-blocks";
    import { Button } from "flowbite-svelte";
</script>

<Breadcrumb aria-label="Default breadcrumb example">
    <BreadcrumbItem href="/" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/persondatabase">Personendatenbank</BreadcrumbItem>
    <BreadcrumbItem>Ansehen</BreadcrumbItem>
</Breadcrumb>
<h1
    class="mt-4 mb-8 text-4xl font-black text-black leading-[62px] max-md:mt-6 max-md:max-w-full max-md:text-3xl max-md:leading-[35px]"
>
    Personendaten ansehen
</h1>

<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input
    id="disabled-input-2"
    class="mb-6"
    disabled
    readonly
    value="Disabled readonly input"
/>
