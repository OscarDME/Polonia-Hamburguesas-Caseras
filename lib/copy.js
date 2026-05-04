// lib/copy.js
// Jedyne źródło prawdy dla CAŁEGO widocznego tekstu na landing page'u.
// Każdy ciąg znaków, który użytkownik widzi na ekranie, MUSI znajdować się tutaj.

export const copy = {
  metadata: {
    title: "101 Domowych Burgerów | Cyfrowa Książka Kucharska",
    description:
      "Cyfrowy zbiór przepisów na domowe burgery. 101 prostych, soczystych i pełnych smaku przepisów, by robić obłędne burgery we własnej kuchni.",
  },

  promoBar: {
    text: "Oferta specjalna dostępna tylko przez ograniczony czas",
    icon: "flame",
  },

  hero: {
    eyebrow: "Cyfrowy e-book z przepisami na domowe burgery",
    headline: {
      pre: "101 przepisów na burgery, którymi",
      accent: "zachwycisz wszystkich domowników",
    },
    subheadline:
      "Odkryj banalnie proste, soczyste i niesamowicie smaczne przepisy na burgery bez stania godzinami w garach, bez przepłacania i bez zdawania się na słabej jakości fast foody.",
    paragraph:
      "Zmień każdy posiłek w wyjątkowy moment dzięki prostym i smacznym pomysłom, idealnym do dzielenia się z rodziną i znajomymi.",
    stats: [
      { value: "101", label: "pysznych pomysłów" },
      { value: "Domowy", label: "smak jak z restauracji" },
    ],
    bullets: [
      "101 różnorodnych przepisów",
      "Soczyste i proste do zrobienia burgery",
      "Tanie i łatwo dostępne składniki",
      "Warianty z wołowiną, kurczakiem i nie tylko",
      "Idealne pomysły na kolacje i domówki",
      "Domowy smak rodem z najlepszej burgerowni",
    ],
    cta: "CHCĘ MOJE 101 BURGERÓW",
    trust: [
      { icon: "lock", text: "Natychmiastowy dostęp" },
      { icon: "mail", text: "Wysyłka na e-mail" },
      { icon: "card", text: "Bezpieczna płatność" },
    ],
    image: "/hero-mockup.webp",
    imageAlt: "Zestaw 101 Domowych Burgerów - E-book",
    badge: "101 pysznych pomysłów",
  },

  story: {
    eyebrow: "Dobre jedzenie nie musi pochodzić z dowozu",
    headline: {
      pre: "Nie musisz wychodzić z domu, żeby zjeść",
      accent: "naprawdę epickiego burgera",
    },
    paragraphs: [
      {
        text: "Czasem problemem wcale nie jest to, że nie jesteśmy głodni... problem polega na tym, że brakuje nam pomysłu, jak zrobić coś soczystego, innego i z tym wyjątkowym smakiem, po którym od razu masz ochotę na dokładkę.",
        style: "default",
      },
      {
        text: "Zrobione w domu, o smaku nie do podrobienia",
        style: "bold-accent",
      },
    ],
    painsTitle: "Gdy brakuje ci pomysłów, zazwyczaj kończy się to tak:",
    pains: [
      "Robisz w kółko to samo jedzenie",
      "Smażysz suche i pozbawione smaku kotlety",
      "Nie wiesz, jak trafnie łączyć sosy, sery i dodatki",
      "Zamawiasz fast food, choć mógłbyś zjeść o wiele lepiej w domu",
      "Tracisz pomysły na piątkową kolację czy weekend z bliskimi",
    ],
    bridge:
      "Rozwiązaniem są przejrzyste przepisy, smaczne połączenia i bardzo proste kroki. Dzięki nim każdy burger, którego zrobisz, stanie się czymś absolutnie wyjątkowym.",
    image: "/chef-hamburguesas.webp",
    imageAlt: "Domowy burger, gotowy do podania",
  },

  steps: {
    eyebrow: "Tylko 3 kroki do prawdziwej uczty w domu",
    headline: {
      pre: "Nareszcie prosty sposób na",
      accent: "obłędne domowe burgery",
      post: "dla całej rodziny",
    },
    subheadline:
      "Ciesz się soczystymi, łatwymi i pełnymi smaku przepisami bez wychodzenia z domu, bez zbędnego kombinowania i bez jedzenia w kółko tego samego.",
    paragraph:
      "Wystarczy, że wybierzesz przepis, wykonasz kilka banalnych kroków i możesz cieszyć się jedzeniem, o które z pewnością zapytają cię goście.",
    items: [
      {
        number: "01",
        title: "Wybierz burgera na każdą okazję",
        body: "Od szybkiej kolacji w środku tygodnia po leniwy weekend z rodziną – zawsze będziesz mieć pod ręką gotowy pomysł, by zrobić coś pysznego, bez dłuższego zastanawiania się.",
      },
      {
        number: "02",
        title: "Przygotuj domowe przepisy pełne smaku",
        body: "Trzymaj się prostych połączeń mięsa, kurczaka, serów, sosów i dodatków, by stworzyć soczyste burgery z tym wyjątkowym, autorskim sznytem.",
      },
      {
        number: "03",
        title: "Ciesz się jedzeniem, które zbliża ludzi",
        body: "Zaserwuj w domu burgery, którym nikt się nie oprze i zamień zwykły posiłek w świetny czas spędzony z rodziną czy paczką znajomych.",
      },
    ],
    cta: "CHCĘ MOJE 101 BURGERÓW",
    trust: [
      { icon: "lock", text: "Natychmiastowy dostęp" },
      { icon: "mail", text: "Wysyłka na e-mail" },
      { icon: "card", text: "Bezpieczna płatność" },
    ],
  },

  benefits: {
    eyebrow: "Więcej smaku, mniej stania w kuchni",
    headline: {
      pre: "Zobacz, co się zmienia, gdy masz pod ręką",
      accent: "101 pomysłów",
      post: "na robienie burgerów w domu",
    },
    subheadline:
      "Przestań improwizować z tymi samymi obiadami i zmień każdy posiłek w coś domowego, pysznego i łatwego do zrobienia.",
    items: [
      {
        title: "Zawsze masz gotowy pomysł",
        body: "Zawsze znajdziesz inny przepis, by na szybko przygotować coś smacznego bez głowienia się.",
        icon: "sparkles",
      },
      {
        title: "Bardziej wyjątkowe posiłki",
        body: "Zamień zwykłą kolację w super smaczne doświadczenie, którym podzielisz się z bliskimi.",
        icon: "heart",
      },
      {
        title: "Smak jak z restauracji u ciebie w domu",
        body: "Rób soczyste, domowe burgery z połączeniami smaków rodem z najlepszych burgerowni.",
        icon: "home",
      },
      {
        title: "Mniej kuchennego stresu",
        body: "Banalne przepisy, tanie składniki i bardzo proste kroki, które powtórzy absolutnie każdy.",
        icon: "zap",
      },
      {
        title: "Opcje na każdą możliwą okazję",
        body: "Od szybkiej kolacji, przez leniwy weekend w domu, aż po niezapowiedzianą wizytę znajomych.",
        icon: "users",
      },
      {
        title: "Koniec z jedzeniem na mieście",
        body: "Gdy złapie cię ochota na „śmieciowe jedzenie”, zrobisz je samemu, bez czekania na kuriera z dostawą.",
        icon: "utensils",
      },
    ],
    closing: {
      pre: "Dzięki temu e-bookowi, robienie burgerów w domu przestaje być nudne i staje się w 100% sprawdzonym sposobem, by",
      accent: "rozpieścić wszystkich czymś naprawdę pysznym.",
    },
  },

  features: {
    eyebrow: "Wszystko, czego potrzebujesz, by urozmaicić swoje burgery",
    headline: {
      pre: "101 domowych burgerów, by zamienić zwykły posiłek w coś",
      accent: "nie do odparcia",
    },
    subheadline:
      "Praktyczny e-book z przepisami do robienia soczystych, urozmaiconych i mega smacznych burgerów bez stresu. Pełno opcji na różne gusta, zachcianki i okazje.",
    items: [
      {
        emoji: "🍔",
        eyebrow: "W Twoim guście",
        title: "Burgery na każdą zachciankę",
        body: "Odkryj klasyczne, bardzo serowe, chrupiące, ostre, obfite lub nieco lżejsze przepisy i wybieraj to, na co akurat dzisiaj masz ochotę.",
      },
      {
        emoji: "👨‍🍳",
        eyebrow: "Krok po kroku",
        title: "Przygotowanie krok po kroku",
        body: "Jasne i czytelne instrukcje, jak złożyć każdego burgera, bez zgadywania proporcji, trafnych połączeń czy kolejności na patelni.",
      },
      {
        emoji: "🥬",
        eyebrow: "Składniki",
        title: "Różnorodne składniki i kombinacje",
        body: "Wykorzystaj wołowinę, kurczaka, sery, bekon, warzywa, grzyby, awokado, ogórki konserwowe i ulubione dodatki, by odkryć zupełnie nowe smaki.",
      },
      {
        emoji: "🔥",
        eyebrow: "Więcej smaku",
        title: "Sosy i specjalne akcenty",
        body: "Nadaj charakteru swoim burgerom dzięki domowym dressingom, sosom kremowym, BBQ, musztardzie, przyprawom i detalom, które robią największą różnicę.",
      },
      {
        emoji: "🏡",
        eyebrow: "Do podziału",
        title: "Pomysły na domówki i weekendy",
        body: "Przygotuj burgery idealne do dzielenia się z rodziną, ugoszczenia paczki znajomych czy po prostu na lepszy, leniwy obiad u siebie w domu.",
      },
      {
        emoji: "🚚",
        eyebrow: "Bez kurierów",
        title: "Świetny smak bez zamawiania w aplikacji",
        body: "Zaspokój głód u siebie w kuchni dzięki przepisom, które są bogate, domowe i dają o wiele więcej satysfakcji niż jedzenie z fast foodu.",
      },
    ],
    cta: "CHCĘ MOJE 101 BURGERÓW",
    trust: [
      { icon: "lock", text: "Natychmiastowy dostęp" },
      { icon: "mail", text: "Wysyłka na e-mail" },
      { icon: "card", text: "Bezpieczna płatność" },
    ],
  },

  carouselSection: {
    eyebrow: "Proste przepisy na pyszne chwile w domu",
    headline: {
      pre: "Smakowite domowe burgery w",
      accent: "łatwych i praktycznych odsłonach",
    },
    images: [
      { src: "/carousel/slide-1.webp", alt: "Soczysty domowy burger podany na desce" },
      { src: "/carousel/slide-2.webp", alt: "Burger z chrupiącym bekonem i roztopionym serem" },
      { src: "/carousel/slide-3.webp", alt: "Wybór różnych rodzajów domowych burgerów" },
      { src: "/carousel/slide-4.webp", alt: "Proces smażenia i składania burgera" },
    ],
    chips: [
      "BŁYSKAWICZNE W PRZYGOTOWANIU",
      "TANIE SKŁADNIKI",
      "PRAWDZIWY DOMOWY SMAK",
      "IDEALNE DLA GOŚCI",
    ],
    forYouTitle: "„101 Domowych Burgerów” jest dla ciebie, jeśli:",
    forYou: [
      {
        title: "Chcesz ugotować coś smacznego bez komplikacji:",
        body: "łatwe w odbiorze przepisy, stworzone po to, by zrobić genialne burgery bez spędzania połowy dnia w kuchni.",
      },
      {
        title: "Szukasz pomysłów na szybki posiłek w domu:",
        body: "praktyczne opcje na dni, kiedy masz wielką ochotę zjeść coś dobrego, ale nie chcesz za dużo myśleć nad wymyślnym obiadem.",
      },
      {
        title: "Lubisz rozpieszczać rodzinę lub znajomych:",
        body: "soczyste, domowe i niesamowicie smaczne burgery na wspólne kolacje, weekendowe posiedzenia czy imprezy.",
      },
      {
        title: "Pragniesz urozmaicenia bez trudnych receptur:",
        body: "kombinacje z wołowiną, kurczakiem, serami, sosami, warzywami i dodatkami, żebyście nie jedli wciąż tego samego.",
      },
      {
        title: "Wolisz domowy smak od jedzenia na dowóz:",
        body: "rób konkretne, praktyczne i sycące burgery u siebie, gdy tylko najdzie cię ochota na przysłowiowego „maka”.",
      },
    ],
    cta: "CHCĘ MOJE 101 BURGERÓW",
    trust: [
      { icon: "lock", text: "Natychmiastowy dostęp" },
      { icon: "mail", text: "Wysyłka na e-mail" },
      { icon: "card", text: "Bezpieczna płatność" },
    ],
    a11yPrev: "Poprzedni przepis",
    a11yNext: "Następny przepis",
    a11yDot: "Idź do przepisu",
  },

  bonuses: {
    eyebrow: "Darmowe bonusy dostępne przez ograniczony czas",
    headline: {
      pre: "Jeśli kupisz",
      accent: "101 Domowych Burgerów",
      post: ", otrzymasz również te prezenty",
    },
    intro:
      "Uzupełnij swoje domowe burgery genialnymi i praktycznymi poradnikami, jak zrobić własne sosy i dressingi, które o niebo podkręcą każdy z przepisów.",
    items: [
      {
        badge: "🎁 BONUS 1",
        title: "Poradnik Domowych Sosów",
        body: "Proste i sprawdzone przepisy na kremowe, pikantne, sycące sosy oraz własne BBQ, dzięki którym twoje burgery będą smakować jak z bajki.",
        priceLabel: "Wartość specjalna:",
        priceValue: "Dostajesz za darmo",
        image: "/bonuses/bono-salsas.webp",
        imageAlt: "Poradnik Domowych Sosów",
      },
      {
        badge: "🎁 BONUS 2",
        title: "Poradnik Domowych Dressingów",
        body: "Naucz się robić niezwykle praktyczne i pyszne dressingi idealne do burgerów, frytek, sałatek i innych domowych posiłków.",
        priceLabel: "Wartość specjalna:",
        priceValue: "Dostajesz za darmo",
        image: "/bonuses/bono-aderezos.webp",
        imageAlt: "Poradnik Domowych Dressingów",
      },
    ],
    outro: {
      pre: "Dzięki tym ekskluzywnym bonusom nadasz swoim burgerom ten dodatkowy pazur, który sprawi, że zwykły przepis stanie się",
      accent: "naprawdę mistrzowski.",
    },
    cta: "CHCĘ MOJE 101 BURGERÓW",
    trust: [
      { icon: "lock", text: "Natychmiastowy dostęp" },
      { icon: "mail", text: "Wysyłka na e-mail" },
      { icon: "card", text: "Bezpieczna płatność" },
    ],
  },

  recap: {
    eyebrow: "Wszystko masz w jednym miejscu",
    headline: {
      pre: "Zobacz, co dokładnie otrzymasz, by robić",
      accent: "domowe burgery nie do odparcia",
    },
    subheadline:
      "Główny e-book z przepisami oraz dodatkowe, darmowe poradniki, aby dopełnić twoje kulinarne dzieła obłędnymi sosami, dressingami i świetnymi połączeniami.",
    paragraph: "Dziś naprawdę nie musisz długo się zastanawiać, aby wystartować",
    body: "Zyskasz bezterminowy dostęp do sprawdzonej kolekcji przepisów i pomysłów na soczyste, łatwe do zrobienia burgery. A do tego zgarniesz dodatkowe materiały, które wzbiją twoje dania na wyższy poziom.",
    highlight:
      "✨ Pamiętaj: pakiet zawiera główną książkę kucharską i specjalne bonusy, aby jeszcze bardziej udoskonalić twoje domowe dzieła.",
    cta: "CHCĘ MOJE 101 BURGERÓW",
    trust: [
      { icon: "lock", text: "Natychmiastowy dostęp" },
      { icon: "mail", text: "Wysyłka na e-mail" },
      { icon: "card", text: "Bezpieczna płatność" },
    ],
  },

  testimonials: {
    eyebrow: "Opinie osób, które uwielbiają gotować we własnej kuchni",
    headline: {
      pre: "Zobacz, co mówią ludzie, którzy już teraz zajadają się",
      accent: "pysznymi domowymi burgerami",
    },
    subheadline:
      "Prawdziwe i szczere historie tych, którzy chcieli więcej kulinarnych inspiracji, mocniejszego smaku i wyjątkowych posiłków, bez zostawiania majątku u dostawców jedzenia.",
    items: [
      {
        name: "Maria L.",
        role: "Gotuje dla całej rodziny",
        avatar: "/testimonials/avatar-1.webp",
        quote:
          "Bardzo mi się podoba, bo w końcu nie robię w kółko tego samego burgera. Teraz mam jasne pomysły, jak robić je na przeróżne sposoby, by smakowały u nas jeszcze lepiej.",
      },
      {
        name: "Andrzej P.",
        role: "Klucz do udanych weekendów",
        avatar: "/testimonials/avatar-2.webp",
        quote:
          "Zaproponowane tu połączenia sosów i dodatków to totalne mistrzostwo świata. Moje burgery smakują jak z dobrej, drogiej knajpy, a przecież sam je usmażyłem we własnej kuchni.",
      },
      {
        name: "Karolina R.",
        role: "Więcej smaku, zero zamawiania",
        avatar: "/testimonials/avatar-3.webp",
        quote:
          "Kupiłam e-booka, bo chciałam ukrócić nasze ciągłe zamawianie fast foodów. Teraz, gdy mamy smaka na typowe „śmieciowe jedzenie”, robimy rewelacyjne burgery w domu.",
      },
      {
        name: "Michał W.",
        role: "Proste i życiowe przepisy",
        avatar: "/testimonials/avatar-4.webp",
        quote:
          "Zapisane tu przepisy są super proste w odbiorze. Nie musisz być MasterChefem, po prostu palcem wybierasz konkretny pomysł i w mgnieniu oka masz przed sobą coś pysznego do zjedzenia.",
      },
      {
        name: "Zofia G.",
        role: "Idealne rozwiązanie na domówki",
        avatar: "/testimonials/avatar-5.webp",
        quote:
          "Super sprawa, że każdy znajdzie tu wariant dla siebie. Zrobiliśmy ze znajomymi wieczór z burgerami u nas w mieszkaniu i każdy z gości domagał się dokładki.",
      },
    ],
    cta: "CHCĘ MOJE 101 BURGERÓW",
    trust: [
      { icon: "lock", text: "Natychmiastowy dostęp" },
      { icon: "mail", text: "Wysyłka na e-mail" },
      { icon: "card", text: "Bezpieczna płatność" },
    ],
    starsAlt: "5 na 5 gwiazdek",
  },

  finalCta: {
    eyebrow: "🔥 Oferta specjalna ważna tylko przez ograniczony czas",
    headline: {
      pre: "Zgarnij dostęp do",
      accent: "101 Domowych Burgerów",
      post: "wraz ze wszystkimi bonusami",
    },
    subheadline:
      "Rób w domu burgery soczyste, łatwe i niesamowicie smaczne, używając praktycznych przepisów idealnych na obiady, weekendy, domówki oraz na nagły głód.",
    badge: "🎁 Otrzymujesz e-booka z przepisami + prezenty niespodzianki",
    productName: {
      pre: "101 Domowych",
      accent: "Burgerów",
    },
    productTagline:
      "Łatwe, obłędnie smaczne i życiowe przepisy na burgery, które smakują jak w prestiżowej restauracji.",
    bullets: [
      "Główny e-book ze 101 pomysłami na domowe burgery",
      "Przepisy na burgery klasyczne, mocno serowe, chrupiące, ostre i na bogato",
      "Warianty m.in. z wołowiną, kurczakiem, serem, bekonem, warzywami i pysznymi dodatkami",
      "Instrukcje gotowania krok po kroku, bez żadnych kuchennych udziwnień",
      "Bonus 1: Poradnik Domowych Sosów",
      "Bonus 2: Poradnik Domowych Dressingów",
      "Pomysły na szybkie kolacje, luźne weekendy i epickie spotkania ze znajomymi",
      "Natychmiastowy i dożywotni dostęp do e-booka",
    ],
    closing: {
      pre: "To idealny wybór, jeśli chcesz rewelacyjnie zjeść bez korzystania z aplikacji typu Glovo czy Uber Eats:",
      body: "będziesz mieć pod ręką gotowe rozwiązania na to, jak szybko usmażyć świetne burgery w domu i cieszyć się nimi wspólnie z bliskimi.",
    },
    priceOldLabel: "Kiedyś:",
    priceOld: "169 zł",
    priceNote: "Ta promocja obowiązuje tylko dzisiaj",
    priceNow: "30",
    priceCurrency: "zł",
    priceFooter: "Otrzymujesz natychmiastowy dostęp cyfrowy do produktu głównego oraz wszystkich darmowych bonusów.",
    urgency: "Ostatnie sztuki w promocyjnej, tak niskiej cenie",
    discountPct: "82%",
    discountLabel: "ZNIŻKI",
    button: "TAK, CHCĘ ZGARNĄĆ 101 BURGERÓW",
    trust: [
      { icon: "lock", text: "Bezpieczna płatność" },
      { icon: "mail", text: "Dostęp na e-mail" },
      { icon: "zap", text: "Szybka dostawa" },
    ],
    imageAlt: "Zestaw 101 Domowych Burgerów z darmowymi bonusami",
  },

  faq: {
    eyebrow: "Najczęściej zadawane pytania",
    headline: {
      pre: "Odpowiadamy na twoje ewentualne pytania, zanim zaczniesz robić",
      accent: "prawdziwe domowe burgery",
    },
    subheadline:
      "Zebraliśmy tutaj najczęstsze wątpliwości dotyczące samego e-booka, darmowych bonusów oraz spraw związanych z płatnością i dostępem.",
    items: [
      {
        q: "W jaki sposób otrzymam przepisy?",
        a: "Po opłaceniu zamówienia, automatycznie i natychmiastowo otrzymasz cyfrowy dostęp do całości na adres e-mail, który podasz w formularzu zakupu.",
      },
      {
        q: "Czy mogę czytać to na telefonie?",
        a: "Pewnie! Możesz otworzyć e-booka na telefonie, tablecie, laptopie czy komputerze stacjonarnym. Wystarczy tylko połączenie z internetem.",
      },
      {
        q: "Czy muszę mieć jakikolwiek talent kulinarny?",
        a: "Absolutnie nie. Nasze przepisy są pomyślane w ten sposób, by były łatwe, intuicyjne i czytelne nawet dla osób z dwiema lewymi rękami w kuchni.",
      },
      {
        q: "Co dokładnie otrzymuję w tej cenie?",
        a: "W tej cenie kupujesz nasz główny e-book „101 Domowych Burgerów” oraz darmowe pakiety bonusowe w postaci poradników, jak zrobić niesamowite domowe sosy i dressingi.",
      },
      {
        q: "Czy przepisy są trudne lub skomplikowane?",
        a: "Nie. Cała koncepcja opiera się na tym, byś mógł zrobić epickiego burgera bez czasochłonnych procesów i drogich, wymyślnych składników.",
      },
      {
        q: "Kiedy mogę wziąć się za gotowanie?",
        a: "Możesz zacząć od razu po zalogowaniu. Wystarczy, że wybierzesz jeden z przepisów i po prostu wykonasz nasze kroki.",
      },
    ],
    cta: "CHCĘ MOJE 101 BURGERÓW",
    trust: [
      { icon: "lock", text: "Bezpieczna płatność" },
      { icon: "mail", text: "Natychmiastowy dostęp" },
      { icon: "burger", text: "Bonusy w zestawie" },
    ],
  },

  closing: {
    eyebrow: "Zacznij kulinarną przygodę we własnej kuchni",
    headline: {
      pre: "Przygotuj swoje pierwsze, niesamowite",
      accent: "domowe burgery",
      post: "jeszcze przed końcem tego tygodnia",
    },
    paragraph:
      "Zgarnij e-booka, wybierz pierwszego burgera do zrobienia i spraw, by każdy kolejny posiłek był doskonałą okazją do spędzenia super czasu z bliskimi.",
    cta: "TAK, CHCĘ 101 BURGERÓW",
    whatsapp: "Napisz do nas na WhatsAppie",
    imageAlt: "Domowy burger, pachnący i gotowy do zjedzenia",
  },

  footer: {
    brand: "Crearis",
    tagline: "Cyfrowy zbiór najlepszych przepisów na domowe burgery",
    rightsPrefix: "©",
    rightsSuffix: "Crearis. Wszelkie prawa zastrzeżone.",
    disclaimer:
      "Ta strona nie jest w żaden sposób powiązana, stowarzyszona, zatwierdzona ani sponsorowana przez serwis Facebook, ani nie była przeglądana, zatwierdzana czy wspierana przez Facebook w jakimkolwiek zakresie. Facebook jest zarejestrowanym znakiem towarowym firmy Meta Platforms, Inc.",
  },
};