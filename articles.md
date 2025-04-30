---
layout: page
title: Articles, Research and News
---

seo_description: |
    Explore in-depth articles on type design, font development, and the stories behind our typefaces—crafted for designers, typographers, and researchers.
seo_image: assets/seo/FCB_SEO_Articles.jpg

# Articles, Research and&nbsp;News

<section class="articles">
{% assign sortedArticles = site.articles | where: "draft", "false" | sort: "date" | reverse %}
{% for articlePage in sortedArticles %}
    <div class="preview-article">
        <a href="{{ articlePage.url }}">
            <figure>
                <img src="{{ articlePage.url }}{{ articlePage.thumbnailImage }}" />
            </figure>
            <div class="article-info">
                <h2>{{ articlePage.title }}</h2>
                <p class="type">{{ articlePage.type }}</p>
            </div>
        </a>
    </div>
{% endfor %}
</section>
