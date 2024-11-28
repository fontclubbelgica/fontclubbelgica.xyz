---
layout: page
js: assets/js/flickity.pkgd.min.js
css: assets/css/flickity.css
---

<div class="splash">
    {% for typeface in site.typefaces %}
        {% if typeface.splash %}
        <div class="slide">
            <a href="{{ typeface.url }}">
                <img src="{{ typeface.url }}{{ typeface.splash }}"/>
            </a>
        </div>
        {% endif %}
    {% endfor %}
</div>

<div class="splash-quotes">
    <h2>Font Club Belgica is a Belgian type foundry offering fonts fonts that make you happy.</h2>
    <a href="/faq#about-us" class="btn">Read more About us</a>
</div>

<div class="img-slider">
    <div class="slide">
        <a href="/typefaces/pdu">
            <img src="/assets/FCB_Slogans_1.svg"/>
            <p class="caption">FC PDU STENCIL</p>
        </a>
    </div>
    <div class="slide">
       <a href="/typefaces/mad-sans">
           <img src="/assets/FCB_Slogans_2.svg"/>
           <p class="caption">FC MAD SANS</p>
       </a>
    </div>
    <div class="slide">
       <a href="/typefaces/mad-serif">
           <img src="/assets/FCB_Slogans_3.svg"/>
           <p class="caption">FC MAD SERIF</p>
       </a>
    </div>
    <div class="slide">
       <a href="/typefaces/nib">
           <img src="/assets/FCB_Slogans_4.svg"/>
           <p class="caption">FC NIB</p>
       </a>
    </div>
    <div class="slide">
       <a href="/typefaces/nib">
           <img src="/assets/FCB_Slogans_5.svg"/>
           <p class="caption">FC NIB ITALIC</p>
       </a>
    </div>
    <div class="slide">
       <a href="/typefaces/pep">
           <img src="/assets/FCB_Slogans_6.svg"/>
           <p class="caption">FC PEP</p>
       </a>
    </div>
    <div class="slide">
       <a href="/typefaces/pdu">
           <img src="/assets/FCB_Slogans_7.svg"/>
           <p class="caption"></p>
       </a>
    </div>
    <div class="slide">
       <a href="/typefaces/pdu">
           <img src="/assets/FCB_Slogans_8.svg"/>
           <p class="caption"></p>
       </a>
    </div>
    <div class="slide">
       <a href="/typefaces/pdu">
           <img src="/assets/FCB_Slogans_9.svg"/>
           <p class="caption"></p>
       </a>
    </div>
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
        {% if typeface.splash %}
        <div class="preview-font-home">
            <a href="{{ typeface.url }}">
                <img src="{{ typeface.url }}{{ typeface.splash }}"/>
            </a>
        </div>
        {% endif %}
    {% endfor %}
</div>


<script>
    var flkty = new Flickity( '.splash', {
        pageDots: false, arrowShape: "M42.1 .74 0 50 42.1 99.26 50.88 99.26 50.88 92.79 18.7 55.53 99.99 55.53 99.99 44.47 18.7 44.47 50.88 7.23 50.88 .74 42.1 .74", autoPlay: 3000
    });
    var flkty2 = new Flickity( '.img-slider', {
        pageDots: false, prevNextButtons: false, autoPlay: 3000, imagesLoaded: true
    });
</script>