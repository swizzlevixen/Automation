# Transcription tools

These scripts are loosely based on ones from a Mac OS X Hints article, [Use AppleScript to create QuickTime transcription aids ](http://hints.macworld.com/article.php?story=20020923054047650)[⟲](http://web.archive.org/web/20150906112801/http://hints.macworld.com/article.php?story=20020923054047650), Sep 23, 2002, by "jbolden1517" (retrieved 2018-05-22 08:30 PDT).

I have added more features, updated them for QuickTime Player X, and translated them to [Javascript for Automation](https://developer.apple.com/library/archive/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/Introduction.html). This is mainly because I'm trying to get more used to writing scripts in [JXA](https://developer.apple.com/videos/play/wwdc2014/306/), because that JavaScript knowledge is also applicable to the JavaScript automation inside [The Omni Group](https://omni-automation.com) and [Adobe](https://www.adobe.com/devnet/scripting.html) products.

## Usage

These scripts control a QuickTime Player movie/audio in the background, allowing for simple keyboard control of the playback while transcribing in another application (e.g. [BBEdit](http://www.barebones.com/products/bbedit/index.html), TextEdit, etc.). The scripts are used in combination with [FastScripts](https://red-sweater.com/fastscripts/) or [Keyboard Maestro](https://www.keyboardmaestro.com/), which allow you to assign keyboard shortcuts AppleScripts and JXA. I have these assigned to **⌥-J** (Rewind), **⌥-K** (PlayPause), and **⌥-L** (FastForward), to mimic the usual JKL transport controls in video editing applications.

Before using the scripts, open the media file you want to transcribe in QuickTime Player. Make sure it's the active movie.

### Rewind

Rewinds at 2X, 5X, 10X speed, with successive invocations (wraps around).

### PlayPause

Plays, or pauses and jumps back 1.5 seconds when invoked.

- If the movie is paused, the movie starts playing at a normal rate.
- If the movie is playing ay any rate (normal, fast forward, rewind), the movie pauses, and jumps back 1.5 seconds to provide a buffer for transcription editing.

### FastForward

Fast forwards at 2X, 5X, 10X speed, with successive invocations (wraps around).
