<script>
    let { children } = $props();
</script>

<nav>
    <a href="/">HOME</a>
    <a href="/about">ABOUT</a>
    <a href="/skills">SKILLS</a>
<!--    <a href="/projects">projects</a>-->
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

