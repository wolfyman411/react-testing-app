import { sum } from '../code/simplefunction'

test('add 4 + 5 to be 9', () => {
    expect(sum(4,5)).toBe(9)
})

test('add 1 + -3 to be -2', () => {
    expect(sum(1,-3)).toBe(-2)
})