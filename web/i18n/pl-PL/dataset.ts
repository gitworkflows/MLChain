const translation = {
  knowledge: 'Wiedza',
  documentCount: ' dokumenty',
  wordCount: ' k słów',
  appCount: ' powiązane aplikacje',
  createDataset: 'Utwórz Wiedzę',
  createDatasetIntro:
    'Zaimportuj własne dane tekstowe lub zapisuj dane w czasie rzeczywistym za pomocą Webhooka w celu wzmocnienia kontekstu LLM.',
  deleteDatasetConfirmTitle: 'Czy na pewno usunąć tę Wiedzę?',
  deleteDatasetConfirmContent:
    'Usunięcie Wiedzy jest nieodwracalne. Użytkownicy nie będą już mieli dostępu do Twojej Wiedzy, a wszystkie konfiguracje i logi zostaną trwale usunięte.',
  datasetUsedByApp: 'Ta wiedza jest wykorzystywana przez niektóre aplikacje. Aplikacje nie będą już mogły korzystać z tej Wiedzy, a wszystkie konfiguracje podpowiedzi i logi zostaną trwale usunięte.',
  datasetDeleted: 'Wiedza usunięta',
  datasetDeleteFailed: 'Nie udało się usunąć Wiedzy',
  didYouKnow: 'Czy wiedziałeś?',
  intro1: 'Wiedzę można zintegrować z aplikacją Mlchain ',
  intro2: 'jako kontekst',
  intro3: ',',
  intro4: 'lub ',
  intro5: 'może być utworzona',
  intro6: ' jako samodzielny wtyczka indeksująca ChatGPT do publikacji',
  unavailable: 'Niedostępny',
  unavailableTip:
    'Model osadzający jest niedostępny, domyślny model osadzający musi być skonfigurowany',
  datasets: 'WIEDZA',
  datasetsApi: 'DOSTĘP DO API',
  retrieval: {
    semantic_search: {
      title: 'Wyszukiwanie wektorowe',
      description:
        'Generowanie osadzeń zapytań i wyszukiwanie fragmentów tekstu najbardziej podobnych do ich wektorowej reprezentacji.',
    },
    full_text_search: {
      title: 'Wyszukiwanie pełnotekstowe',
      description:
        'Indeksowanie wszystkich terminów w dokumencie, umożliwiając użytkownikom wyszukiwanie dowolnego terminu i odzyskiwanie odpowiedniego fragmentu tekstu zawierającego te terminy.',
    },
    hybrid_search: {
      title: 'Wyszukiwanie hybrydowe',
      description:
        'Wykonaj jednocześnie pełnotekstowe wyszukiwanie i wyszukiwanie wektorowe, ponownie porządkuj, aby wybrać najlepsze dopasowanie dla zapytania użytkownika. Konieczna jest konfiguracja API Rerank model.',
      recommend: 'Polecany',
    },
    invertedIndex: {
      title: 'Indeks odwrócony',
      description:
        'Indeks odwrócony to struktura używana do efektywnego odzyskiwania informacji. Zorganizowane według terminów, każdy termin wskazuje na dokumenty lub strony internetowe zawierające go.',
    },
    change: 'Zmień',
    changeRetrievalMethod: 'Zmień metodę odzyskiwania',
  },
  docsFailedNotice: 'nie udało się zindeksować dokumentów',
  retry: 'Ponów',
  indexingTechnique: {
    high_quality: 'WJ',
    economy: 'EKO',
  },
  indexingMethod: {
    semantic_search: 'WEKTOR',
    full_text_search: 'PEŁNY TEKST',
    hybrid_search: 'HYBRYDOWY',
    invertedIndex: 'ODWRÓCONY',
  },
  mixtureHighQualityAndEconomicTip: 'Model ponownego rankingu jest wymagany dla mieszanki wysokiej jakości i ekonomicznych baz wiedzy.',
  inconsistentEmbeddingModelTip: 'Model ponownego rankingu jest wymagany, jeśli modele osadzania wybranych baz wiedzy są niespójne.',
  retrievalSettings: 'Ustawienia wyszukiwania',
  rerankSettings: 'Ustawienia ponownego rankingu',
  weightedScore: {
    title: 'Ważona ocena',
    description: 'Poprzez dostosowanie przypisanych wag, ta strategia ponownego rankingu określa, czy priorytetowo traktować dopasowanie semantyczne czy słów kluczowych.',
    semanticFirst: 'Najpierw semantyczne',
    keywordFirst: 'Najpierw słowa kluczowe',
    customized: 'Dostosowane',
    semantic: 'Semantyczne',
    keyword: 'Słowo kluczowe',
  },
  nTo1RetrievalLegacy: 'Wyszukiwanie N-do-1 zostanie oficjalnie wycofane od września. Zaleca się korzystanie z najnowszego wyszukiwania wielościeżkowego, aby uzyskać lepsze wyniki.',
  nTo1RetrievalLegacyLink: 'Dowiedz się więcej',
  nTo1RetrievalLegacyLinkText: 'Wyszukiwanie N-do-1 zostanie oficjalnie wycofane we wrześniu.',
  defaultRetrievalTip: 'Pobieranie wielu ścieżek jest używane domyślnie. Wiedza jest pobierana z wielu baz wiedzy, a następnie ponownie klasyfikowana.',
  editExternalAPIConfirmWarningContent: {
    end: 'wiedzy zewnętrznej, a ta modyfikacja zostanie zastosowana do nich wszystkich. Czy na pewno chcesz zapisać tę zmianę?',
    front: 'Ten interfejs API wiedzy zewnętrznej jest połączony z',
  },
  editExternalAPIFormWarning: {
    front: 'Ten zewnętrzny interfejs API jest powiązany z',
    end: 'Wiedza zewnętrzna',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      end: '?',
      front: 'Usunąć',
    },
    content: {
      front: 'Ten interfejs API wiedzy zewnętrznej jest połączony z',
      end: 'wiedza zewnętrzna. Usunięcie tego interfejsu API spowoduje unieważnienie ich wszystkich. Czy na pewno chcesz usunąć ten interfejs API?',
    },
    noConnectionContent: 'Czy na pewno chcesz usunąć ten interfejs API?',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'Wybieranie interfejsu API wiedzy zewnętrznej',
  },
  connectDatasetIntro: {
    content: {
      front: 'Aby nawiązać połączenie z zewnętrzną bazą wiedzy, należy najpierw utworzyć zewnętrzny interfejs API. Przeczytaj uważnie i zapoznaj się z',
      link: 'Dowiedz się, jak utworzyć zewnętrzny interfejs API',
      end: '. Następnie znajdź odpowiedni identyfikator wiedzy i wypełnij go w formularzu po lewej stronie. Jeśli wszystkie informacje są poprawne, po kliknięciu przycisku połączenia automatycznie przejdzie do testu wyszukiwania w bazie wiedzy.',
    },
    learnMore: 'Dowiedz się więcej',
    title: 'Jak połączyć się z zewnętrzną bazą wiedzy',
  },
  connectHelper: {
    helper1: 'Połącz się z zewnętrznymi bazami wiedzy za pośrednictwem interfejsu API i identyfikatora bazy wiedzy. Obecnie',
    helper3: '. Zdecydowanie zalecamy, aby',
    helper5: 'ostrożnie przed użyciem tej funkcji.',
    helper4: 'Zapoznaj się z dokumentacją pomocy',
    helper2: 'Obsługiwana jest tylko funkcja pobierania',
  },
  externalKnowledgeForm: {
    connect: 'Połączyć',
    cancel: 'Anuluj',
  },
  externalAPIForm: {
    encrypted: {
      end: 'Technologia.',
      front: 'Twój token API zostanie zaszyfrowany i będzie przechowywany za pomocą',
    },
    edit: 'Redagować',
    save: 'Zapisać',
    name: 'Nazwa',
    apiKey: 'Klucz API',
    cancel: 'Anuluj',
    endpoint: 'Punkt końcowy interfejsu API',
  },
  externalAPIPanelDocumentation: 'Dowiedz się, jak utworzyć interfejs API wiedzy zewnętrznej',
  noExternalKnowledge: 'Nie ma jeszcze interfejsu API wiedzy zewnętrznej, kliknij tutaj, aby utworzyć',
  createExternalAPI: 'Dodawanie interfejsu API wiedzy zewnętrznej',
  connectDataset: 'Nawiązywanie połączenia z zewnętrzną bazą wiedzy',
  editExternalAPITooltipTitle: 'POWIĄZANA WIEDZA',
  externalKnowledgeId: 'Zewnętrzny identyfikator wiedzy',
  externalAPIPanelTitle: 'Interfejs API wiedzy zewnętrznej',
  externalKnowledgeName: 'Nazwa wiedzy zewnętrznej',
  externalKnowledgeIdPlaceholder: 'Podaj identyfikator wiedzy',
  createNewExternalAPI: 'Tworzenie nowego interfejsu API wiedzy zewnętrznej',
  externalKnowledgeDescription: 'Opis wiedzy',
  externalKnowledgeDescriptionPlaceholder: 'Opisz, co znajduje się w tej bazie wiedzy (opcjonalnie)',
  allExternalTip: 'W przypadku korzystania tylko z wiedzy zewnętrznej użytkownik może zdecydować, czy chce włączyć model Rerank. Jeśli ta opcja nie jest włączona, pobrane fragmenty będą sortowane na podstawie wyników. Gdy strategie wyszukiwania z różnych baz wiedzy są niespójne, będzie to niedokładne.',
  editExternalAPIFormTitle: 'Edytowanie interfejsu API wiedzy zewnętrznej',
  mixtureInternalAndExternalTip: 'Model Rerank jest wymagany do połączenia wiedzy wewnętrznej i zewnętrznej.',
  externalAPI: 'Zewnętrzny interfejs API',
  externalTag: 'Zewnętrzny',
  learnHowToWriteGoodKnowledgeDescription: 'Dowiedz się, jak napisać dobry opis wiedzy',
  externalKnowledgeNamePlaceholder: 'Podaj nazwę bazy wiedzy',
  externalAPIPanelDescription: 'Interfejs API wiedzy zewnętrznej służy do łączenia się z bazą wiedzy poza Mlchain i pobierania wiedzy z tej bazy wiedzy.',
}

export default translation
