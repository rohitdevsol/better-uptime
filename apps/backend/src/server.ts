import { app } from "@/index";

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
