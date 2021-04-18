const axios = require("axios");

test("User must return an array bigger than 0", async () => {
  const axiosResult = await axios.get("http://localhost:3000/");

  const userDataFromAxios = axiosResult.data;

  expect(userDataFromAxios.length).toBeGreaterThan(0);
});