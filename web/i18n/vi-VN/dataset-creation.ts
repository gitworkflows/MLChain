const translation = {
  steps: {
    header: {
      creation: 'Tạo Kiến thức',
      update: 'Thêm dữ liệu',
    },
    one: 'Chọn nguồn dữ liệu',
    two: 'Tiền xử lý và làm sạch văn bản',
    three: 'Thực hiện và hoàn thành',
  },
  error: {
    unavailable: 'Kiến thức này không khả dụng',
  },
  stepOne: {
    filePreview: 'Xem trước tệp',
    pagePreview: 'Xem trước trang',
    dataSourceType: {
      file: 'Nhập từ tệp văn bản',
      notion: 'Đồng bộ từ Notion',
      web: 'Đồng bộ từ trang web',
    },
    uploader: {
      title: 'Tải lên tệp văn bản',
      button: 'Kéo và thả tệp, hoặc',
      browse: 'Chọn tệp',
      tip: 'Hỗ trợ {{supportTypes}}. Tối đa {{size}}MB mỗi tệp.',
      validation: {
        typeError: 'Loại tệp không được hỗ trợ',
        size: 'Tệp quá lớn. Tối đa là {{size}}MB',
        count: 'Không hỗ trợ tải lên nhiều tệp',
        filesNumber: 'Bạn đã đạt đến giới hạn tải lên lô của {{filesNumber}} tệp.',
      },
      cancel: 'Hủy',
      change: 'Thay đổi',
      failed: 'Tải lên thất bại',
    },
    notionSyncTitle: 'Notion chưa được kết nối',
    notionSyncTip: 'Để đồng bộ với Notion, trước tiên cần thiết lập kết nối với Notion.',
    connect: 'Đi đến kết nối',
    button: 'tiếp theo',
    emptyDatasetCreation: 'Tôi muốn tạo Kiến thức trống',
    modal: {
      title: 'Tạo Kiến thức trống',
      tip: 'Một Kiến thức trống sẽ không chứa tài liệu nào, và bạn có thể tải lên tài liệu bất kỳ lúc nào.',
      input: 'Tên Kiến thức',
      placeholder: 'Vui lòng nhập',
      nameNotEmpty: 'Tên không thể để trống',
      nameLengthInvalid: 'Tên phải từ 1 đến 40 ký tự',
      cancelButton: 'Hủy',
      confirmButton: 'Tạo',
      failed: 'Tạo thất bại',
    },
    website: {
      fireCrawlNotConfigured: 'Firecrawl không được cấu hình',
      limit: 'Giới hạn',
      run: 'Chạy',
      firecrawlDoc: 'Tài liệu Firecrawl',
      fireCrawlNotConfiguredDescription: 'Định cấu hình Firecrawl bằng khóa API để sử dụng.',
      configure: 'Cấu hình',
      scrapTimeInfo: 'Tổng cộng {{tổng}} trang được thu thập trong vòng {{thời gian}}',
      options: 'Tùy chọn',
      unknownError: 'Lỗi không xác định',
      extractOnlyMainContent: 'Chỉ trích xuất nội dung chính (không có đầu trang, điều hướng, chân trang, v.v.)',
      exceptionErrorTitle: 'Một ngoại lệ xảy ra trong khi chạy tác vụ Firecrawl:',
      firecrawlDocLink: 'https://docs-mlchain.khulnasoft.com/guides/knowledge-base/sync-from-website',
      selectAll: 'Chọn tất cả',
      firecrawlTitle: 'Trích xuất nội dung web bằng 🔥Firecrawl',
      totalPageScraped: 'Tổng số trang được cạo:',
      excludePaths: 'Loại trừ đường dẫn',
      includeOnlyPaths: 'Chỉ bao gồm đường dẫn',
      maxDepth: 'Độ sâu tối đa',
      preview: 'Download',
      resetAll: 'Đặt lại tất cả',
      crawlSubPage: 'Thu thập dữ liệu các trang phụ',
      maxDepthTooltip: 'Độ sâu tối đa cần thu thập dữ liệu so với URL đã nhập. Độ sâu 0 chỉ cần cạo trang của url đã nhập, độ sâu 1 cạo url và mọi thứ sau khi nhậpURL + một /, v.v.',
    },
  },
  stepTwo: {
    segmentation: 'Cài đặt phân đoạn',
    auto: 'Tự động',
    autoDescription: 'Tự động thiết lập quy tắc phân đoạn và tiền xử lý. Khuyến nghị cho người dùng mới.',
    custom: 'Tùy chỉnh',
    customDescription: 'Tùy chỉnh quy tắc phân đoạn, độ dài đoạn và quy tắc tiền xử lý, v.v.',
    separator: 'Ký tự phân đoạn',
    separatorPlaceholder: 'Ví dụ, dòng mới (\\\\n) hoặc ký tự đặc biệt (như "***")',
    maxLength: 'Độ dài tối đa của đoạn',
    overlap: 'Độ chồng lấp đoạn',
    overlapTip: 'Thiết lập chồng lấp đoạn có thể duy trì sự liên quan ngữ nghĩa giữa chúng, tăng cường hiệu quả truy xuất. Đề xuất thiết lập từ 10% đến 25% của kích thước đoạn tối đa.',
    overlapCheck: 'Độ chồng lấp đoạn không nên lớn hơn độ dài tối đa của đoạn',
    rules: 'Quy tắc tiền xử lý văn bản',
    removeExtraSpaces: 'Thay thế khoảng trắng liên tục, dòng mới và tab',
    removeUrlEmails: 'Xóa tất cả URL và địa chỉ email',
    removeStopwords: 'Loại bỏ các từ dừng như "một", "và", "những"',
    preview: 'Xác nhận & Xem trước',
    reset: 'Đặt lại',
    indexMode: 'Chế độ chỉ mục',
    qualified: 'Chất lượng cao',
    recommend: 'Khuyến nghị',
    qualifiedTip: 'Sử dụng giao diện nhúng hệ thống mặc định để xử lý, cung cấp độ chính xác cao hơn khi người dùng truy vấn.',
    warning: 'Vui lòng thiết lập khóa API nhà cung cấp mô hình trước.',
    click: 'Đi đến cài đặt',
    economical: 'Tiết kiệm',
    economicalTip: 'Sử dụng các động cơ vector ngoại tuyến, chỉ mục từ khóa, v.v. để giảm độ chính xác mà không tốn token',
    QATitle: 'Phân đoạn theo định dạng Câu hỏi & Trả lời',
    QATip: 'Bật tùy chọn này sẽ tiêu tốn thêm token',
    QALanguage: 'Phân đoạn bằng',
    estimateCost: 'Ước tính',
    estimateSegment: 'Số đoạn ước tính',
    segmentCount: 'đoạn',
    calculating: 'Đang tính toán...',
    fileSource: 'Tiền xử lý tài liệu',
    notionSource: 'Tiền xử lý trang',
    other: 'và ',
    fileUnit: ' tệp',
    notionUnit: ' trang',
    previousStep: 'Quay lại',
    nextStep: 'Lưu & Xử lý',
    save: 'Lưu & Xử lý',
    cancel: 'Hủy',
    sideTipTitle: 'Tại sao phải phân đoạn và tiền xử lý?',
    sideTipP1: 'Khi xử lý dữ liệu văn bản, phân đoạn và làm sạch là hai bước tiền xử lý quan trọng.',
    sideTipP2: 'Phân đoạn chia nhỏ văn bản dài thành các đoạn để mô hình hiểu được tốt hơn. Điều này cải thiện chất lượng và tính liên quan của kết quả mô hình.',
    sideTipP3: 'Làm sạch loại bỏ các ký tự và định dạng không cần thiết, làm cho Kiến thức trở nên sạch sẽ và dễ dàng phân tích hơn.',
    sideTipP4: 'Phân đoạn và làm sạch đúng cách cải thiện hiệu suất của mô hình, cung cấp kết quả chính xác và có giá trị hơn.',
    previewTitle: 'Xem trước',
    previewTitleButton: 'Xem trước',
    previewButton: 'Chuyển sang dạng Câu hỏi & Trả lời',
    previewSwitchTipStart: 'Xem trước đoạn hiện tại đang ở định dạng văn bản, chuyển sang xem trước dạng câu hỏi và trả lời sẽ',
    previewSwitchTipEnd: ' tiêu tốn thêm token',
    characters: 'ký tự',
    indexSettingTip: 'Để thay đổi phương pháp chỉ mục, vui lòng đi tới ',
    retrievalSettingTip: 'Để thay đổi phương pháp truy xuất, vui lòng đi tới ',
    datasetSettingLink: 'cài đặt Kiến thức.',
    websiteSource: 'Trang web tiền xử lý',
    webpageUnit: 'Trang',
    separatorTip: 'Dấu phân cách là ký tự được sử dụng để phân tách văn bản. \\n\\n và \\n là dấu phân cách thường được sử dụng để tách các đoạn văn và dòng. Kết hợp với dấu phẩy (\\n\\n,\\n), các đoạn văn sẽ được phân đoạn theo các dòng khi vượt quá độ dài đoạn tối đa. Bạn cũng có thể sử dụng dấu phân cách đặc biệt do chính bạn xác định (ví dụ: ***).',
  },
  stepThree: {
    creationTitle: '🎉 Kiến thức đã được tạo',
    creationContent: 'Chúng tôi đã tự động đặt tên cho Kiến thức, bạn có thể sửa đổi nó bất kỳ lúc nào',
    label: 'Tên Kiến thức',
    additionTitle: '🎉 Tài liệu đã được tải lên',
    additionP1: 'Tài liệu đã được tải lên Kiến thức',
    additionP2: ', bạn có thể tìm thấy nó trong danh sách tài liệu của Kiến thức.',
    stop: 'Dừng xử lý',
    resume: 'Tiếp tục xử lý',
    navTo: 'Đi đến tài liệu',
    sideTipTitle: 'Tiếp theo là gì',
    sideTipContent: 'Sau khi tài liệu hoàn thành chỉ mục, Kiến thức có thể được tích hợp vào ứng dụng như một ngữ cảnh, bạn có thể tìm cài đặt ngữ cảnh trong trang điều chỉnh prompt. Bạn cũng có thể tạo nó như một plugin chỉ mục ChatGPT độc lập để phát hành.',
    modelTitle: 'Bạn có chắc chắn muốn dừng việc nhúng?',
    modelContent: 'Nếu bạn cần tiếp tục xử lý sau này, bạn sẽ tiếp tục từ vị trí bạn đã dừng lại.',
    modelButtonConfirm: 'Xác nhận',
    modelButtonCancel: 'Hủy',
  },
  firecrawl: {
    getApiKeyLinkText: 'Lấy khóa API của bạn từ firecrawl.dev',
    configFirecrawl: 'Định cấu hình 🔥Firecrawl',
    apiKeyPlaceholder: 'Khóa API từ firecrawl.dev',
  },
}

export default translation
