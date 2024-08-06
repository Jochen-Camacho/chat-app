const app = require("./app");
const { PORT } = require("./util/config");
const { connectToDatabase } = require("./util/db");

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Connected. Running on http://localhost:${PORT}/`);
});
