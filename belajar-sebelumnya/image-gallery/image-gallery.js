container = document.querySelector('.container')
thumbs = document.querySelectorAll('.thumb')
jumbo = document.querySelector('.jumbo')


    // thumbs.forEach(function(thumb){
    //     thumb.addEventListener('click', function(){
            
    //     })
    // })

// for(let i = 0; i<=7; i++){
//     thumbs[i].addEventListener('click', function(){
//         jumbo.setAttribute('src', 'img/' + (i+1) + '.jpg')
//     })
// }
    
let eOld = null;
container.addEventListener('click', function(e){
    if(e.target.className = 'thumb'){

        jumbo.src = e.target.src
        
        jumbo.classList.add('fade')
        jumbo.classList.add('zoomin')
        setTimeout(function(){
            jumbo.classList.remove('fade')
            jumbo.classList.remove('zoomin')
            
        }, 500)
        // 
        thumbs.forEach(function(thumb){
            //thumb.className = 'thumb'
            if(thumb.classList.contains('active')){
                thumb.classList.remove('active')
            }

        })
        e.target.classList.add('active')
        if(jumbo.classList.contains('thumb')){
            jumbo.classList.remove('thumb')
        }

        
    }
    
    }
)


// let eOld = null;

// container.addEventListener('click', function(e) {
//     if (e.target.className ==  'thumb') {
//         if (eOld != null) {
//             eOld.classList.remove('active')
//         }

//         jumbo.src = e.target.src;
//         jumbo.classList.add('fade');
//         setTimeout(function() {
//             jumbo.classList.remove('fade');
//         }, 500);

//         e.target.classList.add('active');
//         eOld = e.target;
//     }
// });
    
// JQuery

