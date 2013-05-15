$(function(){

  $win = $(window)
  defaultSectionHeight = 600

  // sets height for section on document.ready()
  // sets height for section and sidebar on document.ready()
  setSectionHeight()
  setSidebarHeight()
  setSidebarListItemMargins()

  // listens for window resize
  $win.resize(resizeSection)

  // controls compass arrow. NEEDS a refactor
  $(document).scroll(function(){
    $('.compass').css("top", $win.height() * ($win.scrollTop() / $(this).height()) + 30)
  })
});


// sets section height if window height greater than default
// height
// sets section and sidebar height if window height greater than
// default height
function resizeSection(){
  if($win.height() >= defaultSectionHeight) {
    setSectionHeight()
    setSidebarHeight()
    setSidebarListItemMargins()
  }
}

// sets section height based on window.height()
function setSectionHeight(){
  $('section').css("height", $win.height())
}

// sets sidebar height based on window.height()
function setSidebarHeight(){
  $('.sidebar').css("height", $win.height())
}

function setSidebarListItemMargins(){
  $('.navlist li').css("margin-bottom", $win.height() * .174)
}
