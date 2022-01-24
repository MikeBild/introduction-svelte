export async function list(payload) {
    console.log(payload);
    return [{ id: 1, body: "ABC" }];
}
export async function byId(payload) {
    console.log(payload);
    return { id: 1, body: "ABC" };
}
//# sourceMappingURL=articles.js.map