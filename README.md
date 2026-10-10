# shop
shop for me

## Documentarea procesului

[Jurnalul de lucru](docs/JURNAL.md) păstrează cererile, acțiunile, deciziile și verificările din sesiunile de lucru. Regulile de actualizare sunt în [AGENTS.md](AGENTS.md).

### Local server of shop

http://127.0.0.1:9292

## Magazin cu un singur produs

Pagina principală este pregătită pentru un singur produs: prezentarea și formularul de cumpărare, Despre MATyHOUSE și Contact. Produsul nu a fost ales încă; până la selecție se afișează un mesaj de pregătire, fără produse demonstrative sau prețuri fictive.

În editorul temei, deschide **Setări temă → Magazin cu un produs → Produsul magazinului**. După alegerea unui produs disponibil în canalul Online Store, secțiunea principală preia imaginile, titlul, prețul, variantele și descrierea lui. Formularul folosește componentele Dawn existente. Mesajul de pregătire se editează în secțiunea **Produs recomandat** de pe pagina principală.

Navigarea folosește ancorele `produs`, `despre` și `ContactForm`. Păstrează aceste ancore și secțiunile corespunzătoare când rearanjezi pagina. Textul brandului din subsol se editează în același grup de setări globale. Etichetele navigării au traduceri în română și engleză.

Secțiunile originale de pe pagina principală sunt păstrate, dar dezactivate în `templates/index.json`. Pentru revenirea la un catalog, dezactivează modul din setările temei și reactivează secțiunile originale în editor; dezactivarea modului nu schimbă automat aranjamentul paginii. Produsele și colecțiile din Shopify nu sunt șterse și adresele lor directe rămân accesibile.

### Previzualizare și verificare cu Shopify CLI

```powershell
shopify theme info
shopify theme dev --store matyhouse.myshopify.com --host 127.0.0.1 --port 9292 --nodelete
shopify theme check
```

`theme dev` sincronizează fișierele cu tema de dezvoltare din Shopify și servește previzualizarea locală. Are nevoie de o sesiune Shopify cu acces la magazin. Păstrează terminalul deschis cât timp verifici modificările. Publicarea temei live și push-ul pe Git sunt pași separați.

Înainte de lansare, verifică pe mobil și desktop: navigarea, produsul cu și fără variante, stocul epuizat, prețul la schimbarea variantei, adăugarea în coș și contactul. Alegerea produsului, fotografiile, beneficiile și condițiile comerciale rămân de stabilit după cercetare.
