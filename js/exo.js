//Step1
console.log('test 1...2...1...2');
const profil ={
    //Step2
    hercule:{
        name:'Hercule',
        job:'Demi-Dieu',
        age:35,
        department:75,
        arm:60.5,
        inRelationship:true,
    },
    //Step3
    friends:[
        'Jupiter', 'Junon', 'Alcmène', 'Déjanire',
    ],
    
    //Step4
    addBanner:function(){
    let titleHtmlElement=document.createElement('h1')
    titleHtmlElement.classList.add('banner__title')
    titleHtmlElement.innerText=('Vous consultez le profil de Hercule')
    let bannerHtmlElement = document.getElementById('header-banner')
    bannerHtmlElement.appendChild(titleHtmlElement)
    },
    //Step5
    travaux:()=> {
        for(i=0;i<11;i++){
            base.displayWork(i)
        }
    },
    //Step6
    dispo:function(heure){
        let availabilityHtmlElement =document.getElementById('availability')
        if (heure>=8 &&heure<=20){
            availabilityHtmlElement.innerText='Disponible'
            availabilityHtmlElement.classList.remove('off')
        } else{
            availabilityHtmlElement.innerText='Non disponible'
            availabilityHtmlElement.classList.add('off')
        }
    },
    //Step7
    fillPseudo: function(){
        let pseudo=(firstName,departmentNumber)=>`${firstName}-du-${departmentNumber}`
        profilNameHtmlElement=document.getElementById('profil-name')
        profilNameHtmlElement.innerText=(pseudo(profil.hercule.name,profil.hercule.department))
    },
    //Step8
    toggleBanner:()=>{
        let headerHtmlElement = document.getElementById('header-banner')
        headerHtmlElement.classList.toggle('banner--open')
    },
    clickToggleBanner:()=>{    
        let menuHtmlElement=document.getElementById('menu-toggler')
        menuHtmlElement.addEventListener('click',profil.toggleBanner)
    },
    //Step9
    submitContact:function(){
        let contactHtmlElement=document.querySelector('#contact')
        contactHtmlElement.addEventListener('submit',function(event){
            event.preventDefault()
            alert('Hercule ne souhaite pas être dérangé')
        })
    },
    //Step10
    votefunction:function(){
    const voteResult=(indexResult)=>{
        let herculePercent = Math.round((base.vote.hercule)*10000/((base.vote.hercule)+(base.vote.cesar)))
        let cesarPercent =  Math.round((base.vote.cesar)*10000/((base.vote.hercule)+(base.vote.cesar)))
        let percent=[(herculePercent/100), (cesarPercent/100)]
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
    },

    init:function(){
        base.fillProfil(profil.hercule)
        base.printFriends(profil.friends)
        base.setBestFriend(profil.friends[0])
        profil.addBanner()
        profil.travaux()
        profil.dispo(base.getHour())
        profil.fillPseudo()
        profil.clickToggleBanner()
        profil.submitContact()
        profil.votefunction()
    }
    
}
document.addEventListener('DOMContentLoaded', profil.init)