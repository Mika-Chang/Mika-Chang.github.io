<!--
    TODO: maybe format script section better
    TODO (low): make it look like the currently selected page in nav is pushed down slightly?
    TODO (low): make the underline slide between pages
-->
<script lang="ts">
    import {page} from '$app/state' // used for getting curr page
    // const pages: string[] = ["home", "skills", "projects", "resume", "daily"];
    const pages: string[] = ["home", "updates", "resume"];

    /**
     * Get the route for a given page.
     * @param {string} name The page name
     *
     * @return {string} The route for the page
     */
    function getRoute(name: string): string {
        name = name === "daily updates" ? "daily" : name;
        return name === "home" ? "/" : "/" + name;
    }

    /**
     * Check whether a given page is the current page.
     * @param {string} name The page name to check
     *
     * @return {boolean} True if the given page is the current page and false otherwise
     */
    function isCurrent(name: string): boolean {
        return page.url.pathname === getRoute(name)
    }

    // Color palette (all in one place)
    const textColor = "#000000";
    const activeColor = "#FF404D";
    const background = "#CCCCCC"
</script>

<nav style:background={background}>
    {#each pages as pageName}
        <a
                href={getRoute(pageName)}
                aria-current={isCurrent(pageName)}
                style:color={isCurrent(pageName) ? activeColor : textColor}
                class={isCurrent(pageName) ? "active" : "inactive"}
        >
            {pageName.toUpperCase()}</a>
    {/each}
</nav>

<style>
    nav {
        background: #CCCCCC; /* default just in case */
        padding: 10px;
        border-radius: 12px;
        box-shadow: 0 2px 4px hsl(0, 0%, 70%), 0 3px 10px hsl(0, 0%, 70%);
    }
    a {
        color: #000000; /* default just in case */
        font-weight: bold;
        font-family: 'Verdana', sans-serif;
        margin: 10px;
        text-decoration: none;
    }
    .active {
        text-decoration: underline;
        text-underline-offset: 12px;
        text-decoration-thickness: 3px;
    }
</style>

