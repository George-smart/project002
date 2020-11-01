// hamburger menu functionality 
{
    const navItem = document.querySelector('.nav-list');
    const menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', ()=>{
    navItem.classList.toggle('show-menu')  
    })
}
//background color Change functionality
{
    const colorBtn = document.querySelector('.small-logo');

    const colors = ['#0b132bff', '#1c2541ff', '#3a506bff', '#5bc0beff', '#7209b7ff', '#560badff', '#480ca8ff'];

    colorBtn.addEventListener('click', ()=>{
        let colorNumber = randomNumber(); 
        document.body.style.background = colors[colorNumber]
    })
    function randomNumber(){
        let random = Math.floor(Math.random() * colors.length)
        return random
    }
}

//REVIEW FUNCTIONALITY
{
    const reviews = [
        {
            title: 'Shoe',
            img: `./image/1-1.jpg`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro, 
                    consequuntur, maxime nesciunt temporibus placeat facere iusto voluptates 
                    omnis nam ea doloremque autexercitationem, eveniet eos quisquam quam 
                    dignissimos excepturi.`
        },
        {
            title: 'Sandel',
            img: `./image/1-2.jpg`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro, 
                    consequuntur, maxime nesciunt temporibus placeat facere iusto voluptates 
                    omnis nam ea `
        },
        {
            title: `Pans`,
            img: `./image/1-3.jpg`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro, 
                    consequuntur, maxime nesciunt`
        },
        {
            title: 'Canvas',
            img: `./image/1-4.jpg`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro, 
                    consequuntur, maxime nesciunt temporibus placeat facere iusto voluptates 
                    omnis nam ea doloremque autexercitationem, eveniet eos quisquam quam 
                    dignissimos excepturi.autexercitationem, eveniet eos quisquam quam 
                    dignissimos excepturi.`
        },
        {
            title: 'Pans',
            img: `./image/1-5.jpg`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro, 
                    consequuntur, maxime nesciunt temporibus placeat facere iusto voluptates 
                    omnis nam ea doloremque autexercitationem,  nesciunt temporibus placeat facere iusto voluptates 
                    omnis nam ea doloremque autexercitationem, eveniet eos quisquam quam 
                    dignissimos excepturi.`
        },
        {
            title: 'Slippers',
            img: `./image/1-6.jpg`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro, 
                    consequuntur, maxime nesciunt temporibus placeat facere iusto voluptates 
                    omnis nam ea doloremque autexercitationem, eveniet eos quisquam quam 
                    dignissimos excepturi. nesciunt temporibus placeat facere iusto voluptates 
                    omnis nam ea doloremque autexercitationem, eveniet eos quisquam quam 
                    dignissimos excepturi.`
        },
        {
            title: 'Leather',
            img: `./image/1-7.jpg`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro, 
                    consequuntur, maxime`
        },
        {
            title: 'Foreign',
            img: `./image/1-8.jpg`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro, 
                    consequuntur, maxime nesciunt temporibus placeat facere iusto voluptates 
                    omnis nam ea doloremque autexercitationem, eveniet eos quisquam quam 
                    dignissimos excepturi.autexercitationem, eveniet eos quisquam quam 
                    dignissimos excepturi.`
        },
        {
            title: 'Can',
            img: `./image/1-9.jpg`,
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro, 
                    consequuntur, maxime nesciunt temporibus placeat facere iusto voluptates 
                    omnis nam ea doloremque`
        }
    ];

    const title = document.querySelector('.title');
    const image = document.querySelector('.image');
    const description = document.querySelector('.description');

    const nextBtn = document.querySelector('.next')
    const prevBtn = document.querySelector('.prev')
    const randomBtn = document.querySelector('.filter')

    let itemsChanger = 0;

    function showContent(){
        let item = reviews[itemsChanger]
        title.textContent = item.title;
        image.src = item.img;
        description.textContent = item.desc;
    }

    nextBtn.addEventListener('click', ()=>{
        itemsChanger++;
        if(itemsChanger > reviews.length - 1){
        itemsChanger = 0
        
        }
        showContent();
    })

    prevBtn.addEventListener('click', ()=>{

        itemsChanger--;
        if(itemsChanger < 0){
        itemsChanger = reviews.length - 1
        
        }
        showContent();
    })

    randomBtn.addEventListener('click', ()=>{
        itemsChanger = randomNumber();
        showContent();
    })

    function randomNumber(){
        let random = Math.floor(Math.random() * reviews.length)
        return random
    }    
} 


