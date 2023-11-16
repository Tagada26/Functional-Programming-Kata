import { pipe } from 'fp-ts/function'

function add1(num: number): number {
  return num + 1
}

function multiply2(num: number): number {
  return num * 2
}

// Fonctionnement pipe : A -> (A->B) -> (B->C) -> (C->D)

describe('Pipe', () => {
    it('Compare procédural and functional way', () => {
        const num = add1(1)
        const result = multiply2(num)
        const result2 = pipe(
            1,
            add1, 
            multiply2
        ) // 4
        
        console.log(result)
        console.log(result2)
        expect(result2).toEqual(result)
    })
})


