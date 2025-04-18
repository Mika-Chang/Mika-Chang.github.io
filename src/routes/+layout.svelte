<script>
    let { children } = $props();
</script>

<nav>
    <a href="/">home</a>
    <a href="/about">about</a>
    <a href="/skills">skills</a>
<!--    <a href="/projects">projects</a>-->
</nav>

{@render children()}

