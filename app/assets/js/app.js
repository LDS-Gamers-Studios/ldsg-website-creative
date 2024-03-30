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

  
  
});