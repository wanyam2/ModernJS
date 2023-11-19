// 전역 함수
function foo() {
    console.log('global function foo');
}

function bar() {
    // 중헙 함수
    function foo() {
        console.log('local function foo');
    }

    foo(); // 1
}

bar();