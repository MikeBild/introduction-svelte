export async function get({ request, url, locals, params }) {	
	return { status: 200, body: { items: [{ id: '1' }, { id: '2' }] } };
}
