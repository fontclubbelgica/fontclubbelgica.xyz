---
layout: article
date: 2026-10-13
type: article
tags:
  - custom fonts
  - bespoke fonts
featuredImage: FCB_Article_Splash_Bol.svg
thumbnailImage: FCB_ANR_Bol.svg

draft: true

seo_description: |
    Discover why custom fonts matter—how bespoke type elevates branding, cuts licensing costs, and helps your brand stand out with lasting visual impact.
seo_image: FCB_SEO_Custom-Fonts.jpg

---

## Type Synthesizer for web and motion graphics

<div markdown="1">
  <div markdown="1">

![](FC-Bol_Research_1.svg)

  </div>
  <div markdown="1">

## It begins with a birth announcement.

In 2014 a friend of [Dries Wiewauters](https://drieswiewauters.eu/) invited a small group of designers and artists to contribute a letter for the announcement of his first child. [Dries](https://drieswiewauters.eu/) was given the letter A. He began thinking about clouds, about looking upwards, about the future and the almost limitless possibilities that lie ahead. What might a letter look like if it could contain a little of this uncertainty? Several proposals emerged, many of them built around a circular element. In the end, it was the cloud-like “A” that was selected.

&nbsp;

## Some ideas have a life beyond their original application.

A few years later, as variable fonts began to find their place in the design landscape, [Dries](https://drieswiewauters.eu/) returned to the unused drawings. This time, the question was no longer simply what a letter might look like, *but what it might morph into*.

What if the circular elements could *change shape*? What if they could *grow* or *shrink*, *drift across the page*, or *dissolve altogether*? And what if these transformations could happen in real time, responding to the movement of the cursor as somebody navigates content on a website? A headline might begin to fog, its components scattering in different directions before fading into tiny pixels.

The typeface became a laboratory. Variable typography was no longer confined to familiar parameters such as *weight* and *width*, nor to the *addition of serifs* to a *sans serif*. It became a space in which letters could be understood as events: *forms that appear, transform, disperse and reassemble*.

  </div>
</div>

<div markdown="1">
  <div markdown="1">

![](FC-Bol_Research_2.svg)

  </div>
  <div markdown="1">

## What happens when typography stops behaving like typography?

This question soon led to another, more fundamental one: *how much freedom can be given to the individual elements of a letter without losing the readability*?

In the first version, shown in grey, the glyphs were closely bound to a grid. The constraint was useful for maintaining a coherent system, but it also introduced a problem. Curves and angled stems became difficult to read. The solution was not to abandon the grid altogether, but to negotiate with it. Straight lines remained largely constrained, while angled lines were allowed to move horizontally when necessary.

The final version, illustrated by the blue “SKY”, reveals the consequences of this decision. The spine of the S remains aligned with the grid, while the K and Y benefit from a greater freedom of movement. The stem of the Y even falls between grid lines, allowing the letter to retain its recognisability within a system designed to destabilise it.

Here, legibility is no longer the only measure of success. It becomes one consideration among others, in a typeface that deliberately explores animated visual chaos. The grid is not abolished; it becomes negotiable.

&nbsp;

## An Unreleased Experiment

The first version of *FC Bol* was never released. At the time, Dries was publishing his typefaces through [Colophon Foundry](https://colophon-foundry.github.io/fontview/bol/), but technical limitations prevented the foundry from displaying variable fonts on its website. The glyph set was completed in 2018, yet the necessary functionality remained unavailable until 2024. By then, the institutional context had changed, and the project remained unpublished.

  </div>
</div>

<div markdown="1">
  <div markdown="1">

![](FC-Bol_Research_3.svg)

  </div>
  <div markdown="1">

## Sometimes a project has to wait for its tools to catch up with its imagination.

When the idea of reviving *FC Bol* resurfaced, [Frederik Berlaen](https://typemytype.com/) proposed a different approach to its construction. The original version relied on manipulating the coordinates of individual elements through XML. By moving these operations into the font compilation process and using [Python](https://www.python.org/doc/essays/blurb/), the team could open the system to a much wider field of experimentation, while making the process more reliable and repeatable.

This change was more than a technical improvement. It altered the way the typeface could be conceived.

In a conventional variable font workflow, designers typically begin by drawing a number of compatible master styles. The software interpolates between these masters to generate the variations in between. The process moves from the outside inward: a collection of defined forms establishes the limits within which the other forms can exist.

&nbsp;

## FC Bol proposes a reversal.

As in [FC Filter](https://fontclubbelgica.com/typefaces/filter/), another Python-driven type project, the process begins with a single master, a [UFO](https://unifiedfontobject.org/), or [Unified Font Object](https://unifiedfontobject.org/). Rather than drawing every possible variation, the team develops a system that generates them. *Python* transforms the skeleton of a letter in [FC Filter](https://fontclubbelgica.com/typefaces/filter/), or the coordinates of individual elements in *FC Bol*, producing shapes that would be extraordinarily time-consuming to construct through a conventional drawing workflow.

The designer no longer has to anticipate every possible outcome. Instead, the designer establishes a set of rules and allows the system to explore the territory they define.

*Could the typeface itself become a generator of forms that its designer has never drawn?*

  </div>
</div>

<div markdown="1">
  <div markdown="1">

![](FC-Bol_Research_4.svg)

  </div>
  <div markdown="1">

## Six Axes of possibility 

In *FC Bol*, the experiment extends beyond the position of the elements. Their shape, size and proportions can also change, independently along the horizontal and vertical axes. The typeface becomes a synthesizer in which several parameters interact, producing combinations that range from the geometric to the glitch-like, from the recognisable to the almost evaporated.

Remarkably, the entire design process is contained within just two *UFO* files: one holding the glyphs, the other defining the animation of the elements. Behind this apparently compact arrangement lies a considerable computational landscape.

The typeface contains *1,167 glyphs*, including support for *Greek*, *Cyrillic* and *Vietnamese*. The system generates *1,296 masters*, each representing a particular combination of *six axes of variation*.

  </div>
</div>

<div markdown="1">
  <div markdown="1">

<video autoplay muted loop playsinline>
    <source src="FC-Bol_Research_5.mp4" type="video/mp4">
</video>

  </div>
  <div markdown="1">

## Mesh, Cross, Fence, Diamond, Star, Square, Circle & Sails

*Eight interpolatable layers* control the form of the element, moving from glitchy to geometric. *Three masters* govern its *horizontal size*, from nonexistent to 100% and 200%. Another three do the same *vertically*. Three more control the *width* of the font, from *radically compressed* through *condensed* to *expanded*. Three control the *slant*, from *−45 degrees* through *upright* to *+45 degrees*. Finally, two masters define the transition from *structured* to *chaotic*, almost *evaporated*.

The calculation is straightforward: *8 × 3 × 3 × 3 × 3 × 2 = 1,296 masters*.

Yet the number is not simply a measure of technical complexity. It describes the scale of the space that the typeface is able to explore. Each axis introduces a different kind of movement; together, they allow these movements to combine into forms that cannot easily be predicted in advance, hence the idea that this is more of a type synthesizer than a font in the classic sense.

More axes could have been added, extending the system into even more elaborate animations. For the first version, however, the decision was to concentrate on exaggerated extremes. The intention was not to provide every conceivable variation, but to make the available ones sufficiently expressive. The original font file weighed 94 MB and contained 1,512,432 glyphs. Through optimisation, its size was halved, while preserving all *six axes* and the *extensive language support*.

  </div>
</div>

<div markdown="1">
  <div markdown="1">

<video autoplay muted loop playsinline>
    <source src="FC-Bol_Research_6.mp4" type="video/mp4">
</video>

  </div>
  <div markdown="1">

## Distortion as a Design Tool

Consider the sizing of the elements. By separating horizontal and vertical control, *FC Bol* allows them to be stretched, compressed or distorted in ways that go beyond ordinary scaling. Their proportions can shift, producing striations and layered effects. An element can become almost imperceptible or expand into an exaggerated form. Several layers can be combined to create concentric patterns, or pushed further towards visual chaos.

The distinction between horizontal and vertical movement becomes important here. An element is no longer obliged to preserve its proportions. It can be stretched in one direction while remaining compressed in the other, opening up a vocabulary of shapes that sits somewhere between typography, texture and image-making.

  </div>
</div>

<div markdown="1">
  <div markdown="1">

<video autoplay muted loop playsinline>
    <source src="FC-Bol_Research_7.mp4" type="video/mp4">
</video>

  </div>
  <div markdown="1">

## The fourth axis introduces a different kind of transformation: width.

Although the standard glyphs are already condensed, they can be compressed further, beyond any practical notion of readability, or expanded to accommodate the particular demands of a medium. Here, a familiar typographic parameter becomes an invitation to test its limits. *How narrow can a letter become before it ceases to function as a letter?* And what happens when the width is no longer determined primarily by the need to fit words into a line, but by the visual possibilities of the space around them?

There is a productive tension between economy and excess. The system is built from two source files, yet it can generate an enormous number of possibilities. Its underlying structure is compact; its visible behaviour can be anything but.

  </div>
</div>

<div markdown="1">
  <div markdown="1">

<video autoplay muted loop playsinline>
    <source src="FC-Bol_Research_8.mp4" type="video/mp4">
</video>

  </div>
  <div markdown="1">

## The fifth axis controls slant

But again the intention is to move beyond the comfortable and the useful. A conventional italic or oblique typeface tends to operate within a relatively restrained range. For *FC Bol*, the question is different: *if slant is a parameter, why not amplify it? Why stop at the familiar ten, when the scale could go to eleven, or further?*

The axis allows movement from a backward slant of *−45 degrees*, through *upright*, to a forward slant of *+45 degrees*. For a more conventional application, one might stay within the familiar range of *9* to *12* degrees. An avant-garde treatment might push towards *15* degrees. But *FC Bol* makes it possible to venture much further, into angles that are less about typographic convention than about the sensation of movement itself.

*There is another distinction.* A conventional slant generally translates the letterforms linearly. In *FC Bol*, the effect is exponential: the further an element sits from the baseline, the more strongly it is affected. The result recalls the clouds that inspired the original *A*, as if the elements were being caught by a gust of wind and carried into an oblique space.

Even the direction of that movement contains a surprise. Below the baseline, the elements are blown in the opposite direction. Given the short descenders of many glyphs, this behaviour can remain almost hidden. It is an Easter egg within the system, a detail that may not be noticed immediately but gives the typeface a quality beyond what one might expect from a mathematical transformation.

A cool detail is that under the baseline they get blown into the opposite direction. Given the short descenders this becomes almost an Easter Egg, but these are the details that you don’t notice at first but that give the font emotion beyond the expected code manipulation.

  </div>
</div>

<div markdown="1">
  <div markdown="1">

<video autoplay muted loop playsinline>
    <source src="FC-Bol_Research_9.mp4" type="video/mp4">
</video>

  </div>
  <div markdown="1">

## From Structure to Evaporation

The *sixth and final axis* disperses the elements, bringing the experiment back to one of its original impulses: the possibility that a letter might dissolve.

In more restrained combinations, particularly when used with the rounded elements, dispersion can produce textures reminiscent of risograph printing, with layers of shapes accumulating into a tactile, almost printed surface. Pushed to an extreme and combined with shrinking elements, it creates a different sensation altogether. The letters appear to lose their substance, as if moisture were evaporating from the page.

This is where the initial cloud returns, no longer simply as the inspiration for a letterform but as a model for the behaviour of the typeface itself. Elements separate, become smaller and drift away. What was once a solid arrangement begins to disperse into something less tangible.

The axes are most interesting when they are not considered in isolation. A change in size can be combined with a change in shape; slant can intensify dispersion; width can transform the space through which the elements appear to move. Each parameter changes the effect of the others. The result is not merely a collection of six independent controls, but a system in which their interactions create a much larger field of expression.

The typeface becomes an instrument for tuning between order and disorder, between the legible and the illegible, between a letter that holds together and one that is on the verge of disappearing.

  </div>
</div>

<div markdown="1">
  <div markdown="1">

<video autoplay muted loop playsinline>
    <source src="FC-Bol_Research_10.mp4" type="video/mp4">
</video>

  </div>
  <div markdown="1">

## The Typeface as an Event

*FC Bol* begins with a cloud, but it does not end there. Between the first hand-drawn *A* and the eventual variable font lies a shift in the understanding of what a typeface can be.

A letter is usually encountered as a stable shape, repeated across different contexts. Even when its weight, width or slant changes, its identity remains relatively secure. FC Bol places this stability under pressure. It treats the letter as a collection of elements whose relationships can be continuously altered, whose positions can be recalculated and whose forms can move towards disappearance.

This opens a different relationship between typography and time. On a website, a word need not remain fixed as the reader encounters it. The movement of a cursor can initiate a transformation; interaction can become a form of choreography. A headline is no longer merely a container for language, but a temporary arrangement of elements responding to an action.

The typeface becomes a meeting point between graphic design, computation and motion. Its letters can hold together, break apart and reform. Their behaviour is determined not by a sequence of individually drawn frames, but by a system capable of generating variation.

Perhaps this is the most interesting aspect of FC Bol: not the sheer number of forms it can produce, but the change in authorship that makes those forms possible. The designer establishes the conditions. The code creates the relationships. The variable font opens up the space between them.

*And somewhere in that space, a letter can begin to evaporate.*

What began as a small experiment in imagining the future of a newborn child has become an investigation into the future of typography itself: a typeface that does not simply offer a choice between styles, but allows the very elements from which letters are made to enter into motion.

  </div>
</div>