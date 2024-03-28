const but = document.querySelector('.keyin button')
but.addEventListener('click',function(){
    const hao = document.querySelector('.hao').value
    const mi = document.querySelector('.mi').value
    const qmi = document.querySelector('.qmi').value
    let txt = document.querySelector('.clue')
    if(hao == false || mi == false){
        txt.innerHTML = '注册信息不能留空'
        txt.style.color = 'darkred'
        return
    }
    if(mi !== qmi){
        txt.innerHTML = '两次输入的密码不一致'
        txt.style.color = 'darkred'
        return
    }
    let users = JSON.parse(localStorage.Users)
    let i
    for(i = 0 ; i< users.length ; i++ ){
        if(users[i].user === hao){
            txt.innerHTML = '用户名已被占用'
            txt.style.color = 'darkred'
            return
        }
    }
    console.log(i);
    const ob = {
        user: hao,
        password: mi,
        num: i,
        word: '',
        article: 0,
        fans: 0,
        getgood: 0,
        subscribe: 0
    }
    users.push(ob)
    const strob = JSON.stringify(users);
    localStorage.Users = strob

    txt.innerHTML = '注册成功！快去登录吧~'
    txt.style.color = 'black'
})