export async function findAllCartoons() {

    const response = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(
			new Error(`Unexpected status code ${response.status}.`)
		);
	}
}


export async function findCartoonById(cartoonId) {

	const response = await fetch(`https://api.sampleapis.com/cartoons/cartoons2D/${cartoonId}`);
	if (response.ok) {
		return response.json();
	} else if (response.status === 404) {
		return Promise.reject(
			new Error(`The requested resource could not be found.`)
		);
	} else {
		return Promise.reject(
			new Error(`Unexpected status code ${response.status}.`)
		);
	}

}