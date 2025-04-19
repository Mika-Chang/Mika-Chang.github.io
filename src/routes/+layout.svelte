<script lang="ts">
    let { children } = $props();
    const pages: string[] = ["home", "about", "skills"]
</script>

<nav>
    {#each pages as page}
        <a href={page === 'home' ? '/' : page}>{page.toUpperCase()}</a>
    {/each}
</nav>

{@render children()}

<style>
    nav {
        background: #E0E0E0;
        padding: 10px;
        border-radius: 12px;
        box-shadow: 0 4px 6px hsl(0, 0%, 70%), 0 5px 15px hsl(0, 0%, 70%);

        a {
            color: #000000;
            font-weight: bold;
            font-family: 'Verdana', sans-serif;
            padding-left: 15px;
            text-decoration: none;
        }
    }
</style>

