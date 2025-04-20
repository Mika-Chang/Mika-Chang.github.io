{#snippet skill(description)}
    <li>
        {description}
    </li>
<!--    TODO: add associated project/experience info-->
{/snippet}

<h1>Skills</h1>
<h2>My Experience</h2>
<ul>
    <li>C# Application Design</li>
</ul>

<h2>Some skills I'd like to learn / am currently working on</h2>
<ul>
    {@render skill("Web Development / UI")}
    {@render skill("Web Scrapping")}
    {@render skill("DB Design and Administration")}
    {@render skill("OAuth2 Authentication")}
    {@render skill("Networking")}
    {@render skill("Remote Procedure Calls")}
    {@render skill("CI/CD Pipelines")}
</ul>