let moment = new Date();


if (localStorage.getItem('lastVisit')) {
  
  let lastVisit = new Date(localStorage.getItem('lastVisit'));
  
  
  let diffInMs = moment - lastVisit;
  let diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
  
  
  let lastVisitElement = document.getElementById('last-visit');
  
  if (diffInDays === 0) {
    
    lastVisitElement.textContent = 'today';
  } else if (diffInDays === 1) {
    
    lastVisitElement.textContent = 'yesterday';
  } else {
    
    lastVisitElement.textContent = diffInDays + ' days ago';
  }
}

localStorage.setItem('lastVisit', moment);
  
