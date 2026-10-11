# shop
shop for me

## Documentarea procesului

[Jurnalul de lucru](docs/JURNAL.md) păstrează cererile, acțiunile, deciziile și verificările din sesiunile de lucru. Regulile de actualizare sunt în [AGENTS.md](AGENTS.md).

### Local server of shop

http://127.0.0.1:9292

## Magazin cu un singur produs

Designul scandinav, setările vizuale și imaginea de atmosferă sunt descrise în [documentația designului](docs/DESIGN-SCANDINAV.md). Culorile și activarea stilului se configurează din **Setări temă → Design scandinav**.

Pagina principală este pregătită pentru un singur produs: prezentarea și formularul de cumpărare, Despre MATyHOUSE și Contact. Produsul nu a fost ales încă; până la selecție se afișează un mesaj de pregătire, fără produse demonstrative sau prețuri fictive.

În editorul temei, deschide **Setări temă → Magazin cu un produs → Produsul magazinului**. După alegerea unui produs disponibil în canalul Online Store, secțiunea principală preia imaginile, titlul, prețul, variantele și descrierea lui. Formularul folosește componentele Dawn existente. Mesajul de pregătire se editează în secțiunea **Produs recomandat** de pe pagina principală.

Navigarea folosește ancorele `produs`, `despre` și `ContactForm`. Păstrează aceste ancore și secțiunile corespunzătoare când rearanjezi pagina. Textul brandului din subsol se editează în același grup de setări globale. Etichetele navigării au traduceri în română și engleză.

Secțiunile originale de pe pagina principală sunt păstrate, dar dezactivate în `templates/index.json`. Pentru revenirea la un catalog, dezactivează modul din setările temei și reactivează secțiunile originale în editor; dezactivarea modului nu schimbă automat aranjamentul paginii. Produsele și colecțiile din Shopify nu sunt șterse și adresele lor directe rămân accesibile.

### Previzualizare și verificare cu Shopify CLI

```powershell
$env:SHOPIFY_CLI_THEME_TOKEN = [Environment]::GetEnvironmentVariable('DEV_KEY', 'User')
if ([string]::IsNullOrWhiteSpace($env:SHOPIFY_CLI_THEME_TOKEN)) { throw 'Configurează DEV_KEY în variabilele de mediu ale utilizatorului Windows.' }
shopify theme info
shopify theme dev --store matyhouse.myshopify.com --host 127.0.0.1 --port 9292 --nodelete
shopify theme check
```

`DEV_KEY` este configurată în variabilele de mediu ale utilizatorului Windows. Comanda de mai sus o citește și o transmite Shopify CLI doar în mediul procesului curent; valoarea nu se scrie în fișierele proiectului. Autentificarea prin această cheie a fost verificată pe 11 octombrie 2026.

`theme dev` sincronizează fișierele cu tema de dezvoltare din Shopify și servește previzualizarea locală. Are nevoie de o sesiune Shopify cu acces la magazin. Păstrează terminalul deschis cât timp verifici modificările. Publicarea temei live și push-ul pe Git sunt pași separați.

Înainte de lansare, verifică pe mobil și desktop: navigarea, produsul cu și fără variante, stocul epuizat, prețul la schimbarea variantei, adăugarea în coș și contactul. Alegerea produsului, fotografiile, beneficiile și condițiile comerciale rămân de stabilit după cercetare.
