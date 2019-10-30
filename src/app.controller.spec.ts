import { TestingModule, Test } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppControllerTests', () => {
	let app: TestingModule

	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService]
		}).compile()
	})

	describe('index API', () => {
		it('should return Hello World!', async () => {
			const appController = app.get(AppController)
			expect(await appController.index()).toBe('Hello World!')
		})
	})
})
