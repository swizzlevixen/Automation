// Human-readable JavaScript representation of PlayPause.scpt

// Checks if QuickTime Player is running,
var appQuickTime = Application("QuickTime Player")
appQuickTime.includeStandardAdditions = true

// Check that there is a media document open
if (appQuickTime.documents.length > 0) {
    media_document = appQuickTime.documents[0]
    // If playing, pause and jump back 1.5 seconds.
    if (media_document.rate() == 1.0) {
        appQuickTime.pause(media_document)
		var current_time_var = media_document.currentTime()
        pause_time_var = current_time_var - 1.5
		if (pause_time_var < 0) {
			pause_time_var = 0
		}
        media_document.currentTime = pause_time_var - 1.5
	} else if (media_document.playing()) {
		// Any rate other than 1.0 normal playback
		appQuickTime.pause(media_document)
    } else {
        // it's paused, so start playing
        appQuickTime.play(media_document)
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
