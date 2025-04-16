from pathlib import Path
import ezui

from mojo.extensions import getExtensionDefault, setExtensionDefault, removeExtensionDefault

repoRootDefaultKey = "com.fontclubbelgica.repoRoot"

webFontsRoot = "__webfonts__"
trialFontsRoot = "__trial__"
staticFontsRoot = "__static__"
variableFontsRoot = "__static__"


class Controller(ezui.WindowController):

    def build(self):
        content = """
        = TwoColumnForm     
   
        : WWW Repo:
        * HorizontalStack      @repoStack
        > (/.)                 @repoRoot
        > ( Clear )            @repoRootClear
                
        : Typefaces:
        ( ...)                @typefaces
        
        =---=
        ( Zip it! )  @ zipit
        """
        descriptionData = dict(
            content=dict(
                titleColumnWidth=100,
            ),
            repoStack=dict(
                distribution="fillProportionally"
            ),  
            sourceStack=dict(
                distribution="fillProportionally"
            ),           
            repoRoot=dict(
                path=getExtensionDefault(repoRootDefaultKey, str(Path.home())), 
                pathStyle="popUp",
            ),
            sourceRoot=dict(
                path="/", 
                pathStyle="popUp",
            ),
        )
        self.w = ezui.EZWindow(
            title="🔤🏆🇧🇪 Zipper",
            content=content,
            descriptionData=descriptionData,
            size=(400, "auto"),
            controller=self
        )
        self.setTypefaces()
    
    def started(self):
        self.w.open()
        
    def repoRootCallback(self, sender):
        setExtensionDefault(repoRootDefaultKey, sender.get())
        self.setTypefaces()
    
    def repoRootClearCallback(self, sender):
        removeExtensionDefault(repoRootDefaultKey)
        self.setTypeface()
        self.w.getItem("repoRoot").set(str(Path.home()))
    
    def zipitCallback(self, sender):
        self.showGetFolder(
            messageText="Generated source:",
            allowsMultipleSelection=False,
            callback=self.zipper
        )        
    
    # helpers
    
    def zipper(self, source):
        if not source:
            return
        source = Path(source[-1])
        zipped = source / "zipped"        
        zipped.mkdir(parents=True, exist_ok=True)
    
        root = Path('/Users/frederik/Documents/dev/fontClubBelgica/fontclubbelgica-site')
        typeface = "PDU"
        eulaRoot = root / "assets" / "eula"

        fontPaths = []
        for fileType in ("ttf", "otf"):
            for subfolder in (staticFontsRoot, variableFontsRoot):
                fontRoot = source / subfolder
                fontPaths.extend(fontRoot.glob(f'*.{fileType}'))
    
        
        desktopEulaPath = list(eulaRoot.glob("*EULA-Desktop-*"))
        if fontPaths and desktopEulaPath:
            desktopEulaPath = desktopEulaPath[0]
        
            # desktop family    
            with ZipFile(zipped / f'desktop-{typeface}.zip', 'w') as zipFile:
                for fontPath in fontPaths:
                    zipFile.write(fontPath, arcname=fontPath.name)
        
                zipFile.write(desktopEulaPath, arcname=desktopEulaPath.name)
        
            # desktop style
            for fontPath in fontPaths:
                with ZipFile(zipped / f'desktop-{fontPath.name[:-4]}.zip', 'w') as zipFile:
                    zipFile.write(fontPath, arcname=fontPath.name)
                    zipFile.write(desktopEulaPath, arcname=desktopEulaPath.name)
    
        webFontPaths = []
        for subfolder in (staticFontsRoot, variableFontsRoot):
            fontRoot = source / webFontsRoot  / subfolder
            webFontPaths.extend(fontRoot.glob(f'*.woff2'))

        webDocuments = list(eulaRoot.glob("*EULA-Web*"))
        if webDocuments and webFontPaths:
            # webfonts
            with ZipFile(zipped / f'webfonts-{typeface}.zip', 'w') as zipFile:
                for webFontPath in webFontPaths:
                    zipFile.write(webFontPath, arcname=webFontPath.name)
            
                for webDocument in webDocuments:
                    zipFile.write(webDocument, arcname=webDocument.name)

    def setTypefaces(self):
        root = self.w.getItem("repoRoot").get()
        typefaces = self.w.getItem("typefaces")
        
        typefaceRoot = Path(root) / "_typefaces"
        names = []
        if typefaceRoot.exists():
            names = [folder.name for folder in typefaceRoot.iterdir() if folder.is_dir()]    
        typefaces.setItems(names)
         
        
Controller()    
