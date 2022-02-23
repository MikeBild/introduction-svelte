exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ items: [{ id: 1 }] }, null, 2),
  };
};
