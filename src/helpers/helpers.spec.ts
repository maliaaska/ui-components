import { arraySum, fibo } from './helpers'

describe('Helpers', () => {
  describe('arraySum', () => {
    it('should handle empty input', () => {
      const sum = arraySum([])

      expect(sum).toBe(0)
    })

    it('should handle one value', () => {
      const sum = arraySum([1])

      expect(sum).toBe(1)
    })

    it('should handle multiple values', () => {
      const sum = arraySum([1, 2])

      expect(sum).toBe(3)
    })
  })
  describe('fibo', () => {
    it('should return correct value', () => {
      const res = fibo(4)

      expect(res).toBe(3)
    })

    it('should return correct value', () => {
      const res = fibo(5)

      expect(res).toBe(5)
    })

    it('should return correct value', () => {
      const res = fibo(7)

      expect(res).toBe(13)
    })
  })
})
