---
layout: article
date: 2024-07-01
type: article
tags:
  - installing fonts
  - how to
  - tutorial
featuredImage: FCB_Article_Splash_Web-Font.svg
thumbnailImage: FCB_ANR_Web-Font.svg

draft: true
---

# Web Fonts & OpenType Features: a&nbsp;quick guide

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

  ![](Web-Formats.svg)

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

At {% include fcb %} we believe in providing fonts made to the best of our abilities. As such, as standard we provide TTF and WOFF2 fonts. If for some reason you need WOFF or EOT fonts, please contact us at {% include mail a="typefaces" %}.

## Embedding Web Fonts Made Easy

Using your web fonts is as simple as pie, thanks to the magic of @font-face in CSS. Here’s how to roll it out:
The Full Monty (for Maximum Browser Coverage)

1. The Full Monty (for Maximum Browser Coverage)

   <i>@font-face {
       font-family: 'YourFontName';
       src: url('path/filename.woff2') format('woff2'),
            url('path/filename.ttf') format('truetype');
   }</i>

2. Just the Essentials (for Modern Browsers)

   <i>@font-face {
       font-family: 'YourFontName';
       src: url('path/filename.woff2') format('woff2'),
   }</i>


3. Once you’ve declared your font, using it is a breeze:

   <i>body {
       font-family: 'YourFontName', Helvetica, Arial, sans-serif;
   }</i>i

That’s it! Your website now proudly sports our good looking type!

## Hosting Your Web Fonts: Your Fonts, Your Rules

Self-hosting your fonts is the most flexible option—you control everything, and your fonts are always there for your visitors without relying on a third party. No extra JavaScript or tracking codes needed! Many premium type foundries offer fonts for direct download, and at our place, we think that’s the best way to go. However, some foundries prefer to host them for you. Just know what you’re signing up for because hosting can affect how your fonts are delivered to the world.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](OTF-Features.svg)

  </div>
  <div markdown="1">

## Unlocking the Magic of OpenType Features

OpenType features are like secret superpowers hidden in your fonts. They let you fine-tune your typography without juggling extra files. Here’s a cheat sheet for some of the coolest features:

### Kerning & Spacing: Keep It Snug

1. Letter-spacing: This adds extra space around each letter.

2. Font-kerning: This fine-tunes the space between specific letter pairs (like making sure “AV” looks just right).Activate kerning with:

   <i>p {
       font-feature-settings: "kern" 1;
       font-kerning: normal;
   }</i>

### Ligatures: Better Together

Ligatures are those pretty connections between letters like “fi” and “fl” that make text flow naturally.

   <i>p {
       font-feature-settings: 'liga' on;
   }</i>

### Stylistic Alternates: Switch It Up

Fancy a different look for certain characters? Enable stylistic alternates:

   <i>h1 {
       font-feature-settings: 'salt' on;
   }</i>

### Oldstyle vs. Lining Numbers: Choose Your Vibe

1. Oldstyle Numbers (onum): These give a vintage, elegant touch.

   <i>.numbers {
       font-feature-settings: 'onum' on; 
   }</i>

2. Lining Numbers (lnum): These are your standard, all-in-a-row digits.

   <i>.numbers {
       font-feature-settings: 'lnum' on; 
   }</i>

### Swashes & Small Caps: Extra Flair

1. Swashes (swsh): Activate dramatic, fancy letter flourishes.

   <i>.swashy {
       font-feature-settings: 'swsh' on;
   }</i>

2. Small Caps (smcp): Turn lowercase letters into classy, smaller uppercase versions.

   <i>.upperclass {
       font-feature-settings: 'smcp' on;
   }<i>

### Mix and Match Features.

And if you’re feeling adventurous, you can mix several features at once:

   <i>.my-element {
       font-feature-settings: "onum" 1, "kern" 1, "salt" 1, "swsh" 1;
   }</i>

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![]()

  </div>
  <div markdown="1">

## Wrapping It All Up

There you have it. A fun, straightforward guide to installing web fonts and unleashing the cool powers of OpenType. With these tips, you can make your website look amazing and add that extra flair and refinement to your projects. Go ahead, experiment, and let your creativity shine! Happy coding, and may our fonts forever make you look good!

  </div>
  </div>  