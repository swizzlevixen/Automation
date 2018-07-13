// Human-readable JXA version of FastForward.scpt

// Checks if QuickTime Player is running,
var appQuickTime = Application("QuickTime Player")
appQuickTime.includeStandardAdditions = true

// Check that there is a media document open
if (appQuickTime.documents.length > 0) {
    media_document = appQuickTime.documents[0]
	if (media_document.rate() == 2.0) {
		media_document.rate = 5.0
	} else if (media_document.rate() == 5.0) {
		media_document.rate = 10.0
	} else {
		media_document.rate = 2.0
	}
} else {
    quicktimeNotReady()
}

function quicktimeNotReady() {
	appQuickTime.displayAlert('QuickTime Player not ready', {
	    message: 'Please open media file you would like to transcribe as the active window.'
	})
	console.log("Error: QuickTime Player not ready.")
}
