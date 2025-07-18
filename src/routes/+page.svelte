<div class="container">
    <img src="/images/cropped_pfp.jpeg" alt="A picture of me (Mika Chang)">
    <div class="bio">
        <h2>Mika Chang</h2>
        <p>
            TEST. Hi there! Thanks so much for checking out my site! I'm a developer that's into
            automation, computer networking, and data ethics. In my free time I enjoy
            working on personal projects, playing video games with my friends, running,
            and spending time with my partner.
        </p>
    </div>
</div>

<style>
    .container{
        margin: 40px auto;
        max-width: 960px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }
    img {
        max-height: 350px;
        max-width: 350px;
        border-radius: 50%;
        border-style: solid;
        border-width: 8px;
        border-color: var(--bg-2);
        box-shadow: 0 4px 10px hsl(0, 0%, 90%), 0 3px 10px hsl(0, 0%, 70%);
    }
    .bio {
        max-width: 400px;
    }
    h2 {
        text-align: center;
    }
    p {
        text-align: justify;
    }
    @media screen and (max-width: 600px) {
        .container {
            gap: 20px;
        }
        img {
            max-width: 300px;
            max-height: 300px;
        }
    }
    @media screen and (max-width: 450px) {
        .container {
            margin: 20px auto;
        }
        img {
            max-width: 300px;
            max-height: 300px;
        }
        .bio {
            max-width: 300px;
        }
        p {
            font-size: 16px;
        }
    }
</style>
