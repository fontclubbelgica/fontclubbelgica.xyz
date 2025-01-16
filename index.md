---
layout: page
js: assets/js/flickity.pkgd.min.js
css: assets/css/flickity.css
---

<div class="splash">
    {% for typeface in site.typefaces %}
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
        <div class="slide">
            <a href="/typefaces/pdu">
                <img src="/assets/FCB_Slogans_1.svg"/>
            </a>
        </div>
        <div class="slide">
           <a href="/typefaces/mad-sans">
               <img src="/assets/FCB_Slogans_2.svg"/>
           </a>
        </div>
        <div class="slide">
           <a href="/typefaces/mad-serif">
               <img src="/assets/FCB_Slogans_3.svg"/>
           </a>
        </div>
        <div class="slide">
           <a href="/typefaces/nib">
               <img src="/assets/FCB_Slogans_4.svg"/>
           </a>
        </div>
        <div class="slide">
           <a href="/typefaces/nib">
               <img src="/assets/FCB_Slogans_5.svg"/>
           </a>
        </div>
        <div class="slide">
           <a href="/typefaces/pep">
               <img src="/assets/FCB_Slogans_6.svg"/>
           </a>
        </div>
        <div class="slide">
           <a href="/typefaces/pdu">
               <img src="/assets/FCB_Slogans_7.svg"/>
           </a>
        </div>
        <div class="slide">
           <a href="/typefaces/pdu">
               <img src="/assets/FCB_Slogans_8.svg"/>
           </a>
        </div>
        <div class="slide">
           <a href="/typefaces/pdu">
               <img src="/assets/FCB_Slogans_9.svg"/>
           </a>
        </div>
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
    {% for typeface in site.typefaces %}
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