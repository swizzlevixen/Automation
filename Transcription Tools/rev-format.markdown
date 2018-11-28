# Reformat Rev Transcript to Markdown

Convert Rev transcript text file formatting to Markdown; designed for The Omni Show. https://theomnishow.omnigroup.com

Turn this:

```
Brent:              I'm your host Brent Simmons, in this studio with me is Bob Sterns, executive chef. Say hello, Bob. 

Bob:                Hello, Bob.
```

into this:

```
**Brent:** I'm your host Brent Simmons, in this studio with me is Bob Sterns, executive chef. Say hello, Bob. 

**Bob:** Hello, Bob.
```

## BBEdit

Find:

`^(.+:)\s+`

Replace (there should be a **trailing space** on this line):

`**\1** `

## Credits

- RegEx help from [RegExr](https://regexr.com).
- [Rev](https://www.rev.com/transcription) audio transcription
- [BBEdit](http://www.barebones.com/products/bbedit/index.html)

*This document was moved from [this gist](https://gist.github.com/bobtiki/903891bade11aaf365464931955ed356)*
