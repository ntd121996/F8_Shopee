document.addEventListener("DOMContentLoaded", function() { 

    const showModalBtns = document.querySelectorAll('.header__navbar-link')
    const modal = document.querySelector('.modal')
    const loginForm = document.querySelector('.login-form')
    const regForm = document.querySelector('.reg-form')
    const switchForms = document.querySelectorAll('.auth-form__switch-btn')
    console.log(switchForms);
    if ( showModalBtns.length != 0 )
    {
        for (let btn of showModalBtns)
        {
            if( btn.innerHTML == 'Đăng ký')
            {
                btn.addEventListener('click', (e) => {
                        modal.style.display = 'flex';
                        regForm.style.display = 'block';
                })
            }
            if( btn.innerHTML == 'Đăng nhập')
            {
                btn.addEventListener('click', (e) => {
                    modal.style.display = 'flex';
                    loginForm.style.display = 'block';
                })
                
            }
        }
    }

    if (switchForms.length != 0) {

        for (let btn of switchForms)
        {
            if( btn.innerHTML == 'Đăng nhập')
            {
                btn.addEventListener('click', (e) => {
                    console.log('click');
                    loginForm.style.display = 'block';
                    regForm.style.display = 'none';
                })
            }
            if( btn.innerHTML == 'Đăng ký')
            {
                btn.addEventListener('click', (e) => {
                    regForm.style.display = 'block';
                    loginForm.style.display = 'none';
                })
                
            }
        }
    }
});


