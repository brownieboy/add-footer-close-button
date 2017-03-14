/**
 * @author mikey
 *  Main application file.
 *  2017
 */

$(function() {
	console.log("add-footer-close-button started");
	var $bottomBar = $(".u-fixed.u-bottom0");
	if($bottomBar.length > 0) {
		var $bottomBarFirstChild = $bottomBar.find(">:first-child");
		console.log("Medium style bar found");
		var closeImg = chrome.extension.getURL("images/high-contrast-dialog-close.svg");
		$bottomBarFirstChild.append('<a href="#" id="mb-footer-close-button-link"><img src="' + closeImg + '" style="height:16px; width:16px;margin-left:5px;" alt="Close footer" title="Close footer"></a>');
		$("#mb-footer-close-button-link").click(function(e){
			e.preventDefault();
			$bottomBar.hide("slow");
		});
	}
	else {
		console.log("Medium style bar not found.")
	}

});
