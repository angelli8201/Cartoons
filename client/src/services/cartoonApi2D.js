export async function cartoonApi2D() {

    const response = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(
			new Error(`Unexpected status code ${response.status}.`)
		);
	}

}