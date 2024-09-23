import ezui
from fontTools.ttLib import TTFont
import base64
from glyphNameFormatter import getRangeName

fontFace_template = """@font-face {{
  font-family: "{fullName}";
  src: url(data:font/woff;base64,{fontData}), format('woff2');
}}
"""

blockIgnores = [" ", "Basic", "Extended", "Supplement", "-A", "-B", "-1", "Additional", "General", "Supplemental", "Letterlike"]
def getUnicodeBlock(unicode):
    block = getRangeName(unicode)
    
    for ignore in blockIgnores:
        block = block.replace(ignore, "")
    return block
    
    
class Controller(ezui.WindowController):

    def build(self):
        content = """        
        |-files----| @fontFiles
        [[_~ ~_]] @output
        
        = HorizontalStack
        > ( /@font-face ) @buildFontFace
        > ( Styles ) @buildStyles
        > ( Glyph Count ) @buildGlyphCount
        > ( Character set ) @buildCharacterSet
        """
        descriptionData = dict(
            output=dict(
                height=300,
                fontDescription=dict(
                    name="system-monospaced"
                )
            ),
            fontFiles=dict(
                height=200,
                itemType="dict",
                acceptedDropFileTypes=[".woff", ".woff2", ".ttf", ".otf"],
                allowsDropBetweenRows=False,
                allowsInternalDropReordering=False,
                showColumnTitles=True,
                enableDelete=True,
                columnDescriptions=[
                    dict(
                        identifier="path",
                        title="Path",
                        cellClassArguments=dict(
                            showFullPath=True
                        ),
                    ),                                 
                ]
            )
        )
        self.w = ezui.EZWindow(
            title="🔡 🏆 🇧🇪",
            content=content,
            descriptionData=descriptionData,
            size=(400, "auto"),
            controller=self
        )
    
    def started(self):
        self.w.open()
    
    def write(self, txt):
        output = self.w.getItem("output")
        output.set(txt)
    
    def fonts(self):
        table = self.w.getItem("fontFiles")
        for item in table.get():
            path = item["path"]
            with TTFont(path) as font:
                yield font, path
                
    def fontFilesCreateItemsForDroppedPathsCallback(self, sender, paths):
        items = []
        for path in paths:
            item = dict(
                path=path,
            )
            items.append(item)
        return items
    
    def fontFilesDeleteCallback(self, sender):
        sender.removeSelection()
                
    def buildFontFaceCallback(self, sender):
        fontfaces = []
        for font, path in self.fonts():
            fullName = font["name"].getBestFullName()
            with open(path, "rb") as file:
                fontData = base64.b64encode(file.read()).decode()
            fontfaces.append(fontFace_template.format(fullName=fullName, fontData=fontData))
        print("\n\n".join(fontfaces))
        self.write("\n\n".join(fontfaces))
    
    def buildStylesCallback(self, sender):
        styles = []        
        for font, path in self.fonts():
            fullName = font["name"].getBestFullName()            
            styles.append(fullName)        
        self.write(f"  - { '\n  - '.join(styles)}")    
    
    def buildGlyphCountCallback(self, sender):
        count = []
        for font, path in self.fonts():
            fullName = font["name"].getBestFullName()            
            count.append(f"{fullName}: {len(font.getGlyphOrder())}")
        self.write("\n".join(count))
    
    def buildCharacterSetCallback(self, sender):
        ignoreUnicodes = [ord(" ")]
        unicodes = {}
        for font, path in self.fonts():
            for unicode in font.getBestCmap():
                if unicode in ignoreUnicodes:
                    continue
                block = getUnicodeBlock(unicode)
                if block not in unicodes:
                    unicodes[block] = []
                unicodes[block].append(unicode)
                    
        out = "characterSets:\n"                
        for block, unicodes in unicodes.items():
            text = []
            for unicode in unicodes:
                t = chr(unicode) 
                if len(t.strip()) == 0:
                    continue
                if t == '"':
                    t = '\\"'
                text.append(t)
            out += f"   - {block}: \"{' '.join(text)}\"\n"        
        self.write(out)

        
Controller()    
