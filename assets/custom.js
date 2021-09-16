/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
$(document).ready(function(){
  
  
  $( ".button--primary" ).click(function() {
     $('.slideshow-newsletter').css('display','none');
  });
  console.log();
  var listItems = $(".flickity-page-dots li");
  listItems.each(function(idx, li) {
    $(li).append(`
      <svg>
        <circle r="18" cx="20" cy="20"></circle>
      </svg>
    `);
    	
  });
  
  function equalizeSite() {
        // Found an issue with this script when a browser is zooming in/out so we disable it on zoom.
		//var zoom = detectZoom.zoom();
		//if(zoom != 1) return;

		// Break Points: These are what you have setup in the _settings.scss
		// The actual points where it converts from mobile to tablet and tablet to desktop.
		// Sometimes there is not a tablet design in this case simply set it to the same as the desktop.
		var $bptablet = 640,
			$bpdesktop = 968;

		// Designed Sizes: These sizes are referencing what you are using to design the site e.g. PSD, AI etc.
		// This is what you have your media queries set to. Remember you only need 1 set of styles for each device this
		// script will handle the rest.
		var $mobile = 375,
			$tablet = 768,
			$desktop = 1900;

		// Initial Font Size: This is based on what the common copy font size is for each design.
		var $fsmobile = 16,
			$fstablet = 16,
			$fsdesktop = 16;

        var $ww = window.innerWidth;

        if($ww < $bptablet) {
            // mobile
            var fontsize = $fsmobile * ($ww/$mobile);
            $('html').css('font-size',fontsize);
        } else if($ww < $bpdesktop) {
            // tablet
            var fontsize = $fstablet * ($ww/$tablet);
            $('html').css('font-size',fontsize);
        }else if($ww > 1023 && $ww < 1200 ) {
            // tablet
            var fontsize = 14;
            $('html').css('font-size',fontsize);
        }
    	else if($ww > 1200) {
            // tablet
            var fontsize = $fsdesktop * ($ww/$desktop);
            $('html').css('font-size',fontsize);
        }
    	else {
            // desktop
			var fontsize = $fsdesktop * ($ww/$desktop);
            $('html').css('font-size',fontsize);
        }

 		

    }
    $(window).resize(function () {
          equalizeSite();
      });

      equalizeSite();
 	 
})