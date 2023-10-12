function hanoi(n, from, to, aux) {
  if(n==1) {
    console.log('move ', n, ' from ', from, ' to ', to )
  } else {
    hanoi(n-1, from, aux, to)
    console.log('move ', n, ' from ', from, ' to ', to )
    hanoi(n-1, aux, to, from)
  }
}

hanoi(4, 'A', 'C', 'B')