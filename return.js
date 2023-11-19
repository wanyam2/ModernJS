function solution(n) {
    if (n <= 0) {
        return 0;
    }

    if (n % 2 === 1)  {
        return n + solution(n - 2);
    } else {
        return n * n + solution(n - 2);
    }
}
