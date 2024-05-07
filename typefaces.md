---
layout: page
title: Typefaces
---

{% for fontpage in site.typefaces %}
<a href="{{ fontpage.url }}">{{ fontpage.title }}</a>
{% endfor %}