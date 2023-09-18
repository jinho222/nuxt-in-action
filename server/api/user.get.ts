export default defineEventHandler(async (e) => {
  const query = getQuery(e);
  const names = ["jinho choi", "michael jodan", "messi"];
  const randomIndex = (Math.random() * names.length) >> 0;
  const randomName = names[randomIndex];

  console.log(">>> QUERY", query.number);
  return {
    id: 123,
    name: randomName,
    number: Number(query.number ?? 0),
  };
});
