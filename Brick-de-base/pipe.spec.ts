import { pipe } from 'fp-ts/function'

function add1(num: number): number {
  return num + 1
}

function multiply2(num: number): number {
  return num * 2
}

describe('', () => {
    it('', () => {
        const result = add1(2)
        const result2 = pipe(
            1,
            add1, 
            multiply2
        ) // 4
        
        console.log(result)
        console.log(result2)
        expect(result2).toEqual(4)
    })
})


