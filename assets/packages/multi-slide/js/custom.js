/* Custom modules used:
 * Responsive
 * Preloader
 * Keyboard Controls (but manually removed)
 */

/* Here is the slider using default settings */
/* Config */
var sliderMaxWidth  = '300',
    maxNumberOfSlidesShown = 6,
    useAutoslide     = false,
    autoslideDelay  = 5000;
/* End Config */

// Store the slider in an object. you shouldnt need to edit this
var sliderObject = [];

var maxData = [];

var resize = [];
resize[0] = 0;
resize[1] = 0;
resize[2] = 0;
resize[3] = 0;

var flagOneTime = [];

flagOneTime[0] = 0;
flagOneTime[1] = 0;
flagOneTime[2] = 0;
flagOneTime[3] = 0;

// Store the first panel so we know where we are
var weAreOnSlideNumber = [];

var midSwitch, smallSwitch;

var resizingTimeout;

function determineIndex(name) {
  if (name == 'releases') 
    return 0;
  else if (name == 'mostPopular')
    return 1;
  else if (name == 'lastAdded')
    return 2;
  else if (name == 'reindexed')
    return 3;
  else
    alert('Array not defined');
}

function determineName(n) {
  if (n == 0) 
    return 'releases';
  else if (n == 1)
    return 'mostPopular';
  else if (n == 2)
    return 'lastAdded';
  else if (n == 3)
    return 'reindexed';
  else
    alert('Array not defined');
}

// conditionals based on the screen width, we show a different # of slides.
// You can also set different heights here as well
function determineSlidesShown(n) {
  if (flagOneTime[n])
  {
    if (sliderObject[n].slideWidth < smallSwitch) {
      // Switch to the smallest setting
      numberOfSlidesShown = maxNumberOfSlidesShown - 2;
    } else if (sliderObject[n].slideWidth < midSwitch) {
      // if that fails, move to the mid width
      numberOfSlidesShown = maxNumberOfSlidesShown - 1;
    } else {
      //This is for the heighest width
      numberOfSlidesShown = maxNumberOfSlidesShown;
    }
    setSlidesShown(n);
  }
};

function setSlidesShown(n) {
  name = determineName(n);
  $('#' + name).css('max-width', sliderMaxWidth);
  $('#' + name + ' .liquid-slider .panel').css('width', 100 / (sliderObject[n].panelCount * numberOfSlidesShown) + '%');

  // Store the first panel so we know where we are (also reset on resize)
  weAreOnSlideNumber[n] = sliderObject[n].options.firstPanelToLoad - 1; // Make it 0 based
  //adjust current slide
  sliderObject[n].currentTab = (weAreOnSlideNumber[n]);
  sliderObject[n].transition();
}

// if the browser width changes...
// A timeout so it runs only after resizing is released
$(window).bind('resize', function () {
  clearTimeout(resizingTimeout);
    resizingTimeout = setTimeout(function () {
      //Send to adjust the height after resizing completes
      if (flagOneTime[0])
        sliderObject[0].transition();      
      if (flagOneTime[1])
        sliderObject[1].transition();      
      if (flagOneTime[2])
        sliderObject[2].transition();      
      if (flagOneTime[3])
        sliderObject[3].transition();      
    }, 500);
});

// The autoslide
// var direction = '.arrow-right', // 1 => Slide right
//     lsAutoslide;
// function autoslideFn() {
//   lsAutoslide = setTimeout(function() {
//     // Direction is set based on slide position
//     $(direction).trigger('click');
//     autoslideFn();
//   }, autoslideDelay);
// }
// // Call the autoslide if enabled
// if (useAutoslide) {
//   // You may want to run this on load if you have a lot of images
//   //$(window).bind("load", function () {
//     autoslideFn();
//   //}
// }

