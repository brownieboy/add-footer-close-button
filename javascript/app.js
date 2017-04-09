/**
 * @author mikey
 *  Main application file.
 *  2017
 */

$(function() {
  var $bottomBar = $(".u-fixed.u-bottom0");
  if ($bottomBar.length > 0) {
    $bottomBar = $(".jn-content");
  }
  if ($bottomBar.length > 0) {
    var $bottomBarFirstChild = $bottomBar.find(">:first-child");
    console.log("Medium style bar found, adding close button...");
    var closeImg = chrome.extension.getURL("images/high-contrast-dialog-close.svg");
    $bottomBarFirstChild.append('<style type="text/css">#mb-footer-close-button:hover {cursor:pointer}</style><img id="mb-footer-close-button" src="' + closeImg + '" style="height:16px; width:16px;margin-left:5px;" alt="Close footer" title="Close footer">');

    $("#mb-footer-close-button").click(function() {
      $bottomBar.hide("slow");
    });
  }
});
