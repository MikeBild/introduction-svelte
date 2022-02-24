export async function get() {
	return {
		status: 200,
		body: { count: 1 }
	};
}
export async function post({ params }: any) {
	const { slug } = params;

	return {
		status: 201,
		body: { count: 1, slug }
	};
}
