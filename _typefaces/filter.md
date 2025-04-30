---
layout: font
title: FC Filter

draft: false

seo_description: |
    FC Filter is a variable font with the most axis possible that Future Fonts supports. What started as an inside joke now pushes the boundaries of type design. 
seo_image: FCB_SEO_Filter.jpg

information: |
    Filter is a collection of skeleton fonts brought in an experimental variable world.

designer: Frederik Berlaen
date: 2025-02-10

buy_redirect:
    title: Buy on Future Fonts
    url: https://www.futurefonts.xyz

technicalSupport:

    latin: true
    cyrillic: false
    greek: false
    vietnamese: false

    weights: ⇄
    widths: ⇄

    italics: true

    variable: true

languageSupport:
    Latin: A B C D E Fill out further

css: filter-style.css

splash: filter-splash.svg

hometile: FCB_Library_Filter_Large.svg

showcases:
     - ABCDEFGHIJKLMN
     - OPQRSTUVWXYZ
     - abcdefghijklm
     - nopqrstuvwxyz
     - 0123456789

styles:
   - FC Filter Engraved Light Normal Roman  Rounded:
        glyphCount: 73
        fastspring: FC_Filter_Engraved_Light_Normal_Roman__Rounded
        characterset:
           Basic Latin: "& , - . 0 1 2 3 4 5 6 7 8 9 : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z"
           Latin-1 Supplement: "é"
           Emoticons: "😀 😎"
           Transport and Map Symbols: "🚲"
   - FC Filter Machine Tool Light Normal Roman  Rounded:
        glyphCount: 64
        fastspring: FC_Filter_Machine_Tool_Light_Normal_Roman__Rounded
        characterset:
           Basic Latin: "0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z"
   - FC Filter Vlotte Light Normal Roman  Rounded:
        glyphCount: 66
        fastspring: FC_Filter_Vlotte_Light_Normal_Roman__Rounded
        characterset:
           Basic Latin: "0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z"
           Latin Extended-A: "ŭ"
           Spacing Modifier Letters: "˘"

fontVariations:
   - wght:
      name: Weight
      minValue: 1.0
      maxValue: 1000.0
      defaultValue: 400.0
   - wdth:
      name: Width
      minValue: 30
      maxValue: 100
      defaultValue: 300
   - slnt:
      name: Slant
      minValue: -30.0
      maxValue: 30.0
      defaultValue: 0.0
   - shft:
      name: Shift
      minValue: -40.0
      maxValue: 40.0
      defaultValue: 0.0
   - cap_:
      name: Capstyle
      minValue: 0.0
      maxValue: 1.0
      defaultValue: 1.0

# openTypeFeatures:
#    - dnom:
#        name: Denominators
#        fontStyle: FC MAD Serif Light
#        examples:
#          - "0123456789"
#    - frac:
#        name: Fractions
#        fontStyle: FC MAD Serif Light
#        examples:
#          - "/0123456789"

