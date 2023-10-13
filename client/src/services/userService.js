import { BASE_URL } from './baseUrl';



export async function login(credentials) {

	const init = {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	  },
	  body: JSON.stringify(credentials)
	};
  
	const response = await fetch(BASE_URL + '/login', init);
	if (response.status === 200) {
	  const jwtTokenResponse = await response.json();
	  localStorage.setItem('jwt_token', jwtTokenResponse.jwt_token);
	  return makeUserFromJwt(jwtTokenResponse.jwt_token);
	} else {
	  return Promise.reject('Unauthorized.');
	}
  }

  function makeUserFromJwt(jwtToken) {
	const jwtParts = jwtToken.split('.');
	if (jwtParts.length === 3) {
	  const userData = atob(jwtParts[1]);
	  const decodedToken = JSON.parse(userData);
	  return {
		username: decodedToken.sub,
		authorities: decodedToken.authorities
	  };
	}
}

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

export async function addUser(user) {
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

export async function updateUser(user) {
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
