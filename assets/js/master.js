const btnreg = document.querySelector('.text')
const btnlog = document.querySelector('.text1')
const registerdiv = document.querySelector('.register')
const logindiv = document.querySelector('.login')
const spc = document.querySelectorAll('.maindiv>.c')
const spb = document.querySelectorAll('.b')
const inpform2 = document.querySelectorAll('.form2>input')
const inpform1 = document.querySelectorAll('.form1>input')
const btnsignup = document.querySelector('.btnsignup')
const spic = document.querySelectorAll('.form2>.ic')
const iclogin = document.querySelectorAll('.form1>.icon')
const resultbox = document.querySelector('.result')
btnreg.addEventListener('click', () => {
    logindiv.classList.add('change')
    spc.forEach((val) => {
        val.style.display = 'none'
    })
    registerdiv.style.display = 'flex'
    spb.forEach((val) => {
        val.style.display = 'flex'
    })
})
btnlog.addEventListener('click', () => {
    logindiv.classList.remove('change')
    registerdiv.style.display = 'none'
    spb.forEach((val) => {
        val.style.display = 'none'
    })

    spc.forEach((val) => {
        val.style.display = 'flex'
    })
    resultbox.innerHTML = ''
})

////////////sign up pass//////////////
spic[1].addEventListener('click', () => {
    spic[1].style.display = 'none'
    spic[0].style.display = 'flex'
    inpform2[5].setAttribute('type', 'password')
})
spic[0].addEventListener('click', () => {
    spic[0].style.display = 'none'
    spic[1].style.display = 'flex'
    inpform2[5].setAttribute('type', 'text')
})
////////////sign up pass//////////////
////////////login pass//////////////
iclogin[1].addEventListener('click', () => {
    iclogin[1].style.display = 'none'
    iclogin[0].style.display = 'flex'
    inpform1[1].setAttribute('type', 'password')
})
iclogin[0].addEventListener('click', () => {
    iclogin[0].style.display = 'none'
    iclogin[1].style.display = 'flex'
    inpform1[1].setAttribute('type', 'text')

})
////////////login pass//////////////
///////////////// sign up////////////////////////
let ptext = document.createElement('p')
let ptext1 = document.createElement('p')
let ptext2 = document.createElement('p')
let ptext3 = document.createElement('p')
let ptext4 = document.createElement('p')
let ptext5 = document.createElement('p')
let ptext6 = document.createElement('p')
let passcheck = document.createElement('p')
resultbox.appendChild(ptext)
resultbox.appendChild(ptext1)
resultbox.appendChild(ptext2)
resultbox.appendChild(ptext3)
resultbox.appendChild(ptext4)
resultbox.appendChild(ptext5)
resultbox.appendChild(ptext6)
resultbox.appendChild(passcheck)
function checkglobal() {
    inpform2.forEach((val) => {
        let inpval = val.value
        if (
            inpval.length < 3 ||
            (inpval.indexOf('<script')) >= 0 ||
            inpval == '' ||
            inpval == null
        ) {
            // alert('Fill all the Your Information')
            ptext.innerHTML = '*Fill all of The Form!*'
            ptext.style.color = 'rgb(187, 44, 0)'
        }
        else {
            ptext.innerHTML = ''
        }
    })
}
function checkdata() {
    let flag = 0
    const email = document.forms['registerform']['email'].value
    const user = document.forms['registerform']['username'].value
    const pass = document.forms['registerform']['password'].value
    const name = document.forms['registerform']['fname'].value
    const lname = document.forms['registerform']['lname'].value
    const phone = document.forms['registerform']['phone'].value
    checkglobal()
    //////////// global validation firstname ////////////////
    if ((name.search(/[%&$.#_@!(*)]/)) >= 0) {
        ptext1.innerHTML = '*The FirstName cant contain special character*'
        inpform2[0].style.border = '3px solid red'
        ptext1.style.color = 'rgb(228, 228, 4)'
        flag++
    }
    if ((name.search(/[0-9]/)) >= 0) {
        ptext1.innerHTML = '*The FirstName cant contain numbers*'
        inpform2[0].style.border = '3px solid red'
        ptext1.style.color = 'rgb(228, 228, 4)'
        flag++
    }
    if (name == '') {
        inpform2[0].style.border = '2px solid  rgb(191, 54, 4)'
        flag++
    }
    else if (
        (name.search(/[%&$.#_@!(*)]/)) < 0 &&
        (name.search(/[0-9]/)) < 0 &&
        name != ''
    ) {
        ptext1.innerHTML = ''
        inpform2[0].style.border = '3px solid green'
    }
    //////////// global validation firstname ////////////////
    //////////// global validation lastname ////////////////
    if ((lname.search(/[%&$.#_@!(*)]/)) >= 0) {
        ptext2.innerHTML = '*The LastName cant contain special character*'
        inpform2[1].style.border = '3px solid red'
        ptext2.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if ((lname.search(/[0-9]/)) >= 0) {
        ptext2.innerHTML = '*The LastName cant contain numbers*'
        inpform2[1].style.border = '3px solid red'
        ptext2.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if (lname == '') {
        inpform2[1].style.border = '2px solid  rgb(191, 54, 4)'
        flag++
    }
    else if (
        (lname.search(/[%&$.#_@!(*)]/)) < 0 &&
        (lname.search(/[0-9]/)) < 0 &&
        lname != ''
    ) {
        ptext2.innerHTML = ''
        inpform2[1].style.border = '3px solid green'
    }
    //////////// global validation lastname ////////////////
    //////////// global validation phone ////////////////
    if ((phone.search(/[a-z]/)) >= 0 || (phone.search(/[A-Z]/)) >= 0) {
        ptext3.innerHTML = '*The PhoneNumber cant contain Character*'
        inpform2[2].style.border = '3px solid red'
        ptext3.style.color = 'rgb(228, 228, 4)'
        flag++
    }
    if ((phone.search(/[%&$.#_@!(*)]/)) >= 0) {
        ptext3.innerHTML = '*The PhoneNumber cant contain special character*'
        inpform2[2].style.border = '3px solid red'
        ptext3.style.color = 'rgb(228, 228, 4)'
        flag++
    }
    if (phone == '') {
        inpform2[2].style.border = '2px solid  rgb(191, 54, 4)'
        flag++
    }
    if (phone.length < 11) {
        inpform2[2].style.border = '2px solid red'
        flag++
    }
    else if (
        (phone.length) == 11 &&
        (phone.search(/[0-9]/)) >= 0 &&
        phone != ''
    ) {
        ptext3.innerHTML = ''
        inpform2[2].style.border = '3px solid green'
    }

    //////////// global validation phone ////////////////
    //////////// global validation email ////////////////
    if (
        ((email.lastIndexOf('.')) + 2) > email.length - 1 ||
        (email.search(/\s/)) >= 0 ||
        (email.search(/[.]/)) <= 0
    ) {
        // alert('no email invalid')
        ptext4.innerHTML = '*invalid Email!!!!*'
        inpform2[3].style.border = '3px solid rgb(187, 44, 0)'
        ptext4.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if ((email.search(/[@]/)) == 0 && (email.search(/[@]/)) < 3) {
        ptext4.innerHTML = '*The Email cant start with @*'
        inpform2[3].style.border = '3px solid red'
        ptext4.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if ((email.search(/[$%^&)#!*(]/)) >= 0) {
        ptext4.innerHTML = '*The Email cant contain special character*'
        inpform2[3].style.border = '3px solid red'
        ptext4.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if (email == '') {
        inpform2[3].style.border = '2px solid  rgb(191, 54, 4)'
        flag++
    }
    else if (
        ((email.lastIndexOf('.')) + 2) < email.length - 1 &&
        (email.search(/\s/)) < 0 &&
        (email.search(/[.]/)) > 0 &&
        (email.search(/[@]/)) > 4 &&
        (email.search(/[$%^&)#!(]/)) < 0 &&
        email != ''
    ) {
        ptext4.innerHTML = ''
        inpform2[3].style.border = '3px solid green'
    }
    //////////// validation email ////////////////
    //////////// validation username ////////////////
    if ((user.search(/[$%*^&)#!(]/)) >= 0) {
        ptext5.innerHTML = '*The UserName cant contain special character*'
        inpform2[4].style.border = '3px solid red'
        ptext5.style.color = 'rgb(228, 228, 4)'
        flag++
    }
    if ((user.search(/[A-Z]/)) < 0) {
        ptext5.innerHTML = '*The UserName Should be contain UpperCase Char!*'
        inpform2[4].style.border = '3px solid red'
        ptext5.style.color = 'rgb(228, 228, 4)'
        flag++
    }
    if ((user.search(/[a-z]/)) < 0) {
        ptext5.innerHTML = '*The UserName Should be contain LowerCase Char!*'
        inpform2[4].style.border = '3px solid red'
        ptext5.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if (user == '') {
        inpform2[4].style.border = '2px solid  rgb(191, 54, 4)'
        flag++
    }
    else if (
        (user.search(/[$%*^&)#!(]/)) < 0 &&
        (user.search(/[A-Z]/)) >= 0 &&
        (user.search(/[a-z]/)) >= 0
    ) {
        ptext5.innerHTML = ''
        inpform2[4].style.border = '3px solid green'
    }
    //////////// validation username ////////////////
    //////////// validation password ////////////////
    if (pass.length < 8) {
        ptext6.innerHTML = '*Minimum password length 8*'
        inpform2[5].style.border = '3px solid red'
        ptext6.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if ((pass.search(/[$%*^&)#!(]/)) == -1) {
        ptext6.innerHTML = '*Password Should be contain special character*'
        inpform2[5].style.border = '3px solid red'
        ptext6.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if ((pass.search(/[A-Z]/)) == -1) {
        ptext6.innerHTML = '*Password Should be contain UpperChar*'
        inpform2[5].style.border = '3px solid red'
        ptext6.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if ((pass.search(/[a-z]/)) == -1) {
        ptext6.innerHTML = '*Password Should be contain LowerChar*'
        inpform2[5].style.border = '3px solid red'
        ptext6.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if ((pass.search(/[ا-ی]/)) >= 0) {
        ptext6.innerHTML = '*Password cant contain persian char'
        inpform2[5].style.border = '3px solid red'
        ptext6.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if ((pass.search(/\s/)) >= 0) {
        ptext6.innerHTML = '*Password cant contain Space!!'
        inpform2[5].style.border = '3px solid red'
        ptext6.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if ((pass.search(/[0-9]/)) == -1) {
        ptext6.innerHTML = '*Password should be contain Numbers'
        inpform2[5].style.border = '3px solid red'
        ptext6.style.color = 'rgb(187, 44, 0)'
        flag++
    }
    if (pass == '') {
        inpform2[5].style.border = '2px solid  rgb(191, 54, 4)'
        flag++
    }
    else if (
        (pass.search(/[$%*^&)#!(]/)) >= 0 &&
        (pass.search(/[0-9]/)) >= 0 &&
        (pass.search(/[a-z]/)) >= 0 &&
        (pass.search(/[A-Z]/)) >= 0 &&
        (pass.search(/[ا-ی]/)) < 0 &&
        (pass.search(/\s/)) < 0 &&
        pass.length > 8 &&
        pass != ''
    ) {
        ptext6.innerHTML = ''
        inpform2[5].style.border = '3px solid green'
    }

    //////////// validation password////////////////
    if (flag > 0) {
        return false;
    }
    fetchdata()
}
function fetchdata() {
    const myobj = new XMLHttpRequest()
    myobj.onload = function () {
        this.responseText
    }
    myobj.open("POST", "register.php");
    myobj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    myobj.send("firstname=" + inpform2[0].value + "", "lastname=" + inpform2[1].value + "", "phone=" + inpform2[2].value + "", "email=" + inpform2[3].value + "", "username=" + inpform2[4].value + "");
}
///////////////// sign up////////////////////////
///////////////// Log in////////////////////////
let pform1 = document.createElement('p')
let pform2 = document.createElement('p')
let pform3 = document.createElement('p')
let pform4 = document.createElement('p')
resultbox.appendChild(pform1)
resultbox.appendChild(pform2)
resultbox.appendChild(pform3)
resultbox.appendChild(pform4)
function checkglobalform2() {
    inpform1.forEach((val) => {
        let myinpval = val.value
        if (
            myinpval.length < 3 ||
            (myinpval.indexOf('<script')) >= 0 ||
            myinpval == '' ||
            myinpval == null
        ) {
            // alert('Fill all the Your Information')
            pform1.innerHTML = '*Fill all of The Form!*'
            pform1.style.color = 'rgb(228, 228, 4)'
            val.style.border = '2px solid rgb(187, 44, 0)'
        }
        else {
            pform1.innerHTML = ''
        }
    })
}
function checklogin() {
    let error = 0
    const inpuser = document.forms['loginform']['myuser'].value
    const inppass = document.forms['loginform']['mypass'].value
    checkglobalform2()

    if ((inpuser.search(/[A-Z]/)) < 0) {
        pform2.innerHTML = '*The UserName Should be contain UpperCase Char!*'
        inpform1[0].style.border = '3px solid red'
        pform2.style.color = 'rgb(228, 228, 4)'
        error++
    }
    if ((inpuser.search(/[&)%(^$#@!]/)) >= 0) {
        pform2.innerHTML = '*UserName Cant contain Special Character*'
        inpform1[0].style.border = '2px solid red'
        pform2.style.color = 'red'
        error++
    }
    if ((inpuser.search(/[a-z]/)) < 0) {
        pform2.innerHTML = '*The UserName Should be contain LowerCase Char!*'
        inpform2[0].style.border = '3px solid red'
        pform2.style.color = 'rgb(187, 44, 0)'
        error++
    }
    if (inpuser == '') {
        inpform1[0].style.border = '2px solid red'
        error++
    }
    else if (
        (inpuser.search(/[$%*^&)#!(]/)) < 0 &&
        (inpuser.search(/[A-Z]/)) >= 0 &&
        (inpuser.search(/[a-z]/)) >= 0 &&
        inpuser != ''
    ) {
        pform2.innerHTML = ''
        inpform1[0].style.border = '3px solid green'
    }
    //////////////////////////////////////////////////
    if (inppass == '' || (inppass.length) < 8) {
        pform3.innerHTML = 'The Password InCurrect!'
        pform3.style.color = 'rgb(187, 44, 0)'
        inpform1[1].style.border = '2px solid red'
        error++
    }
    else if (
        inppass != '' &&
        (inppass.length) > 8
    ) {
        pform3.innerHTML = ''
        inpform1[1].style.border = '2px solid green'
    }

    if (error > 0) {
        return false;
    }
    fetchmydata()

}

function fetchmydata() {
    const formobj = new XMLHttpRequest()
    formobj.onload = function () {
        this.responseText
    }
    formobj.open('POST', 'login.php')
    formobj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    formobj.send("username=" + inpform1[0].value + "")
}
///////////////// Log in////////////////////////
inpform2[5].addEventListener('input', (e) => {
    let power = 0
    let x = e.target.value
    let txt = ''
    let mycolor = ''
    if ((x.length) > 16) power++
    if ((x.search(/[a-z]/)) >= 0) power++
    if ((x.search(/[0-9]/)) >= 0) power++
    if ((x.search(/[A-Z]/)) >= 0) power++
    if ((x.search(/[%&$.#_@!(*)]/)) >= 0) power++
    switch (power) {
        case 0: txt = 'Weak'; mycolor = 'red'; break;
        case 1: txt = 'normal'; mycolor = 'orange'; break;
        case 2: txt = 'good'; mycolor = 'yellow'; break;
        case 3: txt = 'very good'; mycolor = 'rgb(77, 240, 83)'; break;
        case 4: txt = 'Strong'; mycolor = 'green'; break;
    }

    passcheck.innerHTML = txt
    passcheck.style.color = mycolor
    passcheck.style.fontSize = '30px'
})