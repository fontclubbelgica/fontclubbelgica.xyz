---
layout: default
title: Shop

tiers:
  desktop:
    1: 1
    3: 2-3
    10: 4-10
    25: 11-25
    50: 26-50
    75: 51-75
    100: 76-100
    175: 101-175
    250: 176-250
    500: 251-500
    750: 501-750
    1000: 751-1000
    big: 1001+
  web:
    3: 1-3
    10: 4-10
    25: 11-25
    50: 26-50
    100: 51-100
    150: 101-150
    250: 151-250
    500: 251-500
    1000: 501-1000
    1500: 1001-1500
    big: 1501+


js: assets/js/shop.js
---

<script
    id="fsc-api"
    src="https://sbl.onfastspring.com/sbl/1.0.1/fastspring-builder.min.js"
    type="text/javascript"
    data-storefront="fontclubbelgica.test.onfastspring.com"
    data-after-requests-callback="fsCallback"
    >
  </script>

<main class="shop">
  <section id="select" class="open">
    <h2>Font Family<span></span></h2>
    <div class="grid">
      {% for typeface in site.typefaces %}
      {% if typeface.fastspring %}
      <div class="preview-font-shop" data-fsid='{{ typeface.fastspring[0].name }}' data-styles='{{ typeface.fastspring[0].family | jsonify }}'>
        <figure><img src="{{ typeface.url }}{{ typeface.library_preview[0] }}"></figure>
        <div class="font-info">
          <h2>{{ typeface.title }}</h2>
          <p class="total">{{ typeface.styles | size }} styles</p>
        </div>
      </div>
      {% endif %}
      {% endfor %}
    </div>
    <button class="next" disabled>Select your license</button>
  </section>
  <section id="license" class="open">
    <h2>License</h2>
    <div>
      <form>
        <fieldset id="license-type">
          <p>You need a license for</p>
          <div>
          <input type="checkbox" id="license-desktop" name="license-desktop" value="desktop">
          <label for="license-desktop"> Desktop / Print / Logo </label>
          <input type="checkbox" id="license-web" name="license-web" value="web">
          <label for="license-web"> Website </label>
          <input type="checkbox" id="license-broadcast" name="license-broadcast" value="broadcast">
          <label for="license-broadcast"> Video / Broadcast </label>
          <input type="checkbox" id="license-trial" name="license-trial" value="trial">
          <label for="license-trial"> Testing / Trials </label>
          <input type="checkbox" id="license-app" name="license-app" value="app">
          <label for="license-app"> Application </label>
          </div>
          <div class="info">
            <p>Please select any and all that apply to the project and we will select the licenses needed.</p>
          </div>
        </fieldset>
        <fieldset id="desktop-size-field">
          <p>With up to <select id="desktop-size">
            <option disabled value selected>?</option>
            {% for tier in page.tiers.desktop %}
              <option value="desktop-{{ tier[0] }}">{{ tier[1] }}</option>
            {% endfor %}
          </select> people using the fonts on their computer.</p>
          <div class="info">
            <p>This includes both any computer used by inhouse and external desigers during the full duration of the project.</p>
          </div>
        </fieldset>
        <fieldset id="web-size-field">
          <p>There are <select id="web-size">
              <option disabled value selected>?</option>
              {% for tier in page.tiers.web %}
                <option value="web-{{ tier[0] }}">{{ tier[1] }}</option>
              {% endfor %}
            </select> people working for the organization</p>
            <div class="info">
              <p>This includes any and all internal and external employees working for the client irregardless wether they are using the fonts.</p>
            </div>
        </fieldset>
        <p id="quote">Please contact us on <a href="mailto:licensing@fontclubbelgica.xyz">licensing@fontclubbelgica.xyz</a> for a custom quote.</p>
      </form>
    </div>
    <button class="next" disabled>Select your font styles</button>
  </section>
  <section id="styles" class="open">
    <h2>Styles</h2>
    <p class="loading">Loading styles...</p>
    <div id="container"></div>
    <div class="total">
      <table>
        <tr><td>VAT (<span data-fsc-order-taxRate></span>)</td><td><span data-fsc-order-tax></span></td></tr>
        <tr><td>TOTAL</td><td><span data-fsc-order-total></span></td></tr>
      </table>
    </div>
    <button class="next" data-fsc-action="Checkout">
      Go to checkout
    </button>
  </section>
</main>