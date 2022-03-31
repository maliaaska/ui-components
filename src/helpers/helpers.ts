// export const arraySum = (input: number[]): number => {
//   let sum = 0
//   for (let i = 0; i < input.length; i++) {
//     sum += input[i]
//   }
//
//   return sum
// }

// export const arraySum = (input: number[]): number => {
//   let sum = 0
//   let i = 0
//   while (i < input.length) {
//     sum += input[i++]
//   }
//
//   return sum
// }

export const arraySum = (input: number[]): number => input.reduce((prev, curr) => prev + curr, 0)

const move = () => {
  const direction = Math.random() > 0.5 ? 1 : -1

  return direction
}

const moveUp = () => {
  let lev = 0

  while (lev < 1) {
    lev += move()
  }
}

// const moveUp = () => {
//   move() === 1
//     ? null
//     : (() => {
//         moveUp()
//         moveUp()
//       })()
// }

// 1 1 2 3 5 8 13 21 34 ........

const fibo = (n: number): number => {
  return n > 1 ? fibo(n - 2) + fibo(n - 1) : n
}

const fibo2 = (n) => {
  let a = 0
  let b = 1
  let c = 1

  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  for (let i = 2; i < n; i++) {
    c = a + b
    a = b
    b = c
  }

  return b
}
