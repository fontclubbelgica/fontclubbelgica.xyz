---
layout: article
date: 2025-05-12
type: article
tags:
  - filter
  - researh
  - skeleton fonts
featuredImage: FCB_Article_Splash_Filter.svg
thumbnailImage: FCB_ANR_Filter.svg

draft: true

seo_description: |
    Discover why custom fonts matter—how bespoke type elevates branding, cuts licensing costs, and helps your brand stand out with lasting visual impact.
seo_image: FCB_SEO_Filter.jpg

---

# Filter: A Typeface Built on Skeletons 

<div markdown="1">
  <div markdown="1">

  </div>
  <div markdown="1">

<i>This article is the companion of the presentation: “Your skeleton looks different than mine?” that Frederik Berlaen gave at Typographics 2025 in New York. It shows a glimps into his 20+ year obsession with skeleton fonts.</i><br>
<br>
The talk can be found on Vimeo (embedded below). Below is an article based upon the research presented.<br>

  </div>
  </div>

  <iframe title="vimeo-player" src="https://player.vimeo.com/video/1109336903?h=1b7cdcce2e" width="1280" height="720" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>

<div markdown="1">
  <div markdown="1">

  </div>
  <div markdown="1">

# Your skeleton looks different than mine?

For most of Frederik Berlaens career he has been fascinated by skeletons — not the bone kind (though those are cool too), but the skeletal structures at the heart of letterforms. This curiosity has shaped years of research, experiments, and tools, culminating in a typeface called Filter, published by Font Club Belgica and available through Future Fonts.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## Origins: TypeMedia and “Kalliculator”

The seeds of Filter were planted 19 years ago at [Type and Media](https://typemedia.org). In this masters course a student normally presents a font or collection of fonts for their graduation project. But Frederik constructed a tool called [Kalliculator](https://typemytype.com/typedesign/KalliCulator/): a research environment for exploring contrast through skeletal letterforms.<br>
<br>
The idea was to explore the concept of a skeleton: the central path your pen or tool follows. Different pens, different skeletons: A broad nib vs. a pointed nib creates different constructions, even on the same skeleton.<br>
<br>
In software, you can rotate or distort the pen endlessly, producing shapes impossible by hand. [Kalliculator](https://typemytype.com/typedesign/KalliCulator/) allowed Frederik to:

- Apply contrast mathematically around a skeleton.
- Stretch, slant, and transform skeletons before applying “pen” shapes.
- Generate thousands of variations (1,000+ typefaces where over the span of the project).

[Kalliculator](https://typemytype.com/typedesign/KalliCulator/) was never released publicly, but it shaped the way Frederik thinks about type design.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## From Kalliculator to Outliner

Many moons later Frederik launched [Robofont](https://robofont.com) , the heavy duty font editor for MacOSX. It gives the user the flexibility to use [Python](https://www.python.org) programming to automate parts of the design process as well as sharing tools as extensions.<br>
<br>
One of these is [Outliner](https://github.com/typemytype/outlinerRoboFontExtension), that can:

- Outline anything from a single-stroke skeleton to a full glyph.
- Apply basic width and contrast changes.
- Keep all generated instances interpolatable by maintaining the same point structure.

Notable use case of [Outliner](https://github.com/typemytype/outlinerRoboFontExtension) are by [Kai Bernau & Susana Carvalho](https://carvalho-bernau.com/sandberg-bill/) – Variable identity for the [Sandberg Instituut](https://sandberg.nl) — and [François Chastanet](https://github.com/isdat-type/Relief-SingleLine) – Single-line engravings for CNC machines, later adapted into SVG fonts usable directly in InDesign.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## The CNC Connection

In 2018, Frederik’s had a party for his daughter that was held in [Plantentuin Gent](https://www.gum.gent/nl/plantentuin-gent), the [Ghent univserity](https://www.ugent.be) botanical garden. He noticed the engraved plant nameplates — condensed, single-line CNC-cut lettering and was drawn to the imperfections: doubled strokes that didn’t align perfectly, tiny offsets, and mechanical quirks. For her party invitation, he created a condensed single-line typeface inspired by those signs. That early design became the starting point for [Filter](https://fontclubbelgica.com/typefaces/filter/).

## Historical Threads

In 2019, a [Typotheque](https://www.typotheque.com/articles/typeface-as-programmeinterview-with-peter-bilak) article by Fián and Thomas explored the history of single-line pantograph typefaces. The pantograph — a tracing tool that could enlarge/reduce a skeleton pattern — reinforced my interest in the idea of starting from a base skeleton and “dressing” it with different stroke styles.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## Filter: Naming, Structure, and Play

By 2020, the font of the party invitation evolved into [Filter](https://fontclubbelgica.com/typefaces/filter/) — the name a tongue-in-cheek response to new “filter” sorting options [Future Fonts](https://www.futurefonts.com/fontclubbelgica/fc-filter).
[Filter](https://fontclubbelgica.com/typefaces/filter/) pushes the variable font format by including:

- Multiple “pen” styles (engraving, machine-tool, and a Speedball-nib variant)
- Width (condensed to expanded)
- Weight (hairline to ultrafat)
- Slant (backslant to frontslant)
- Cap-style axes (square, squarish to rounded)
- A shift axis (moving stroke position relative to the skeleton).


He also experimented with generating names for each instance dynamically. For example:
[Filter](https://fontclubbelgica.com/typefaces/filter/) enough regular less condensed mostly Roman shifted to the right squashy.
Whilst amusing [Filter](https://fontclubbelgica.com/typefaces/filter/) pushes the the limits of variable type as far as they can go. Which happens to be sometimes a bit too far as this feature breaks most design software — it’s more a conceptual joke than a practical feature.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## Technical Challenges

Making [Filter](https://fontclubbelgica.com/typefaces/filter/) meant solving problems that appear when transforming skeletons:

- Consistent stroke thickness when stretching/slanting.
- Preventing “kinks” at tight curves.
- Maintaining curve proportions by adding tangent points at fixed percentages along the skeleton.

The build process is heavy:
- 378 masters per style.
- Around 10 minutes to generate.
- ~30 MB variable font (not web-optimized — intentionally)

## Why Not Release the Tools?

Some of Frederik's tools, like [Robofont](https://robofont.com) and [Outliner](https://github.com/typemytype/outlinerRoboFontExtension), are public, whilst others aren’t. This is partly because once tools are released, they can be used superficially — like picking a “red paint” from the shelf rather than mixing your own. And his focus is on research, not mass-producing presets.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## So what’s Next

Future plans for [Filter](https://fontclubbelgica.com/typefaces/filter/) and related projects include:

- Expanding the character set
- Exploring revivals of other CNC-era typefaces
- Continuing research into skeleton-based variable designs
- Adding a static font export function to reduce filesize for Filter webfonts

Technology and design aren’t separate — the tools are part of the creative process. [Filter](https://fontclubbelgica.com/typefaces/filter/) exists because of that intersection, and it carries the quirks, experiments, and mechanical charm of its origins.
  </div>
  </div>