if (localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', new Date().toString());
  }
  
  const lastVisit = new Date(localStorage.getItem('lastVisit'));
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - lastVisit.getTime();
  const daysDiff = Math.round(timeDiff / 86400000);
  
  document.getElementById('daysSinceLastVisit').textContent = daysDiff;
  