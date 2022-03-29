const Habit = require('../../api/models/Habit')
const db = require('../../api/dbConfig/init')
const pg = require('pg')
const { isTypedArray } = require('util/types')
jest.mock('pg')

describe('Habit', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    
        })