testers:
    - text: |
        Flou gaussien est un effet visuel couramment utilisé dans le traitement d'images numériques. Ce filtre crée un flou doux et homogène en appliquant une fonction mathématique connue sous le nom de fonction gaussienne. L'effet de flou est obtenu en atténuant les détails d'une image, ce qui peut aider à réduire le bruit et les imperfections, ainsi qu'à adoucir les contours.
        Le flou gaussien fonctionne en prenant en compte les pixels voisins d'un pixel donné, en leur attribuant un poids basé sur leur distance par rapport à ce pixel. Les pixels plus proches ont un poids plus élevé, ce qui signifie qu'ils influencent davantage la couleur du pixel central. Cela crée une transition fluide entre les couleurs, rendant l'image plus douce et plus esthétique.
        Le flou gaussien est souvent utilisé pour :
        1. Adoucir les bords : Il peut donner un aspect plus professionnel à une image en adoucissant les contours d'objets.
        2. Créer une profondeur de champ : En floutant l'arrière-plan d'une image, il est possible de mettre en valeur le sujet principal.
        3. Réduire le bruit : Le flou gaussien peut aider à masquer les artefacts indésirables ou le bruit dans une image, surtout dans les photos prises dans des conditions de faible luminosité.
        Dans les logiciels de retouche d'images comme Adobe Photoshop, le flou gaussien est un outil facile à utiliser qui offre une grande flexibilité dans la création d'effets visuels.
      fontStyle: FC Filter
      fontSize: 200
      fontVariations:
            - cap_: 1
            - shft: 40

    - text: |
        Élesítő maszk (Unsharp Mask) egy népszerű képfeldolgozó technika, amelyet a fényképek élesítésére használnak. A neve ellentmondásos, mert a technika éppen a kép élességének növelésére szolgál, nem csökkentésére. Az eljárás lényege, hogy egy képet először elmosnak, majd ezt az elmosott képet levonják az eredeti képből, így kiemelik a részleteket.
        Hogyan működik?
        1. Elmosás: Az első lépés a kép elmosása, amely simítja a részleteket. Ez a lépés csökkenti a fényességi változásokat, ami segít a részletek kiemelésében.
        2. Levonnás: Ezután az elmosott képet levonják az eredeti képből. Ez a levonás kiemeli a kontrasztot a részletek körül, így élesebbnek tűnik a kép.
        3. Beállítás: Az élesítés mértékét és hatását különböző paraméterek beállításával lehet szabályozni, például:
        3.1 Sugár (Radius): Meghatározza, hogy a kép mely területein, milyen mértékben alkalmazzák az élesítést. Nagyobb sugár elmosottabb, míg kisebb sugár élesebb hatást eredményez.
        3.2 Tömeg (Amount): A kép élesítésének mértékét határozza meg. Magasabb érték erősebb élesítést jelent.
        3.3 Küszöb (Threshold): Megadja, hogy mennyire legyen érzékeny az élesítés a képen található zajra. Magasabb küszöbértékek segítenek elkerülni a zaj kiemelését.
        Felhasználási területek
        Az élesítő maszk különösen hasznos lehet digitális fényképek utófeldolgozása során, mivel segít kiemelni a részleteket, és élesebb, professzionálisabb megjelenést kölcsönöz a képeknek. Az élesítés alkalmazásakor fontos azonban figyelni arra, hogy ne vigyük túlzásba, mert a túlzott élesítés zajos hatást eredményezhet, és ronthatja a kép minőségét.
      fontStyle: FC Filter
      fontSize: 30

    - text: |
        El filtro de paso alto es una técnica utilizada en la edición de imágenes para mejorar la nitidez y el detalle de una fotografía. A diferencia de los filtros convencionales que pueden suavizar la imagen, el filtro de paso alto se centra en resaltar las áreas de mayor contraste y definición, lo que lo convierte en una herramienta popular para la nitidez.
        Cómo Funciona
        1. Descomposición de la Imagen: El filtro de paso alto comienza separando la imagen en dos componentes: una capa de alta frecuencia (los detalles finos y los bordes) y una capa de baja frecuencia (las áreas suaves y homogéneas).
        2. Aplicación del Filtro: Al aplicar el filtro, se eliminan las frecuencias bajas, lo que significa que solo se conservan las áreas de alto contraste y los detalles finos. Esto resalta las texturas y los bordes, proporcionando una apariencia más nítida a la imagen.
        3. Combinación: Después de aplicar el filtro, la capa de alta frecuencia se superpone de nuevo a la imagen original. Esto se suele hacer utilizando un modo de fusión, como "Superponer" o "Luz suave", para que los detalles mejorados se integren naturalmente en la fotografía.
        Usos Comunes
        a. Nitidez: Se utiliza principalmente para aumentar la nitidez de las fotografías, lo que es especialmente útil en retratos y paisajes.
        b. Restauración de Imágenes: Ayuda a recuperar detalles en imágenes que han sido desenfocadas o que carecen de claridad.
        c. Efectos Artísticos: A veces se utiliza en diseño gráfico para crear efectos visuales específicos.
        Consideraciones
        Aunque el filtro de paso alto es efectivo, es importante utilizarlo con moderación. Un uso excesivo puede resultar en una apariencia artificial, con bordes demasiado marcados y ruido visual. Por lo tanto, se recomienda ajustar la intensidad del filtro para lograr un equilibrio óptimo entre nitidez y naturalidad.
      fontStyle: FC Filter
      fontSize: 70

    - text: |
         Brusfilter är en viktig teknik inom digital bildbehandling som används för att reducera oönskade störningar i bilder. Brus kan uppstå av olika anledningar, inklusive dåliga ljusförhållanden, hög ISO-inställning eller sensorproblem. Brus kan visa sig som korniga strukturer eller färgade prickar som distraherar från bildens huvudmotiv.
         Hur Brusfilter Fungerar
         1. Analys av Bilddata: Brusfilter analyserar varje pixel i en bild och identifierar de som har oönskade variationer i ljusstyrka eller färg.
         2. Utjämning av Pixelvärden: Genom att jämföra en pixel med dess grannar kan filtret justera pixelvärdena för att minska skillnaderna. Detta kan göras på olika sätt, till exempel genom att ta medelvärdet av grannpixlarna eller genom att använda mer avancerade algoritmer som bevarar detaljerna i bilden.
         3. Bevarande av Detaljer: Ett bra brusfilter syftar till att reducera brus utan att påverka de viktiga detaljerna i bilden. Det kan till exempel vara viktigt att bevara kanter och texturer för att bilden ska se skarp och realistisk ut.
         Typer av Brusfilter
         a. Medianfilter: Ersätter varje pixel med medianvärdet av sina grannpixlar. Det är effektivt för att ta bort salt-och-peppar-brus.
         b. Gaussiskt filter: Använder en gaussisk fördelning för att blanda pixelvärden. Det ger en mjukare utjämning men kan ibland sudda ut detaljer.
         c. Anpassade filter: Mer avancerade metoder, såsom "non-local means" och "wavelet denoising", som bevarar detaljer bättre samtidigt som de minskar brus.
         Användningsområden
         Brusfilter används ofta inom fotografi, videoproduktion och medicinsk bildbehandling. I fotografi kan det förbättra bilder tagna under svaga ljusförhållanden. Inom medicinsk bildbehandling kan brusreducering förbättra diagnosticering genom att ge tydligare bilder.
         Att använda brusfilter effektivt kräver en balans mellan brusreducering och bevarande av bildens skärpa och detaljrikedom. En överanvändning av brusfilter kan leda till att bilden ser onaturlig eller för mjuk ut.
      fontStyle: FC Filter
      fontSize: 120

    - text: |
         Kleurbalans is een cruciaal concept in de digitale beeldbewerking en fotografie dat betrekking heeft op de aanpassing van de kleuren in een afbeelding om een gewenste visuele uitstraling te bereiken. Het doel van kleurbalans is om de verhouding tussen de primaire kleuren - rood, groen en blauw (RGB) - of hun equivalente waarden in andere kleurmodellen, zoals CMYK, te optimaliseren.
         Hoe Kleurbalans Werkt
         1. Basisprincipes: Kleurbalans omvat het aanpassen van de intensiteit van de primaire kleuren in een afbeelding. Dit kan helpen om de afbeelding warmer of kouder te maken, afhankelijk van de kleur die je wilt versterken of verzwakken.
         2. Schaduw, Middenpartijen en Hooglichten: Kleurbalans kan meestal worden toegepast op drie verschillende gebieden van de afbeelding:
         2.1 Schaduw: De donkere delen van de afbeelding.
         2.2 Middenpartijen: De gemiddelde tonen, die meestal het grootste deel van de afbeelding beslaan.
         2.3 Hooglichten: De heldere delen van de afbeelding.
         3. Kleurcorrectie: Door de kleurverhoudingen in elk van deze gebieden aan te passen, kan de fotograaf of beeldbewerker een meer natuurlijke uitstraling creëren of artistieke effecten bereiken. Bijvoorbeeld, het verminderen van het rood in de schaduw kan een te warme afbeelding koeler maken.
         Belang van Kleurbalans
         Een goede kleurbalans is cruciaal voor het verkrijgen van aantrekkelijke en visueel samenhangende beelden. Het stelt de maker in staat om de emotionele impact van de afbeelding te beïnvloeden en ervoor te zorgen dat kleuren op de juiste manier worden weergegeven. Onjuiste kleurbalans kan leiden tot afbeeldingen die er niet alleen onaantrekkelijk uitzien, maar ook verwarrend voor de kijker kunnen zijn.
               fontStyle: FC Filter
      fontSize: 200


    - text: |
         Upečatljivost (Emboss) je tehnika u digitalnoj obradi slika koja se koristi za stvaranje iluzije trodimenzionalnosti na dvodimenzionalnoj površini. Ova metoda se često koristi u grafičkom dizajnu i umetnosti kako bi se naglasili oblici i konture, dodajući teksturu i dubinu slici.
         Kako Funkcioniše
         1. Analiza Slike: Proces započinje analizom piksela u slici. Filtriranje se fokusira na ivice i obrise objekata unutar slike.
         2. Stvaranje Efekta: Kada se primeni efekat upečatljivosti, slika se prilagođava tako da svetliji delovi izgledaju kao da su uzdignuti (konveksni), dok tamniji delovi izgledaju kao da su udubljeni (konkavni). Ovo se postiže promenom svetlosti i kontrasta oko ivica.
         3. Podesivost: U programima za obradu slika, kao što su Adobe Photoshop ili GIMP, korisnici mogu podešavati intenzitet efekta upečatljivosti, što omogućava kontrolu nad tim koliko će snažan biti trodimenzionalni izgled.
         Korisnost Upečatljivosti
         a. Nadogradnja Dizajna: Efekat upečatljivosti se koristi da bi se dodala dimenzija i tekstura, čineći slike privlačnijim i zanimljivijim.
         b. Povećanje Fokusa: Pomaže u usmeravanju pažnje posmatrača na određene delove slike, čime se ističu važni elementi dizajna.
         c. Umjetnički Efekti: Koristi se u umetničkim projektima kako bi se stvorili vizuelni efekti koji dodaju dubinu i karakter.
         Primenjivost
         Upečatljivost se široko koristi u različitim oblastima, uključujući grafički dizajn, reklamu, fotografiju i digitalnu umetnost. Dok se može koristiti za postizanje sofisticiranih efekata, važno je koristiti ga pažljivo, jer prekomerna primena može učiniti slike neurednim ili previše veštačkim.
      fontStyle: FC Filter
      fontSize: 30

    - text: |
        The Levels Filter is a fundamental tool used in image editing software that allows users to adjust the brightness and contrast of an image by manipulating its tonal range. This filter works by adjusting the input and output levels of the shadows, midtones, and highlights within an image. Here’s a breakdown of how it works and its significance:
        How It Works
        1. Histogram Representation: The Levels Filter displays a histogram, which is a graphical representation of the tonal distribution of an image. The histogram shows the number of pixels for each tonal value from black (0) to white (255).
        2. Adjustment Sliders:
        2.1 Black Point (Shadows): This slider is used to set the darkest point in the image. Moving it to the right increases the darkness of the image by setting the black point to a higher value, which can eliminate unwanted dark areas.
        2.2 White Point (Highlights): This slider defines the brightest point. Moving it to the left increases brightness by adjusting the white point, which can help bring out details in bright areas.
        2.3 Midtones (Gamma): This slider adjusts the midrange tones of the image. Moving it left or right affects the overall brightness and contrast of the image, providing control over how much detail is visible in the middle range of tones.
        3. Output Levels: Users can also set output levels, which determines the tonal range that will be output from the image, effectively constraining the brightness values.
        The Levels Filter is an essential tool for photographers and graphic designers, as it offers a straightforward yet powerful way to control the tonal quality of an image. Mastering this filter can lead to more professional-looking results, enhancing both the clarity and impact of visual work.
      fontStyle: FC Filter
      fontSize: 70

    - text: |
         Der Kurvenfilter ist ein leistungsfähiges Werkzeug in der digitalen Bildbearbeitung, das es Benutzern ermöglicht, die Helligkeit und den Kontrast einer Grafik präzise zu steuern. Im Gegensatz zum Levels-Filter, der sich auf bestimmte Tonwerte konzentriert, bietet der Kurvenfilter eine umfassendere Kontrolle über die gesamte Tonwertskala eines Bildes. Hier ist eine detaillierte Erklärung, wie der Kurvenfilter funktioniert und welche Vorteile er bietet.
         Funktionsweise
         1. Kurven-Diagramm: Der Kurvenfilter wird durch ein grafisches Diagramm dargestellt, in dem die horizontale Achse die Eingabewerte (Tonwerte des Originals) und die vertikale Achse die Ausgabewerte (Tonwerte des bearbeiteten Bildes) darstellt.
         2. Anpassung der Kurve: Benutzer können eine Kurve erstellen, indem sie Punkte auf der Linie hinzufügen und diese ziehen.
         2.1 Helle Bereiche: Durch Anheben der Kurve in den oberen Bereichen wird das Bild heller, was die Helligkeit in den Lichtern erhöht.
         2.2 Dunkle Bereiche: Das Absenken der Kurve in den unteren Bereichen bewirkt, dass die dunklen Töne verstärkt werden, wodurch das Bild dunkler wird.
         2.3 Midtones: Durch die Anpassung der Mitte der Kurve können die mittleren Tonwerte bearbeitet werden, was die allgemeine Helligkeit und den Kontrast des Bildes beeinflusst.
         3. Spezifische Kanäle: Der Kurvenfilter kann für jeden Farbkanal (Rot, Grün, Blau) separat angewendet werden. Dies ermöglicht es Benutzern, die Farbbalance und -intensität zu verfeinern.
         Der Kurvenfilter ist ein unverzichtbares Werkzeug für Fotografen und Grafikdesigner, da er eine hohe Flexibilität und Präzision bei der Anpassung von Helligkeit und Kontrast bietet. Durch das Verständnis und die Anwendung des Kurvenfilters können Benutzer die visuelle Wirkung ihrer Bilder erheblich verbessern und professionellere Ergebnisse erzielen.
      fontStyle: FC Filter
      fontSize: 120

    - text: |
         Filtr nasycenia (Saturation Filter) jest narzędziem używanym w cyfrowej obróbce obrazów, które pozwala na regulację intensywności kolorów w fotografii. Zmiana nasycenia wpływa na to, jak żywe i intensywne są kolory w danym obrazie. Wysokie nasycenie sprawia, że kolory są bardziej wyraziste, podczas gdy niskie nasycenie prowadzi do bardziej stonowanych, przygaszonych barw.
         Jak Działa Filtr Nasycenia
         1. Nasycenie Kolorów: Filtr nasycenia działa na zasadzie zwiększenia lub zmniejszenia intensywności kolorów. Można to osiągnąć przez modyfikację wartości RGB (czerwony, zielony, niebieski) dla każdego piksela w obrazie.
         2. Interfejs Użytkownika: W programach do edycji zdjęć, takich jak Adobe Photoshop czy GIMP, filtr nasycenia zazwyczaj zawiera suwak, który pozwala użytkownikowi zwiększyć lub zmniejszyć nasycenie. Przesunięcie suwaka w prawo zwiększa nasycenie, podczas gdy przesunięcie w lewo je zmniejsza.
         3. Wybór Kolorów: W niektórych programach użytkownicy mogą także wybierać konkretne kolory do nasycenia, co pozwala na bardziej precyzyjne dostosowanie efektu. Na przykład, można zwiększyć nasycenie niebieskich lub zielonych tonów, jednocześnie zachowując inne kolory w ich naturalnym stanie.
         Podczas korzystania z filtra nasycenia, ważne jest, aby używać go z umiarem. Przesadne nasycenie może prowadzić do nienaturalnego wyglądu obrazu, co sprawia, że wygląda on sztucznie. Najlepiej jest eksperymentować z nasyceniem, aby znaleźć optymalny poziom, który podkreśla naturalne kolory bez ich przerysowania.
      fontStyle: FC Filter
      fontSize: 200

    - text: |
         Rásarblöndunarfílar (Channel Mixer Filter) er öflugt tæki í myndvinnsluforritum sem leyfir notendum að aðlaga litaraðir í myndum. Þessi sía gerir notendum kleift að breyta hlutföllum hverrar litaraðar (rauður, grænn og blár) til að búa til nýja liti, bæta litaflæðið í myndum eða breyta þeim á skapandi hátt.
          Hvernig Rásarblöndunarfílar Virkar
          1. Rásirnar: Í flestum myndvinnsluforritum eru þrjár helstu rásir: rauð, græn og blá. Hver rás hefur sína eigin tilteknu litablöndun sem notandinn getur breytt.
          2. Blöndunarhlutföll: Notandi getur stillt hlutföllin fyrir hvern litarað. Til dæmis, ef þú vilt auka hlutfall rauða litarins í mynd, geturðu aukið rauðblöndunina, en dregið úr grænni eða blárri. Þetta getur leitt til þess að litirnir í myndinni breytist og nýjar litakannanir skapast.
          3. Aðlögun: Með rásarblöndun getur notandi einnig fært litaraðir yfir í aðra liti. Til dæmis, ef þú blandar meiri grænni í rauðu, geturðu breytt rauðum tóninum í grænni lit.
          Rásarblöndunarfílar veita notendum mikla stjórn á litum í myndum. Þeir leyfa sköpun nýrra litakanna og útlit sem annars væri erfitt að ná. Einnig er mikilvægt að nota rásarblöndunarfílar með varúð, þar sem of mikil breyting getur leitt til náttúrulegs útlits. Með réttri notkun geta þeir fært listræna gæði í myndir og bæta heildarupplifun á myndunum.
      fontStyle: FC Filter
      fontSize: 30

    - text: |
         Il mappa di gradiente è uno strumento utilizzato nella grafica digitale e nell'editing fotografico che consente di applicare una transizione di colore uniforme a un'immagine. Questo strumento è particolarmente utile per creare effetti artistici, alterare la tonalità di un'immagine o migliorare il contrasto. Ecco una spiegazione dettagliata su come funziona e quali sono i suoi utilizzi.
         Funzionamento della Mappa di Gradiente
         1. Definizione del Gradiente: Una mappa di gradiente utilizza una scala di colori che va da un colore iniziale a un colore finale, passando attraverso una serie di sfumature intermedie. Questa scala viene definita dall'utente e può includere colori solidi, trasparenze o sfumature complesse.
         2. Applicazione ai Tono: Quando si applica una mappa di gradiente a un'immagine, i toni di grigio dell'immagine originale vengono mappati sui colori della scala di gradiente. I toni scuri dell'immagine corrisponderanno al colore iniziale, mentre i toni chiari corrisponderanno al colore finale.
         2. Regolazioni Personalizzate: Gli utenti possono modificare la mappa di gradiente per creare effetti personalizzati. Ad esempio, possono aggiungere punti di controllo per cambiare il colore a livelli specifici di luminosità o modificare la disposizione dei colori per ottenere diversi effetti visivi.
         Vantaggi della Mappa di Gradiente
         La mappa di gradiente offre agli artisti e ai fotografi un alto grado di controllo e flessibilità nella modifica dei colori. Consente di esplorare combinazioni di colori in modo intuitivo e visivo, creando risultati unici e personalizzati. Con l'uso della mappa di gradiente, è possibile trasformare immagini comuni in opere straordinarie, rendendola uno strumento essenziale nella toolbox di ogni artista digitale.
      fontStyle: FC Filter
      fontSize: 70

    - text: |
        Hue/Saturation filtrs ir rīks digitālajā attēlu rediģēšanā, kas ļauj lietotājiem pielāgot attēla krāsu toņus un intensitāti. Šis filtrs nodrošina lielu elastību, lai mainītu attēla krāsu shēmas, padarot to par būtisku instrumentu gan profesionāliem fotogrāfiem, gan amatieriem. Šeit ir detalizēts skaidrojums par to, kā darbojas Hue/Saturation filtrs un kādas ir tā izmantošanas iespējas.
        Kā darbojas Hue/Saturation filtrs
        1. Toņa (Hue) regulēšana: Filtrs ļauj lietotājiem mainīt attēla krāsu toņus, pārvietojot slīdni, kas atspoguļo toņa pakāpi. Šī kustība ietekmē visas krāsas vienlaicīgi, pārvietojot tās pa krāsu loku. Piemēram, ja jūs pārvietojat slīdni pa kreisi, sarkanais var kļūt zaļš, un zils var kļūt dzeltenīgs.
        2. Intensitātes (Saturation) regulēšana: Šis filtrs arī ļauj palielināt vai samazināt krāsu intensitāti. Palielinot piesātinājumu, krāsas kļūst izteiksmīgākas un dzīvākas, savukārt samazinot piesātinājumu, krāsas kļūst bālākas un pelēkākas.
        3. Gaismas intensitātes (Lightness) regulēšana: Dažos programmatūras risinājumos šis filtrs ietver arī iespēju mainīt gaismas intensitāti, ļaujot lietotājiem padarīt attēlu gaišāku vai tumšāku, nezaudējot krāsu toņu nianses.
        Priekšrocības
        Hue/Saturation filtrs ir nenovērtējams rīks ikvienam, kas strādā ar attēliem. Tas piedāvā intuitīvu pieeju krāsu regulēšanai un ļauj lietotājiem viegli radīt stilistiskas izmaiņas, kas var ievērojami uzlabot attēla kvalitāti un vizuālo ietekmi. Arī ar nelielām izmaiņām var panākt nozīmīgas izmaiņas, padarot to par svarīgu instrumentu digitālajā mākslā un fotogrāfijā.
      fontStyle: FC Filter
      fontSize: 120

about:
    - image: FCB_Articles_Cru.jpg
      caption: "Leavenworth: Sixteen and Twelve Lines Condensed Gothic"

      text: |
        ## FILTER korte uitleg

        Hier komt dan de uitleg over Filter waarom het werd gemaakt

research: |

    ## FILTER Research

    <div markdown="1">
      <div markdown="1">

    ![](FCB_Research_Cru_1.jpg)

      </div>
      <div markdown="1">

    Ja we hebben dat gemaakt, maar waarom? Wel pakt u nen stoel en ik leg het uit.

      </div>
    </div>

library_preview:
    - FCB_Library_Filter_1.svg
    - FCB_Library_Filter_2.svg
    - FCB_Library_Filter_3.svg
    - FCB_Library_Filter_4.svg
    - FCB_Library_Filter_5.svg
    - FCB_Library_Filter_6.svg
    - FCB_Library_Filter_7.svg
    - FCB_Library_Filter_8.svg
    - FCB_Library_Filter_9.svg

font_match:
    - FC Nib
    - FC Crimp
    - FC MAD Sans
    - FC Cru
---