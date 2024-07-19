<script>
    let userName ="Jason";
    let greeting = "Tag";

const updateGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        greeting = "Morgen";
    } else if (currentHour < 18) {
        greeting = "Tag";
    } else {
        greeting = "Abend";
    }
};

updateGreeting();
</script>

<h1
    class="mb-8 text-5xl font-black text-black leading-[62px] max-md:mt-28 max-md:max-w-full max-md:text-4xl max-md:leading-[35px]"
>
    Guten {greeting},<br />{userName}
</h1>
