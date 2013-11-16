---
layout: default
---

<section id="projects" class="projects-section">
    <h2>Current projects</h2>

    {% for project in site.projects %}
    <article class="project-item">
        <a href="" class="project-item-info">
            <h3 class="project-item-title">{{project.name}}</h3>
            <p class="project-item-description">{{project.description}}</p>
        </a>
        <div class="project-item-extras">
            {% if project.image %}
                <img src="{{project.image}}" alt="{{project.name}}">
            {% endif %}

            {% if project.play-link %}
                <a href="{{play-link}}">Play game</a>
            {% endif %}

            {% if project.github-link %}
                <a href="{{github-link}}">Fork on github</a>
            {% endif %}

            {% if project.download-link %}
                <a href="{{download-link}}">Download</a>
            {% endif %}
        </div>
    </article>
    {% endfor %}
</section>

<section id="contact" class="contact-section">
    <h2>Get in touch</h2>

    <p>Drop me a line at <a class="explicit-link" href="mailto:{{site.email}}?subject=Contact from website">{{site.email}}</a>, <br>I do the occasional consulting or freelance work.</p>
</section>

<section id="about-me" class="about-section">
    <h2>About me</h2>

    <p>I'm a web developer and a designer, focusing on responsive design, HTML5 game development and front-end architecture. I currently work for R/GA at Buenos Aires, Argentina.</p>

    <h3>Find me on:</h3>

    <ul class="networks">
        {% for network in site.social %}
        <li>
            <a title="{{ network.name | capitalize }}" href="{{ network.url }}">
                <span class="label">{{ network.name | capitalize }}</span>
                <span class="icon icon-{{ network.name | downcase }}"></span>
            </a>
        </li>
        {% endfor %}
    </ul>
</section>