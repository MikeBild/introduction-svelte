const data = [
  { id: 1, content: "Content 1", releasedAt: "2021-01-18T00:00:00.000Z" },
  { id: 2, content: "Content 2", releasedAt: "2021-01-19T00:00:00.000Z" },
  { id: 3, content: "Content 3", releasedAt: "2021-01-20T00:00:00.000Z" },
  { id: 4, content: "Content 4", releasedAt: "2021-01-21T00:00:00.000Z" },
  { id: 5, content: "Content 5", releasedAt: "2021-01-22T00:00:00.000Z" },
];

module.exports = {
  list,
  getById,
};

async function list() {
  return data;
}

async function getById(id) {
  return data[id - 1];
}