$(document).on('click', '#insideTablinks ul li a', function (e) {
  e.preventDefault();
  // clearTimeout(lsAutoslide);
  var currentObject = $(this);
  myurl = currentObject.attr('href');
  direction = currentObject.attr('rel');
  currentObject = currentObject.parent().parent().parent();  
  nameParent = currentObject.parent().attr('id');
  indexParent = determineIndex(nameParent);
  if (direction == 'prev')
  {
    if (weAreOnSlideNumber[indexParent] === 0) {
      direction = '.arrow-right';
      return false;
    }
    $.ajax(
    {
      url: myurl,
      type: "get",
      datatype: "html",
      beforeSend: function()
      {
        // Show Loading message
        // $('#ajax-loading').show();
      }
    })
    .done(function(data)
    {
      // Delete Loading message
      // $('#ajax-loading').hide();
      // Add new movies to the div
      // Update the pagination and links
      // Slide movies
      switch (indexParent) {
          case 0:
              if (data.releasesCount>0)
              {
                currentObject.empty().append(data.releasesLinks).find('ul li a').text("").ready(function(){
                  sliderObject[indexParent] = $.data( $('#slider-releases')[0], 'liquidSlider');
                  weAreOnSlideNumber[indexParent] -= numberOfSlidesShown;
                  sliderObject[indexParent].currentTab = sliderObject[indexParent].currentTab - 1;
                  sliderObject[indexParent].transition();
                });
              }
              break;
          case 1:
              if (data.mostPopularCount>0)
              {
                currentObject.empty().append(data.mostPopularLinks).find('ul li a').text("").ready(function(){
                  sliderObject[indexParent] = $.data( $('#slider-mostPopular')[0], 'liquidSlider');
                  weAreOnSlideNumber[indexParent] -= numberOfSlidesShown;
                  sliderObject[indexParent].currentTab = sliderObject[indexParent].currentTab - 1;
                  sliderObject[indexParent].transition();
                });
              }
              break;
          case 2:
              if (data.lastAddedCount>0)
              {
                currentObject.empty().append(data.lastAddedLinks).find('ul li a').text("").ready(function(){
                  sliderObject[indexParent] = $.data( $('#slider-lastAdded')[0], 'liquidSlider');
                  weAreOnSlideNumber[indexParent] -= numberOfSlidesShown;
                  sliderObject[indexParent].currentTab = sliderObject[indexParent].currentTab - 1;
                  sliderObject[indexParent].transition();
                });
              }
              break;
          case 3:
              if (data.reindexedCount>0)
              {
                currentObject.empty().append(data.reindexedLinks).find('ul li a').text("").ready(function(){
                  sliderObject[indexParent] = $.data( $('#slider-reindexed')[0], 'liquidSlider');
                  weAreOnSlideNumber[indexParent] -= numberOfSlidesShown;
                  sliderObject[indexParent].currentTab = sliderObject[indexParent].currentTab - 1;
                  sliderObject[indexParent].transition();
                });
              }
              break;
          default:
      }
    })
    .fail(function(jqXHR, ajaxOptions, thrownError)
    {
      alert('No response from server');
      direction = '.arrow-left';
      return false;
    });
  }
  else if (direction == 'next')
  {
    // First, check if we have loaded enough movies to the right
    if (weAreOnSlideNumber[indexParent] >= (sliderObject[indexParent].panelCount - numberOfSlidesShown))
    {
      // I there are no more movies, we go to the database to get n more movies. We add them to the html structure and update the control
      $.ajax(
      {
        url: myurl,
        type: "get",
        datatype: "html",
        beforeSend: function()
        {
          // Show Loading message
          // $('#ajax-loading').show();
        }
      })
      .done(function(data)
      {
        // Delete Loading message
        // $('#ajax-loading').hide();
        // Add new movies to the div
         switch (indexParent) {
            case 0:
                if (data.releasesCount>0)
                {
                  // We found more movies, so we add them to the structure and then, more the slides
                  // Adding movies to the structure
                  currentObject.empty().append(data.releasesLinks).find('ul li a').text("").ready(function(){
                    if (weAreOnSlideNumber[indexParent] > maxData[indexParent])
                    {
                      maxData[indexParent] = weAreOnSlideNumber[indexParent];
                      $('#slider-releases .panel-container').append(data.releases).ready(function(){
                        sliderObject[indexParent] = $.data( $('#slider-releases')[0], 'liquidSlider');
                      });
                    }
                    weAreOnSlideNumber[indexParent] += numberOfSlidesShown;
                    sliderObject[indexParent].currentTab = sliderObject[indexParent].currentTab + 1;
                    sliderObject[indexParent].transition();
                  });
                }
                else
                {
                // If we can't find any movies, we do nothing
                  direction = '.arrow-left';
                  return false; 
                }
                break;
            case 1:
                if (data.mostPopularCount>0)
                {
                  // We found more movies, so we add them to the structure and then, more the slides
                  // Adding movies to the structure
                  currentObject.empty().append(data.mostPopularLinks).find('ul li a').text("").ready(function(){
                    if (weAreOnSlideNumber[indexParent] > maxData[indexParent])
                    {
                      maxData[indexParent] = weAreOnSlideNumber[indexParent];
                      $('#slider-mostPopular .panel-container').append(data.mostPopular).ready(function(){
                        sliderObject[indexParent] = $.data( $('#slider-mostPopular')[0], 'liquidSlider');
                      });
                    }
                    weAreOnSlideNumber[indexParent] += numberOfSlidesShown;
                    sliderObject[indexParent].currentTab = sliderObject[indexParent].currentTab + 1;
                    sliderObject[indexParent].transition();
                  });
                }
                else
                {
                // If we can't find any movies, we do nothing
                  direction = '.arrow-left';
                  return false; 
                }
                break;
            case 2:
                if (data.lastAddedCount>0)
                {
                  // We found more movies, so we add them to the structure and then, more the slides
                  // Adding movies to the structure
                  currentObject.empty().append(data.lastAddedLinks).find('ul li a').text("").ready(function(){
                    if (weAreOnSlideNumber[indexParent] > maxData[indexParent])
                    {
                      maxData[indexParent] = weAreOnSlideNumber[indexParent];
                      $('#slider-lastAdded .panel-container').append(data.lastAdded).ready(function(){
                        sliderObject[indexParent] = $.data( $('#slider-lastAdded')[0], 'liquidSlider');
                      });
                    }
                    weAreOnSlideNumber[indexParent] += numberOfSlidesShown;
                    sliderObject[indexParent].currentTab = sliderObject[indexParent].currentTab + 1;
                    sliderObject[indexParent].transition();
                  });
                }
                else
                {
                // If we can't find any movies, we do nothing
                  direction = '.arrow-left';
                  return false; 
                }
                break;
            case 3:
                if (data.reindexedCount>0)
                {
                  // We found more movies, so we add them to the structure and then, more the slides
                  // Adding movies to the structure
                  currentObject.empty().append(data.reindexedLinks).find('ul li a').text("").ready(function(){
                    if (weAreOnSlideNumber[indexParent] > maxData[indexParent])
                    {
                      maxData[indexParent] = weAreOnSlideNumber[indexParent];
                      $('#slider-reindexed .panel-container').append(data.reindexed).ready(function(){
                        sliderObject[indexParent] = $.data( $('#slider-reindexed')[0], 'liquidSlider');
                      });
                    }
                    weAreOnSlideNumber[indexParent] += numberOfSlidesShown;
                    sliderObject[indexParent].currentTab = sliderObject[indexParent].currentTab + 1;
                    sliderObject[indexParent].transition();
                  });
                }
                else
                {
                // If we can't find any movies, we do nothing
                  direction = '.arrow-left';
                  return false; 
                }
                break;
            default:
        }
      })
      .fail(function(jqXHR, ajaxOptions, thrownError)
      {
        alert('No response from server');
        direction = '.arrow-left';
        return false;
      });

    }
    else
    {
      weAreOnSlideNumber[indexParent] += numberOfSlidesShown;
      sliderObject[indexParent].currentTab = sliderObject[indexParent].currentTab + 1;
      sliderObject[indexParent].transition();
    }
  }
});

  // 600px using my defaults
  midSwitch = sliderMaxWidth * ((maxNumberOfSlidesShown - 1) / maxNumberOfSlidesShown);
  // 300px using my defaults
  smallSwitch = sliderMaxWidth * ((maxNumberOfSlidesShown - 2) / maxNumberOfSlidesShown);
  // Set more if you desire, but add conditionals below.

