const axios = require("axios");
const User = require("./models/User");

const url = "http://localhost:5000/api/v1";

const user = {
  email: "erik@test.com",
  password: "erik123",
};

const test_level = {
  difficulty: "test",
  verHints: [[], [1, 2, 1], [7], [6], [8], [8], [3, 2], [3, 2], [1, 1], []],
  horHints: [[], [1, 2], [8], [6], [8], [5], [6], [7], [2], []],
  result: [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0,
    1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  order: 1,
};

// async function cleanDb() {
//   await User.findOneAndDelete({ email: "erik@test.com" });
// }

// beforeEach(async () => {
//   await cleanDb();
// });

// afterEach(async () => {
//   await cleanDb();
// });

test("Register user", async () => {
  const { data } = await axios.post(`${url}/register`, {
    ...user,
    name: "Erik",
  });
  expect(data).toHaveProperty("user");
});

test("Login user", async () => {
  const { data } = await axios.post(`${url}/login`, user);
  expect(data).toHaveProperty("token");
});

test("Add New Level", async () => {
  const { data } = await axios.post(`${url}/newLevel`, test_level);
  expect(data.level).toHaveProperty("_id");
});

test("Get single level", async () => {
  const { data } = await axios.post(`${url}/newLevel`, test_level);
  expect(data.level).toHaveProperty("_id");
  const id = data.level._id;

  const response = await axios.get(`${url}/level/${id}`);
  expect(response.data.level).toHaveProperty("_id");
});

test("Get all levels", async () => {
  const { data } = await axios.get(`${url}/level/all`);
  expect(data).toHaveProperty("levels");
});
