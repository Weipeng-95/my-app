<script>
    import { Card } from "flowbite-svelte";
    import Users from "../icons/Users.svg";
    let count = 0;
    let item = "Matches";
</script>

<Card
    class="bg-[#FEFCF9] shadow-[0_0_38px_rgba(108,82,151,0.2)] border border-[#C6BCD7] text-center min-w-96 lg:min-w-full"
>
    <p
        class="mb-4 text-6xl font-bold tracking-tight text-[#47277D] dark:text-white"
    >
        {count}
    </p>
    <div class="flex flex-col items-center justify-center">
        <img class="mb-1" src={Users}  alt="Users Icon" />
        <p
            class="mb-2 text-xl font-normal text-[#846EA8] dark:text-gray-400 leading-tight"
        >
            {item}
        </p>
    </div>
</Card>
