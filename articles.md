---
layout: page
title: Articles
---

<ul>
{% for articlePage in site.articles %}
    <li>{{ articlePage.title }}</li>
{% endfor %}
</ul>