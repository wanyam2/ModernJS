function solution(n, callback) {
    if (n % 2 === 1) return; {
        let odd = 0;
        for (let i = 1; i <= n; i += 2) {
            odd += i;
        }
        callback(odd); // n이 홀수인 경우
    } else {
        let evenSquareSum = 0;
        for (let i = 2; i <= n; i += 2) {
            evenSquareSum += i * i;
        }
        callback(evenSquareSum); // n이 짝수인 경우
    }
}

function callbackFunction(result) {
    console.log(result);
}

solution(7, callbackFunction);
solution(10, callbackFunction);


// 홀짝이라는 함수는 만들어~
// 이거 이용해~
// 12장에서 배운 것 중에 하나로 만들어~
