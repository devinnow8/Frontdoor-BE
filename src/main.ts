import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
// import keepAlive from "../alive";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Accept",
  });
  await app.listen(3000);
  // keepAlive();
}
bootstrap();
