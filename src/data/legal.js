// Legal documents linked from the footer, in both site languages. The Czech
// text is the organiser's original and the binding one; the English is a
// translation of it, and says so in a note above the document.
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

    cz: {
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

    en: {
      title: 'Payment terms',
      lead: 'Payment and delivery terms',
      blocks: [
        {
          type: 'p',
          text:
            'For participation in the Festival and in individual workshops, dance classes and accompanying services you pay a participation fee. The amount of the fee is stated with each service offered, including VAT, in our e-shop and in the order proposal. The Total Price is stated including VAT and all charges laid down by law. Once the Contract is concluded and before the Services are used, we will ask you to pay the Total Price. You can pay the Total Price in the following ways:',
        },
        {
          type: 'ul',
          items: [
            'By bank transfer. We will send you the payment details as part of the order confirmation. When paying by bank transfer, the Total Price is due within 3 days.',
            'By online card payment. In this case the payment is processed through the ComGate payment gateway and is governed by that gateway’s terms and conditions, available at: https://www.comgate.cz/smluvni-dokumenty. When paying online by card, the Total Price is due within 3 days.',
          ],
        },
        { type: 'h2', text: 'Delivery and payment' },
        {
          type: 'p',
          text:
            'Online payments are handled for us by the Comgate payment gateway. The service provider, Comgate a.s., is a licensed Payment Institution operating under the supervision of the Czech National Bank. Payments made through the payment gateway are fully secured and all information is encrypted. Further information and contacts at https://www.comgate.cz/cz/platebni-brana',
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
  },

  {
    slug: 'obchodni-podminky',

    cz: {
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

    en: {
      title: 'Terms & conditions',
      lead: 'Terms and conditions for ticket sales and participation in the Shufflebattle – Battle of Europe event',
      blocks: [
        { type: 'h2', text: 'Contacts' },
        {
          type: 'address',
          lines: [
            'E-mail for battle enquiries: shuffleprague@gmail.com',
            'E-mail for general enquiries: shufflekalafa@gmail.com',
            'Phone: +420 775 611 192',
          ],
        },

        { type: 'h2', text: '1. Introductory provisions' },
        {
          type: 'p',
          text:
            '1.1 These terms and conditions govern the rights and obligations between the organiser, Kalafa’s Shuffle School z.s., Company ID: 08162433, with its registered office at Těšnov 1163/5, Praha 110 00, entered in the register of associations (hereinafter the “organiser”), and the participants of the event (hereinafter the “participant”).',
        },
        {
          type: 'p',
          text:
            '1.2 The event means the Shufflebattle – Battle of Europe dance competition, the workshops, the accompanying events and the related programme organised by the organiser.',
        },
        {
          type: 'p',
          text:
            '1.3 A participant means a person who has purchased a ticket for the event or for a workshop, or who has registered as a competitor.',
        },

        { type: 'h2', text: '2. Subject of performance' },
        { type: 'p', text: '2.1 The organiser offers the following types of tickets for sale:' },
        {
          type: 'ul',
          items: [
            'Spectator ticket – price CZK 350 (or the equivalent in EUR).',
            'Competing dancer ticket – price CZK 500 (or the equivalent in EUR).',
            'Workshop ticket – price CZK 750 (or the equivalent in EUR).',
          ],
        },
        { type: 'p', text: '2.2 When more workshops are purchased, the price is reduced as follows:' },
        {
          type: 'ul',
          items: ['2 workshops – CZK 700 / 1 workshop', '3 workshops – CZK 650 / 1 workshop', '4 workshops – CZK 600 / 1 workshop'],
        },
        { type: 'p', text: '2.3 All prices are stated separately in Czech crowns (CZK) and in euros (EUR).' },
        {
          type: 'p',
          text:
            '2.4 At the venue of the event, only tickets (spectator, competitor) can be purchased, and only in cash, if the capacity of the event allows it.',
        },

        { type: 'h2', text: '3. Conclusion of the contract' },
        { type: 'p', text: `3.1 The participant places an order through the website ${WEBSITE}.` },
        {
          type: 'p',
          text:
            '3.2 The contract between the organiser and the participant is concluded at the moment the payment is credited to the organiser’s account through the payment gateway or by bank transfer.',
        },
        {
          type: 'p',
          text:
            '3.3 A ticket reservation arises only once the full price has been paid. Unpaid orders are not valid and establish no right to take part.',
        },

        { type: 'h2', text: '4. Prices and payment terms' },
        { type: 'p', text: `4.1 Ticket prices are set by the organiser and published on the website ${WEBSITE}.` },
        { type: 'p', text: '4.2 Payment is possible online by payment card or by bank transfer through the payment gateway.' },
        { type: 'p', text: '4.3 Tickets bought at the venue can be paid for in cash only, if the capacity of the event allows it.' },
        { type: 'p', text: '4.4 A ticket reservation arises only at the moment the payment is successfully completed.' },
        { type: 'p', text: '4.5 The organiser reserves the right to change prices; a change of prices has no effect on tickets already paid for.' },

        { type: 'h2', text: '5. Cancellation and withdrawal from the contract' },
        {
          type: 'p',
          text:
            '5.1 The participant is entitled to cancel their participation (withdraw from the contract) no later than 5 days before the event begins. In that case the participant is entitled to a refund of the full amount paid.',
        },
        {
          type: 'p',
          text:
            '5.2 If participation is cancelled later than 5 days before the event takes place, the participant has no right to a refund of the admission fee or to any other compensation.',
        },
        {
          type: 'p',
          text:
            '5.3 The refund will be made by the organiser to the participant’s account within 30 days of the day the notice of withdrawal is delivered.',
        },
        { type: 'p', text: '5.4 If the organiser cancels the event, it undertakes to refund the participant 100 % of the admission fee paid.' },
        {
          type: 'p',
          text:
            '5.5 Neither the date nor the venue of the main event can be changed; should such a change nevertheless occur, the participant has the right to a refund of 100 % of the admission fee paid.',
        },
        {
          type: 'p',
          text:
            '5.6 The organiser is entitled to change the venue of a workshop. If the participant does not agree with the change, they have the right to a refund of 100 % of the amount paid for the workshop.',
        },

        { type: 'h2', text: '6. Conditions of participation and safety' },
        {
          type: 'p',
          text:
            '6.1 The capacity of the OX club, where the event takes place, is set at 800 people. The organiser is entitled to end ticket sales or to refuse entry if the capacity would be exceeded.',
        },
        { type: 'p', text: '6.2 The maximum number of competing dancers is 200. Once this capacity is filled, no further registrations can be accepted.' },
        {
          type: 'p',
          text:
            '6.3 Any person who has purchased a ticket may take part in the event. Dancers under 18 years of age may take part only in the company of a legal guardian, who assumes responsibility for them.',
        },
        { type: 'p', text: '6.4 Competition rules:' },
        {
          type: 'ul',
          items: [
            'Advancing to the final “Top 32” is decided by a jury of five judges.',
            'Battles are held in a 1v1 format, with the jury deciding in each round who advances.',
            'In the team choreography category, a team of 3–7 dancers may enter. The team must deliver its music to the DJ before the performance. The jury then determines the best choreography of all the teams entered.',
          ],
        },
        {
          type: 'p',
          text:
            '6.5 Participants are obliged to follow the instructions of the organiser and the staff, to respect the safety rules, to protect their own health and the health of others, and not to damage the equipment of the premises.',
        },

        { type: 'h2', text: '7. Rights and obligations of participants' },
        { type: 'p', text: '7.1 The participant is liable for any damage they cause to the property of the organiser, the OX club or other participants.' },
        {
          type: 'p',
          text:
            '7.2 On the premises of the event, alcohol may be served to and consumed by persons over 18 years of age only. The organiser is entitled to require proof of age.',
        },
        {
          type: 'p',
          text:
            '7.3 The use, possession or distribution of narcotic and psychotropic substances (drugs) is strictly prohibited. A participant who breaches this rule may be excluded immediately with no right to a refund of the admission fee.',
        },
        {
          type: 'p',
          text:
            '7.4 Every participant bears full responsibility for their state of health and for any injuries arising from taking part in the event. The organiser is not liable for such injuries, except where they are demonstrably caused by the fault of the organiser.',
        },
        { type: 'p', text: '7.5 A first-aid kit is available on site for basic treatment.' },

        { type: 'h2', text: '8. Photographs and video recordings' },
        { type: 'p', text: '8.1 During the event the organiser takes photographs and video recordings in order to document and promote the event.' },
        {
          type: 'p',
          text:
            '8.2 By purchasing a ticket the participant acknowledges and agrees that they may be captured in photographs and video recordings, which the organiser may subsequently use for promotional and marketing purposes (e.g. website, social networks, printed materials).',
        },
        {
          type: 'p',
          text:
            '8.3 The participant has no right to any financial or other compensation in connection with the taking or the use of the photographs and video recordings.',
        },

        { type: 'h2', text: '9. Personal data protection (GDPR)' },
        {
          type: 'p',
          text:
            '9.1 The controller of personal data is Kalafa’s Shuffle School z.s., Company ID: 08162433, with its registered office at Těšnov 1163/5, Praha 110 00.',
        },
        { type: 'p', text: '9.2 On registration the organiser collects from competitors only the nickname under which the dancer takes part in the competition.' },
        {
          type: 'p',
          text:
            '9.3 This detail is used solely for the organisational purposes of the event – in particular to draw up the competition brackets, to present the competitors and for communication during the event.',
        },
        {
          type: 'p',
          text:
            '9.4 The detail is not used for marketing purposes, is not provided to third parties and is kept only for the time necessary to evaluate the competition and to produce the official results.',
        },
        { type: 'p', text: '9.5 The participant has the right to ask the organiser for access to the stored detail, for its correction, or for its erasure after the event ends.' },

        { type: 'h2', text: '10. Organisation of the event and entry control' },
        { type: 'p', text: '10.1 The organiser does not provide any sale of merchandise or other supplementary products.' },
        {
          type: 'p',
          text: '10.2 For competing dancers the organiser provides free refreshments in the form of non-alcoholic drinks and packaged snacks.',
        },
        { type: 'p', text: '10.3 Spectators can buy refreshments and drinks directly at the bar of the OX club.' },
        {
          type: 'p',
          text:
            '10.4 The event always takes place, even if individual competitors are absent, as the organiser has a confirmed number of dancers sufficient to deliver the full programme.',
        },
        {
          type: 'p',
          text:
            '10.5 Tickets are checked on entry to the club by hostesses scanning the QR code. If a participant has not bought a ticket in advance, it is possible to buy one on the spot (in cash), but only if the capacity of the club has not been exceeded.',
        },

        { type: 'h2', text: '11. Complaints' },
        {
          type: 'p',
          text:
            '11.1 The participant is entitled to make a complaint about the organisation of the event by e-mail to the organiser: shufflekalafa@gmail.com.',
        },
        { type: 'p', text: '11.2 The organiser undertakes to deal with the complaint and reply to the participant within 30 days of receiving it.' },
        {
          type: 'p',
          text:
            '11.3 A complaint can be made only about organisational and technical shortcomings of the event. A complaint cannot be made where the participant is dissatisfied with the competition results, with the jury’s decision or with the individual performance of participants.',
        },

        { type: 'h2', text: '12. Final provisions' },
        { type: 'p', text: '12.1 These terms and conditions form an integral part of the contract concluded between the organiser and the participant.' },
        {
          type: 'p',
          text: `12.2 The organiser is entitled to change the terms and conditions unilaterally. The new wording of the terms and conditions takes effect on the day it is published on the website ${WEBSITE}. Changes have no effect on tickets already purchased.`,
        },
        { type: 'p', text: '12.3 All legal relations between the organiser and participants are governed by the law of the Czech Republic.' },
        {
          type: 'p',
          text: '12.4 Any disputes between the organiser and a participant will be settled before the courts of the Czech Republic with subject-matter and territorial jurisdiction.',
        },
        { type: 'p', text: '12.5 These terms and conditions take effect on 1 September 2025.' },
      ],
    },
  },
]

export const legalBySlug = (slug) => legalDocs.find((doc) => doc.slug === slug)
