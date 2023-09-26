import "dotenv/config";
import web from "./application/web.js";

web.listen(process.env.WEB_PORT, () => {
  console.info("Server Running");
});
