$(function() {


  /* Calendars */

  if ($('#calendar').length > 0) {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      googleCalendarApiKey: 'AIzaSyBLIJRz3Z5SXCFQmEZAFrcvRRAyuT1Tb5I',
      eventSources: [
        {
          googleCalendarId: '7u07lf2k1qbtnua6aekg8mlang@group.calendar.google.com',
          color: 'var(--cal-1)',   // an option!
          textColor: 'var(--text-color)' // an option!
        },
        {
          googleCalendarId: 'c_pqmhnom0ehimvk087eqpi060l8@group.calendar.google.com',
          color: 'var(--cal-2)',   // an option!
          textColor: 'var(--text-color)' // an option!
        }
      ]
    });

    calendar.render();

  }


  // Dark mode for later!!

  // const darkModeToggle = document.getElementById('darkModeToggle');
  // const body = document.body;

  // // Check if user preference is stored in localStorage
  // let isDarkMode = localStorage.getItem('darkMode');

  // // If user preference is not stored, determine initial dark mode based on time
  // if (isDarkMode === null) {
  //     const hour = new Date().getHours();
  //     isDarkMode = hour < 7 || hour > 19; // Dark mode between 7pm and 7am
  // }

  // // Apply initial dark mode state
  // if (isDarkMode === 'true') {
  //     body.classList.add('dark-mode');
  //     darkModeToggle.checked = true;
  // }

  // // Toggle dark mode
  // darkModeToggle.addEventListener('change', () => {
  //     if (darkModeToggle.checked) {
  //         body.classList.add('dark-mode');
  //         localStorage.setItem('darkMode', 'true');
  //     } else {
  //         body.classList.remove('dark-mode');
  //         localStorage.setItem('darkMode', 'false');
  //     }
  // });

  
  
});