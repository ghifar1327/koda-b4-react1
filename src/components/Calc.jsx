
export function decrement(count, setCount) {
  if (count > 0) {
    setCount(count - 1);
  }
}

export function increment(count, setCount) {
  if (count < 10) {
    setCount(count + 1);
  }
}
