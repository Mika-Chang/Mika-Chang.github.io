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
        <li> Trying to work backwards from having a successful DevOps/SRE role to now, so I can build towards that. I've been watching/reading content by Mischa van den Burg (<a href="https://mischavandenburg.com/aboutme/">https://mischavandenburg.com/aboutme/</a>).
        </li>
    </ul>
    <h3>June 25, 2025</h3>
    <p>Today I read <i>Show Your Work</i> by Austin Kleon (<a href="https://austinkleon.com">https://austinkleon.com</a>).
        I couldn't put it down! I've struggled to be vulnerable enough to show my process, but I think doing so would help me, and hopefully other people in my shoes. These were the takeaways that really stuck with me.</p>
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