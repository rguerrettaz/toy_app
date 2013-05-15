$(function(){

  $win = $(window)
  defaultSectionHeight = 600

  // REFACTOR ME
  // sets height for section and sidebar on document.ready()
  setSectionHeight()
  setSidebarHeight()
  setSidebarListItemMargins()
  updateBottomPadding()

  // listens for window resize
  $win.resize(updateSidebarsAndSections)

  // controls compass arrow. NEEDS a refactor
  $(document).scroll(function(){
    $('.compass').css("top", $win.height() * ($win.scrollTop() / $(this).height())+ 35)
    updateConnectSectionTopPosition()
    updateFontColor()
  })
});

// sets section and sidebar height if window height greater than
// default height
function updateSidebarsAndSections(){
  if($win.height() >= defaultSectionHeight) {
    setSectionHeight()
    setSidebarHeight()
    setSidebarListItemMargins()
    updateBottomPadding()
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
  margin = $win.height() * .174
  $('.navlist li').css("margin-bottom", margin)
}

function updateConnectSectionTopPosition(){
  $connectSectionPosition = $('#connect').offset().top - $(window).scrollTop()
}

function updateBottomPadding(){
  bottomPadding = $win.height() - $('li:nth-child(5)').offset().top
}

// REFACTOR ME
// Updates font color based on position of connect section
function updateFontColor(){
  var liList = [5,4,3,2,1]

  for (var i = 0, len = liList.length; i < len; i++) {
    var $liItem = $('li:nth-child(' + liList[i] + ')')
    var position = $win.height() - bottomPadding - (margin + 17)   * i

    if (position >= $connectSectionPosition) {
      $liItem.css("color", "white")
    }
    else {
      $liItem.css("color", "black")
    }
  }
}

