var minus = function(n) {
  if (n != 0) {
    console.log(n)
    n = n-1
    if (n != 0) {
      minus(n)
    }
  }
} 
minus(10)