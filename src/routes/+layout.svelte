<script lang="ts">
    import "../app.css"

    import Navbar from "$lib/Navbar.svelte"
    import Footer from "$lib/Footer.svelte"

    let { children } = $props();
</script>

<div class="container">
    <div class="navbar">
        <Navbar />
    </div>

    {@render children()}

    <div class="footer">
        <Footer />
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .navbar {
        position: sticky;
        top: 0;
    }
    .footer {
        margin-top: auto;
        width: 100%;
    }
</style>