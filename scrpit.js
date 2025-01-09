function toggleHam(x) {
    x.classList.toggle("change");

    let mymenu = document.getElementById('mymenu');
    if (mymenu.className === 'menu'){
        mymenu.className += ' menu-active'
    }else {
        mymenu.className = 'menu';
    }
  }

  let scrollContainer = document.querySelector(".product");
  let backbtn = document.getElementById("backbtn")
  let nextbtn = document.getElementById("nextbtn")
  
  nextbtn.addEventListener("click",() =>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 1200;
  });

  backbtn.addEventListener("click",() =>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 1200;
  });

  let scrollContainer1 = document.querySelector(".team-card");
   
  scrollContainer1.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer1.scrollLeft += evt.deltaY;
  });


  


 
  