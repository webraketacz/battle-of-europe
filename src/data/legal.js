// Legal documents linked from the footer. Czech only — these are the binding
// Czech-law texts supplied by the organiser, so they are not translated for the
// EN side of the site; Legal.jsx shows an English note above them instead.
//
// Block types the renderer understands:
//   h2      — section heading
//   p       — paragraph (URLs and e-mails inside are auto-linked)
//   ul      — bullet list
//   address — contact block, one line per entry

export const WEBSITE = 'shufflebattle.com'

export const legalDocs = [
  {
    slug: 'platebni-podminky',
    title: 'Platební podmínky',
    lead: 'Platební a dodací podmínky',
    blocks: [
      {
        type: 'p',
        text:
          'Za účast na Festivalu a jednotlivých workshopech, tanečních lekcích a doprovodných službách platíte účastnický poplatek. Výše poplatku je uvedena u každé nabízené služby včetně DPH v našem e-shopu a v návrhu objednávky. Celková cena je uvedena včetně DPH a všech poplatků stanovených zákonem. Po uzavření Smlouvy a před využitím Služeb po vás budeme požadovat úhradu Celkové ceny. Celkovou cenu můžete uhradit následujícími způsoby:',
      },
      {
        type: 'ul',
        items: [
          'Bankovním převodem. Platební údaje vám zašleme jako součást potvrzení objednávky. V případě platby bankovním převodem je Celková cena splatná do 3 dnů.',
          'Online platební kartou. V tomto případě probíhá platba prostřednictvím platební brány ComGate a řídí se obchodními podmínkami této platební brány, které jsou dostupné na: https://www.comgate.cz/smluvni-dokumenty. V případě online platby kartou je Celková cena splatná do 3 dnů.',
        ],
      },
      { type: 'h2', text: 'Doprava a platba' },
      {
        type: 'p',
        text:
          'Online platby pro nás zajišťuje platební brána Comgate. Poskytovatel služby, společnost Comgate a.s. je licencovaná Platební instituce působící pod dohledem České národní banky. Platby probíhající skrze platební bránu jsou plně zabezpečeny a veškeré informace jsou šifrovány. Další informace a kontakty na https://www.comgate.cz/cz/platebni-brana',
      },
      {
        type: 'address',
        lines: [
          'Comgate, a.s.',
          'Gočárova třída 1754 / 48b, Hradec Králové',
          'E-mail: platby-podpora@comgate.cz',
          'Tel: +420 228 224 267',
        ],
      },
    ],
  },

  {
    slug: 'obchodni-podminky',
    title: 'Obchodní podmínky',
    lead: 'Obchodní podmínky pro prodej vstupenek a účast na akci Shufflebattle – Battle of Europe',
    blocks: [
      { type: 'h2', text: 'Kontakty' },
      {
        type: 'address',
        lines: [
          'E-mail pro dotazy k battlu: shuffleprague@gmail.com',
          'E-mail pro obecné dotazy: shufflekalafa@gmail.com',
          'Telefon: +420 775 611 192',
        ],
      },

      { type: 'h2', text: '1. Úvodní ustanovení' },
      {
        type: 'p',
        text:
          '1.1 Tyto obchodní podmínky upravují práva a povinnosti mezi pořadatelem, kterým je Kalafa’s Shuffle School z.s., IČ: 08162433, se sídlem Těšnov 1163/5, Praha 110 00, zapsaný ve spolkovém rejstříku (dále jen „pořadatel“), a účastníky akce (dále jen „účastník“).',
      },
      {
        type: 'p',
        text:
          '1.2 Akcí se rozumí taneční soutěž Shufflebattle – Battle of Europe, workshopy, doprovodné akce a související program, pořádaný pořadatelem.',
      },
      {
        type: 'p',
        text:
          '1.3 Účastníkem se rozumí osoba, která si zakoupila vstupenku na akci, workshop nebo se registrovala jako soutěžící.',
      },

      { type: 'h2', text: '2. Předmět plnění' },
      { type: 'p', text: '2.1 Pořadatel nabízí k prodeji tyto druhy vstupenek:' },
      {
        type: 'ul',
        items: [
          'Vstupenka pro diváka – cena 350 Kč (resp. ekvivalent v EUR).',
          'Vstupenka pro soutěžícího tanečníka – cena 500 Kč (resp. ekvivalent v EUR).',
          'Vstupenka na workshop – cena 750 Kč (resp. ekvivalent v EUR).',
        ],
      },
      { type: 'p', text: '2.2 Při zakoupení více workshopů se cena snižuje následovně:' },
      {
        type: 'ul',
        items: ['2 workshopy – 700 Kč / 1 workshop', '3 workshopy – 650 Kč / 1 workshop', '4 workshopy – 600 Kč / 1 workshop'],
      },
      { type: 'p', text: '2.3 Všechny ceny jsou uvedeny zvlášť v českých korunách (CZK) a eurech (EUR).' },
      {
        type: 'p',
        text:
          '2.4 Na místě konání akce je možné zakoupit pouze vstupenky (divák, soutěžící), a to pouze hotově, pokud kapacita akce dovolí.',
      },

      { type: 'h2', text: '3. Uzavření smlouvy' },
      { type: 'p', text: `3.1 Účastník provádí objednávku prostřednictvím webových stránek ${WEBSITE}.` },
      {
        type: 'p',
        text:
          '3.2 Smlouva mezi pořadatelem a účastníkem je uzavřena okamžikem připsání platby na účet pořadatele prostřednictvím platební brány nebo bankovního převodu.',
      },
      {
        type: 'p',
        text:
          '3.3 Rezervace vstupenky vzniká až zaplacením celé ceny. Nezaplacené objednávky nejsou platné a nezakládají nárok na účast.',
      },

      { type: 'h2', text: '4. Ceny a platební podmínky' },
      { type: 'p', text: `4.1 Ceny vstupenek jsou stanoveny pořadatelem a zveřejněny na webu ${WEBSITE}.` },
      { type: 'p', text: '4.2 Platba je možná online platební kartou nebo bankovním převodem prostřednictvím platební brány.' },
      { type: 'p', text: '4.3 Vstupenky na místě lze uhradit pouze hotově, pokud kapacita akce dovolí.' },
      { type: 'p', text: '4.4 Rezervace vstupenky vzniká až okamžikem úspěšného provedení platby.' },
      { type: 'p', text: '4.5 Pořadatel si vyhrazuje právo měnit ceny; změna cen nemá vliv na již uhrazené vstupenky.' },

      { type: 'h2', text: '5. Storno a odstoupení od smlouvy' },
      {
        type: 'p',
        text:
          '5.1 Účastník je oprávněn zrušit svou účast (odstoupit od smlouvy) nejpozději do 5 dnů před začátkem akce. V takovém případě má účastník nárok na vrácení celé zaplacené částky.',
      },
      {
        type: 'p',
        text:
          '5.2 V případě zrušení účasti později než 5 dnů před konáním akce nevzniká účastníkovi nárok na vrácení vstupného ani jiné náhrady.',
      },
      {
        type: 'p',
        text:
          '5.3 Vrácení částky bude provedeno pořadatelem na účet účastníka do 30 dnů ode dne doručení oznámení o odstoupení.',
      },
      { type: 'p', text: '5.4 Pokud pořadatel akci zruší, zavazuje se účastníkovi vrátit 100 % zaplaceného vstupného.' },
      {
        type: 'p',
        text:
          '5.5 Datum ani místo hlavní akce není možné měnit; v případě, že by k takové změně došlo, má účastník právo na vrácení 100 % zaplaceného vstupného.',
      },
      {
        type: 'p',
        text:
          '5.6 Pořadatel je oprávněn změnit místo konání workshopu. Pokud účastník se změnou nesouhlasí, má právo na vrácení 100 % zaplacené částky za workshop.',
      },

      { type: 'h2', text: '6. Podmínky účasti a bezpečnost' },
      {
        type: 'p',
        text:
          '6.1 Kapacita klubu OX, kde se akce koná, je stanovena na 800 osob. Pořadatel je oprávněn ukončit prodej vstupenek nebo odepřít vstup, pokud by byla kapacita překročena.',
      },
      { type: 'p', text: '6.2 Maximální počet soutěžících tanečníků je 200. Po naplnění této kapacity již nelze přijmout další registrace.' },
      {
        type: 'p',
        text:
          '6.3 Účastnit se akce může každá osoba, která si zakoupila vstupenku. Tanečníci mladší 18 let se mohou zúčastnit pouze v doprovodu zákonného zástupce, který za ně přebírá odpovědnost.',
      },
      { type: 'p', text: '6.4 Soutěžní pravidla:' },
      {
        type: 'ul',
        items: [
          'O postupu do finálové „Top 32“ rozhoduje porota složená z pěti porotců.',
          'Battly probíhají formou 1v1, přičemž v každém kole porota rozhoduje, kdo postupuje dál.',
          'V kategorii týmového chorea se může přihlásit tým složený z 3–7 tanečníků. Tým je povinen dodat hudbu DJ před vystoupením. Porota následně určí nejlepší choreografii ze všech přihlášených týmů.',
        ],
      },
      {
        type: 'p',
        text:
          '6.5 Účastníci jsou povinni dodržovat pokyny pořadatele a personálu, respektovat pravidla bezpečnosti, dbát na ochranu zdraví svého i ostatních a nepoškozovat zařízení prostor.',
      },

      { type: 'h2', text: '7. Práva a povinnosti účastníků' },
      { type: 'p', text: '7.1 Účastník odpovídá za veškeré škody, které způsobí na majetku pořadatele, klubu OX nebo jiných účastníků.' },
      {
        type: 'p',
        text:
          '7.2 V prostorách akce je povoleno podávání a konzumace alkoholu pouze osobám starším 18 let. Pořadatel je oprávněn vyžadovat prokázání věku.',
      },
      {
        type: 'p',
        text:
          '7.3 Užívání, držení nebo distribuce omamných a psychotropních látek (drog) je přísně zakázáno. Účastník porušující toto pravidlo může být okamžitě vyloučen bez nároku na vrácení vstupného.',
      },
      {
        type: 'p',
        text:
          '7.4 Každý účastník nese plnou odpovědnost za svůj zdravotní stav a případná zranění vzniklá při účasti na akci. Pořadatel nezodpovídá za tato zranění, s výjimkou případů, kdy by byla prokazatelně způsobena zaviněním pořadatele.',
      },
      { type: 'p', text: '7.5 Na místě je k dispozici lékárnička pro poskytnutí základního ošetření.' },

      { type: 'h2', text: '8. Fotografie a videozáznamy' },
      { type: 'p', text: '8.1 Pořadatel v průběhu akce pořizuje fotografie a videozáznamy za účelem dokumentace a propagace akce.' },
      {
        type: 'p',
        text:
          '8.2 Zakoupením vstupenky účastník bere na vědomí a souhlasí s tím, že může být zachycen na fotografiích a videozáznamech, které mohou být následně použity pořadatelem k propagačním a marketingovým účelům (např. webové stránky, sociální sítě, tiskové materiály).',
      },
      {
        type: 'p',
        text:
          '8.3 Účastník nemá nárok na žádnou finanční či jinou náhradu v souvislosti s pořízením nebo využitím fotografií a videozáznamů.',
      },

      { type: 'h2', text: '9. Ochrana osobních údajů (GDPR)' },
      {
        type: 'p',
        text:
          '9.1 Správcem osobních údajů je Kalafa’s Shuffle School z.s., IČ: 08162433, se sídlem Těšnov 1163/5, Praha 110 00.',
      },
      { type: 'p', text: '9.2 Pořadatel při registraci sbírá od soutěžících pouze přezdívku (nickname), pod kterou se tanečník účastní soutěže.' },
      {
        type: 'p',
        text:
          '9.3 Tento údaj je využíván výhradně pro organizační účely akce – zejména pro vytvoření soutěžních bracketů, prezentaci soutěžících a komunikaci během akce.',
      },
      {
        type: 'p',
        text:
          '9.4 Údaj není využíván pro marketingové účely, není poskytován třetím stranám a je uchováván pouze po nezbytnou dobu k vyhodnocení soutěže a vytvoření oficiálních výsledků.',
      },
      { type: 'p', text: '9.5 Účastník má právo požádat pořadatele o přístup k uchovávanému údaji, o jeho opravu nebo o výmaz po skončení akce.' },

      { type: 'h2', text: '10. Organizace akce a kontrola vstupu' },
      { type: 'p', text: '10.1 Pořadatel nezajišťuje prodej žádného merchandisu ani jiných doplňkových produktů.' },
      {
        type: 'p',
        text: '10.2 Pro soutěžící tanečníky pořadatel poskytuje zdarma občerstvení ve formě nealkoholických nápojů a balených snacků.',
      },
      { type: 'p', text: '10.3 Diváci si mohou občerstvení a nápoje zakoupit přímo na baru klubu OX.' },
      {
        type: 'p',
        text:
          '10.4 Akce probíhá vždy, a to i v případě absence jednotlivých soutěžících, jelikož pořadatel má potvrzeno dostatečné množství tanečníků k zajištění plného programu.',
      },
      {
        type: 'p',
        text:
          '10.5 Vstupenky jsou kontrolovány při vstupu do klubu hosteskami prostřednictvím načtení QR kódu. Pokud účastník vstupenku nezakoupil předem, je možné ji zakoupit na místě (hotově), a to pouze v případě, že nebyla překročena kapacita klubu.',
      },

      { type: 'h2', text: '11. Reklamace a stížnosti' },
      {
        type: 'p',
        text:
          '11.1 Účastník je oprávněn uplatnit reklamaci nebo podat stížnost na organizaci akce prostřednictvím e-mailu pořadatele: shufflekalafa@gmail.com.',
      },
      { type: 'p', text: '11.2 Pořadatel se zavazuje reklamaci či stížnost vyřídit a odpovědět účastníkovi do 30 dnů od jejího obdržení.' },
      {
        type: 'p',
        text:
          '11.3 Reklamovat lze pouze organizační a technické nedostatky akce. Reklamaci nelze uplatnit v případech, kdy je účastník nespokojen se soutěžními výsledky, rozhodnutím poroty nebo s individuálním výkonem účastníků.',
      },

      { type: 'h2', text: '12. Závěrečná ustanovení' },
      { type: 'p', text: '12.1 Tyto obchodní podmínky jsou nedílnou součástí smlouvy uzavírané mezi pořadatelem a účastníkem.' },
      {
        type: 'p',
        text: `12.2 Pořadatel je oprávněn obchodní podmínky jednostranně změnit. Nové znění obchodních podmínek nabývá účinnosti dnem jejich zveřejnění na webových stránkách ${WEBSITE}. Změny nemají vliv na již zakoupené vstupenky.`,
      },
      { type: 'p', text: '12.3 Veškeré právní vztahy mezi pořadatelem a účastníky se řídí právním řádem České republiky.' },
      { type: 'p', text: '12.4 Případné spory mezi pořadatelem a účastníkem budou řešeny před věcně a místně příslušnými soudy České republiky.' },
      { type: 'p', text: '12.5 Tyto obchodní podmínky nabývají účinnosti dnem 1. 9. 2025.' },
    ],
  },
]

export const legalBySlug = (slug) => legalDocs.find((doc) => doc.slug === slug)
