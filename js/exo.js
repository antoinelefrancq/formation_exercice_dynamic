console.log('test 1...2...1...2');

let hercule = {
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