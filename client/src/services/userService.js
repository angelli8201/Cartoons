import { BASE_URL } from './baseUrl';

const endpointUrl = BASE_URL + '/user';

export async function findAllUsers() {
	const response = await fetch(endpointUrl);
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(
			new Error(`Unexpected status code ${response.status}.`)
		);
	}
}

export async function findUserById(userId) {
	const response = await fetch(`${endpointUrl}/${userId}`);
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

async function addUser(user) {
	const init = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	};

	const response = await fetch(endpointUrl, init);
	if (response.ok) {
		return null;
	} else if (response.status === 400) {
		const errs = await response.json();
		return errs;
	} else {
		return Promise.reject(
			new Error(`Unexpected status code ${response.status}.`)
		);
	}
}

async function updateUser(user) {
	const init = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	};

	const response = await fetch(`${endpointUrl}/${user.userId}`, init);
	if (response.ok) {
		return null;
	} else if (response.status === 400) {
		const errs = await response.json();
		return errs;
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

export async function saveUser(user) {
	return user.userId > 0 ? updateUser(user) : addUser(user);
}

export async function deleteUserById(userId) {
	const init = {
		method: 'DELETE',
	};

	const response = await fetch(`${endpointUrl}/${userId}`, init);
	if (response.ok) {
		return Promise.resolve();
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
