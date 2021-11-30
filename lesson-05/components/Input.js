class Input {
	$container;
	$label;
	$input;
	$error;

	constructor(name, label, type, placeholder) {
		this.$container = document.createElement('div')

		this.$label = document.createElement('label')
		this.$label.setAttribute('class', 'block text-gray-700 text-sm font-bold mt-3 mb-1')
		this.$label.textContent = label

		this.$input = document.createElement('input')
		this.$input.type = type
		this.$input.classList.add('block', 'border', 'border-gray-300', 'w-full', 'p-3', 'rounded', 'mb-2')
		this.$input.name = name
		this.$input.placeholder = placeholder

		this.$error = document.createElement('p')
	}

	getInputValue() {
		return this.$input.value
	}

	setError(message) {
		if (message) {
			this.$error.textContent = message;
			this.$error.setAttribute('class', 'text-red-500 text-xs italic')
			this.$input.classList.add('border-red-500')
		} else {
			this.$error.textContent = ''
			this.$input.classList.remove('border-red-500')
		}
	}

	render() {
		this.$container.appendChild(this.$label)
		this.$container.appendChild(this.$input)
		this.$container.appendChild(this.$error)
		return this.$container
	}
}

export default Input