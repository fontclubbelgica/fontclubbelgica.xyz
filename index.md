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

