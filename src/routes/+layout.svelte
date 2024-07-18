<script>
    import "../app.css";
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
    } from "flowbite-svelte";
    import { ArrowRightToBracketOutline } from "flowbite-svelte-icons";
</script>

<Navbar
    class="px-8 py-5 fixed w-full z-20 top-0 start-0 shadow-[0_0_38px_rgba(108,82,151,0.4)] bg-[#47277D] text-white"
>
    <NavBrand class="hover:cursor-default">
        <span
            class="self-center whitespace-nowrap text-xl font-bold dark:text-white"
            >Silbernetz+ <span class="font-light">| Matching-System</span></span
        >
    </NavBrand>
    <NavHamburger class="hover:bg-[#321C59]" />
    <NavUl>
        <NavLi
            class="bg-[#47277D] text-white hover:bg-[#321C59] flex justify-center"
            href="/"
            active={true}><ArrowRightToBracketOutline class="w-5 h-5 me-2" />Abmelden</NavLi
        >
        <!-- <NavLi href="/about">About</NavLi>
        <NavLi href="/docs/components/navbar">Navbar</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi> -->
    </NavUl>
</Navbar>

<slot></slot>
