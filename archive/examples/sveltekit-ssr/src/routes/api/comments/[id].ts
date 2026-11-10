export async function get({ request, url, locals, params }) {
	return { status: 200, body: { id: params.id } };
}