$(document).ready(function(){
  $(this).find('#insideTablinks ul li a').text("");

  $('#slider-releases').liquidSlider({
    dynamicArrows:false,
    continuous:false,
    dynamicTabs:false,
    slideEaseDuration:750,
    responsive: true
  }).ready(function(){
    sliderObject[0] = $.data( $('#slider-releases')[0], 'liquidSlider');
    maxData[0] = -1;
    // Call above functions to determine and set the panels in view first load
    weAreOnSlideNumber[0] = sliderObject[0].options.firstPanelToLoad - 1;
    flagOneTime[0] = 1;
    determineSlidesShown(0);
    $("#slider-releases .liquid-slider-preloader").css("visibility", "hidden");
  });
});

  $("#tabs").tabs({
    activate: function (event, ui) {
      var active = $('#tabs').tabs('option', 'active');

      if (flagOneTime[active] == 0)
      {
        flagOneTime[active] = 1; 
        switch (active) {
          case 1:
            $('#slider-mostPopular').liquidSlider({
              dynamicArrows:false,
              continuous:false,
              dynamicTabs:false,
              slideEaseDuration:750,
              responsive: true
            }).ready(function(){
              sliderObject[active] = $.data( $('#slider-mostPopular')[0], 'liquidSlider');
              maxData[active] = -1;
              // Call above functions to determine and set the panels in view first load
              weAreOnSlideNumber[active] = sliderObject[1].options.firstPanelToLoad - 1;
              determineSlidesShown(active);
              $("#slider-mostPopular .liquid-slider-preloader").css("visibility", "hidden");
            });
            break;
          case 2:
            $('#slider-lastAdded').liquidSlider({
              dynamicArrows:false,
              continuous:false,
              dynamicTabs:false,
              slideEaseDuration:750,
              responsive: true
            }).ready(function(){
              sliderObject[2] = $.data( $('#slider-lastAdded')[0], 'liquidSlider');
              maxData[2] = -1;
              // Call above functions to determine and set the panels in view first load
              weAreOnSlideNumber[2] = sliderObject[2].options.firstPanelToLoad - 1;
              determineSlidesShown(2);                      
              $("#slider-lastAdded .liquid-slider-preloader").css("visibility", "hidden");
            });
            break;
          case 3:
            $('#slider-reindexed').liquidSlider({
              dynamicArrows:false,
              continuous:false,
              dynamicTabs:false,
              slideEaseDuration:750,
              responsive: true
            }).ready(function(){
              sliderObject[3] = $.data( $('#slider-reindexed')[0], 'liquidSlider');
              maxData[3] = -1;
              // Call above functions to determine and set the panels in view first load
              weAreOnSlideNumber[3] = sliderObject[3].options.firstPanelToLoad - 1;
              determineSlidesShown(3);
              $("#slider-reindexed .liquid-slider-preloader").css("visibility", "hidden");
            });
            break;
          default:
        }
      }
      else if (resize[active])
      {
        $(window).trigger('resize');
        //sliderObject[active].transition();
        resize[active] = 0;
      }
    //   alert('refresh');
    // $('#tabs').tabs("refresh");
    }
  });
$(function() {
    // var heightOfViewPort = $(window).height();
    // $('#tabs').tabs();
    // // $('.autoHeight').css('min-height', heightOfViewPort);
    
    $(window).resize(function () {
      resize[0] = 1;
      resize[1] = 1;
      resize[2] = 1;
      resize[3] = 1;
        
        // var heightOfViewPort = $(window).height();
        // var active = $('#tabs').tabs('option', 'active');
        //     sliderObject[active].transition();
            // sliderObject[1].transition();
            // sliderObject[2].transition();
//         $('#tabs').tabs("refresh");
//         // flagOneTime[0] = 0;
//         // flagOneTime[1] = 0;
//         // flagOneTime[2] = 0;
//         // flagOneTime[3] = 0;
//         // flagOneTime[active] = 1;
//         // // $('.autoHeight').css('min-height', heightOfViewPort);
    });
});


