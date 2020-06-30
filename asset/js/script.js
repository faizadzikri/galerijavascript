const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){

// cek klik thumb
    if (e.target.className === 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        setTimeout(function(){
          jumbo.classList.remove('fade');
        },500);

        thumbs.forEach(function(thumb){
          //cara 1
          // if (thumb.classList.contains('active')) {
          //   thumb.classList.remove('active');
          // }

          //cara 2
          thumb.className = 'thumb';
        })

        e.target.classList.add('active');
    }
})
