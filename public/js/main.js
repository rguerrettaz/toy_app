$(function(){

  $win = $(window)
  defaultSectionHeight = 600

  // REFACTOR ME
  // sets height for section and sidebar on document.ready()
  setSectionHeight()
  setSidebarHeight()
  setSidebarListItemMargins()
  updateBottomPadding()
  findCurrentSection()

  // listens for window resize
  $win.resize(updateSidebarsAndSections)

  // controls compass arrow. NEEDS a refactor
  $(document).scroll(function(){
    $('.compass').css("top", $win.height() * ($win.scrollTop() / $(this).height())+ 35)
    findCurrentSection()
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

function introSectionTopPosition(){
  return $('#intro').offset().top - $win.scrollTop()
}

function aboutSectionTopPosition(){
  return $('#about').offset().top - $win.scrollTop()
}

function skillsSectionTopPosition(){
  return $('#skills').offset().top - $win.scrollTop()
}

function portfolioSectionTopPosition(){
  return $('#portfolio').offset().top - $win.scrollTop()
}

function connectSectionTopPosition(){
  return $('#connect').offset().top - $win.scrollTop()
}

function updateBottomPadding(){
  bottomPadding = $win.height() - $('li:nth-child(5)').offset().top
}

// REFACTOR ME
// Updates font color based on position of connect section
function updateFontColor(sectionTop, color, previousColor){
  var liList = [5,4,3,2,1]

  for (var i = 0, len = liList.length; i < len; i++) {
    var $liItem = $('li:nth-child(' + liList[i] + ')')
    var position = $win.height() - bottomPadding - (margin + 17)   * i
    var color = color
    var previousColor = previousColor
    if (position >= sectionTop) {
      $liItem.css("color", color)
    }
    else {
      $liItem.css("color", previousColor)
    }
  }
}

// REFACTOR ME
// Listener for all sections - to update font color
// Sets all font colors for each section
function findCurrentSection(){
  var windowPosition = $win.scrollTop()
  var pageHeight = $win.height()
  var introSectionOneFontColor      = "#36705F"
  var aboutSectionTwoFontColor      = "#B2BDD6"
  var skillsSectionThreeFontColor   = "#FFB2B2"
  var portfolioSectionFourFontColor = "#D3F5FF"
  var connectSectionFiveFontColor   = "#73A5D6"

  if (windowPosition === 0) {
    updateFontColor(introSectionTopPosition(), introSectionOneFontColor, introSectionOneFontColor)
  }
  else if (0 < windowPosition && windowPosition < pageHeight) {
    updateFontColor(aboutSectionTopPosition(), aboutSectionTwoFontColor, introSectionOneFontColor)
  }
  else if (pageHeight <= windowPosition && windowPosition < (pageHeight*2)){
    updateFontColor(skillsSectionTopPosition(), skillsSectionThreeFontColor, aboutSectionTwoFontColor)
  }
  else if ((pageHeight*2) <= windowPosition && windowPosition < (pageHeight*3)){
    updateFontColor(portfolioSectionTopPosition(), portfolioSectionFourFontColor, skillsSectionThreeFontColor)
  }
  else if ((pageHeight*3) <= windowPosition && windowPosition < (pageHeight*4)){
    updateFontColor(connectSectionTopPosition(), connectSectionFiveFontColor, portfolioSectionFourFontColor)
  }
}
