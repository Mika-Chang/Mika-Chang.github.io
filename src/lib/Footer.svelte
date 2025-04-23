<script>
    import ContactForm from "$lib/ContactForm.svelte";
    import Linkbar from "$lib/Linkbar.svelte";
</script>
<div class="footer">
    <div style="grid-area: 1 1"><ContactForm /></div>
    <div style="grid-area: 2 1"><Linkbar /></div>
</div>

<style>
    .footer {
        display: grid;
        align-content: center;
        padding: 10px;
        background: var(--bg-2);
        row-gap: 10px;
    }
</style>