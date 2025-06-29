<div class="container">
    <h2>What I'm working on</h2>
    <ul>
        <li>Learning to showcase my skills and projects as I'm work
            <ul>
                <li>Writing about my experience setting up Arch</li>
                <li>Writing about my experience setting up a VPS to host services online</li>
                <li>Writing about how I host this site using containers</li>
            </ul>
        </li>
        <li>Reinstalling Arch Linux with an encrypted LVM setup.</li>
        <li>Improving my site
            <ul>
                <li>Setting up a git repo for this site that automatically updates the site when I push</li>
                <li>Reconfiguring Certbot to handle SSL certificates now that my infrastructure is running in docker.</li>
            </ul>
        </li>
        <li> Trying to work backwards from having a successful DevOps/SRE role to now, so I can build towards that.
        </li>
    </ul>
    <h3>June 29, 2025</h3><br><br><br>
    Today (and yesterday) I learned webhooks! Now, the site at my domain should auto-update on pushes. Or, it should. How about now?

    <h3>June 27, 2025</h3><br><br><br>
    <p>A summary of my current hosting setup. I'd like to automate the update process with a webhook and in the future use K8s and a GitOps tool:</p>
    <ul>
    <li>Infrastructure: <ul>
        <li>VPS running Ubuntu with Docker Compose</li></ul>
    <li>Updating my site: <ul>
        <li>When I push to the main branch of my site, a static site is built and deployed to github pages</li>
        <li>
            I can pull to a local repo on my VPS then use docker compose to rebuild and restart the container. Since my directory structure looks like this:
            <pre><code>
                DockerServices/
                ├── portfolio/
                │     └── Mika-Chang.github.io/
                ├── compose.yaml
                ├── update-containers.sh
                └── ...
            </code></pre>
            I use this bash script:
            <pre><code>
            #!/usr/bin/bash
            cd portfolio/Mika-Chang.github.io
            git pull
            cd ../..
            docker compose build
            docker compose up -d
            </code></pre>
        </li>
    </ul></ul>

    <h3>June 26, 2025</h3>
    <p>Huge wins today! I implemented a <a href="https://www.ryanfiller.com/blog/tips/conditional-sveltekit-adapters">conditional svelte adapter</a> using a blog post by <a href="https://www.ryanfiller.com/">Ryan Filler</a>. He's written some really cool stuff. In one <a href="https://www.ryanfiller.com/blog/why-my-blog-stopped-using-deploy-previews">blog post</a>, he tried to calculate the C02 emissions of his blog and then took steps to reduce the emissions which was awesome. It's sometimes easy to forget how much the use of the cloud can affect the environment (a lot).</p>
    <p>Once the adapter was implemented I dove into Github Actions. I was able to set up a workflow to test the website build when changed in multiple branches and updated the deployment workflow to use the correct adapter! Next, I'd like to automatically deploy to my
    <a href="https://mika-chang.github.io/">github pages site</a> and my <a href="https://mikacc.xyz/">personal website (mikacc.xyz)</a>.</p>

    <h3>June 25, 2025</h3>
    <p>Today I read <i>Show Your Work</i> by Austin Kleon (<a href="https://austinkleon.com">https://austinkleon.com</a>) after the book was recommended by in a video by <a href="https://mischavandenburg.com/aboutme/">Mischa van den Burg</a>. I couldn't put it down! I've struggled to be vulnerable enough to show my process, but I think doing so would help me, and hopefully other people in my shoes. These were the takeaways that really stuck with me.</p>
    <img src="/images/incremental_change.png" alt="How daily progress adds up" />
    <ul>
        <li>Daily progress adds up. Image above from <i>Show Your Work</i>. <a href="https://austinkleon.com/show-your-work/">https://austinkleon.com/show-your-work/</a></li>
        <li>Share a little every day. But it should pass the "So What?" test </li>
        <li>When you draw from someone's work, give credit with a link </li>
        <li>"If you want fans, you have to be a fan first. If you want to be accepted by a
        community, you have to first be a good citizen of that community. If you’re
        only pointing to your own stuff online, you’re doing it wrong. You have to be
        a connector" </li>
        <li>"Be ambitious. Keep yourself busy. Think bigger. Expand your audience.
        Don’t hobble yourself in the name of 'keeping it real,' or 'not selling out.'”</li>
    </ul>
</div>

<style>
    .container{
        margin: 40px auto;
        max-width: 700px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }
    p {
        text-align: justify;
        font-size: 18px;
    }
    li {
        font-size: 18px;
    }
    img {
        max-width: 700px;
        margin: auto 10px auto 0px;
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
        p {
            font-size: 16px;
        }
    }
</style>