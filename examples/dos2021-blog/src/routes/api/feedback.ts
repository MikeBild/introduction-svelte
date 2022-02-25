export async function get() {
    console.log('GET')
	return {
		status: 200,
		body: {
			count: 1
		}
	};
}
export async function post() {
    console.log('POST')
	return {
		status: 201
	};
}
