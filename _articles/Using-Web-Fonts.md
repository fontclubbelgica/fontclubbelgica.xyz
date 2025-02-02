---
layout: article
date: 2024-07-01
type: article
tags:
  - installing fonts
  - how to
  - tutorial
featuredImage: FCB_Article_Splash_Install.svg
thumbnailImage: FCB_ANR_Font-Install.svg

draft: true
---

# Web Fonts & OpenType Features: a quick guide

<div markdown="1">
  <div markdown="1">

  </div>
  <div markdown="1">

<i>Hey there, web wizards and typography enthusiasts! Ready to dive into the wonderful world of web fonts and the cool tricks you can pull off with OpenType features? Grab your favorite praline, sit back, and let's explore this together in plain, fun language—no confusing jargon here!
</i>

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![]()

  </div>
  <div markdown="1">

## The Lowdown on Font Formats

When you buy a web font license, you'll typically get a package filled with different font files. Here’s the scoop on the most common ones:

### Web Open Font Format (WOFF)
Think of WOFF as the superhero version of fonts. Created in 2009, it wraps around TrueType and OpenType fonts, compressing them so they load fast and smooth in all modern browsers.

### Web Open Font Format 2 (WOFF2)
This is the shiny, upgraded version of WOFF—thanks to Google! It’s even smaller and faster, making it the top pick for modern browsers that know how to handle it.

### TrueType (TTF)
A classic format from the 1980s developed by Microsoft and Apple. Today’s TTF files are pretty much OpenType fonts in disguise. They’re handy if you need to support some older browsers (especially on mobile).

### Embedded OpenType (EOT)
This old-school format was made by Microsoft for ancient versions of Internet Explorer. Since it’s usually uncompressed and a bit of a relic, you can usually skip it unless you’re catering to IE8 and below.

If your audience is rocking modern browsers, you can keep it simple by serving just WOFF and WOFF2. That way, you work with fewer files and enjoy top-notch compression. But if you need to cover all your bases, you might add TTF into the mix. (SVG and EOT? Those are so last decade!) At Font Club Beglica, we supply you with both WOFF2 and TTF files.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![]()

  </div>
  <div markdown="1">

## Embedding Web Fonts Made Easy

Using your web fonts is as simple as pie, thanks to the magic of @font-face in CSS. Here’s how to roll it out:
The Full Monty (for Maximum Browser Coverage)

  </div>
  </div>