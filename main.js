
document.addEventListener('DOMContentLoaded', function() {

	// navigation

	const navs = document.querySelectorAll('nav');
	navs.forEach((nav)=> {
		nav.addEventListener('mouseover', (event) => {
			const element = event.target
			const parent = element.closest('nav')
			if (parent) {
				parent.classList.toggle('open')
			}
		})
		nav.addEventListener('mouseout', (event) => {
			const element = event.target;
			const parent = element.closest('nav')
			if (parent) {
				parent.classList.toggle('open')
			}
		})
	})

	// font tester

	const control_select_font = document.querySelectorAll('.select-font select')

	function apply_control_select_font(element) {
		preview = element.parentElement.parentElement.nextElementSibling;
		if ( preview.classList.contains("characterSets-viewer") ) {
			for (var i = 0; i < preview.children.length; i++) {
				subitem = preview.children[i]
				if ( subitem.style.fontFamily.slice(1, -1) == element.value ) {
					subitem.style.display = "flex"
				}
				else {
					subitem.style.display = "none"
				}
			}
		}
		else {
			preview.style.fontFamily = element.value + ", 'AdobeBlank'"
		}
	}


	control_select_font.forEach((element)=> {
		element.addEventListener("change", (event) => {
			apply_control_select_font(element)
		})
		apply_control_select_font(element)
	})


	const control_select_feature = document.querySelectorAll('.select-feature form');

	function apply_control_select_feature(element) {
		const inputs = element.querySelectorAll('input')
		const featureSettings = []
		for (var index = 0; index < inputs.length; index++) {
			input = inputs[index]
			if ( input.checked ) {
				featureSettings.push("'" + input.value + "'")
			}
		}
		preview = element.parentElement.parentElement.nextElementSibling;
		preview.style.fontFeatureSettings = featureSettings.join()
	};

	control_select_feature.forEach((element)=> {
		element.addEventListener("change", (event) => {
			apply_control_select_feature(element)
		})
		apply_control_select_feature(element)
	})

	const control_select_fontVariation = document.querySelectorAll('.select-fontVariation form');

	function apply_control_select_fontVariation(element) {
		const inputs = element.querySelectorAll('input')
		const fontVariationSettings = []
		for (var index = 0; index < inputs.length; index++) {
			input = inputs[index]

			fontVariationSettings.push("'" + input.dataset.fontVariationTag + "' " + input.value )
		}
		preview = element.parentElement.parentElement.nextElementSibling;
		preview.style.fontVariationSettings = fontVariationSettings.join()
	};

	control_select_fontVariation.forEach((element)=> {
		element.addEventListener("input", (event) => {
			apply_control_select_fontVariation(element)
		})
		apply_control_select_fontVariation(element)
	})

	const control_select_size = document.querySelectorAll('.select-size input')

	function apply_control_select_size(element) {
		preview = element.parentElement.parentElement.nextElementSibling;
		if (element.value > 85 ) {
		  	preview.style.height = element.value * 1.5 + 'px'
		  	preview.className = "t-large preview"
	  	}
	  	else if( element.value > 40 ) {
		  	preview.style.height = element.value * 1.5 * 3 + 'px'
		 	preview.className = "t-medium preview"
	  	}
	 	else if( element.value > 20 ) {
			preview.style.height = element.value * 1.5 * 4 + 'px'
			preview.className = "t-small preview"
		}
		else {
			preview.style.height = element.value * 1.5 * 5 + 'px'
			preview.className = "t-xsmall preview";
		}
		preview.style.fontSize = element.value + 'px'
	};

	control_select_size.forEach((element) => {
		element.addEventListener("input", (event) => {
			apply_control_select_size(element)
		})
		apply_control_select_size(element)
	})

	// characeterset popup

	document.querySelectorAll('.glyph').forEach((element) => {
		element.addEventListener("mouseenter", (event) => {
			character = element.innerText

			container = document.createElement("div")
			container.classList.add("glyph-popup")

			e = document.createElement("div")
			e.classList.add("glyph-popup-top")
			e.textContent = character
			if ( element.style.fontFeatureSettings ) {
				featureTag = document.createElement("span")
				featureTag.classList.add("glyph-popup-top-feature")
				featureTag.textContent = element.style.fontFeatureSettings.slice(1, -1)
				e.appendChild(featureTag)
			}
			container.appendChild(e)

			e = document.createElement("div")
			e.classList.add("letter")
			e.textContent = character
			container.appendChild(e)

			e = document.createElement("div")
			e.classList.add("all")

			value = document.createElement("div")
			value.textContent = "Decimal Value: " + character.charCodeAt(0).toString()
			e.appendChild(value)

			value = document.createElement("div")
			value.textContent = "UTF-8 HEX Value: " + character.charCodeAt(0).toString(16).toUpperCase()
			e.appendChild(value)

			container.appendChild(e)

			element.appendChild(container)
		})
		element.addEventListener("mouseleave", (event) => {
			container = element.lastElementChild
			if ( container.classList.contains("glyph-popup") ) {
				element.removeChild(container)
			}
		})
	})
	// showcase

	const zonecontainer = document.querySelector('#zones')
    const zonefontname = document.querySelector('#zone-fontname')
    const zones = document.querySelectorAll('.zone')

    if (zonecontainer) {
    	currentZoneIndex = 0
	    function zoneInterval() {
	    	zonecontainer.style.fontFamily = font_styles[currentZoneIndex]
		       zonefontname.textContent = font_styles[currentZoneIndex]
	    	currentZoneIndex = currentZoneIndex + 1
	    	if ( currentZoneIndex >= font_styles.length ) {
	    		currentZoneIndex = 0
	    	}
	    }
	    setInterval(zoneInterval, 1000)
	}


    // library overview

	const libray_stack = document.querySelectorAll('.stack')

    var canUpdate = true
    var libray_delta = 0

    function flip_child(event, element) {
    	if (event.deltaY == 0) { libray_delta = event.deltaX }
    	else { libray_delta = event.deltaY }

    	if ( canUpdate ) {

    		if ( libray_delta < 0 ) {
    			child = element.lastElementChild
    			if (child) {
					element.removeChild(child)
					element.insertBefore(child, element.firstElementChild)
				}
    		}
    		else {
    			child = element.firstElementChild
    			if (child) {
					element.removeChild(child)
					element.appendChild(child)
				}
    		}

    		setTimeout(() => {
	    		canUpdate = true
    		}, 60)
    	}
    	canUpdate = false;
    }

    libray_stack.forEach((element)=> {
    	element.addEventListener("wheel", (event) => {
    		flip_child(event, element)
    		event.preventDefault()
    	})
   	})
	   
	   
	// faq page
	let hash = window.location.hash.substr(1);
	if(hash) {
		if(document.getElementById(hash) !== null) {
			document.getElementById(hash).classList.toggle('show');
		}
	}
	const faqtoggles = document.querySelectorAll('.faq-block h2');
	faqtoggles.forEach((toggle)=> {
		toggle.addEventListener('click', (event) => {
			const element = event.target
			const parent = element.closest('section')
			if (parent) {
				parent.classList.toggle('show')
			}
		})
	})
})

