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
  <div>
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/1109336903?h=1b7cdcce2e" width="100%" height="400px" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>
  </div>
  <div markdown="1">

*This article accompanies Frederik Berlaen’s Typographics 2025 talk, “Your Skeleton looks different than mine?” held in New York at Cooper Union. A glimpse into a 20+ year fascination with skeleton fonts.*

The talk can be found on Vimeo (embedded below). Below is an article based upon the research presented.

  </div>
  </div>


<div markdown="1">
  <div markdown="1">

  </div>
  <div markdown="1">

# Your skeleton looks different than mine?

In my own practice I’ve been fascinated for years in skeletons by building tools and experiments around the construction of letterforms. Finally bundled in a typeface called FC Filter, published by Font Club Belgica and available through Future Fonts.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## Origins: TypeMedia and “KalliCulator”

During my studies at [Type and Media (KABK, The Hague)](https://typemedia.org), my graduation project called [Kalliculator](https://typemytype.com/typedesign/KalliCulator/), an application and research tool for exploring calligraphic contrasts through skeletons.

The intention was to explore the concept of a skeleton. In calligraphy a skeleton is the movement of the hand when writing a character. It can also be seen as the middle of a stroke. However, the exact mathematical middle is not equal to the movement of the hand of that stroke. A skeleton is something in between. A pen in a hand turns around and the mathematical middle does not take these rotations into account.

Different tools create different skeletons. For example, a broad nip and a pointed nib each create very different letter shapes, even when working from the same underlying skeleton.

A physical pen cannot endlessly rotate or distort the nib while following a skeleton. [Kalliculator](https://typemytype.com/typedesign/KalliCulator/) allowed me to apply contrast mathematically, applying transformation to skeletons before adding penlike shapes, and generate over a thousand typeface variations.

[Kalliculator](https://typemytype.com/typedesign/KalliCulator/) was never released publicly, but used heavily in a design process.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## From KalliCulator to Outliner

[RoboFont](https://robofont.com), the most powerful font editor, provides designers the flexibility to automate parts of the design process using [Python](https://www.python.org) programming and to share custom tools through extensions.

One of these tools is Outliner. It can turn anything from a simple single-stroke skeleton into an outlined glyph, apply basic width and contrast adjustments and keep all generated versions compatible for interpolation by maintaining the same point structure.

[Outliner](https://github.com/typemytype/outlinerRoboFontExtension) is being used outside my practice by others building fonts from skeletons like [Kai Bernau & Susana Carvalho](https://carvalho-bernau.com/sandberg-bill/) – Variable identity for the [Sandberg Instituut](https://sandberg.nl) — and [François Chastanet](https://github.com/isdat-type/Relief-SingleLine) – Single-line engravings for CNC machines, later adapted into SVG fonts usable directly in InDesign.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## The CNC Connection

In 2018, while organizing a birthday party for my daughter at the [Ghent University Botanical Garden](https://www.gum.gent/nl/plantentuin-gent). A dirty revival was made for the invitation of her birthday party.

The plants nameplates are engraved by a CNC tool, names are squeezed in the physical space of the plate. Long names are hyper condensed, the skeleton is transformed before the router engraved the letters.

The intriguing imperfections of the font, doubled strokes slightly out of alignment, tiny offsets and mechanical quirks, were the base of the revival. Those early experiment became the foundation for ‘[FC Filter](https://fontclubbelgica.com/typefaces/filter/).’.

Related a indept articel from Florian Hardwig and Thomas Maier: [From Lettering Guides to CNC Plotters — A Brief History of Technical Lettering Tools](https://www.typotheque.com/articles/from-lettering-guides-to-cnc-plotters).

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## Filter: Naming, Structure, and Play

The birthday-revival evolved into [FC Filter](https://fontclubbelgica.com/typefaces/filter/), a name chosen as a playful reference to the new “filter” sorting options introduced by Future Fonts. [FC Filter](https://fontclubbelgica.com/typefaces/filter/) pops up in what ever filter is selected. FC Filter fully embraces the possibilities of the variable font format by offering a wide range of customization options. It includes multiple writing styles, such as engraving, machine-tool, and a variant inspired by a speedball. The typeface allows adjustments in width, ranging from condensed to expanded, and in weight, from hairline to ultra-bold. Its slant can be modified from backslant to frontslant, while the stroke endings can vary from square to rounded. Finally, Filter features a shift axis, enabling the stroke position to move relative to the underlying skeleton of the letterforms.

Instance names inside the variable font are dynamically generating for each variation of the typeface. For example: Filter enough regular less condensed mostly Roman shifted to the right squashy. While this approach was entertaining, it demonstrated how far Filter pushes the limits of variable type design, sometimes beyond practical use as it often breaks design software.


  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## Technical Challenges

Creating [FC Filter](https://fontclubbelgica.com/typefaces/filter/) involved addressing complex issues inherent to the extreme skeleton-based transformations. Condensed is really condensed and the black weight has overlapping and skipping the inner whitespace. Key challenges included preserving uniform stroke weight during width, weight, slant and shift adjustments, eliminating angular distortions at tight curvature points, and maintaining proportional integrity by strategically inserting tangent points at fixed percentages along the skeleton path. The compilation process was equally demanding: each style required 378 master outlines, with generation times averaging ten minutes per build. The resulting variable font weighs approximately 30 MB, deliberately left unoptimized for web use to retain full design fidelity.

  </div>
  </div>

<div markdown="1">
  <div markdown="1">

  ![](missing.jpg)

  </div>
  <div markdown="1">

## So what’s Next

[FC Filter](https://fontclubbelgica.com/typefaces/filter/)’s roadmap and related projects include expanding the character set, exploring revivals of other CNC-era typefaces, continuing research into skeleton-based variable designs and adding a static font export function to reduce webfont file size. For me, technology and design are inseparable. The tools are part of the creative process. Filter exists because of that intersection and reflects the quirks, experiments, and mechanical charm of its origins.

  </div>
  </div>