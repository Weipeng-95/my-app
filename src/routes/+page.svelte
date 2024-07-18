<script>
    import StatisticCard from "$lib/dashboard/statisticcard.svelte";
    import Greeting from "$lib/dashboard/greeting.svelte";
    import Buttons from "$lib/dashboard/buttons.svelte";
</script>

<div class="container mx-auto px-8 md:px-0">
    <Greeting />
    <Buttons />
    <h3 class="mb-2 text-3xl font-bold text-black leading-[62px] max-md:mt-2 max-md:max-w-full max-md:text-2xl max-md:leading-[35px]"
    >Statistiken</h3>
    <div class="grid gap-4 lg:grid-cols-3 lg:gap-8 place-content-center">
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
    </div>
</div>
<div class="container mt-16" />
