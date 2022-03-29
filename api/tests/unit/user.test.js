const User = require("../../api/models/User");
const userRoutes = require('../../api/controllers/users')

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('user controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it returns users with a 200 status code', async () => {
            jest.spyOn(User, 'all', 'get')
                 .mockResolvedValue(['user1', 'user2']);
            await userRoutes.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['user1', 'user2']);
        })
    });

    describe('show', () => {
        test('it returns a user and their dashboard with a 200 status code', async () => {
            jest.spyOn(User, 'findById')
                .mockResolvedValue( user1);
            jest.spyOn(User.prototype, 'user', 'get')
                .mockResolvedValue(['habit1', 'habit2']);
                
            const mockReq = { params: { user_id: 1 } }
            await authorsController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith({
                user_id: 1
            });
        })
    });
    
})
