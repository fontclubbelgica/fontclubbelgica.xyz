---
layout: page
title: Articles, Research and News
---

# {{ page.title }}

<section class="articles">
{% for articlePage in site.articles %}
    <div class="preview-article">
        <a href="{{ articlePage.url }}">
            <figure>
                <img src="{{ articlePage.url }}{{ articlePage.featuredImage }}" />
            </figure>
            <div class="article-info">
                <h2>{{ articlePage.title }}</h2>
                <p class="type">{{ articlePage.type }}</p>
            </div>
        </a>
    </div>
{% endfor %}
</section>
