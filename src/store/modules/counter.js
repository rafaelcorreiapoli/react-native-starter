/* @flow */

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

type Action = Object<{ type: string }>
type Counter = number

export default function counter(state: Counter = 0, action: Action): Counter {
  switch (action.type) {
    case DECREMENT:
      return state - 1
    case INCREMENT:
      return state + 22
    default:
      return state
  }
}

export const decrement = (): Action => ({
  type: DECREMENT,
})

export const increment = (): Action => ({
  type: INCREMENT,
})
