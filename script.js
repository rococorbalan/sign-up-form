const pwdInput = document.getElementById('password');
const repeatPwdInput = document.getElementById('repeat-pwd');
const pwdStatus = document.querySelector(".pwd-status");

function updatePasswordStatus() {
    if (pwdInput.value === repeatPwdInput.value) {
        pwdStatus.style.visibility = 'hidden';
        pwdInput.setCustomValidity("");;
        repeatPwdInput.setCustomValidity("");
    } else {
        pwdStatus.style.visibility = 'visible';
        pwdInput.setCustomValidity("invalid field");
        repeatPwdInput.setCustomValidity("invalid field");
    }
}

pwdInput.addEventListener('input', updatePasswordStatus);
repeatPwdInput.addEventListener('input', updatePasswordStatus);
