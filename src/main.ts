import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	await app.listenAsync(8080)
	console.log('Nest application has started and listen on 8080...')
}

bootstrap()
