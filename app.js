function swapOrder(id, el) {
	const items = document.querySelectorAll('.radios');
	// const first = items[0];
	if (id != 10) {
		const ten = document.querySelector('[data-id="10"]');
		const tenOrder = ten.style.order;
		const elOrder = el.style.order;
		const tenOffset = el.getBoundingClientRect().left - ten.getBoundingClientRect().left;
		const elOffset = tenOffset <= 0 ? Math.abs(tenOffset) : -Math.abs(tenOffset);

		console.log(elOffset, tenOffset);
		// const offsetFrom = ten.getBoundingClientRect().left - el.getBoundingClientRect().left;

		// el.style.transform = `translate(${offset}px, 0px)`;
		const transformTen = [
			{ transform: 'translate(0, 0) rotate(0deg)' }, // Start position and rotation
			{ transform: `translate(${tenOffset / 1.2}px, -150px) rotate(15deg)` }, // Mid-point (arc peak) with rotation
			{ transform: `translate(${tenOffset}px, 0px) rotate(0deg)` }
		];
		const transformEL = [
			{ transform: 'translate(0, 0) rotate(0deg)' }, // Start position and rotation
			{ transform: `translate(${elOffset / 1.2}px, -50px) rotate(-15deg)` }, // Mid-point (arc peak) with rotation
			{ transform: `translate(${elOffset}px, 0px) rotate(0deg)` }
		];
		// el.classList.add('move-once');
		const options = {
			duration: 600 + Math.abs(tenOffset),
			easeing: 'ease-in-out'
		};
		el.classList.add('moving-paw');
		ten.classList.add('moving-paw');
		const from = el.animate(transformEL, options);
		const to = ten.animate(transformTen, options);
		to.onfinish = (e) => {
			el.classList.remove('moving-paw');
			ten.classList.remove('moving-paw');
			el.style.order = tenOrder;
			ten.style.order = elOrder;
		}

	}
	console.log(id, el);
}
function checkTen(id, el) {
	const ten = document.querySelector('[data-id="10"]');
	const radio = ten.querySelector('input');
	console.log(el.checked);
	if (!radio.checked) {
		setTimeout(() => {
			radio.checked = true;
		}, 800);
	}
}
document.addEventListener('DOMContentLoaded', () => {
	const items = document.querySelectorAll('.radios');
	items.forEach((item, i) => {
		item.addEventListener('click', function () {
			swapOrder(item.getAttribute('data-id'), item);
			checkTen(item.getAttribute('data-id'), item);
		});
	});
});



