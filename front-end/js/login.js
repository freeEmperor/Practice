const but = document.querySelector('.keyin button')
but.addEventListener('click',function(){
    const hao = document.querySelector('.hao').value
    const mi = document.querySelector('.mi').value
    let txt = document.querySelector('.clue')
    console.log(1);
    if(hao == false || mi == false){
        txt.innerHTML = '用户名或密码不能为空'
        txt.style.color = 'darkred'
        return
    }
    let users = JSON.parse(localStorage.Users)
    let i
    for(i = 0 ; i< users.length ; i++ ){
        if(users[i].user === hao) break;
    }
    if(i === users.length){
        txt.innerHTML = '用户名不存在'
        txt.style.color = 'darkred'
        return
    }
    if(users[i].password !== mi){
        txt.innerHTML = '密码错误'
        txt.style.color = 'darkred'
        return
    }
    txt.innerHTML = '登录成功'
    txt.style.color = 'black'
})