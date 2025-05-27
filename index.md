---
layout: page
js: assets/js/flickity.pkgd.min.js
css: assets/css/flickity.css

seo_description: |
    Font Club is the Belgian type foundry selling fonts that make you happy! Discover our library, ideal for branding, graphic, editorial and digital projects. 
seo_image: FCB_SEO_Index.jpg

slogans:
    - /typefaces/pdu/FCB_Slogans_1.svg
    - /typefaces/mad-serif/FCB_Slogans_1.svg
    - /typefaces/crimp/FCB_Slogans_1.svg
    - /typefaces/mad-sans/FCB_Slogans_1.svg
    - /typefaces/nib/FCB_Slogans_1.svg
    - /typefaces/cru/FCB_Slogans_1.svg
    - /typefaces/pep/FCB_Slogans_1.svg
    - /typefaces/cru/FCB_Slogans_2.svg
    - /typefaces/nib/FCB_Slogans_2.svg
    
title: Home
---

<div class="splash">
    {% assign typefaces = site.typefaces | sort:"date" | reverse %}
    {% for typeface in typefaces %}
        {% unless typeface.draft %}
            {% if typeface.splash %}
            <div class="slide">
                <a href="{{ typeface.url }}">
                    <img src="{{ typeface.url }}{{ typeface.splash }}"/>
                </a>
            </div>
            {% endif %}
        {% endunless %}
    {% endfor %}
</div>


<div class="splash-quotes">
    <h2>Font Club is the Belgian type foundry selling fonts that make you happy!</h2>
    <div class="img-slider">
    {% for slogan in page.slogans %}
        {%- assign sloganURL = slogan | split: '/' | compact -%}
        {%- assign sloganURL = sloganURL | pop -%}
        <div class="slide">
            <a href="{{  sloganURL | join: '/' }}">
                <img src="{{ slogan }}"/>
            </a>
        </div>
    {% endfor %}
    </div>
    <a href="/faq#about-us" class="btn">Read more About us</a>
</div>


<!---- Pas nodig bij uitgebreidere library
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
</div> --->

<div class="search-splash">
    {% assign typefaces = site.typefaces | reverse %}
    {% for typeface in typefaces %}
        {% unless typeface.draft %}
            {% if typeface.hometile %}
            <div class="preview-font-home">
                <a href="{{ typeface.url }}">
                    <img src="{{ typeface.url }}{{ typeface.hometile }}"/>
                </a>
            </div>
            {% endif %}
        {% endunless %}
    {% endfor %}
</div>


<script>
    var flkty = new Flickity( '.splash', {
        pageDots: false, wrapAround: true, arrowShape: "M42.1 .74 0 50 42.1 99.26 50.88 99.26 50.88 92.79 18.7 55.53 99.99 55.53 99.99 44.47 18.7 44.47 50.88 7.23 50.88 .74 42.1 .74", autoPlay: 6000
    });
    var flkty2 = new Flickity( '.img-slider', {
        pageDots: false, prevNextButtons: false, autoPlay: 3000, imagesLoaded: true, wrapAround: true, cellSelector: '.slide'
    });
</script>