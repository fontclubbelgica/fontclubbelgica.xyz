document.addEventListener('DOMContentLoaded', function() {

	// navigation

	const navs = document.querySelectorAll('nav');
	navs.forEach((nav)=> {
		nav.addEventListener('mouseover', (event) => {
			const element = event.target;
			const parent = element.closest('nav');
			if (parent) {
				parent.classList.toggle('open');
			}
		})
		nav.addEventListener('mouseout', (event) => {
			const element = event.target;
			const parent = element.closest('nav');
			if (parent) {
				parent.classList.toggle('open');
			}
		})
	})

	// font tester

	const control_select_font = document.querySelectorAll('.select-font select');

	function apply_control_select_font(element) {
		preview = element.parentElement.parentElement.nextElementSibling;
		preview.style.fontFamily = element.value;
	};

	control_select_font.forEach((element)=> {
		element.addEventListener("change", (event) => {
			apply_control_select_font(element);
		});
		apply_control_select_font(element);
	});

	const control_select_feature = document.querySelectorAll('.select-feature form');

	function apply_control_select_feature(element) {
		const inputs = element.querySelectorAll('input');
		const featureSettings = [];
		for (var index = 0; index < inputs.length; index++) {
			input = inputs[index]
			if ( input.checked ) {
				featureSettings.push("'" + input.value + "'");
			}
		};
		preview = element.parentElement.parentElement.nextElementSibling;
		preview.style.fontFeatureSettings = featureSettings.join();
	};

	control_select_feature.forEach((element)=> {
		element.addEventListener("change", (event) => {
			apply_control_select_feature(element);
		});
		apply_control_select_feature(element);
	});

	const control_select_size = document.querySelectorAll('.select-size input');

	function apply_control_select_size(element) {
		console.log(element.value)
		preview = element.parentElement.parentElement.nextElementSibling;
		if (element.value > 85 ) {
		  	preview.style.height = element.value * 1.5 + 'px';
		  	preview.className = "t-large preview";
	  	}
	  	else if( element.value > 40 ) {
		  	preview.style.height = element.value * 1.5 * 3 + 'px';
		 	preview.className = "t-medium preview";
	  	}
	 	else if( element.value > 20 ) {
			preview.style.height = element.value * 1.5 * 4 + 'px';
			preview.className = "t-small preview";
		}
		else {
			preview.style.height = element.value * 1.5 * 5 + 'px';
			preview.className = "t-xsmall preview";
		}
		console.log(preview)
		preview.style.fontSize = element.value + 'px';
		console.log(preview.style.fontSize)
	};

	control_select_size.forEach((element)=> {
		element.addEventListener("input", (event) => {
			apply_control_select_size(element);
		});
		apply_control_select_size(element);
	});

	// showcase

	const zonecontainer = document.querySelector('#zones');
    const zonefontname = document.querySelector('#zone-fontname');
    const zones = document.querySelectorAll('.zone');
    zonecontainer.addEventListener("mousemove", (event) => {
        let factorY = event.offsetY / event.target.offsetHeight;
        let index = Math.round(factorY * font_styles.length);
        if (index < 0) {index = 0};
        if (index >= font_styles.length) {index = font_styles.length -1};
        zonecontainer.style.fontFamily = font_styles[index];
        zonefontname.textContent = font_styles[index];
    });
})

