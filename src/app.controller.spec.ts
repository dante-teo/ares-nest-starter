import { TestingModule, Test } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
	let app: TestingModule
	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService]
		}).compile()
	})

	describe('getHello', () => {
		it('should return "Hello World!"', async () => {
			const controller = app.get(AppController)
			expect(await controller.index()).toBe('Hello World!')
		})
	})
})
