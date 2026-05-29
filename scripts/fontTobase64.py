from mojo.UI import GetFile
import base64

path =GetFile("Select font...", fileTypes=["ttf", "otf", "woff2"])



if path:
    with open(path, "rb") as f:
        fontData = base64.b64encode(f.read()).decode()
    print(fontData)