<script>
    import { Button, Modal } from "flowbite-svelte";
    import StatisticCard from "$lib/components/dashboard/statisticcard.svelte";
    import Greeting from "$lib/components/dashboard/greeting.svelte";
    import Buttons from "$lib/components/dashboard/buttons.svelte";
</script>

<div class="container mx-auto px-8 md:px-0">
    <Greeting />
    <Buttons />
    <div class="grid lg:grid-cols-4 gap-4">
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
    </div>
</div>
