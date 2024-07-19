<script>
    import { Breadcrumb, BreadcrumbItem, Tooltip } from "flowbite-svelte";
    import Table from "$lib/components/table.svelte";
</script>

<div class="container mt-32 mx-auto px-8 md:px-0"></div>
<Breadcrumb aria-label="Default breadcrumb example">
    <BreadcrumbItem href="/" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Personendatenbank</BreadcrumbItem>
</Breadcrumb>
<h1
    class="mt-4 mb-8 text-4xl font-black text-black leading-[62px] max-md:mt-6 max-md:max-w-full max-md:text-3xl max-md:leading-[35px]"
>
    Personendatenbank
</h1>
<Table />
