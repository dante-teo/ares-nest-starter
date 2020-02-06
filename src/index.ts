import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function boostrap() {
	const app = await NestFactory.create(AppModule)
	await app.listenAsync(8080)
}

boostrap()
