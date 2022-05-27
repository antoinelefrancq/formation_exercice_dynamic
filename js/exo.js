console.log('test 1...2...1...2');

const hercule = {
    name:'Hercule',
    job:'Demi-Dieu',
    age:35,
    department:75,
    arm:60.5,
    inRelationship:true,
}

base.fillProfil(hercule)

friends=[
    'Jupiter', 'Junon', 'Alcmène', 'Déjanire',
]
base.printFriends(friends)
base.setBestFriend(friends[0])

let titleHtmlElement = document.createElement('h1')
titleHtmlElement.classList.add('banner__title')
titleHtmlElement.innerText=('Vous consultez le profil de Hercule')
let bannerHtmlElement = document.getElementById('header-banner')
bannerHtmlElement.appendChild(titleHtmlElement)

const travaux=()=> {
    for(i=0;i<11;i++){
        base.displayWork(i)
    }
}
travaux()

function dispo(heure){
    let availabilityHtmlElement =document.getElementById('availability')
    if (heure>=8 &&heure<=20){
        availabilityHtmlElement.innerText='Disponible'
        availabilityHtmlElement.classList.remove('off')
    } else{
        availabilityHtmlElement.innerText='Non disponible'
        availabilityHtmlElement.classList.add('off')
    }
}
dispo(base.getHour())

const pseudo=(firstName,departmentNumber)=>`${firstName}-du-${departmentNumber}`
let profilNameHtmlElement=document.getElementById('profil-name')
profilNameHtmlElement.innerText=(pseudo(hercule.name,hercule.department))

const toggleBanner =()=>{
    let headerHtmlElement = document.getElementById('header-banner')
    headerHtmlElement.classList.toggle('banner--open')
}

let menuHtmlElement=document.getElementById('menu-toggler')
menuHtmlElement.addEventListener('click',toggleBanner)

