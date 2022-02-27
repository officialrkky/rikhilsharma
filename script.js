$(document).ready(() => {
  $('#activeInformation').on('click', () => {
    $('#information').show();
    $('#experience').hide()
    $('#education').hide()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').hide()
    $('#skills').hide()
  })
  
  $('#activeExperience').on('click', () => {
    $('#information').hide();
    $('#experience').show()
    $('#education').hide()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').hide()
    $('#skills').hide()
  })
})

  $('#activeEducation').on('click', () => {
    $('#information').hide();
    $('#experience').hide()
    $('#education').show()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').hide()
    $('#skills').hide()
  })
})

  $('#activeInterestAndHobbies').on('click', () => {
    $('#information').hide();
    $('#experience').hide()
    $('#education').hide()
    $('#interest_and_hobbies').show()
    $('#honors_and_awards').hide()
    $('#skills').hide()
  })
})

  $('#activeHonorsAndAwards').on('click', () => {
    $('#information').hide();
    $('#experience').hide()
    $('#education').hide()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').show()
    $('#skills').hide()
  })
})

  $('#activeSkills').on('click', () => {
    $('#information').hide();
    $('#experience').hide()
    $('#education').hide()
    $('#interest_and_hobbies').hide()
    $('#honors_and_awards').hide()
    $('#skills').show()
  })
})
