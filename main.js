document.addEventListener('DOMContentLoaded', function() {

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

	const sets = ['ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09', 'ss10', 'aalt', 'calt', 'dlig', 'liga', 'ordn'];
	const fs = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'f13', 'f14'];
	const testers = document.querySelectorAll('.testers>.tester');

	testers.forEach((tester)=> {
		const id = "#"+tester.id;
		const p = document.querySelector(id+" .line p");
		const selectSize = document.querySelector(id+' .select-size input');
		const selectFeature = document.querySelector(id+" .select-feature select");
		const selectFont = document.querySelector(id+" .select-font select");
		const container = document.querySelector(id+" .line");
		selectFeature.addEventListener("change", (event) => {
			sets.forEach((set) => {
				if (p.classList.contains(set)) {
					p.classList.remove(set);
				}
			})

			p.classList.add(event.target.value);
		});
		selectFont.addEventListener("change", (event) => {
			fs.forEach((font) => {
				if (p.classList.contains(font)) {
					p.classList.remove(font);
				}
			})

			p.classList.add(event.target.value);
		});

		selectSize.addEventListener("input", (event) => {
		  if(event.target.value > 85) {
			  container.style.height = event.target.value*1.5+'px';
			  container.className = "t-large line";
		  }
		  else if(event.target.value > 40) {
			  container.style.height = event.target.value*1.5*3+'px';
			  container.className = "t-medium line";
		  }
		  else if(event.target.value > 20) {
			  container.style.height = event.target.value*1.5*4+'px';
			  container.className = "t-small line";
		  }
		  else {
			  container.style.height = event.target.value*1.5*5+'px';
			  container.className = "t-xsmall line";
		  }

		//	alert(event.target.value);
		  p.style.fontSize = event.target.value+'px';
		});


	})


	const selectOTF2 = document.querySelector('.opentype select');
	const p1 = document.querySelector('#features');
	const p2 = document.querySelector('.glyphs>div');
	selectOTF2.addEventListener("change", (event) => {
		sets.forEach((set) => {
			if (p1.classList.contains(set)) {
				p1.classList.remove(set);
			}
			if (p2.classList.contains(set)) {
				p2.classList.remove(set);
			}
		})

		p1.classList.add(event.target.value);
		p2.classList.add(event.target.value);
	});

	const zonecontainer = document.querySelector('#zones');
	const zones = document.querySelectorAll('.zone');
	const fontname = document.querySelector('.fontname');
	const fonts = ['FC Pep Shapes Black', 'FC Pep Shapes Classic', 'FC Pep Shapes Cold', 'FC Pep Shapes Grey', 'FC Pep Shapes Hot', 'FC Pep Shapes Pastel', 'FC Pep Shapes RGB','FC Pep Solid Black', 'FC Pep Solid Classic', 'FC Pep Solid Cold', 'FC Pep Solid Grey', 'FC Pep Solid Hot', 'FC Pep Solid Pastel', 'FC Pep Solid RGB'];

		zonecontainer.addEventListener("mousemove", (event) => {
			let percY = event.offsetY / event.target.offsetHeight;
			let index = Math.floor(percY * 7)*2+1;
			let percX = event.offsetX / event.target.offsetWidth;
			if(percX > 0.5) {
				index++;
			}
			zonecontainer.className = "zones f"+index;
			fontname.textContent = fonts[index-1];
		});




	const langbtns = document.querySelectorAll('.lang-switcher li');
	const figures = document.querySelectorAll('#lang-container figure');
	langbtns.forEach((btn)=> {
		btn.addEventListener('click', (event) => {
			figures.forEach(figure => {
				if (figure.classList.contains('show')) {
					figure.classList.remove('show');
				}
			});
			langbtns.forEach(b => {
				if (b.classList.contains('current')) {
					b.classList.remove('current');
				}
			})
			event.target.classList.add('current');
			let current = document.querySelector('#lang-container figure[data-attr="'+event.target.dataset.filter+'"]');
			current.classList.add('show');
		});
	})
});