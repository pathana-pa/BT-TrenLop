const songs = [
  {
    id: "Z6FWCOO0",
    title: "Cắt Đôi Nỗi Sầu",
    duration: 182,
    artists: ["Tăng Duy Tân", "Drum7"],
    isIndie: false,
    distributor: "Euphoria Media Vietnam",
    hasLyric: true,
  },
  {
    id: "Z70OZIIB",
    title: "Qua Cầu Rước Em",
    duration: 183,
    artists: ["DanhKa"],
    isIndie: false,
    distributor: "Euphoria Media Vietnam",
    hasLyric: true,
  },
  {
    id: "Z7IOOFOC",
    title: "Nghe Nói Anh Yêu Em",
    duration: 269,
    artists: ["Châu Khải Phong", "Ngân Ngân"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z7I6C9FZ",
    title: "Rất Lâu Rồi Mới Khóc",
    duration: 305,
    artists: ["Minh Vương M4U", "Đặng Tuấn Phương", "ACV"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6AABFU6",
    title: "Ngày Mai Người Ta Lấy Chồng",
    duration: 362,
    artists: ["Thành Đạt"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6EUB99Z",
    title: "Tất Cả Hoặc Không Là Gì Cả",
    duration: 383,
    artists: ["Cao Thái Sơn", "Đông Thiên Đức"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6ED68UB",
    title: "Lệ Lưu Ly",
    duration: 201,
    artists: ["Vũ Phụng Tiên", "DT"],
    isIndie: false,
    distributor: "Euphoria Media Vietnam",
    hasLyric: true,
  },
  {
    id: "Z6AIA0I8",
    title: "Hoa Cỏ Lau",
    duration: 211,
    artists: ["Phong Max"],
    isIndie: false,
    distributor: "VIEENT Music",
    hasLyric: true,
  },
  {
    id: "Z6FFBUIC",
    title: "Ai Vùi Nỗi Đau Này Dưới Cát",
    duration: 335,
    artists: ["Quang Hà"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z700DDZW",
    title: "Cưới Thôi Em",
    duration: 303,
    artists: ["Thái Học"],
    isIndie: false,
    distributor: "VIEENT Music",
    hasLyric: true,
  },
  {
    id: "Z6EWUA0Z",
    title: "Có Một Người Vẫn Đợi (Ballad)",
    duration: 353,
    artists: ["Ngân Ngân"],
    isIndie: false,
    distributor: "VIEENT Music",
    hasLyric: true,
  },
  {
    id: "Z70WEIW8",
    title: "Từng Quen",
    duration: 175,
    artists: ["Wren Evans", "Itsnk"],
    isIndie: false,
    distributor: "Universal Music Group",
    hasLyric: true,
  },
  {
    id: "Z6ACUFEI",
    title: "Rượu Mừng Hóa Người Dưng",
    duration: 262,
    artists: ["TLong"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z69AO98C",
    title: "Trách Duyên Trách Phận",
    duration: 284,
    artists: ["Đỗ Thành Duy", "NH4T"],
    isIndie: false,
    distributor: "NH4T Entertainment",
    hasLyric: true,
  },
  {
    id: "Z67CFZDA",
    title: "Phố Hoa Lệ",
    duration: 301,
    artists: ["Chu Bin"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6Z7AWZU",
    title: "Em Là Kẻ Đáng Thương",
    duration: 258,
    artists: ["Phát Huy T4"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z70ACF6A",
    title: "Tội Nghiệp Lắm Em",
    duration: 292,
    artists: ["Thành Đạt"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6WZD78I",
    title: "Sao Cũng Được",
    duration: 319,
    artists: ["Thành Đạt"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z7IOOFDF",
    title: "Muôn Kiếp Nhân Sinh",
    duration: 210,
    artists: ["Dee Trần", "Quách Tuấn Du"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z7I0OFE0",
    title: "Chịu Cách Mình Nói Thua",
    duration: 182,
    artists: ["Rhyder", "CoolKid", "BAN"],
    isIndie: false,
    distributor: "Believe",
    hasLyric: true,
  },
  {
    id: "Z6708WAZ",
    title: "Bật Tình Yêu Lên",
    duration: 204,
    artists: ["Tăng Duy Tân", "Hòa Minzy"],
    isIndie: false,
    distributor: "Euphoria Media Vietnam",
    hasLyric: true,
  },
  {
    id: "ZZFDIEB6",
    title: "Tòng Phu",
    duration: 295,
    artists: ["Keyo"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z677ODE7",
    title: "Ngoài 30",
    duration: 287,
    artists: ["Thái Học"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z70UUZU0",
    title: "Đậm Sâu Chẳng Được Gì",
    duration: 317,
    artists: ["Hoài Lâm"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6DA0D09",
    title: "Cạn Tình Như Thế",
    duration: 296,
    artists: ["DICKSON", "Thành Đạt", "Lê Chí Trung"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZUB790F8",
    title: "Ai Chung Tình Được Mãi",
    duration: 335,
    artists: ["Đinh Tùng Huy", "ACV"],
    isIndie: false,
    distributor: "ACV Entertainment",
    hasLyric: true,
  },
  {
    id: "ZZB8UW0E",
    title: "Như Anh Đã Thấy Em",
    duration: 302,
    artists: ["PhucXP", "Freak D"],
    isIndie: false,
    distributor: "DAO Music Entertainment",
    hasLyric: true,
  },
  {
    id: "ZUZA6AF7",
    title: "Người Lạ Thoáng Qua",
    duration: 285,
    artists: ["Đinh Tùng Huy", "ACV"],
    isIndie: false,
    distributor: "ACV Entertainment",
    hasLyric: true,
  },
  {
    id: "Z6E89ZAF",
    title: "Mối Tình Không Tên",
    duration: 336,
    artists: ["Đình Nguyễn"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6E0ZI9U",
    title: "Anh Đâu Muốn Thấy Em Buồn",
    duration: 298,
    artists: ["Châu Khải Phong", "ACV"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z70U0B98",
    title: "Say Trong Nụ Cười",
    duration: 248,
    artists: ["Tăng Duy Tân"],
    isIndie: false,
    distributor: "Euphoria Media Vietnam",
    hasLyric: true,
  },
  {
    id: "Z6EAFOBI",
    title: "Giờ Không Cưới Thì Nào Cưới",
    duration: 210,
    artists: ["Hồng Quân WyTy", "Young P"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6C86FIW",
    title: "À Lôi",
    duration: 197,
    artists: ["Double2T", "Masew"],
    isIndie: false,
    distributor: "VIEENT Music",
    hasLyric: true,
  },
  {
    id: "Z6600ZCO",
    title: "Họ Đâu Thương Em",
    duration: 273,
    artists: ["Phan Duy Anh", "Ngân Ngân", "ACV"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6UD089Z",
    title: "Khuất Lối",
    duration: 264,
    artists: ["H-Kray"],
    isIndie: false,
    distributor: "DAO Music Entertainment",
    hasLyric: true,
  },
  {
    id: "Z7I76ECW",
    title: "Toàn Là Lời Nói Dối",
    duration: 248,
    artists: ["Hương Ly"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z706FCB6",
    title: "Em Ơi Đừng Khóc (Remix)",
    duration: 234,
    artists: ["Duy Phước"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZZDD86BZ",
    title: "Thuyền Quyên",
    duration: 193,
    artists: ["Diệu Kiên"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z696WZ06",
    title: "Ngày Em Đẹp Nhất",
    duration: 303,
    artists: ["Tama"],
    isIndie: false,
    distributor: "Euphoria Media Vietnam",
    hasLyric: true,
  },
  {
    id: "Z6797BZD",
    title: "Là Anh",
    duration: 212,
    artists: ["Phạm Lịch", "BMZ"],
    isIndie: false,
    distributor: "BMZ",
    hasLyric: true,
  },
  {
    id: "Z6ZO8B0O",
    title: "Quả Phụ Tướng",
    duration: 210,
    artists: ["Dunghoangpham"],
    isIndie: false,
    distributor: "VIEENT Music",
    hasLyric: true,
  },
  {
    id: "ZZEF769O",
    title: "Ngày Mai Em Đi Mất",
    duration: 246,
    artists: ["Khải Đăng", "Đạt G"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6B0U0BC",
    title: "Kẻ Viết Ngôn Tình",
    duration: 334,
    artists: ["Châu Khải Phong", "ACV"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZOAFI9D9",
    title: "Cô Đơn Dành Cho Ai",
    duration: 231,
    artists: ["Lee Ken", "Nal"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6UUABUW",
    title: "Đừng Lo Nhé! Có Anh Đây",
    duration: 281,
    artists: ["Thiên Tú"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZZDFBFD8",
    title: "Em Nên Dừng Lại",
    duration: 368,
    artists: ["Khang Việt"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6F688A7",
    title: "Có Em Là Điều Tuyệt Vời Nhất",
    duration: 297,
    artists: ["Thiên Tú"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6I76897",
    title: "Ân Tình Sang Trang",
    duration: 320,
    artists: ["Châu Khải Phong", "ACV"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZZ0W0D9W",
    title: "Không Trọn Vẹn Nữa",
    duration: 308,
    artists: ["Châu Khải Phong", "ACV"],
    isIndie: false,
    distributor: "ACV Entertainment",
    hasLyric: true,
  },
  {
    id: "Z7IU8DEZ",
    title: "Chuyện Người Đắp Chiếu",
    duration: 329,
    artists: ["Hoàng Y Nhung"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6709W0Z",
    title: "Gió",
    duration: 278,
    artists: ["JanK", "N2L"],
    isIndie: false,
    distributor: "N2L",
    hasLyric: true,
  },
  {
    id: "Z6BAUD7B",
    title: "Lạc Trong Ký Ức",
    duration: 264,
    artists: ["Thành Đạt"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6AFC9WD",
    title: "Mưa Tháng Sáu",
    duration: 257,
    artists: ["Văn Mai Hương", "GREY D", "Trung Quân"],
    isIndie: false,
    distributor: "Yin Yang Media",
    hasLyric: true,
  },
  {
    id: "Z70709CE",
    title: "Đừng Khóc Vì Con",
    duration: 260,
    artists: ["Ku Vàng", "NBoro"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z69CEF7I",
    title: "Mật Ngọt",
    duration: 185,
    artists: ["Dunghoangpham"],
    isIndie: false,
    distributor: "VIEENT Music",
    hasLyric: true,
  },
  {
    id: "ZZDDBWF6",
    title: "Pháo Hồng",
    duration: 235,
    artists: ["Đạt Long Vinh"],
    isIndie: false,
    distributor: "CT Media",
    hasLyric: true,
  },
  {
    id: "ZU7UC9ZC",
    title: "Em Là Con Thuyền Cô Đơn",
    duration: 304,
    artists: ["Thái Học"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6Z0B7I0",
    title: "Cuối Cùng Thì",
    duration: 213,
    artists: ["Jack - J97"],
    isIndie: false,
    distributor: "BH Media",
    hasLyric: true,
  },
  {
    id: "Z6FZF06U",
    title: "Những Ngày Mưa",
    duration: 292,
    artists: ["Lê Gia Bảo", "BMZ"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6DIE60B",
    title: "id 072019",
    duration: 272,
    artists: ["W/N"],
    isIndie: false,
    distributor: "Universal Music Group",
    hasLyric: true,
  },
  {
    id: "Z60WW8BB",
    title: "Đâu Phải Cho Anh",
    duration: 289,
    artists: ["Phát Lee", "TVk"],
    isIndie: false,
    distributor: "Euphoria Media Vietnam",
    hasLyric: true,
  },
  {
    id: "Z7IOEUZ0",
    title: "Họa Đi Phúc Sẽ Đến",
    duration: 268,
    artists: ["Đoàn Lâm", "CT"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z70A70A9",
    title: "Sao Phải Giữ",
    duration: 257,
    artists: ["Khang Việt"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6FW00U6",
    title: "Đại Minh Tinh",
    duration: 247,
    artists: ["Văn Mai Hương", "Hứa Kim Tuyền"],
    isIndie: false,
    distributor: "Yin Yang Media",
    hasLyric: true,
  },
  {
    id: "Z70UC7U7",
    title: "Có Duyên Không Nợ Rumba (Cover)",
    duration: 242,
    artists: ["Tina Ho"],
    isIndie: false,
    distributor: "VIEENT Music",
    hasLyric: true,
  },
  {
    id: "Z6EZZWWC",
    title: "Trả Cho Em",
    duration: 300,
    artists: ["Khánh Cường"],
    isIndie: false,
    distributor: "Euphoria Media Vietnam",
    hasLyric: true,
  },
  {
    id: "Z6WOZUCE",
    title: "Cưới Hông Chốt Nha",
    duration: 256,
    artists: ["Út Nhị Mino", "Đỗ Thành Duy", "NH4T"],
    isIndie: false,
    distributor: "NH4T Entertainment",
    hasLyric: true,
  },
  {
    id: "Z6W7ZIIU",
    title: "Cô Đơn Trên Sofa",
    duration: 263,
    artists: ["Hồ Ngọc Hà"],
    isIndie: false,
    distributor: "T Productions",
    hasLyric: true,
  },
  {
    id: "ZOACFBBU",
    title: "Chỉ Là Không Cùng Nhau (Live Version)",
    duration: 226,
    artists: ["Tăng Phúc", "Trương Thảo Nhi"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6CUFFZA",
    title: "Ngày Mình Chia Tay",
    duration: 317,
    artists: ["Phan Duy Anh", "ACV"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZZBUE7ZA",
    title: "Thương Em",
    duration: 300,
    artists: ["Châu Khải Phong", "ACV"],
    isIndie: false,
    distributor: "ACV Entertainment",
    hasLyric: true,
  },
  {
    id: "Z708B7EA",
    title: "Chuyến Xe Cuộc Đời",
    duration: 286,
    artists: ["Khắc Việt", "ACV"],
    isIndie: false,
    distributor: "DAO Music Entertainment",
    hasLyric: true,
  },
  {
    id: "Z67BD9AC",
    title: "Em Lại Nhớ Anh Rồi",
    duration: 255,
    artists: ["Tuệ Phương"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6I78I0D",
    title: "Ai Bình Yên Hơn Ai Đậm Sâu Hơn",
    duration: 341,
    artists: ["Dương Yến Phi", "NH4T"],
    isIndie: false,
    distributor: "NH4T Entertainment",
    hasLyric: true,
  },
  {
    id: "Z69C9IB7",
    title: "Không Thể Say",
    duration: 228,
    artists: ["HIEUTHUHAI"],
    isIndie: false,
    distributor: "MMusic",
    hasLyric: true,
  },
  {
    id: "Z70WU9F8",
    title: "Cô Đơn Đã Quá Bình Thường",
    duration: 278,
    artists: ["Miu Lê"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZUB8CDE9",
    title: "Anh Vẫn Ở Đây",
    duration: 306,
    artists: ["Thành Đạt"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZOAFBWB0",
    title: "Hạ Còn Vương Nắng",
    duration: 286,
    artists: ["DatKaa", "Kido"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZU7C8FDU",
    title: "Thay Lòng",
    duration: 276,
    artists: ["DIMZ", "TVk"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZUOZWCUC",
    title: "Rồi Tới Luôn",
    duration: 247,
    artists: ["Nal"],
    isIndie: false,
    distributor: "CT Media",
    hasLyric: true,
  },
  {
    id: "Z6DOZCOO",
    title: "Hoa Bằng Lăng (Ballad)",
    duration: 216,
    artists: ["Ngân Ngân"],
    isIndie: false,
    distributor: "VIEENT Music",
    hasLyric: true,
  },
  {
    id: "ZUUECEIC",
    title: "Khuê Mộc Lang",
    duration: 206,
    artists: ["Hương Ly", "Jombie"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z708O0OU",
    title: "Ngày Em Cưới",
    duration: 274,
    artists: ["Nguyễn Vĩ"],
    isIndie: false,
    distributor: "DAO Music Entertainment",
    hasLyric: true,
  },
  {
    id: "ZZ9Z6UOZ",
    title: "Tình Ta Hai Ngã",
    duration: 366,
    artists: ["Aki Khoa"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZZBAFF60",
    title: "Xin Má Rước Dâu",
    duration: 190,
    artists: ["Diệu Kiên"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6I77FCW",
    title: "Kỳ Vọng Sai Lầm",
    duration: 222,
    artists: ["Tăng Phúc", "Nguyễn Đình Vũ", "Yuno Bigboi"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "ZZZC7F0E",
    title: "Kiếp Má Hồng",
    duration: 314,
    artists: ["TLong", "Lạc Khởi"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z708CCOB",
    title: "Đâu Còn Quan Trọng",
    duration: 212,
    artists: ["Chung Thanh Duy"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6FE8WOF",
    title: "NOLOVENOLIFE",
    duration: 171,
    artists: ["HIEUTHUHAI"],
    isIndie: false,
    distributor: "MMusic",
    hasLyric: true,
  },
  {
    id: "Z678EDOF",
    title: "Hoa Cưới",
    duration: 255,
    artists: ["Đạt Long Vinh", "CT"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z7I0ICUW",
    title: "Hót Hòn Họt",
    duration: 228,
    artists: ["Hương Giang", "Saabirose", "D.A"],
    isIndie: false,
    distributor: "Yin Yang Media",
    hasLyric: true,
  },
  {
    id: "Z6UBADAF",
    title: "Yêu Người Có Ước Mơ",
    duration: 296,
    artists: ["buitruonglinh"],
    isIndie: false,
    distributor: "LOOPS Music",
    hasLyric: true,
  },
  {
    id: "Z6AD7OU0",
    title: "Có Chi Đâu Mà Buồn",
    duration: 348,
    artists: ["Phát Huy T4"],
    isIndie: false,
    distributor: "LOOPS Music",
    hasLyric: true,
  },
  {
    id: "ZZFDAZ89",
    title: "Waiting For You",
    duration: 266,
    artists: ["MONO", "Onionn"],
    isIndie: false,
    distributor: "MMusic",
    hasLyric: true,
  },
  {
    id: "Z68WFF9W",
    title: "Chờ Trông Ai",
    duration: 252,
    artists: ["Nal"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6BADFAZ",
    title: "Đùa Hơi Quá",
    duration: 309,
    artists: ["Lê Bảo Bình"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6CA9ZFB",
    title: "Em Là Ai",
    duration: 244,
    artists: ["Keyo"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6F69III",
    title: "Lệ Cố Nhân",
    duration: 278,
    artists: ["Cần Vinh", "Lee Ken", "Bảo Jen"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
  {
    id: "Z6B7O6W7",
    title: "Có Ai Hẹn Hò Cùng Em Chưa",
    duration: 309,
    artists: ["Quân A.P"],
    isIndie: false,
    distributor: "Yin Yang Media",
    hasLyric: true,
  },
  {
    id: "Z6ZU80FZ",
    title: "Cơm Đoàn Viên",
    duration: 282,
    artists: ["Thành Đạt"],
    isIndie: false,
    distributor: "MIXUS",
    hasLyric: true,
  },
];

// 1
function getTotalDuration(songList) {
  let total = 0;
  for (let i = 0; i < songList.length; i++) {
    total = total + songList[i].duration;
  }

  return total;
}

// 2
function getSongsGivenArtist(songList, artist) {
  const results = [];

  for (let i = 0; i < songList.length; i++) {
    if (songList[i].artists.includes(artist)) {
      results.push(songList[i]);
    }
  }

  return results;
}

// 3
function getSongTitlesGivenDistributor(songList, distributor) {
  const titles = [];

  for (let i = 0; i < songList.length; i++) {
    if (songList[i].distributor === distributor) {
      titles.push(songList[i].title);
    }
  }

  return titles;
}

// 4
function getSongsMoreOneArtist(songList) {
  const results = [];

  for (let i = 0; i < songList.length; i++) {
    if (songList[i].artists.length > 1) {
      results.push({
        title: songList[i].title,
        artists: songList[i].artists,
      });
    }
  }

  return results;
}

// 5
function getIndieSongs(songList) {
  const indieSongs = [];

  for (let i = 0; i < songList.length; i++) {
    if (songList[i].isIndie === true) {
      indieSongs.push(songList[i]);
    }
  }

  return indieSongs;
}

// 6
function getLyricsSongLength(songList) {
  const lyricsSongs = [];
  for (let i = 0; i < songList.length; i++) {
    if (songList[i].hasLyric === true) {
      lyricsSongs.push(songList[i]);
    }
  }

  return lyricsSongs.length;
}

// 7
function getSongsByLimitedDuration(songList, duration) {
  const results = [];
  for (let i = 0; i < songList.length; i++) {
    if (songList[i].duration > duration) {
      results.push({
        title: songList[i].title,
        duration: songList[i].duration,
      });
    }
  }
  return results;
}

// 8
function getSongTitlesGivenSearchString(songList, searchString) {
  const titles = [];
  for (let i = 0; i < songList.length; i++) {
    if (songList[i].title.includes(searchString) === true) {
      titles.push(songList[i].title);
    }
  }
  return titles;
}
