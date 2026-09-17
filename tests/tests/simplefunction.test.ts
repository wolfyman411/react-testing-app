import { sum } from '../code/simplefunction'
import { cappedSum } from '../code/simplefunction'
import { Person } from '../code/simplefunction'
import {addToShoppingList} from '../code/simplefunction'
import {ping} from '../code/simplefunction'
import axios from 'axios'

jest.mock('axios')

var testsStarted = 0
var testsCompleted = 0

beforeEach(() => {
    testsStarted += 1
})

afterEach(() => {
    testsCompleted += 1
})

beforeAll(() => {
    console.log(`${testsStarted} total tests started.\n${testsCompleted} total tests completed.`)
})

afterAll(() => {
    console.log(`${testsStarted} total tests started.\n${testsCompleted} total tests completed.`)
})

describe("Sum tests", () => {

    test('add 4 + 5 to be 9', () => {
        expect(sum(4,5)).toBe(9)
    })

    test('add 1 + -3 to be -2', () => {
        expect(sum(1,-3)).toBe(-2)
    })
})

describe("Person tests", () => {

    test('Person test 1, Bob, Age 24, Male', () => {
        const newPerson = new Person("Bob",24,true)
        expect(newPerson).toEqual({name:"Bob",age:24,isMale:true})
    })

    test('Person test 2, Linda, Age 81, Female', () => {
        const newPerson = new Person("Linda",81,false)
        expect(newPerson).toEqual({name:"Linda",age:81,isMale:false})
    })
})

describe("Capped sum tests", () => {
    test('Capped sum, odds subtract, evens add', () => {
        for (let i = 1; i < 20; i++) {
            var lastSum = 0
            if (i%2 === 0) {
                lastSum = cappedSum(lastSum,i)
            }
            else {
                lastSum = cappedSum(lastSum,-i)
            }
            expect(lastSum).toBeGreaterThanOrEqual(0)
            expect(lastSum).toBeLessThanOrEqual(10)
        }
    })
})

describe("Shopping List tests", () => {
    test('Shopping List Logic', () => {
        const shoppingList:string[] = []
        addToShoppingList(shoppingList,"1-Milk")
        addToShoppingList(shoppingList,"3-Carrots")
        addToShoppingList(shoppingList,"1 -Milk")
        addToShoppingList(shoppingList,"2-Carrots")
        addToShoppingList(shoppingList,"1-Carrots")
        addToShoppingList(shoppingList,"1-Carrots")

        expect(shoppingList).toContain("2 - Milk")
        expect(shoppingList).toContain("7 - Carrots")
    })
})

describe("Async tests", () => {
    test.skip('async function', async () => {
        const data = await ping()
        expect(data).toBe('pong')
    })
})

describe("Mock test",() => {
    
    test("Fetch mocked people", () => {
        const person1 = new Person("Bob",24,true)
        const person2 = new Person("Linda",81,false)
        const person3 = new Person("Harry",25,true)
        const users = [person1,person2,person3]
        const resp = {data:users}
        jest.mocked(axios.get).mockResolvedValue(resp)
        return Person.all().then(data => expect(data).toEqual(users))
    })
})