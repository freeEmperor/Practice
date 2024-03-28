function getIndexLbt(op){
    const a = document.querySelectorAll('.lbt li')
    if(a[0].classList.contains('lih') && op === 1){
        return 3
    }
    for(let i = 0 ; i < 3 ; i++ ){
        if(a[i].classList.contains('active')){
            return i
        } 
    }
}

let n = setInterval( function(){
    const t = getIndexLbt(1);
    if(t < 3){
        const a = document.querySelectorAll('.lbt li')
        a[t].classList.remove('active')
        a[(t+1)%3].classList.add('active')
        let b = document.querySelector('.lbt img')
        b.src = `./image/lbt${(t+1)%3}.png`
    }
},1000)

const inp = document.querySelector('input.init')
inp.addEventListener('focus',function(){
    const a = document.querySelector('.search ul')
    console.log(a);
    a.style.display = 'flex';
})
inp.addEventListener('blur',function(){
    const a = document.querySelector('.search ul')
    console.log(a);
    a.style.display = 'none';
})

const shop = document.querySelector('.vip')

shop.addEventListener('click',function(){
    console.log(1);
    const a = document.querySelector('.vip ul')
    if(a.style.display == false || a.style.display === 'none') a.style.display = 'flex';
    else a.style.display = 'none';
})

const lbth = document.querySelector('.lbt')

lbth.addEventListener('mouseenter',function(){
    const  ulu = document.querySelector('.lbt ul')
    ulu.classList.add('ulh')
    const  lil = document.querySelectorAll('.lbt li')
    console.log(lil);
    for(let i = 0 ; i < 3 ; i++ ){
        lil[i].classList.add('lih')
    }
    
})

lbth.addEventListener('mouseleave',function(){
    const  ulu = document.querySelector('.lbt ul')
    ulu.classList.remove('ulh')
    const  lil = document.querySelectorAll('.lbt li')
    for(let i = 0 ; i < 3 ; i++ ){
        lil[i].classList.remove('lih')
    }
})

const toup = document.querySelector('.toup')
setInterval( function(){
    if(document.documentElement.scrollTop>300) toup.style.display = 'flex'
    else toup.style.display = 'none'
},100)
toup.addEventListener('click',function(){
    window.scrollTo(0,0);
})

const lbtli = document.querySelectorAll('.lbt li')
for(let i = 0 ; i < 3 ; i++){
    lbtli[i].addEventListener('click',function(){
        const t = getIndexLbt(0);
        lbtli[t].classList.remove('active')
        lbtli[i].classList.add('active')
        let b = document.querySelector('.lbt img')
        b.src = `./image/lbt${i}.png`
    })
}