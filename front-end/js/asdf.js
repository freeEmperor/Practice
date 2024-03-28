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

const headph = document.querySelectorAll('.headphoto')
const bloger = document.querySelectorAll('.bloger')
const bkg = document.querySelector('.background')
const out = document.querySelectorAll('.out')
for(let i = 0 ; i < 4 ; i++){
    headph[i].addEventListener('mouseenter',function(){
        bloger[i].style.display = 'block'
        bloger[i].style.opacity = 1
        bkg.style.display = 'block'
    })
}
bkg.addEventListener('mouseenter',function(){
    console.log(1);
    for(let i = 0 ; i < out.length ; i++ ){
        out[i].style.display = 'none'
        out[i].style.opacity = 0
        bkg.style.display = 'none'
    }
})

let histx = document.querySelectorAll('.histxt')
let hisa = document.querySelectorAll('.hisa')
let hisd = document.querySelectorAll('.hisa .del')

function update_li(){
    let his = JSON.parse(localStorage.History)
    let i
    for(i = 0 ; i < Math.min( histx.length , his.length ); i++ ){
        histx[i].innerHTML = String(his[i]);
        hisa[i].style.display = 'block'
    }
    for( ; i < histx.length ; i++ ){
        hisa[i].style.display = 'none'
    }
}

update_li()

const inp = document.querySelector('.search .init')


document.querySelector('#lens').addEventListener('click',function(){
    console.log(1);
    const tt = inp.value
    if(tt === '') return
    let his = JSON.parse(localStorage.History)
    let i
    for(i = 0 ; i < his.length ; i++ ){
        if(String(his[i]) === tt){
            his.splice(i,1)
            break
        }
    }
    his.unshift(tt)
    const strhis = JSON.stringify(his)
    localStorage.History = strhis
    update_li()
})

inp.addEventListener('focus',function(){
    const hy = document.querySelector('.history')
    hy.style.display = 'flex'
})
inp.addEventListener('blur',function(){
    const hy = document.querySelector('.history')
    hy.style.display = 'none'
})

for(let i = 0 ; i < histx.length ; i++ ){
    hisd[i].addEventListener('click',function(){
        let his = JSON.parse(localStorage.History)
        his.splice(i,1)
        const strhis = JSON.stringify(his)
        localStorage.History = strhis
        update_li()
    },true)
}

const delhis = document.querySelector('.hisup .del')
delhis.addEventListener('click',function(){
    const emp = [];
    const stremp = JSON.stringify(emp)
    localStorage.History = stremp
    update_li()
},true)

