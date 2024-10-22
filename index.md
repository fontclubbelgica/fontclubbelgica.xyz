---
layout: page
---

<div class="splash">
    {% for typeface in site.typefaces %}
        {% if typeface.splash %}
            <a href="{{ typeface.url }}">
                <img src="{{ typeface.url }}{{ typeface.splash }}"/>
            </a>
        {% endif %}
    {% endfor %}
</div>

<div class="splash-quotes">
Font Club Belgica is a Belgian type foundry offering fonts fonts that make you happy.
</div>


<div class="centered">
    <div class="dropdown">
        Library Search
        <div class="dropdown-options">
            <ul>
                <li>OPtion</li>
                <li>OPtion</li>
                <li>OPtion</li>
            </ul>
        </div>
    </div>
</div>

<div class="search-splash">
    {% for typeface in site.typefaces %}
        {% if typeface.splash %}
            <a href="{{ typeface.url }}">
                <img src="{{ typeface.url }}{{ typeface.splash }}"/>
            </a>
        {% endif %}
    {% endfor %}
</div>
