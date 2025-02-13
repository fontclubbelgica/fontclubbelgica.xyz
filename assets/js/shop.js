document.addEventListener('DOMContentLoaded', function() {
  let step = 0; 
  let fontname;
  let productFamilyArray = [];
  let fontstyles;
  let desktoptier;
  let websitetier;
  let trialtier;
  let cart = [];
  
  // check if hash is an existing font
  const hash = window.location.hash.substr(1);
  const preview = document.querySelector('div.preview-font-shop[data-fsid="'+hash+'"]');
  if(preview !== null) {
    fontname = hash;
    fontstyles = JSON.parse(preview.getAttribute('data-styles'));
    goToStep(1);
    activateButton(0);
  }
  else {
    goToStep(0);
  }
  function goToStep(index) {
    step = index;
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('open'));
    
    if (sections[index]) {
      sections[index].classList.add('open');
    }
    
    if(index == 2) {
      buildFSProducts();
    }
  }
  function activateButton(index, disable = false) {
    const sections = document.querySelectorAll('button.next');
    if (sections[index]) {
      sections[index].disabled = disable;
    }
  }
  function evaluateLicense() {
    let hasError = false;
    const lDesktop = Boolean(document.querySelector('#license-desktop').checked);
    const lWeb = Boolean(document.querySelector('#license-web').checked);
    const lBroadcast = Boolean(document.querySelector('#license-broadcast').checked);
    const lApp = Boolean(document.querySelector('#license-app').checked);
    const lTrials = Boolean(document.querySelector('#license-trial').checked);
    
    websitetier = document.getElementById("web-size").value;
    desktoptier = document.getElementById("desktop-size").value;
    if(lTrials) {
      trialtier = 'trial';
    }
    else {
      trialtier = '';
    }
    
        
    if((lBroadcast || lApp) || (lDesktop && desktoptier==='') || (lWeb && websitetier==='') || !(lDesktop || lWeb || lBroadcast || lApp || lTrials)) {
      hasError = true;
      
    }
    if(desktoptier == 'desktop-big' && lDesktop) {
      hasError = true;
    }
    activateButton(1, hasError);
  }
  document.querySelectorAll('#license select').forEach(input => {
    input.addEventListener('change', evaluateLicense);
  });
  
  document.querySelectorAll('button.next').forEach((button, index) => {
    button.addEventListener('click', () => goToStep(index+1));
  });
  // select font
  document.querySelectorAll('div.preview-font-shop').forEach(preview => {
    preview.addEventListener('click', handlePreviewClick);
  });
  function handlePreviewClick(event) {
    const preview = event.currentTarget;
    
    document.querySelectorAll('div.preview-font-shop').forEach(p => {
      if (p === preview) {
        p.classList.add('active');
        p.classList.remove('fade');
      } else {
        p.classList.remove('active');
        p.classList.add('fade');
      }
    });
    fontname = preview.getAttribute('data-fsid');
    fontstyles = JSON.parse(preview.getAttribute('data-styles'));
    activateButton(0);
  //  goToStep(1)
  }
  
  function buildFSProducts() {
    const productsToLoad = [];
    const container = document.getElementById("container");
    
    const licensetypes = {
      ...(desktoptier!=="" && { desktop: desktoptier }),
      ...(websitetier!=="" && { web: websitetier }),
      ...(trialtier!=="" && { trial: trialtier }),
    };
    Object.entries(licensetypes).forEach(([license, tier])=> {
      const licenseDiv = document.createElement("div");
      licenseDiv.classList.add("license-group");
      
      const title = document.createElement("h2");
      title.textContent = license;
      licenseDiv.appendChild(title);
      
      container.appendChild(licenseDiv);
      
      fontstyles.forEach(item => {
        
        const familyDiv = document.createElement("div");
        familyDiv.classList.add("family");
      
        const fullFamilyDiv = document.createElement("div");
        fullFamilyDiv.classList.add("product-family");
        fullFamilyDiv.setAttribute('data-fsc-item-path', fontname+'-'+item.name+'-'+ tier);
        
        fullFamilyDiv.addEventListener('click', function() {
          addToCart(fontname+'-'+item.name+'-'+ tier);
        });
        
        familyDiv.appendChild(fullFamilyDiv);
        
        const h2 = document.createElement("h2");
        h2.textContent = '';
        h2.setAttribute('data-fsc-item-path', fontname+'-'+item.name+'-'+ tier);
        h2.setAttribute('data-fsc-item-display', '');
        
        const p = document.createElement("p");
        p.textContent = '';
        p.setAttribute('data-fsc-item-path', fontname+'-'+item.name+'-'+ tier);
        p.setAttribute('data-fsc-item-description-summary', '');
        
        const price = document.createElement("span");
        price.textContent = '';
        price.setAttribute('data-fsc-item-path', fontname+'-'+item.name+'-'+ tier);
        price.setAttribute('data-fsc-item-priceWithoutTax', '');
        
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.setAttribute('data-fsc-item-path', fontname+'-'+item.name+'-'+ tier);
        img.setAttribute('data-fsc-item-image', '');
        figure.appendChild(img);
        productsToLoad.push(fontname+'-'+item.name+'-'+ tier);
        
        let product = { name: fontname+'-'+item.name+'-'+ tier , children: [] };
        fullFamilyDiv.appendChild(figure);
        fullFamilyDiv.appendChild(h2);
        fullFamilyDiv.appendChild(p);
        fullFamilyDiv.appendChild(price);
        
        familyDiv.appendChild(fullFamilyDiv);
        
        
        item.styles.forEach(style => {
          const productDiv = document.createElement("div");
          productDiv.classList.add("product");
          productDiv.setAttribute('data-fsc-item-path', fontname+'-'+style+'-'+ tier);
          
          productDiv.addEventListener('click', function() {
            addToCart(fontname+'-'+style+'-'+ tier);
          });
          
          const h2 = document.createElement("h2");
          h2.textContent = 'Product Name';
          h2.setAttribute('data-fsc-item-path', fontname+'-'+style+'-'+ tier);
          h2.setAttribute('data-fsc-item-display', '');
          product.children.push(fontname+'-'+style+'-'+ tier);
          
          const price = document.createElement("span");
          price.textContent = '60 €';
          price.setAttribute('data-fsc-item-path', fontname+'-'+style+'-'+ tier);
          price.setAttribute('data-fsc-item-priceWithoutTax', '');
          
          const figure = document.createElement("figure");
          const img = document.createElement("img");
          img.setAttribute('data-fsc-item-path', fontname+'-'+style+'-'+ tier);
          img.setAttribute('data-fsc-item-image', '');
          figure.appendChild(img);
          productsToLoad.push(fontname+'-'+style+'-'+ tier);
          
          productDiv.appendChild(figure);
          productDiv.appendChild(h2);
          productDiv.appendChild(price);
          familyDiv.appendChild(productDiv);
        });
        
        licenseDiv.appendChild(familyDiv);
        productFamilyArray.push(product);
        console.log(productFamilyArray);
      });
    });
    
    var s =
    {
      "reset": true,
      'products' : productsToLoad.map(product => ({
        path: product,
        quantity: 1
      })),
      "update": true,
    }
    fastspring.builder.push(s);
    
    displayCartContents();    
  }
  
  function addToCart(product) {
    // check if parent is in cart 
    
    if (cart.includes(product)) {
      cart = cart.filter(item => item !== product);
    } else {
      cart.push(product);
    }
    removeChildrenWhenAddingFamily(product);
    var s =
    {
      "reset": true,
      'products' : cart.map(product => ({
        path: product,
        quantity: 1
      })),
    }
    displayCartContents();
    fastspring.builder.push(s);
  }
  
  function isParentInCart(product) {
    return false;
  }
  function removeChildrenWhenAddingFamily(product) {
    // check if product is a fontfamily to remove all children from cart - no doubles
    productFamilyArray.forEach(({ name, children }) => {
      if(product == name) {
        children.forEach(child => {
          if (cart.includes(child)) {
            cart = cart.filter(item => item !== child);
          }
        });
      }
    });
  }
  function displayCartContents() {
    
    // Select all product-family elements
    const productFamilies = document.querySelectorAll('.product-family');
    const products = document.querySelectorAll('.product');
    const removeInCartClass = (elements) => {
      elements.forEach(element => {
        element.classList.remove('in-cart');
      });
    };
    removeInCartClass(productFamilies);
    removeInCartClass(products);
    
    productFamilyArray.forEach(({ name, children }) => {
      if(cart.includes(name)) {
        const cartProduct = document.querySelector(`.product-family[data-fsc-item-path="${name}"]`);
        if (cartProduct) {
          cartProduct.classList.add('in-cart');
        }
        children.forEach(child => {
          const cartProduct = document.querySelector(`.product[data-fsc-item-path="${child}"]`);
          if (cartProduct) {
            cartProduct.classList.add('in-cart');
          }
        });
      }
      else {
        children.forEach(child => {
          if(cart.includes(child)) {
            const cartProduct = document.querySelector(`.product[data-fsc-item-path="${child}"]`);
            if (cartProduct) {
              cartProduct.classList.add('in-cart');
            }
          }
        });
        
      }
    });
  }
  const cb1 = document.getElementById('license-desktop');
  const target1 = document.getElementById('desktop-size-field');
  
  cb1.addEventListener('change', () => {
    target1.style.display = cb1.checked ? 'block' : 'none';
    evaluateLicense();
  });
  const cb2 = document.getElementById('license-web');
  const target2 = document.getElementById('web-size-field');
  
  cb2.addEventListener('change', () => {
    target2.style.display = cb2.checked ? 'block' : 'none';
    evaluateLicense();
  });
  const cb3 = document.getElementById('license-broadcast');
  const cb4 = document.getElementById('license-app');
  const cb5 = document.getElementById('license-trial');
  const target = document.getElementById('quote');
  
  function toggleCustom() {
    console.log(target1.value);
    target.style.display = (cb3.checked || cb4.checked || document.getElementById("desktop-size").value == "desktop-big") ? 'block' : 'none';
    evaluateLicense();
  }
  document.getElementById("desktop-size").addEventListener('change', toggleCustom);
  cb3.addEventListener('change', toggleCustom);
  cb4.addEventListener('change', toggleCustom);
  cb5.addEventListener('change', evaluateLicense);
  
  function toggleDS() {
    if( document.getElementById("desktop-size").value == "desktop-big" ) {
      target1.classList.add('not-available');
    }
    else {
      target1.classList.remove('not-available');
    }
  }
  function toggleWeb() {
    if( document.getElementById("web-size").value == "web-big" ) {
      target2.classList.add('not-available');
    }
    else {
      target2.classList.remove('not-available');
    }
  }
  document.getElementById("desktop-size").addEventListener('change', toggleDS);
  document.getElementById("web-size").addEventListener('change', toggleWeb);
  
  
})