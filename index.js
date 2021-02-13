//단어 배열 제조
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

//임의의 단어 고르기
var word = words[Math.floor(Math.random() * words.length)];

//정답 배열 설정
var answerArray= [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

//게임 반복문
while (remainingLetters > 0) {
    alert(answerArray.join(" "));

    var guess = prompt("글자를 입력해주세요! 취소를 누르면 게임을 중단합니다");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("한 글자만 입력해주세요!");
    } else {
        for (var j = 0; j < word.length; j++) {
            if(word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
//게임 반복문 끝

//정답 출력 및 축하 메세지
alert(answerArray.join(" "));
alert("축하합니다! 정답은 " + word + "입니다.");