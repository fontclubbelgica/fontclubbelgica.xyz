paths = [
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-shapes-black-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-shapes-classic-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-shapes-cold-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-shapes-grey-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-shapes-hot-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-shapes-pastel-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-shapes-rgb-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-solid-black-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-solid-classic-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-solid-cold-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-solid-grey-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-solid-hot-pro.woff2',
    # '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-solid-pastel-pro.woff2',
    '/Users/frederik/Documents/dev/fontClubBelgica/fontpage-html/fonts/Pep/Web/lc/pep-solid-rgb-pro.woff2',
    
    #'/Users/frederik/Documents/dev/fontClubBelgica/fontclubbelgica-site/_typefaces/mad-sans/FCMADSans-Black.ttf'
]

from fontTools.ttLib import TTFont
import base64

template = """@font-face {{
  font-family: "{fullName}";
  src: url(data:font/woff;base64,{fontData}), format('woff2');
}}
"""

styles = []
fontfaces = []
for path in paths:

    with TTFont(path) as font:
        fullName = font["name"].getBestFullName()

        #print({r.FeatureTag for r in font["GSUB"].table.FeatureList.FeatureRecord})
        #print({r.FeatureTag for r in font["GPOS"].table.FeatureList.FeatureRecord})

    with open(path, "rb") as file:
        fontData = base64.b64encode(file.read()).decode()

    styles.append(fullName)
    fontfaces.append(template.format(fullName=fullName, fontData=fontData))

print(f"styles:\n  - { '\n  - '.join(styles)}")
print()
print("\n\n".join(fontfaces))
