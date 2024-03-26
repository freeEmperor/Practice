const but = document.querySelector('.keyin button')
but.addEventListener('click',function(){
    console.log(1);
    const hao = document.querySelector('.hao').value
    const mi = document.querySelector('.mi').value
    let txt = document.querySelector('.clue')
    if(hao == false || mi == false){
        console.log(2);
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
        console.log(2);
        txt.innerHTML = '用户名不存在'
        txt.style.color = 'darkred'
        return
    }
    if(users[i].password !== mi){
        console.log(4);
        txt.innerHTML = '密码错误'
        txt.style.color = 'darkred'
        return
    }
    console.log(5);
    txt.innerHTML = '登录成功'
    txt.style.color = 'black'
})