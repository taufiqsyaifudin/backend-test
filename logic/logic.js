function solution(a, m, k) {
    let count = 0;
  
    for (let i = 0; i <= a.length - m; i++) {
      for (let j = i + 1; j < i + m; j++) {
        let sum = a[i] + a[j];
        if (sum === k) {
          count++;
          break;
        }
      }
    }
  
    return count;
  }
  
  const a = [15, 8, 8, 2, 6, 4, 1, 7];
  const m = 2;
  const k = 8;
  const result = solution(a, m, k);
  console.log(result);