const topMenu = document.getElementById('ct-top-menu');
const TopMenuicon = document.getElementById('ct-top-menu-icon');

document.addEventListener('click', (e) =>{
    if(TopMenuicon.contains(e.target)){
        //click trong menu icon 
        topMenu.classList.toggle('ct-top-menu-expended')
        topMenu.classList.toggle('hidden')
    }else{
        //click ngoài menu icon 
        if(topMenu.classList.contains('ct-top-menu-expended')){
            topMenu.classList.remove('ct-top-menu-expended')
            topMenu.classList.add('hidden')
        }
  
    }
})