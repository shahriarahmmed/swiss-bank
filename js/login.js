document.getElementById('btn-submit').addEventListener('click', function(){
    // get user emali
    const userMail = document.getElementById('user-email');
    const email = userMail.value;
    
    // get user password
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    
    // email and password validation check
    if (email === 'borolox@gmail.com' && password === 'borolox') {
        window.location.href = 'dashborad.html';
    } else {
        console.log('please give valid user & pass');
    }
});