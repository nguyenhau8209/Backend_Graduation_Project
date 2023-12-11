"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Products", [
            {
                name: "[1969STUDIO] Áo Thun Nam Nữ Phối Hot Trend Form Rộng Tay Lỡ Unisex BST 1969ST",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llxbywob33z367",
                categoryId: 10,
                price: 100000,
                description: "Tên sản phẩm:[1969STUDIO] Áo Thun Nam Nữ Phối Hot Trend Form Rộng Tay Lỡ Unisex BST 1969ST\n" +
                    "\n" +
                    "Đặc điểm nổi bật của áo thun Unisex tay lỡ\n" +
                    "\n" +
                    "- Áo Thun, Áo Phông Unisex tay lỡ là item không thể thiếu trong tủ đồ vì sự thoải mái, dễ chịu, lại rất dễ phối đồ.\n" +
                    "\n" +
                    "- Áo tay lỡ được làm bằng chất liệu co giãn, cực kì đẹp, vải rất mát, sờ mịn tay.\n" +
                    "\n" +
                    "- Áo thun tay lỡ unisex thích hợp với cả nam và nữ. Mặc làm áo thun cặp, áo nhóm rất phù hợp.\n" +
                    "\n" +
                    "- Áo thun tay lỡ form rộng dễ dàng phối đồ, thời trang phong cách Hàn Quốc.\n" +
                    "\n" +
                    "- Hàng sản xuất tại xưởng, đảm bảo chất lượng.\n" +
                    "\n" +
                    "- Chất liệu: thun co giãn, vải mềm, vải mịn, thoáng mát.\n" +
                    "\n" +
                    "- Đường may chuẩn chỉnh, tỉ mỉ, chắc chắn.\n" +
                    "\n" +
                    "- Phù hợp phối nhiều màu.\n" +
                    "\n" +
                    "- Thiết kế trẻ trung, năng động.",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo thun nam cao cấp hoạ tiết trắng đen nổi vải cotton mẫu mới thời trang phong cách",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm8q7ngk1n363",
                categoryId: 10,
                price: 120000,
                description: "1.THÔNG TIN SẢN PHẨM \n" +
                    "- Áo thun  nam NỮ , ngắn tay\n" +
                    " - Form dáng body vừa người , phù hợp du lịch, du xuân, dạo phố, picnic, cafe.... \n" +
                    "-  Áo thun nam cổ bẻ họa tiết trẻ trung. \n" +
                    "- Thiết kế cổ bẻ xẻ trụ đơn giản, cực kỳ năng động, khỏe khoắn, nhưng vẫn không kém phần sành điệu, hợp mốt. \n" +
                    "- Chất liệu thun cao cấp mềm mại, thông thoáng và co giãn tối ưu, luôn tạo cảm giác thoải mái khi mặc. \n" +
                    "- Màu sắc trẻ trung, dễ dàng phối cùng nhiều kiểu jeans bụi phủi, kaki lịch lãm.\n" +
                    " - Hàng có sẵn đủ size:S M, L, XL,XXL\n" +
                    "2. GIỚI THIỆU SẢN PHẨM\n" +
                    "- Áo phông nam  là sự lựa chọn hoàn hảo cho các chàng trai. Áo  màu trung tính rất dễ mặc, form áo vừa vặn cơ thể, thoải mái theo từng cử động.\n" +
                    "\n" +
                    "- Màu sắc trung tính và phối màu tuyệt vời mà rất ít áo  có tạo nên sự dễ dàng trong việc phối đồ và tạo ra cho mình nhiều phong cách khác nhau.\n" +
                    "- Áo được làm từ chất liệucotton co giãn với bề mặt vải mềm mại, thấm hút mồ hôi tốt tạo cảm giác thoải mái, thoáng mát cho người mặc. Đây cũng là chất liệu dễ giặt sạch, giúp bạn tiết kiệm một khoảng thời gian đáng kể.\n" +
                    "- Áo chống nhăn tốt, dễ giặt sạch, nhanh khô.\n" +
                    "-Giặt tay hay giặt máy thoải mái không sợ ra màu, nhăn , mất form \n" +
                    "➡️ HƯỚNG DẪN CHỌN SIZE \n" +
                    "\n" +
                    "SIZE S 35-50KG/CAO 1M 42-1M52\n" +
                    "\n" +
                    "Size M: 50-54kg / Cao 1m53 - 1m68 \n" +
                    "\n" +
                    "Size L: 55-64kg / Cao 1m57 - 1m70 \n" +
                    "\n" +
                    "Size XL: 65-69kg / Cao 1m66 - 1m76 \n" +
                    "\n" +
                    "Size XXL: 72-84kg / Cao 1m70 - 1m85.\n" +
                    "\n" +
                    "CÓ SIZE LỚN CHO ANH EM\n" +
                    "\n" +
                    " - lưu ý size trên là vừa người nếu thích thoải mái thì tăng 1 size dùm shop nhé.\n" +
                    "Áo thun nam  trơn vải  cotton cao cấp mềm mịn, áo phông  nam đẹp ngắn tay có đủ bảng màu cực hot \n" +
                    " hân hạnh được phục vụ quý khách. Những sản phẩm mới nhất vẫn liên tục được cập nhật mỗi ngày phù hợp với nhiều lứa tuổi.\n" +
                    "3. CHÍNH SÁCH BÁN HÀNG:\n" +
                    "- FREESHIP hoặc hỗ trợ 40K cho đơn hàng từ 99K toàn quốc\n" +
                    "- Ngoài ra, Chúng tôi tặng mã voucher hoặc hoàn xu cho toàn bộ đơn hàng\n" +
                    "- Cam kết chất lượng và mẫu mã sản phẩm giống với hình ảnh.\n" +
                    "- Hoàn tiền nếu sản phẩm không giống với mô tả.\n" +
                    "- Cam kết được đổi trả hàng trong vòng 2 ngày.\n" +
                    " 4. HƯỚNG DẪN CÁCH ĐẶT HÀNG\n" +
                    "- Bước 1: Cách chọn size, shop có bảng size mẫu. Bạn NÊN INBOX, cung cấp chiều cao, cân nặng để SHOP TƯ VẤN SIZE\n" +
                    "- Bước 2: Cách đặt hàng: Nếu bạn muốn mua 2 sản phẩm khác nhau hoặc 2 size khác nhau, để được freeship\n" +
                    "+ Bạn chọn từng sản phẩm rồi thêm vào giỏ hàng\n" +
                    "+ Khi giỏ hàng đã có đầy đủ các sản phẩm cần mua, bạn mới tiến hành ấn nút “ Thanh toán”",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo Thun Tay Ngắn Dáng Rộng In Hình Anime Thời Trang Mùa Hè Cho Nam Thời Trang MENFASHION1989 MEN TOP 285",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh73hlzxv9rmcb",
                categoryId: 10,
                price: 130000,
                description: "Áo Thun Tay Ngắn Dáng Rộng In Hình Anime Thời Trang Mùa Hè Cho Nam Thời Trang MENFASHION1989 MEN TOP 285\n" +
                    "\n" +
                    "\n" +
                    " (^ _-) Theo dõi cửa hàng để xem thêm phong cách mới nhất và nhiều chương trình khuyến mãi hơn\n" +
                    "\n" +
                    " Xem tất cả các sản phẩm trong cửa hàng tại đây → _ →\n" +
                    "\n" +
                    " Màu: trắng, đen, xanh\n" +
                    "\n" +
                    " Chất liệu: sợi polyester + cotton\n" +
                    "\n" +
                    " Kết cấu: màu đặc\n" +
                    "\n" +
                    " Loại cổ áo: cổ tròn\n" +
                    "\n" +
                    " Phong cách: Hàn Quốc tinh tế\n" +
                    "\n" +
                    " Dùng cho các mùa: Mùa hè\n" +
                    "\n" +
                    " Chiều dài tay áo: tay áo ngắn\n" +
                    "\n" +
                    " Độ dày: Bình thường\n" +
                    "\n" +
                    " Phù hợp cho: giải trí\n" +
                    "\n" +
                    " Phiên bản: Dáng rộng",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo sweater nam áo dài tay áo Nỉ siêu rẻ phù hợp nam nữ Chữ cái lập thể 2023 NEW DS230802",
                mainImage: "https://down-vn.img.susercontent.com/file/sg-11134201-7qve3-ljy25xxdof4n37",
                categoryId: 3,
                price: 140000,
                description: "🌈 Chào mừng đến với cửa hàng của chúng tôi.\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "🌈 Theo dõi cửa hàng để nhận phiếu giảm giá ”◕‿◕｡\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "🌈 Nếu bạn hài lòng với sản phẩm và dịch vụ của chúng tôi Lời khen ngợi năm sao\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "🚚 Sản phẩm đến từ Trung Quốc và mất một thời gian để vận chuyển\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "💕 Phải mặc! Phổ biến vào năm 2023!\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "💕Được làm bằng chất liệu cao cấp, đủ bền để bạn mặc hàng ngày!\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "💕 Thật thoải mái Chất liệu vải mềm mại, hình dáng đẹp, chất lượng tốt.\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "💕 Thiết kế đẹp, sang trọng, độc đáo.\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "💕 Đó là một món quà tốt cho người yêu hoặc chính bạn.\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "❣️ Chất lượng và giá cả như thế này không thể tìm thấy ở bất kỳ nơi nào khác, rất đáng đồng tiền.\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "❣️Do các thiết bị hiển thị và chiếu sáng khác nhau, hình ảnh có thể không phản ánh màu sắc thực tế của tất cả các sản phẩm. Cảm ơn bạn đã thông cảm ❣️\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "❣️ Đánh giá 1 hoặc 2 sao không có lý do / hình minh họa. hoặc đặt điều gì đó không đúng sự thật làm hỏng danh tiếng của shop shop sẽ không giúp gì cả vì bạn được coi là đang vào vì lợi ích của Shop, đặc biệt cảm ơn bạn đã có nhu cầu vui lòng đặt hàng hoặc hỏi thêm thông tin tin tin nhé ️",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "ÁO THUN NAM NGẮN TAY CỔ BẺ MẪU MỚI NHIỀU MÀU",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfdhc5y9sfwk81",
                categoryId: 10,
                price: 150000,
                description: "Áo thun nam ngắn tay cổ bẻ phong cách Hàn Quốc\n" +
                    "\n" +
                    "Thiết kế đơn giãn thanh lịch trẻ đẹp phù hợp mọi lứa tuổi\n" +
                    "\n" +
                    "Trang phục cơ bản không thể thiếu của phái mạnh\n" +
                    "\n" +
                    "Chất thun dày mịn thoáng mát co dãn 4 chiều.\n" +
                    "\n" +
                    "Hàng may kỹ chắc chắn ( đường bảo hành đường may trong suốt thời gian mặc )\n" +
                    "\n" +
                    "Hỗ trợ đổi size khi mặc chật hoặc đổi mẫu khác khi không hợp ( tham khảo bảng chọn size ) \n" +
                    "\n" +
                    "Sản phẩm đáng tiền không thể bỏ lỡ\n" +
                    "\n" +
                    "Giá đăng là giá 1 cái\n" +
                    "\n" +
                    "Hàng thời trang may sẵn theo thông số chung sản phẩm phù hợp với đa số khách hàng nhưng cũng sẽ có vài trường hợp khách hàng \" không hợp \" _ Đẹp với nhiều người nhưng không thể hài lòng được tất cả, nếu quý khách hàng có gì chưa được hài lòng hãy nhắn cho shop để shop được phục vụ quý khách tốt hơn _ Chúc quý khách mua sắm vui vẻ\n" +
                    "\n" +
                    "Theo dõi shop ngay hôm nay để cập nhật thường xuyên những mẫu thời trang cao cấp với giá tốt nhất khó có thể tìm mua sản phẩm tương tự ở nơi khác\n" +
                    "\n" +
                    "Mô tã chi tiết sản phẩm\n" +
                    "\n" +
                    "Chất liệu: VẢI CÁ SẤU POLY \n" +
                    "\n" +
                    "Fom dáng ôm nhẹ\n" +
                    "\n" +
                    "Kiểu dáng đơn giãn thanh lịch\n" +
                    "\n" +
                    "Xuất xứ : Việt Nam\n" +
                    "\n" +
                    "Thương hiệu : Nobrand\n" +
                    "\n" +
                    "Kích cỡ M L XL XXL\n" +
                    "\n" +
                    "Thông tin cảnh báo : không có\n" +
                    "\n" +
                    "Hướng dẫn sử dụng : Quần áo mới về chỉ nên giặt nhẹ bằng nước cho sạch bụi vải sau đó phơi khô . không ngâm quá lâu, không dùng chất tẩy rửa khi không cần thiết, không giặt máy, không giặt áo trắng chung với áo màu",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo thun nam polo cao cấp phong cách mẫu mới thời trang nổi bật vải cotton dày mềm mịn",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llnandyew3tb40",
                categoryId: 9,
                price: 160000,
                description: "Product 6 Description",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo sweater nam nữ form rộng phối layer chất nỉ unisex thời trang Hàn Quốc UNICI AS01",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llwxtjt6tt5r66",
                categoryId: 3,
                price: 170000,
                description: "- Áo sweater nam nữ form rộng phối layer chất nỉ unisex thời trang Hàn Quốc UNICI AS01\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "- Áo sweater UNICI, áo sweater nam, áo sweater nữ, áo sweater form rộng, áo nỉ sweater đó là những từ để bạn tham khảo tìm kiếm\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "- Sản phẩm được thiết kế theo đúng form chuẩn của nam giới Việt Nam\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "- Sản phẩm chính là mẫu thiết kế mới nhất của UNICI",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo nỉ hoodie Essentials In cao su nổi , áo nỉ bông unisex nam nữ UNICI SHION AN206",
                mainImage: "https://down-vn.img.susercontent.com/file/sg-11134201-22110-v0mbcxbmbtjv92",
                categoryId: 3,
                price: 180000,
                description: "Áo nỉ hoodie Essentials In cao su nổi UNICI shop , áo nỉ bông unisex nam nữ\n" +
                    "🍓🍓Cảm ơn bạn đã ghé UNICI SHION\n" +
                    "Shop chuyên thời trang nam Unisex\n" +
                    "_________________________________________\n" +
                    "THÔNG TIN SẢN PHẨM: Áo nỉ Hoodie\n" +
                    "- Chất liệu nỉ Bông   Cotton 100%  mềm mại dày dặn  , ấm áp \n" +
                    "- Đường may được gia công tỉ mỉ, chắc chắn.\n" +
                    "- Hình in sắc nét, chân thực\n" +
                    "\n" +
                    "              M : Ngang 54cm - Dài 68cm ( 45kg - 60kg )\n" +
                    "               L : Ngang 56cm - Dài 70cm  ( 60kg - 70kg )\n" +
                    "              XL: ngang 58 cm - Dài 72cm   ( 70kg - 85kg )\n" +
                    "* Bảng size chỉ mang tính chất tham khảo và phù hợp với phần đông khách hàng, Khách hoàn toàn có thể chọn lên hoặc xuống size tuỳ thuộc vào sở thích và form dáng của mình ",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo hoodie nam nữ cổ cao dáng rộng phối khóa kéo thời trang kiểu Ninja, áo nỉ hoodie Retro Mỹ, áo khoác hoodie zip AH02",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnp5x4i0mg3178",
                categoryId: 3,
                price: 190000,
                description: "💥 Áo hoodie chữ thập cổ cao dáng rộng phối khóa kéo với chất liệu nỉ bông dày dặn mang phong cách thời trang thời thượng cho các bạn trẻ, đặc biệt không những giúp bạn giữ ấm trong mùa lạnh mà còn có thể chống nắng, chống gió, chống bụi, chống rét, chống tia UV cực tốt, rất tiện lợi nhé!!! (được sử dụng nhiều trong dịp lễ hội, đi chơi, da ngoại, dạo phố, du lịch...)" +
                    "🌀 Fullsize: Từ 40-90kg mặc đẹp, bạn vui lòng xem trên bảng size để chọn size phù hợp nhé,\n" +
                    "\n" +
                    " Nếu bạn còn phân vân khi chọn size hãy chát shop ngay để shop tư vấn và phục vụ bạn tốt nhất ạ.",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo sơ mi nam nữ tay dài giấu khuy form rộng vải lụa cao cấp UNICI ASM41 phong cách Hàn Quốc",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkb2y9yqp12g7e",
                categoryId: 5,
                price: 99000,
                description: "Áo sơ mi nam nữ tay dài giấu khuy form rộng vải lụa cao cấp UNICI ASM41 phong cách Hàn Quốc\n" +
                    "\n" +
                    "hàng fullbox cực sang chảnh, Chất lượng cao, thiết kế sang trọng (xem video chi tiết trên sản phẩm)\n" +
                    "\n" +
                    "Về chất liệu: Áo sơ mi này được làm từ vải lụa thái cao cấp, vải dày, mềm mịn thấm hút mồ hôi tốt, không phai màu,không nhăn, không xù.\n" +
                    "\n" +
                    "Độ hoàn thiện của áo sơ mi nam nữ tay dài giấu khuy form rộng: đường may tinh tế, tỉ mỉ, ít chỉ thừa ...\n" +
                    "\n" +
                    "Thiết kế giấu khuy form rộng hiện đại, trẻ trung lên áo sơ mi nam nữ tay dài rất dễ kết hợp các trang phục khác nhau: quần jean, quần âu, giày tây, giầy thể thao.\n" +
                    "\n" +
                    "Dù là đi học, đi làm, đi chơi hay dự tiệc thì mặc chiếc áo sơ mi tay dài giấu khuy này đều đẹp, trẻ trung và sang trọng nó luôn thu hút mọi ánh nhìn đến bạn.",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo sơ mi nhung tăm nam ROUGH form basic dễ phối đồ",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lme2ewoxllun04",
                categoryId: 5,
                price: 99000,
                description: "-Bảng size chart chỉ mang tính chất tham khảo. Tùy thuộc vào số đo cơ thể mỗi người và chất liệu vải khác nhau sẽ có sự chênh lệch nhất định. Bạn hãy chat với shop để được nv CSKH tư vấn cụ thể hơn nhé." +
                    "+ Do màn hình và điều kiện ánh sáng khác nhau, màu sắc vải/ sản phẩm có thể sẽ chênh lệch thực tế một phần nhỏ nhưng vẫn đảm bảo chất lượng.\n" +
                    "\n" +
                    "+ Cam kết được đổi trả hàng trong vòng 7 ngày.\n" +
                    "\n" +
                    "+ Hàng đổi/trả phải còn mới và chưa qua sử dụng\n" +
                    "\n" +
                    "+ Sản phẩm bị lỗi do vận chuyển và do nhà sản xuất\n" +
                    "\n" +
                    "📌 LƯU Ý: Khi quý khách có gặp bất kì vấn đề gì về sản phẩm và vận chuyển đừng\n" +
                    "\n" +
                    "vội đánh giá mà hãy liên hệ Shop để đc hỗ trợ 1 cách tốt nhất nhé.",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo Khoác Dù CAMPAIN WHAT LOGO Nam Ulzzang Unisex Form Rộng Bomber TRƠN Jacket (Ảnh thật/ Có sẳn)",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfnek0hnvt6s30",
                categoryId: 1,
                price: 99000,
                description: "Áo Khoác Dù CAMPAIN WHAT LOGO Nam Nữ Ulzzang Unisex Form Rộng Bomber TRƠN Jacket (Ảnh thật/ Có sẳn)\n" +
                    "\n" +
                    "Tụi mình về thêm mẫu áo khoác dù trắng phối tay đen, đi mưa hay nắng đều được luôn nè. Bạn mix với phong cách đi học hay đi chơi đều okie nhé ạ!!!\n" +
                    "\n" +
                    "• Màu phối Trắng, Đen,Xanh, Đỏ \n" +
                    "\n" +
                    "• 3 size M L XL (40-70kg). Form unisex nam & nữ mặc đều phù hợp nhé.\n" +
                    "\n" +
                    " ➖➖➖➖➖➖➖➖➖➖➖\n" +
                    "\n" +
                    "🎈 Hướng dẫn chọn size:\n" +
                    "\n" +
                    "Size M: Nặng 45-55kg; Cao 1m52-1m64\n" +
                    "\n" +
                    "Size L: Nặng 55-65kg; Cao 1m65-1m72\n" +
                    "\n" +
                    "Size XL: Nặng 65-70kg; Cao 1m73-1m78\n" +
                    "\n" +
                    "👉 Đây chỉ là bảng size mẫu. Bạn inbox trực tiếp, cung cấp chiều cao + cân nặng để shop có thể hỗ trợ bạn chọn size cho phù hợp hơn nhé.",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo khoác bomber nhung tăm cổ bẻ kiểu trơn 1 lớp dày dặn chuẩn form siêu xinh sành điệu cao cấp BẢO ĐĂNG",
                mainImage: "https://down-vn.img.susercontent.com/file/93351529ac246bc3e95ced189b75039e",
                categoryId: 2,
                price: 99000,
                description: "* Chất liệu vải nhung tăm 1 lớp Lót Dù dày dặn, chống nắng cho ngày nắng gắt & chống gió lạnh cho ngày mưa.\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "* Áo được sản xuất từ vải nhung tăm loại 1, không xù, không phai màu, không gây kích ứng da.\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "* Thiết kế tay dài bo có bo thun,Fom rộng thoải mái.\n" +
                    "\n" +
                    "* Chuẩn form, thoải mái, màu sắc trung, tôn dáng, phù hợp với mọi lứa tuổi.\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "* Dễ dàng Mix cùng nhiều kiểu trang phục yêu thích hằng ngày & tự tin đi đến mọi nơi mọi lúc với phong cách chất lừ của riêng bạn,",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo Ghi - Lê (gile) áo khoác ngoài nam, chất poly mỏng nhẹ, mềm mịn, Form Unisex, MT Group.",
                mainImage: "https://down-vn.img.susercontent.com/file/sg-11134201-22100-mw1zxtvt80hve4",
                categoryId: 2,
                price: 99000,
                description: "THÔNG TIN SẢN PHẨM\n" +
                    "\n" +
                    "- Chất liệu: KaKi poly mỏng vô cùng mềm mại, không nhăn, không xù, hàm lượng cotton lên đên 95%\n" +
                    "\n" +
                    "- Kiểu dáng: Form rộng, thoải mái \n" +
                    "\n" +
                    "- Màu sắc: Đen, Rêu\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "ƯU ĐIỂM SẢN PHẨM\n" +
                    "\n" +
                    "- Áo Ghi - Lê (gile) MT GROUP form unisex dành cho cả nam và nữ. \n" +
                    "\n" +
                    "- Form dáng chuẩn phù hợp với trang phục đi tiệc, đi học và đi chơi.\n" +
                    "\n" +
                    "- Áo Ghi - Lê (gile) MT GROUP có 2 màu basic dễ mặc dễ phối đồ.\n" +
                    "\n" +
                    "- Phong các thời trang thời thượng giúp bạn khác biệt giữa đám đông,",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo Ba Lỗ Nam Sát Nách Thể Thao Chất Vải Co Dãn Mặc Nhà, Tập Gym Vesca B1",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh5xkill7bqq68",
                categoryId: 4,
                price: 99000,
                description: "ĐẶC ĐIỂM SẢN PHẨM: \n" +
                    "\n" +
                    "✔️ Trẻ trung năng động, cá tính\n" +
                    "\n" +
                    "✔️ Phong cách: áo ba lỗ nam nữ Unisex thời trang, hiện đại, năng động\n" +
                    "\n" +
                    "✔️ Thiết kế trang nhã, có thể sử dụng đi trong nhiều bối cảnh khác nhau\n" +
                    "\n" +
                    "✔️ Đường May tỉ mỉ từng chi tiết giúp chiếc áo 3 lỗ thêm sang trọng.\n" +
                    "\n" +
                    "✔️ Chất liệu: Vải thun lạnh co giãn mềm mịn, dày dặn, phù hợp thời tiết mùa hè nóng nực\n" +
                    "\n" +
                    "✔️ Thương hiệu: VESCA\n" +
                    "\n" +
                    "✔️ Năm sản xuất: 2022\n" +
                    "\n" +
                    "✔️ Xuất Xứ: Việt Nam, nguồn gốc rõ ràng\n" +
                    "\n" +
                    "✔️ Địa chỉ sản xuất tại: Huyện Phúc Thọ-Hà Nội",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo lót ba lỗ nam ,chất liệu cotton mềm mại, thoáng khí, thấm hút mổ hôi tốt",
                mainImage: "https://down-vn.img.susercontent.com/file/a46b3dd13481d3046acae37f5980804f",
                categoryId: 4,
                price: 99000,
                description: "Áo lót ba lỗ nam BM được dệt may từ chất liệu Cotton (VẢI BÔNG) cho bề mặt mềm mại, thoáng mát,và dễ giặt sạch. Chất liệu này thấm hút mồ hôi nhanh, giữ cho cơ thể luôn khô thoáng và thoải mái.\n" +
                    "Sản phẩm được sản xuất và cắt may tại VIỆT NAM, đem đến sự an toàn cho làn da, giá cả và chất lượng luôn làm bạn cảm thấy hài lòng khi dùng.\n" +
                    "\n" +
                    "- Co giãn tốt, không gây vết lằn trên da, không gây sự khó chịu khi mặc.\n" +
                    "\n" +
                    "- Áo được thiết kế đơn giản, dễ mặc cho nam giới phong cách năng động và khỏe khoắn hơn.",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo phông nam BEEYANBUY Y0472 dáng rộng tay ngắn thời trang cá tính",
                mainImage: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lm5ol70lifc2b3",
                categoryId: 6,
                price: 99000,
                description: "- -Chất Liệu: 100% Cotton, vải mềm, mịn, thoáng mát, không gò bó.\n" +
                    "\n" +
                    "- - Đường may chuẩn, tỉ mỉ, chắc chắn.\n" +
                    "\n" +
                    "-- Mặc ở nhà , đi chơi hay khi tập thể dục. Thích hợp phối với nhiều loại trang phục.\n" +
                    "\n" +
                    "- - Thiết kế hiện đại, trẻ trung, năng động. Dễ kết hợp.",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo thun nam BEEYANBUY Y0443 100% cotton tay lỡ vintage unisex ulzzang",
                mainImage: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-llk4u89c6lrgcf",
                categoryId: 5,
                price: 99000,
                description: "Thông tin sản phẩm Áo thun unisex BEEYANBUY \n" +
                    "\n" +
                    "- - Chất liệu: 100 - Chất liệu: 100% Cotton, vải mềm, chất vải mịn, thoáng mát, không xù.\n" +
                    "\n" +
                    "- - Đường may chuẩn, tỉ mỉ, chắc chắn.\n" +
                    "\n" +
                    "- Mặc ở nhà, đi chơi hoặc khi tập thể thao. Thích hợp phối với nhiều loại trang phục.\n" +
                    "\n" +
                    "- - Kiểu dáng hiện đại, trẻ trung, năng động. Dễ dàng để kết hợp.",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo Giữ Nhiệt Nam Dài Tay Cao Cấp VESCA N",
                mainImage: "https://down-vn.img.susercontent.com/file/ca99e3e0c9a88d480ba39a7922fc9836",
                categoryId: 7,
                price: 99000,
                description: "THÔNG TIN CHI TIẾT \n" +
                    "\n" +
                    "🎗 Chất liệu: Thun lạnh\n" +
                    "\n" +
                    "🎗 Màu sắc: Đen - Xanh than - trắng - ghi\n" +
                    "\n" +
                    "🎗 Thương hiệu: VESCA\n" +
                    "\n" +
                    "🎗 Xuất xứ: Việt Nam \n" +
                    "\n" +
                    "🎗Size: M - L- XL - XXL",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo Giữ Nhiệt Nam Cổ Cao Lót Nỉ Vải Cotton Ấm Áp Thu Đông VESCA N11",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llsqx8hkccm706",
                categoryId: 7,
                price: 99000,
                description: "THÔNG TIN CHI TIẾT \n" +
                    "\n" +
                    "🎗 Chất liệu: Cotton nỉ\n" +
                    "\n" +
                    "🎗 Màu sắc: Xám - Đen - than - Trắng\n" +
                    "\n" +
                    "🎗 Thương hiệu: VESCA\n" +
                    "\n" +
                    "🎗 Xuất xứ: Việt Nam \n" +
                    "\n" +
                    "🎗Size: M - L- XL - XXL",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo chống nắng Nam BL Fashion cổ cao túi khoá kéo,chất liệu vải kim cương thun thoáng khí",
                mainImage: "https://down-vn.img.susercontent.com/file/954245a7c4430ffcb9f07888db233c0a",
                categoryId: 8,
                price: 99000,
                description: "🍀 Áo chống nắng nam cải tiến mới nhất 2020,  với thiết kế khóa kéo che mặt có thể thay thế khẩu trang.\n" +
                    "\n" +
                    "🍀 Thiết kế tinh tế theo dáng áo parka,  tay áo dài,  thiết kế thông minh che được hết mu bàn tay\n" +
                    "\n" +
                    "🍀 Chất liệu vải: cotton mềm mịn,  ép vân sần,  mỏng nhẹ,  thấm hút mồ hôi nhanh. Với công nghệ Nhật dệt vải tiên tiến không phai màu,  không xổ lông,  không gião.\n" +
                    "\n" +
                    "🍀Áo chống nắng với công nghệ UV CUT chống tia tử ngoại ( UV) giúp bảo vệ da khỏi ánh nắng gay gắt (ko cần kem chống nắng)\n" +
                    "\n" +
                    "◙ Giặt là: Sử dụng máy giặt bình thường.\n" +
                    "\n" +
                    "- Size: L 45- 65kg( cao m50-m65)\n" +
                    "\n" +
                    "XL 65-80kg (cao m66-m75)\n" +
                    "\n" +
                    "- Màu sắc: Đen,  Xanh Than,  ghi sáng,  ghi tối",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo chống nắng 1 lớp nam Tezo thoáng khi thấm hút mồ hôi chống tia cực tím vượt trội 2201ACNB01",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ligre1a5uriq0c",
                categoryId: 8,
                price: 99000,
                description: "Chất liệu: Thun Kim Cương ( 93% PE Cool , 7% Spandex )\n" +
                    "\n" +
                    "Màu sắc: 5 màu (ghi nhạt, xanh than, xanh dương, ghi đậm, xanh đậm)\n" +
                    "\n" +
                    "Kiểu dáng: Trẻ trung , năng động \n" +
                    "\n" +
                    "Size: M - L -XL -2XL - 3XL \n" +
                    "\n" +
                    "Nơi sản xuất: Việt Nam\n" +
                    "\n" +
                    "Sản xuất năm: 2022",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
            {
                name: "Áo Polo Nam Regular Minisquare C5, Chất Vải Cotton Thoải Mái, PL0076, SOMEHOW",
                mainImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llozhpgl11b3ad",
                categoryId: 9,
                price: 99000,
                description: "Chất liệu: Thun Kim Cương ( 93% PE Cool , 7% Spandex )\n" +
                    "\n" +
                    "Màu sắc: 5 màu (ghi nhạt, xanh than, xanh dương, ghi đậm, xanh đậm)\n" +
                    "\n" +
                    "Kiểu dáng: Trẻ trung , năng động \n" +
                    "\n" +
                    "Size: M - L -XL -2XL - 3XL \n" +
                    "\n" +
                    "Nơi sản xuất: Việt Nam\n" +
                    "\n" +
                    "Sản xuất năm: 2022",
                createdAt: new Date(),
                updatedAt: new Date(),
                deletedAt: null,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Products", null, {});
    },
};
