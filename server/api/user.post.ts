export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  console.log(">>> body ", body);

  return {
    success: true,
  };
});
