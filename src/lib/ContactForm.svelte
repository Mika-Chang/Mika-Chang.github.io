<div class="container">
    <input class="fname" type="text">
    <input class="lname" type="text">
    <input class="email" type="text">
    <input class="phone" type="text">
    <input class="message" type="text">
</div>

<style>
    .container {
        display: grid;
        margin: 0;
        gap: 0.5em 1em;
        * {
            height: 1.5em;
        }
    }
    .fname {
        grid-area: 1 / 1 / span 1 / span 1;
    }
    .lname {
        grid-area: 1 / 2 / span 1 / span 1;
    }
    .email {
        grid-area: 2 / 1 / span 1 / span 1;
    }
    .phone {
        grid-area: 2 / 2 / span 1 / span 1;
    }
    .message {
        grid-area: 3 / 1 / span 1 / span 2;
        height: 4em;
    }
</style>