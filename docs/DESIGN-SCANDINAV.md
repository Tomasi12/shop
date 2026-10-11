# Design scandinav — MATyHOUSE

Implementat la 11 octombrie 2026, la cererea utilizatorului. Direcția aleasă: Scandinavian.

## Direcție vizuală

Fundal de ovăz, suprafețe salvie, text verde închis și subsol forestier. Titluri serif cu accente italice, navigare discretă, imagine de atmosferă amplă și spațiere aerisită. Pagina rămâne pregătită pentru un singur produs, încă neales.

Pagina principală are o prezentare asimetrică, trei principii de brand, povestea în aranjament editorial și contact în două coloane. Pe mobil, coloanele se așază una sub alta. Nu sunt introduse beneficii comerciale, recenzii, prețuri sau caracteristici ale unui produs încă necunoscut.

## Setări în editor

- **Setări temă → Design scandinav:** activare/dezactivare, fundal, suprafețe, text, accent și text pe fundal închis.
- **Compactează spațiul din jurul siglei:** reduce spațiul vertical din imaginea actuală. Dezactivează pentru o viitoare siglă înaltă.
- **Pagina principală → Produs recomandat → Prezentare scandinavă:** titlu, text introductiv scurt, buton, imagine, legendă și principii.
- **Despre MATyHOUSE / Contact:** aranjamentul editorial poate fi activat sau dezactivat din setările secțiunii.

Imaginea originală a logo-ului și setările Dawn nu au fost înlocuite. CSS-ul folosește `mix-blend-mode: multiply` pentru integrarea fundalului alb al siglei în antet. Acesta este un tratament de afișare, nu o modificare a fișierului original. Stilul scandinav se aplică doar în modul cu un singur produs.

## Imagine de atmosferă

Fișier folosit de temă: [assets/scandinavian-home.jpg](../assets/scandinavian-home.jpg), 1536 × 1024 px, 313.389 bytes. Este o imagine generată pentru atmosfera brandului, nu fotografia produsului oferit la vânzare. La alegerea produsului, prezentarea inițială este înlocuită de datele și imaginile reale ale acestuia.

Metodă: instrumentul integrat `image_gen`, prin skill-ul `imagegen`. Rezultatul PNG a fost convertit în JPEG la calitatea 86, fără schimbarea compoziției, pentru încărcare rapidă. Originalul generat a fost păstrat în directorul implicit al instrumentului.

Promptul final folosit:

> Create a photorealistic editorial interior photograph for the hero of MATyHOUSE, a Romanian home-oriented brand website with Scandinavian art direction. Landscape 3:2 composition. A beautifully restrained Nordic living space: pale warm limewashed walls, natural light oak floor, one sculptural oak lounge chair with oatmeal linen cushion near center-right, a low simple solid oak side table with one matte off-white ceramic vase and a sparse leafy branch, edge of a soft ivory sofa at left, large window outside frame casting soft late-afternoon sunlight and long natural shadows. Sage green subtle textile accent. Warm oat, light oak, muted sage, charcoal details, tactile material grain. Intimate calm architectural magazine photography, slightly imperfect real textures, 35mm lens, carefully composed generous breathing room, authentic subdued colors rather than glossy luxury. Fill frame with the interior, no borders, no graphic layout, no lettering, no text, no logo, no watermark, no people. This is a general brand mood photograph, not a packshot of a product for sale.

## Verificări

Verificări în Chrome cu profil separat: viewport-uri de 1440, 390 și 320 px, încărcarea imaginii, ancorele, absența depășirilor orizontale și închiderea meniului mobil după navigare. Capturile desktop și mobile au fost inspectate vizual, inclusiv integrarea logo-ului și formularul de contact.

Au fost validate JSON-urile, unicitatea ID-urilor și păstrarea setărilor existente. Previzualizarea Shopify a încărcat noul design fără mesaje Liquid de eroare. Alegerea produsului și testarea cumpărării cu date reale rămân de făcut. Theme Check final nu a fost reluat în această etapă; limitările verificării precedente rămân documentate în jurnal.
