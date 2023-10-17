/*var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.show()
    tabTrigger.show()
    console.log(triggerEl)
  })
})*/
$(function() { 
  $('.dropdown-toggle').click(function() { $(this).next('.dropdown').slideToggle();
  });
  
  $(document).click(function(e) 
  { 
  var target = e.target; 
  if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) 
  
    { $('.dropdown').slideUp(); }
  });
  });
const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))
