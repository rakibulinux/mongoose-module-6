import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;

//DB COnnection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://localhost:27017/module-mongoose");
    console.log(`DB Connection successfull`);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Got DB Error ${error.message}`);
  }
}
bootstrap();
