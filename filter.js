//Service filter
{
    const content = [
        {
            id: 1,
            img: `./image-2/back-0.jpg`,
            title: `Background`,
            category: `background`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 2,
            img: `./image-2/med-4.jpg`,
            title: `Medical`,
            category: `medical`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 3,
            img: `./image-2/back-6.jpg`,
            title: `Background`,
            category: `background`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 4,
            img: `./image-2/tech-0.jpg`,
            title: `Technology`,
            category: `technology`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 5,
            img: `./image-2/back-2.jpg`,
            title: `Background`,
            category: `background`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 6,
            img: `./image-2/per-0.jpg`,
            title: `Chinedu`,
            category: `person`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 7,
            img: `./image-2/med-1.jpg`,
            title: `Medical`,
            category: `medical`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 8,
            img: `./image-2/tech-1.jpg`,
            title: `Technology`,
            category: `technology`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 9,
            img: `./image-2/per-1.jpg`,
            title: `Chinedu`,
            category: `person`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 10,
            img: `./image-2/med-2.jpg`,
            title: `Medical`,
            category: `medical`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 11,
            img: `./image-2/back-1.jpg`,
            title: `Background`,
            category: `background`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id:12,
            img: `./image-2/tech-2.jpg`,
            title: `Technology`,
            category: `technology`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 13,
            img: `./image-2/med-3.jpg`,
            title: `Medical`,
            category: `medical`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 14,
            img: `./image-2/tech-5.jpg`,
            title: `Technology`,
            category: `technology`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 15,
            img: `./image-2/med-0.jpg`,
            title: `Medical`,
            category: `medical`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 16,
            img: `./image-2/tech-3.jpg`,
            title: `Technology`,
            category: `technology`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
        {
            id: 17,
            img: `./image-2/per-2.jpg`,
            title: `Chinedu`,
            category: `person`,
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, odit `
        },
    ];
    const itemContainer = document.querySelector('.item-container');
    const btnContainer = document.querySelector('.btn-container')

    window.addEventListener('DOMContentLoaded', ()=>{
        displayContent(content);

        displayContentBtn();
    })

    //Display Content function
    function displayContent(contentList){
        
        let displayItems = contentList.map((items)=>{
        
           return `<div class="item-1"><img src=${items.img} alt=${items.title} class="photo"><h3 class="title">${items.title}</h3><p>${items.text}</p></div>`
           
        }).join("");

        itemContainer.innerHTML = displayItems;
    }


    function displayContentBtn(){
        //Select each unique category
        const categories = content.reduce((values, item)=>{
            if(!values.includes(item.category)){
                values.push(item.category)
            }
            return values
        },['all'])

        let displayBtn = categories.map((items)=>{

            return `<button type="button" data-id=${items} class="filter-btn">${items}</button>`
        }).join("")
        btnContainer.innerHTML = displayBtn;

        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                let category =  e.currentTarget.dataset.id;
                
                const filterCategory = content.filter((contentItem)=>{
                    // console.log(contentItem.category)
                    if(contentItem.category === category){
                        return contentItem
                    }
                })
                if(category === 'all'){
                    displayContent(content)
                } else{
                    displayContent(filterCategory)
                }
            })
        })
    }

}
