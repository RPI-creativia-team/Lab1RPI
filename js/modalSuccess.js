function _createSuccessModal() {
	const modal = document.createElement('div')
	modal.classList.add('k-modal')
	document.body.appendChild(modal)

	const overlay_div = document.createElement('div')
	overlay_div.classList.add('k-modal-overlay')
	overlay_div.setAttribute('data-close', 'true')
	modal.appendChild(overlay_div)

	const window_div = document.createElement('div')
	window_div.classList.add('k-modal-window')
	overlay_div.appendChild(window_div)

	const text = document.createElement('p')
	text.classList.add('k-success-text')
	text.innerText = 'Order has been sent'
	window_div.appendChild(text)

	return modal
}

$.modalSuccess = function() {
	const $modalSuccess = _createSuccessModal()
	let destroyed = false

	const modalSuccess = {
		open() {
			if (destroyed) {
				return
			}
			$modalSuccess.classList.add('open')

			setTimeout(mySuccessModal.close, 5000)
		},
		close() {
			$modalSuccess.classList.remove('open')
		}
	}

	const listener = event => {
		if (event.target.dataset.close) {
			modalSuccess.close()
		}
	}

	$modalSuccess.addEventListener('click', listener)

	return Object.assign(modalSuccess, {
		destroy() {
			$modalSuccess.parentNode.removeChild($modalSuccess)
			$modalSuccess.removeEventListener('click', listener)
			destroy = true
		}
	})

}