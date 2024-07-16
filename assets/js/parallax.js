$(function() {
  $("#datepicker1").datepicker();
  $("#datepicker2").datepicker();
});


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let maxHeight = 650;
  
    if (value > maxHeight) {
      value = maxHeight;
    }
    
    
    search.style.marginTop = value * 2.5 + 'px';
    baslik.style.marginLeft = value * -1.2 + 'px';
    paragraf.style.marginLeft = value * 1.5 + 'px';
    bulut1.style.left = value * -1.5 + 'px';
    bulut2.style.left = value * 1.5 + 'px';
    sagyaprak.style.top = value * -1.5 + 'px';
    sagyaprak.style.left = value * 1.5 + 'px';
    solyaprak.style.top = value * -1.5 + 'px';
    solyaprak.style.left = value * -1.5 + 'px';
    parilti.style.left = value * -1.5 + 'px';
    parilti.style.top = value * -1.5 + 'px';
    
    
    let bir = document.getElementById('bir');
  
   
    let zoomLevel = 1 + value * 0.0010; 
  
   
    bir.style.transform = `scale(${zoomLevel})`;
  
    
  
    document.body.style.overflowX = 'hidden';
  });
  
