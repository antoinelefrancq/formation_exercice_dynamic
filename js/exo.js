//Step1
console.log('test 1...2...1...2');
//Step2
const hercule = {
    name:'Hercule',
    job:'Demi-Dieu',
    age:35,
    department:75,
    arm:60.5,
    inRelationship:true,
}
base.fillProfil(hercule)
//Step3
friends=[
    'Jupiter', 'Junon', 'Alcmène', 'Déjanire',
]
base.printFriends(friends)
base.setBestFriend(friends[0])
//Step4
let titleHtmlElement = document.createElement('h1')
titleHtmlElement.classList.add('banner__title')
titleHtmlElement.innerText=('Vous consultez le profil de Hercule')
let bannerHtmlElement = document.getElementById('header-banner')
bannerHtmlElement.appendChild(titleHtmlElement)
//Step5
const travaux=()=> {
    for(i=0;i<11;i++){
        base.displayWork(i)
    }
}
travaux()
//Step6
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
//Step7
const pseudo=(firstName,departmentNumber)=>`${firstName}-du-${departmentNumber}`
let profilNameHtmlElement=document.getElementById('profil-name')
profilNameHtmlElement.innerText=(pseudo(hercule.name,hercule.department))
//Step8
const toggleBanner =()=>{
    let headerHtmlElement = document.getElementById('header-banner')
    headerHtmlElement.classList.toggle('banner--open')
}
let menuHtmlElement=document.getElementById('menu-toggler')
menuHtmlElement.addEventListener('click',toggleBanner)
//Step9
let contactHtmlElement=document.querySelector('#contact')
contactHtmlElement.addEventListener('submit',function(event){
    event.preventDefault()
    alert('Hercule ne souhaite pas être dérangé')
})
//Step10
const voteResult=(indexResult)=>{
let herculePercent = (base.vote.hercule)*100/((base.vote.hercule)+(base.vote.cesar))
let cesarPercent = (base.vote.cesar)*100/((base.vote.hercule)+(base.vote.cesar))
let percent=[
    herculePercent, cesarPercent
]
return percent[indexResult]
}
const herculeTrendsHtmlElement=document.querySelector('#trends-hercule p')
herculeTrendsHtmlElement.innerText=(`${voteResult(0)}%`)
const herculePeopleBarHtmlElement=document.querySelector('#trends-hercule .people__bar')
herculePeopleBarHtmlElement.style.width=`${voteResult(0)}%`

const cesarTrendsHtmlElement=document.querySelector('#trends-cesar p')
cesarTrendsHtmlElement.innerText=(`${voteResult(1)}%`)
const cesarPeopleBarHtmlElement=document.querySelector('#trends-cesar div')
cesarPeopleBarHtmlElement.style.width=`${voteResult(1)}%`