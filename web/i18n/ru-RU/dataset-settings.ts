const translation = {
  title: 'Настройки базы знаний',
  desc: 'Здесь вы можете изменить свойства и методы работы базы знаний.',
  form: {
    name: 'Название базы знаний',
    namePlaceholder: 'Пожалуйста, введите название базы знаний',
    nameError: 'Название не может быть пустым',
    desc: 'Описание базы знаний',
    descInfo: 'Пожалуйста, напишите четкое текстовое описание, чтобы обрисовать содержание базы знаний. Это описание будет использоваться в качестве основы для сопоставления при выборе из нескольких баз знаний для вывода.',
    descPlaceholder: 'Опишите, что находится в этой базе знаний. Подробное описание позволяет ИИ своевременно получать доступ к содержимому базы знаний. Если оставить пустым, Mlchain будет использовать стратегию поиска по умолчанию.',
    descWrite: 'Узнайте, как написать хорошее описание базы знаний.',
    permissions: 'Разрешения',
    permissionsOnlyMe: 'Только я',
    permissionsAllMember: 'Все участники команды',
    permissionsInvitedMembers: 'Отдельные участники команды',
    me: '(Вы)',
    indexMethod: 'Метод индексации',
    indexMethodHighQuality: 'Высокое качество',
    indexMethodHighQualityTip: 'Вызов модели встраивания для обработки, чтобы обеспечить более высокую точность при запросах пользователей.',
    indexMethodEconomy: 'Экономичный',
    indexMethodEconomyTip: 'Используйте автономные векторные движки, индексы ключевых слов и т. д., чтобы снизить точность, не тратя токены',
    embeddingModel: 'Модель встраивания',
    embeddingModelTip: 'Изменить встроенную модель, пожалуйста, перейдите в ',
    embeddingModelTipLink: 'Настройки',
    retrievalSetting: {
      title: 'Настройки поиска',
      learnMore: 'Узнать больше',
      description: ' о методе поиска.',
      longDescription: ' о методе поиска, вы можете изменить это в любое время в настройках базы знаний.',
    },
    save: 'Сохранить',
    externalKnowledgeAPI: 'API внешних знаний',
    retrievalSettings: 'Настройки извлечения',
    externalKnowledgeID: 'Внешний идентификатор базы знаний',
  },
}

export default translation
