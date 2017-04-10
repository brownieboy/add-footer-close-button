/**
 * @author mikey
 *  Main application file.
 *  2017
 */

$(function() {

  setTimeout(function() {
    var $bottomBar = $(".u-fixed.u-bottom0"); // Medium style
    var $appendTarget = $bottomBar.find(">:first-child");
    if ($bottomBar.length > 0) {
      console.log("Mediaum style found");
    }

    if ($bottomBar.length === 0) {

      $bottomBar = $(".jn-content"); // Hashnode
      if ($bottomBar.length > 0) {
        $appendTarget = $bottomBar.find("> .col-2");
        console.log("Hashnode style found");
      }
    }
    if ($bottomBar.length > 0) {
      console.log("Adding to element");
      var closeImg = chrome.extension.getURL("images/high-contrast-dialog-close.svg");
      $appendTarget.append('<style type="text/css">#mb-footer-close-button:hover {cursor:pointer}</style><img id="mb-footer-close-button" src="' + closeImg + '" style="height:16px; width:16px;margin-left:5px;" alt="Close footer" title="Close footer">');
      $("#mb-footer-close-button").click(function() {
        $bottomBar.hide("slow");
      });
    }
  }, 1000);
});
