$(function(){

  $win = $(window)
  defaultSectionHeight = 600

  // sets height for section on document.ready()
  setSectionHeight()

  // listens for window resize
  $win.resize(resizeSection)

  // controls compass arrow. NEEDS a refactor
  $(document).scroll(function(){
    $('.compass').css("top", $win.height() * ($win.scrollTop() / $(this).height()) + 30)
  })
});


// sets section height if window height greater than default
// height
function resizeSection(){
  if($win.height() >= defaultSectionHeight) {
    setSectionHeight()
  }
}

// sets section height based on window.height()
function setSectionHeight(){
  $('section').css("height", $win.height())
}

