import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
	async getHelloForNestJS() {
		return 'Hello NestJS!'
	}
}
