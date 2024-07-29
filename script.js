
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


const _random = ()=> {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 250;
    var b = num & 250;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  let _rand
  let _gooey
  let tl = gsap.timeline({ease:'Sine.in'})
  let click = false
  
  
  document.addEventListener('click',()=>{
  _gooey = Math.floor(Math.random() * 100);   
    _rand = _random()
   
    
           tl.to('.path',{ attr: {d:`M ${-_gooey} 100 V ${_gooey} Q ${_gooey} 0 100 ${_gooey} V 100 z`},duration:.6,  visibility:'visible',stagger:0.01,fill:_rand,ease:Power2.easeIn})
    
           tl.to('.path',{ attr: {d:`M 0 100 V 0 Q ${_gooey}  0 100 0 V 100 z`},duration:.3,stagger:0.01,fill:_rand,ease:Power2.easeOut})
  tl.to('.background',{background:_rand})
    
              tl.to('.path',{ attr: {d:`M ${-_gooey} 100 V ${_gooey} Q ${_gooey} 0 100 ${_gooey} V 100 z`},  visibility:'hidden',stagger:0.01,fill:_rand,ease:Power2.easeIn})
    
           tl.to('.path',{ attr: {d:`M 0 100 V 100 Q ${_gooey}  100 100 100 V 100  z`},stagger:0.01,  visibility:'hidden',fill:_rand,ease:Power2.easeOut})

  })
  
  

const clients = [
    {
        name: "PARAMOUNT",
        title: "US, LATIN AMERICA",
        imageUrl: "https://play-lh.googleusercontent.com/uGA0LQgKgpxcG8Dz8haVYKs1KZTUnPu5hGhcGmXyaVXFLS-yn1LLnECUG6lb4aZVMw=w480-h960-rw"
    },
    {
        name: "TAMAM",
        title: "GCC REGION",
        imageUrl: "https://play-lh.googleusercontent.com/egrFwkmEsOHik7iDdt1_0nx75hKtIyC-7lFR0s1OOg6cy01N7f8BzOWTmCd1n3ORqJ8=w480-h960-rw"
    },
    {
        name: "PARAMOUNT",
        title: "US, LATIN AMERICA",
        imageUrl: "https://play-lh.googleusercontent.com/uGA0LQgKgpxcG8Dz8haVYKs1KZTUnPu5hGhcGmXyaVXFLS-yn1LLnECUG6lb4aZVMw=w480-h960-rw"
    },
    {
        name: "TAMAM",
        title: "GCC REGION",
        imageUrl: "https://play-lh.googleusercontent.com/egrFwkmEsOHik7iDdt1_0nx75hKtIyC-7lFR0s1OOg6cy01N7f8BzOWTmCd1n3ORqJ8=w480-h960-rw"
    },
    {
        name: "PARAMOUNT",
        title: "US, LATIN AMERICA",
        imageUrl: "https://play-lh.googleusercontent.com/uGA0LQgKgpxcG8Dz8haVYKs1KZTUnPu5hGhcGmXyaVXFLS-yn1LLnECUG6lb4aZVMw=w480-h960-rw"
    },
    {
        name: "TAMAM",
        title: "GCC REGION",
        imageUrl: "https://play-lh.googleusercontent.com/egrFwkmEsOHik7iDdt1_0nx75hKtIyC-7lFR0s1OOg6cy01N7f8BzOWTmCd1n3ORqJ8=w480-h960-rw"
    },
    {
        name: "PARAMOUNT",
        title: "US, LATIN AMERICA",
        imageUrl: "https://play-lh.googleusercontent.com/uGA0LQgKgpxcG8Dz8haVYKs1KZTUnPu5hGhcGmXyaVXFLS-yn1LLnECUG6lb4aZVMw=w480-h960-rw"
    },
    {
        name: "TAMAM",
        title: "GCC REGION",
        imageUrl: "https://play-lh.googleusercontent.com/egrFwkmEsOHik7iDdt1_0nx75hKtIyC-7lFR0s1OOg6cy01N7f8BzOWTmCd1n3ORqJ8=w480-h960-rw"
    },
    {
        name: "PARAMOUNT",
        title: "US, LATIN AMERICA",
        imageUrl: "https://play-lh.googleusercontent.com/uGA0LQgKgpxcG8Dz8haVYKs1KZTUnPu5hGhcGmXyaVXFLS-yn1LLnECUG6lb4aZVMw=w480-h960-rw"
    },
    {
        name: "TAMAM",
        title: "GCC REGION",
        imageUrl: "https://play-lh.googleusercontent.com/egrFwkmEsOHik7iDdt1_0nx75hKtIyC-7lFR0s1OOg6cy01N7f8BzOWTmCd1n3ORqJ8=w480-h960-rw"
    },
    {
        name: "PARAMOUNT",
        title: "US, LATIN AMERICA",
        imageUrl: "https://play-lh.googleusercontent.com/uGA0LQgKgpxcG8Dz8haVYKs1KZTUnPu5hGhcGmXyaVXFLS-yn1LLnECUG6lb4aZVMw=w480-h960-rw"
    },
    {
        name: "TAMAM",
        title: "GCC REGION",
        imageUrl: "https://play-lh.googleusercontent.com/egrFwkmEsOHik7iDdt1_0nx75hKtIyC-7lFR0s1OOg6cy01N7f8BzOWTmCd1n3ORqJ8=w480-h960-rw"
    }
]


clients.forEach(function(client) {
    const cli = $('.clients');
    const a = `
    <div class="flex flex-col h-full w-full items-center justify-center gap-2">
            <div class="w-[70%] h-[70%] rounded">
                <img src="${client.imageUrl}" alt="" class="h-full w-full object-cover rounded-md hover:scale-110 transform duration-1000">
            </div>
            <div>
                <p>${client.name}</p>
                <p>${client.title}</p>
            </div>
        </div>`;
    cli.append(a);
});

