window.addEventListener('DOMContentLoaded', function() {
    var counterElement = document.querySelector('.count');
    
    var targetNumber = 2500; 
    var currentNumber = 0;
  
    
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
         
          var interval = setInterval(function() {
            currentNumber++;
            counterElement.innerText = currentNumber;
  
            if (currentNumber >= targetNumber) {
              clearInterval(interval);
              counterElement.innerText = targetNumber;
            }
          }, 1); 
  
          
          observer.unobserve(entry.target);
        }
      });
    });
  
    
    observer.observe(counterElement);
  });
  window.addEventListener('DOMContentLoaded', function() {
    var counterElement = document.querySelector('.countmusteri');
    
    var targetNumber = 1000; 
    var currentNumber = 0;
  
    
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
         
          var interval = setInterval(function() {
            currentNumber++;
            counterElement.innerText = currentNumber;
  
            if (currentNumber >= targetNumber) {
              clearInterval(interval);
              counterElement.innerText = targetNumber;
            }
          }, 0.01);
  
          
          observer.unobserve(entry.target);
        }
      });
    });
  
    observer.observe(counterElement);
  });
  window.addEventListener('DOMContentLoaded', function() {
    var counterElement = document.querySelector('.countekip');
    
    var targetNumber = 120; 
    var currentNumber = 0;
  
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // 
          var interval = setInterval(function() {
            currentNumber++;
            counterElement.innerText = currentNumber;
  
            if (currentNumber >= targetNumber) {
              clearInterval(interval);
              counterElement.innerText = targetNumber;
            }
          }, 1); 
         
          observer.unobserve(entry.target);
        }
      });
    });
  
    
    observer.observe(counterElement);
  });
       