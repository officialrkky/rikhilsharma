$(document).ready(() => {
    $('#information').hide()
    $('#experience').hide()
    $('#education').hide()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').hide()
    $('#skills').hide()
  
  $('#activeInformation').on('click', () => {
    $('#information').show()

  });
  
  $('#activeExperience').on('click', () => {
    $('#experience').show()

  });
})

  $('#activeEducation').on('click', () => {
    $('#education').show()

  });
})

  $('#activeInterestAndHobbies').on('click', () => {
    $('#interest_and_hobbies').show()

  });
})

  $('#activeHonorsAndAwards').on('click', () => {
    $('#honors_and_awards').show()
  });
})

  $('#activeSkills').on('click', () => {
    $('#skills').show()
  });
})
