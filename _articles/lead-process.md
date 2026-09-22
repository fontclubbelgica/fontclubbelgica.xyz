---
layout: article
date: 2026-08-20
type: article
tags:
  - lead
  - researh
  - glass
featuredImage: FCB_Article_Splash_Lead.png
thumbnailImage: FCB_ANR_Lead.svg

draft: false

seo_description: |
    FC Lead Light, glass and lead, letters based on convex shapes and whole undivided whitespaces. Convert all limitations of cutting glass into a letter shapes. FC Lead is using the constraints of merging pieces of glass together with lead into one solid drawing. Counterparts are created with  light without any unnecessary cuts. Resulting in unconventional letters.
seo_image: FCB_SEO_lead.jpg

---



<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1204341661?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="FC Lead, Frederik Berlaen, Typelab 2026"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

# Light, glass and lead.

<div markdown="1">
  <div markdown="1">

  ![](research_longaville.png)
    *Majorelle stained-glass windows in Longlaville*
  ![](research_church.png)

  </div>
  <div markdown="1">

It all started with drawing a single M and F, and a fascination that came from Mieke, Frederik's girlfriend, a stained-glass artist.

Stained glass works backwards from print. Light comes from outside and passes *through* the glass, so you're not looking at reflected light, you're looking at light itself. Black isn't a shape, it's where light is blocked by a different colored piece of glass.

Intersting is how tightly the structure and the image are tied together. The lead lines holding a window together aren't just scaffolding, they're part of the drawing. A robe's folds, a halo, a face: the lead shapes them as much as any painted detail does. Historically, most lettering in stained glass wasn't built from lead at all, it was painted on with an emulsion and burned back into the glass.

Pattern books, guiding the cutter to cut glass, showing the structure of the puzzle and how letter shapes can addept towards lead framing.

</div>
</div>

<div markdown="1">
  <div markdown="1">

  ![](research_glass.png)

  ![](research_convex.png)

  </div>
  <div markdown="1">

## The Physics of Cutting Glass

Stained glass is melted sand with minerals added for color, chromium for green, cobalt for blue. It's usually hand-blown, so it's never flat or even: bubbles, uneven thickness.

Glass sits inside lead came, shaped like a capital "I", with a "leaf" on each side and a "heart" in the middle holding the glass. A glass cutter doesn't actually cut — it scores the surface, and you snap the glass along that line with pliers. Edges get ground down afterward.

This creates one hard rule: **you can only cut convex shapes**. Any angle over 180 degrees, a concave corner, can't be scored and snapped without breaking the whole piece. It's a physical limitation, but also an opening: a concave shape can often be turned into a curve instead, which *can* be cut.

Cutting the lead itself takes a sharp knife, and a small tool called a fid (usually bone) is used to pry the lead open so glass can slide in before it's pressed shut. Every joint gets soldered with tin at the end, locking the piece together.

</div>
</div>

<div markdown="1">
  <div markdown="1">

  ![](research_contours.png)
  ![](research_planning.png)
  ![](research_opticalsize.gif)

  </div>
  <div markdown="1">

## Here it comes: FC Lead

Started by sketching and drawing the 'M' and 'F' entirely around those stained-glass constraints.

Every counter, every white space in a letter, had to be one convex piece of glass. No concave shapes anywhere. And the black parts of letter itself had to break into the biggest pieces possible, to let more light through. That decision shaped almost every letterform, super happy with how the B and 8 landed with single-bowl counters kept as open as possible.

Spacing mattered a lot too. Every letter combination creates a different arrangement of glass pieces, all possible white-space combinations had to be mapped out to make sure each one still worked as a single cuttable shape.

**FC Lead is a variable font with two axes.** The first is a normal width axis, condensed to regular, which lets a line of text be squeezed to fit a given space, useful since most windows are square or rectangular and you want the lettering to fill it. The second axis reuses the term "optical size" but for a different reason: as letters get smaller, the smallest glass pieces need to get *bigger*, because tiny glass pieces are harder to cut and assemble. It's optical sizing driven by fabrication, not reading distance.

To plan out actual stained-glass piece a DrawBot script fits text into a given width and spits out a printable PDF showing exactly how to score each piece, along with the lead thickness needed (6mm lead, 2mm heart, in one case). This planning matters because you're working from a pile of glass in different colors and sizes, and every piece has to be matched in advance, form, color, lead width, all of it.

Bigger pieces with multiple lines reveal new problems: a single long lead line will sag and eventually collapse without reinforcement, the way old church windows rely on steel beams in the middle of a piece. Vertical reinforcing is required to hold multiple lines together as a solid piece.

</div>
</div>

<div markdown="1">
  <div markdown="1">

  ![](research_colorFonts.png)

  </div>
  <div markdown="1">

## Hé it's a color font!

Since the actual glass is colored, FC Lead also exists as a color font.

Color fonts come in a few competing formats. SBIX (Apple's emoji format) is pixel-based with no interpolation. SVG-in-font supports rich rendering but also no interpolation. COLR/CPAL — where each color is a separate glyph stacked in layers, support interpolation. COLRv1 adds gradients and better layering but has weaker browser support.

The font ships with six colors based on how stained-glass color is actually made: chromium for green, cobalt for blue, gold and ruby (also called cranberry ruby) for warmer tones. Glass colors are never truly bright on their own, the brightness comes from sunlight passing through. One palette was pulled directly from a large stained-glass piece at Brussels Airport, made by Atelier Mestdagh, one of Belgium's oldest stained-glass workshops, the purple-aubergine combination was too good to pass up.

</div>
</div>