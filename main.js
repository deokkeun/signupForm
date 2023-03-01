const input = document.querySelectorAll("input");

// 아이디
input[0].addEventListener("keyup", function() {
    // 아이디 정규표현식
    const regExpId = /^[a-z][a-zA-Z0-9-_]{5,13}$/;

    if(regExpId.test(this.value)) {
        this.style.backgroundColor = "springgreen";
        this.style.color = "black";
        this.style.border = "2px solid black";
    } else if(this.value == 0) {
        this.style.backgroundColor = null;
        this.style.color = "black";
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }
})

// 비밀번호 검사
const pwCheck = document.getElementById("pwCheck");
// 비밀번호
input[1].addEventListener("keyup", function() {
    if(this.value.trim().length == 0 || input[2].value.trim().length == 0) {
        pwCheck.innerText = "";
    } else if(this.value === input[2].value) {
        pwCheck.innerText = "비밀번호 일치";
        pwCheck.classList.add("confirm");
        pwCheck.classList.remove("error");
    } else {
        pwCheck.innerText = "비밀번호 불일치";
        pwCheck.classList.add("error");
        pwCheck.classList.remove("confirm");
    }
})
// 비밀번호 확인
input[2].addEventListener("keyup", function() {
    if(this.value.trim().length == 0 || input[1].value.trim().length == 0) {
        pwCheck.innerText = "";
    } else if(this.value === input[1].value) {
        pwCheck.innerText = "비밀번호 일치";
        pwCheck.classList.add("confirm");
        pwCheck.classList.remove("error");
    } else {
        pwCheck.innerText = "비밀번호 불일치";
        pwCheck.classList.add("error");
        pwCheck.classList.remove("confirm");
    }
})

// 이름
input[3].addEventListener("keyup", function() {
    // 이름 정규표현식
    const regExpName = /^[가-힣]{2,5}$/;
    const nameCheck = document.getElementById("nameCheck");

    if(regExpName.test(this.value)) {
        nameCheck.innerText = "정상입력";
        nameCheck.classList.add("confirm");
        nameCheck.classList.remove("error");
    } else if(this.value.trim().length == 0) {
        nameCheck.innerText = "";
    } else if(this.value.trim().length < 2) {
        nameCheck.innerText = "2글자 이상 입력해주세요."; 
        nameCheck.classList.add("error");
        nameCheck.classList.remove("confirm"); 
    } else if(this.value.trim().length > 5) {
        nameCheck.innerText = "최대 5글자 까지 가능합니다."; 
        nameCheck.classList.add("error");
        nameCheck.classList.remove("confirm"); 
    } else {
        nameCheck.innerText = "한글만 입력해주세요";
        nameCheck.classList.add("error");
        nameCheck.classList.remove("confirm");
    }
})


function validate() {
    // 성별
    if(!input[4].checked && !input[5].checked) {
        alert("성별을 선택해주세요.");
    }
    // 전화번호 정규표현식
    const regExpPhone = /^0(2|10)\-\d{3,4}\-\d{4}$/;
    if(!regExpPhone.test(input[6].value)) {
        alert("전화번호의 형식이 올바르지 않습니다.");
    }
}
    


