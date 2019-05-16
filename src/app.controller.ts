import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private readonly service: AppService) {}

	@Get()
	async index(): Promise<string> {
		return this.service.getHello()
	}
}
