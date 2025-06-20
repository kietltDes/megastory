"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  // Section data
  const sections = [

    {
      id: 1,
      number: "",
      title: "",
      content: (
        <>
          <div className="container mx-auto ">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-6">
              <Image
                src="/images/Group1.png"
                alt="Đường đến trường - Nơi tận cùng Mù Cang Chải"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-2 sm:px-4 md:px-20 py-8 md:py-16 items-center">
            <div className="text-justify space-y-4 md:space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-gray-800 font-serif break-words">
                <span className="text-lg md:text-2xl font-bold block mb-2 md:mb-4 text-red-700">
                  “Em tưởng mình biết hết mọi mánh trên mạng…”
                </span>
                Vân Giang (20 tuổi, Hà Nội) từng rất tự tin vào khả năng "bắt bài" mọi thứ trên mạng. Trên Tinder, cô có thể dễ dàng nhận ra một chiếc profile dựng bằng ảnh cũ kỹ hay những câu mở đầu đáng ngờ kiểu "Anh muốn làm bạn thôi". Nhưng kỹ năng soi "red flag" ấy lại bất lực trước một thứ mà cô không ngờ tới – hàng giả thời 4.0.
              </p>
            </div>
            <div className="flex justify-center mt-4 md:mt-0">
              <Image
                src="/images/vangiang.png"
                alt="Vân Giang – Nạn nhân của lừa tình thời công nghệ"
                width={320}
                height={320}
                className="rounded-lg object-cover w-full max-w-[220px] md:max-w-md h-auto"
              />
            </div>
          </div>
          <section className="px-2 sm:px-4 md:px-24 py-8 md:py-16">
            <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
              <p className="text-base md:text-lg leading-loose text-gray-800 font-serif break-words">
                Chai serum ấy có mọi thứ để đánh lừa một con tim nhẹ dạ: một profile <span className="italic">“xịn”</span> với 30 nghìn lượt thích và 5 nghìn bình luận kiểu <span className="italic">“xịn quá chị ơi”</span> hay <span className="italic">“em dùng một tuần da căng bóng”</span>. Video unboxing 4K với bàn tay móng dài phủ chrome, background gỗ óng ánh càng làm tăng độ sang chảnh.
              </p>
              <p className="text-base md:text-lg leading-loose text-gray-800 font-serif break-words">
                Lời quảng cáo thì ngọt như đường: <span className="italic">“Trắng bật tone sau bảy ngày”</span>, <span className="italic">“Bao đổi trả nếu không hiệu quả”</span>. Nhưng khi “gặp mặt”, sự thật phũ phàng lộ diện: mùi sản phẩm giống hệt nước lau sàn pha nước hoa rẻ tiền. Kết cấu loãng tanh, chẳng hề <span className="italic">“sệt như mật ong”</span> như review.
              </p>
              <p className="text-base md:text-lg leading-loose text-gray-800 font-serif break-words">
                Cái kết đắng của sự cả tin này là chỉ sau hai ngày sử dụng, ban đầu chỉ vài nốt đỏ, sau lan dần cả má và trở nên nóng rát khắp mặt.
              </p>
              <blockquote className="border-l-4 border-red-500 pl-4 text-gray-700 italic font-serif text-base md:text-lg">
                “Thật ra, bị người ghost trên app hẹn hò còn đỡ tổn thương hơn. Hàng giả thì để lại hậu quả rõ ràng với một làn da kích ứng, phải trả giá bằng số tiền gấp mấy lần đi da liễu – và rồi cũng chẳng nhận được lời xin lỗi nào cả.”
                <br />
                <span className="block mt-2 text-sm text-gray-500">— Vân Giang chia sẻ với giọng điệu hối hận và tràn ngập sự tiếc nuối</span>
              </blockquote>
              <p className="text-base md:text-lg leading-loose text-gray-800 font-serif break-words">
                Vân Giang không phải là nạn nhân duy nhất của “shopping ghost” – hiện tượng mà Gen Z Việt Nam đang phải đối mặt hàng ngày trên các sàn thương mại điện tử. Những chai serum giả, lọ kem “xịn” hay thực phẩm chức năng “thần thánh” không chỉ làm hao hụt ví tiền mà còn đánh cắp niềm tin vào thế giới số – nơi mà mọi thứ dường như đều có thể “fake”. Để hiểu rõ hơn về quy mô và tác động của vấn nạn hàng giả, hãy cùng nhìn vào những con số đáng giật mình dưới đây.
              </p>
            </div>
            <div className="flex justify-center mt-4">
            <Image
              src="/images/inforgraphicc1.png"
              alt="Vân Giang – Nạn nhân của lừa tình thời công nghệ"
              width={1200}
              height={1200}
              className="w-full h-auto object-cover rounded-md 
             px-4 sm:px-6 md:px-10 lg:px-0 lg:max-w-5xl xl:max-w-6xl mx-auto"
            />

            </div>
            <section className="">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Image Section */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <img 
                    src="/images/vuvantrung.png" 
                    alt="Vân Giang" 
                    width={220}
                    height={220}
                    className="object-cover w-full max-w-[180px] md:max-w-xs h-auto rounded-lg mx-auto"
                  />
                </div>
                {/* Text Section */}
                <section className="w-full max-w-3xl mx-auto px-2 sm:px-4 md:px-0 py-8 md:py-20 space-y-6 md:space-y-12">
                  {/* Tiêu đề section */}
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-900 leading-tight">
                    Niềm tin bị đánh cắp từ những lời quảng cáo ngọt ngào
                  </h2>
                  {/* Highlighted lead quote (blockquote) */}
                  <blockquote className="border-l-4 border-red-500 pl-4 text-gray-700 italic font-serif text-base md:text-lg">
                    “Khi niềm tin vỡ tan, nó không chỉ làm tổn thương một người, mà có thể khiến cả một thế hệ nghi ngờ mọi thứ – kể cả điều đáng tin.”
                    <br />
                    <span className="block mt-2 text-sm text-gray-500">— TS. Nguyễn Hà Thành, chuyên gia tâm lý</span>
                  </blockquote>
                  {/* Nội dung chính chia đoạn dễ đọc */}
                  <div className="space-y-4 md:space-y-8 text-base md:text-lg leading-loose text-gray-800 font-serif break-words">
                    <p>
                      Hậu quả của hàng giả không chỉ dừng ở việc “cháy túi” Gen Z. Những thương hiệu chân chính, dù có giấy tờ rõ ràng, tem chống giả xịn sò, vẫn lao đao vì bị vạ lây.
                    </p>
                    <p>
                      Nguyễn Thanh Vương — CEO một startup chuyên phân phối hàng chính hãng — thở dài: “Chúng tôi có đủ chứng nhận, cam kết đổi trả, nhưng doanh số vẫn tụt 30% chỉ vì Gen Z chẳng còn dám tin ai.”
                    </p>
                    <p>
                      Hàng giả không chỉ lấy tiền – nó lấy luôn niềm tin. Khi niềm tin lung lay, cả hệ sinh thái mua sắm rối loạn: kẻ lừa đảo lẩn mất, người tử tế bị nghi oan, còn người mua thì hoang mang.
                    </p>
                    <p>
                      Vậy tại sao một thế hệ lớn lên với công nghệ, rành rọt mạng xã hội, lại dễ bị “dắt mũi” như thế? Câu trả lời nằm ngay chính nơi họ đặt niềm tin: thế giới số đầy cạm bẫy.
                    </p>
                    {/* Kết lại với 1 đoạn ngắn – đinh */}
                    <p className="font-semibold italic text-gray-700">
                      Nhưng kỹ năng soi "red flag" ấy lại bất lực trước một thứ mà cô không ngờ tới – hàng giả thời 4.0.
                    </p>
                  </div>
                </section>
              </div>
            </section>
          </section>

          {/* Chương 2 */}

          <section className="px-4 sm:px-6 md:px-10 lg:px-24 py-18">
            <div className="w-full max-w-7xl mx-auto">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/Group2.png"
                  alt="Đường đến trường - Nơi tận cùng Mù Cang Chải"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto py-12 space-y-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-900 leading-tight">
                Tâm lý FOMO, áp lực bắt trend
              </h2>

              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-serif">
                Trong thời đại công nghệ phát triển không ngừng, mạng xã hội đã trở thành một phần không thể thiếu trong cuộc sống của người trẻ. Nhờ đó, việc tiếp cận thông tin trở nên dễ dàng hơn bao giờ hết. Thế nhưng, đi kèm với sự tiện lợi ấy là một trạng thái tâm lý ngày càng phổ biến: <strong className="text-red-600">FOMO – nỗi sợ bị bỏ lỡ.</strong>
              </p>

              <figure className="w-full">
                <img
                  src="/images/hoi-chung-so-bo-lo-trong-xa-hoi-hien-dai-1200x800-1.jpg"
                  alt="FOMO len lỏi trong đời sống giới trẻ"
                  className="w-full h-auto object-cover rounded-md shadow-sm"
                />
                <figcaption className="mt-2 text-sm text-gray-600 italic">
                  FOMO – nỗi sợ bị bỏ lỡ đang len lỏi trong đời sống giới trẻ thời đại số. (Ảnh: Prudential)
                </figcaption>
              </figure>

              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-serif">
                FOMO - viết tắt của cụm từ <em>Fear Of Missing Out</em>, chỉ cảm giác lo lắng hoặc bất an khi nghĩ rằng người khác đang có những trải nghiệm thú vị, thành công hơn hoặc đang tận hưởng những cơ hội mà bản thân không có được. 
              </p>

              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-serif">
                Chỉ cần mở điện thoại và truy cập vào những nền tảng phổ biến như Facebook, Instagram hay TikTok, người dùng có thể ngay lập tức nhìn thấy những khoảnh khắc lung linh của người khác: từ những chuyến du lịch trong mơ, các bữa tiệc xa hoa cho tới những cột mốc sự nghiệp đáng ngưỡng mộ...
              </p>

              <figure className="w-full">
                <img
                  src="/images/17450792402.png"
                  alt="Gen Z chịu ảnh hưởng FOMO rõ rệt"
                  className="w-full h-auto object-cover rounded-md shadow-sm"
                />
                <figcaption className="mt-2 text-sm text-gray-600 italic">
                  Gen Z là thế hệ chịu ảnh hưởng FOMO rõ rệt hơn so với các thế hệ trước (Ảnh: VOV)
                </figcaption>
              </figure>

              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-serif">
                Không chỉ khiến khả năng tập trung suy giảm, FOMO còn ảnh hưởng đến cách giới trẻ sử dụng tiền bạc. Một món đồ thời trang mới, một chiếc điện thoại đang “hot”, hay một suất ăn tại nhà hàng nổi tiếng trên Instagram – tất cả đều có thể trở thành mục tiêu mua sắm vì... sợ không theo kịp bạn bè.
              </p>

              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-serif">
                Việc chi tiêu dựa trên cảm giác thiếu sót, thay vì nhu cầu thực sự, khiến nhiều người trẻ rơi vào tình trạng <strong className="text-red-600">"cháy túi"</strong> hoặc sống trong áp lực tài chính dai dẳng. Thậm chí, theo một báo cáo từ ứng dụng quản lý chi tiêu <em>Money Lover</em>, hơn 60% người từ 18–25 tuổi từng mua sắm những món không cần thiết chỉ vì thấy người khác đang sở hữu chúng.
              </p>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-900 leading-tight">
                Quá tin tưởng vào KOL/KOC
              </h2>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                  Xuất phát điểm là những người tiêu dùng thực tế, họ chia sẻ quan điểm và đánh giá dựa trên trải nghiệm sử dụng sản phẩm, tạo ra thông tin chân thực và gần gũi nhất với người xem. Trong một bối cảnh bội thực quảng cáo từ những ngôi sao hay KOL, sự chân thật của KOC đã trở thành điểm tựa niềm tin vững chắc cho người tiêu dùng.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                  Theo báo cáo của <strong>NielsenIQ Việt Nam</strong>, có 50% người tiêu dùng cho biết họ bị ảnh hưởng bởi các KOC trong quá trình ra quyết định. Bên cạnh đó, báo cáo Shoppertainment của TikTok Shop cho thấy 48% người tiêu dùng cũng cho rằng Cộng đồng Sáng tạo nội dung có ảnh hưởng lớn trong việc định hình quyết định và hành vi mua sắm của họ.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                  Người tiêu dùng hiện nay, khi tìm kiếm thông tin trên mạng xã hội trước khi mua hàng, bị "bao vây" bởi vô số nội dung review được tài trợ bởi thương hiệu, mà không thực sự phản ánh trải nghiệm cá nhân của KOC. Nhiều KOC liên tục nhận booking mà không kiểm chứng kỹ lưỡng, dẫn đến hàng loạt nội dung review thiếu chân thực, thiếu chuyên môn, thậm chí còn "tâng bốc" những sản phẩm kém chất lượng. Không ít người tiêu dùng còn hoài nghi khi thấy các KOC liên tục ra mắt video review với tần suất dày đặc. 
                  <strong> Câu hỏi được đặt ra:</strong> liệu trong khoảng thời gian ngắn như vậy, họ có thực sự trải nghiệm đủ để đánh giá sản phẩm một cách chân thực?
                </p>

                <blockquote className="border-l-4 border-red-500 pl-4 text-gray-700 italic font-serif text-base md:text-lg">
                    “Thời điểm các bạn là KOC nhỏ, các bạn sẽ có thời gian làm kĩ. Đến khi các bạn chạy chương trình nhiều, một tháng live đến mười mấy phiên chẳng hạn, thì thời gian chuẩn bị không còn kĩ được nữa. Đội ngũ hỗ trợ thì còn mỏng nên chưa kiểm nghiệm hết được các sản phẩm đã nhận quảng cáo. Vì thế thông tin chia sẻ ra ngoài chỉ dựa vào thông tin một chiều của các nhà bán hàng cung cấp".
                    <br />
                    <span className="block mt-2 text-sm text-gray-500">— Ông Lê Duy Mạnh - Giám đốc Công ty AlphaX</span>
                  </blockquote>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-900 leading-tight">
                Thiếu kỹ năng kiểm chứng nguồn thông tin
              </h2>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                Được biết hiện nay, nhiều nhà kinh doanh đã lợi dụng những kẽ hở trong quản lý thương mại điện tử để quảng cáo sản phẩm không đúng thực chất, đồng thời không cung cấp đầy đủ và minh bạch các thông tin về quy chế hoạt động, chính sách bán hàng... Người tiêu dùng mua sản phẩm của bạn bè, người quen chủ yếu bằng niềm tin, nên rất nhiều người đã mua phải sản phẩm không có nguồn gốc rõ ràng, sản phẩm không đảm bảo về chất lượng, nhưng thường khi mua phải sản phẩm không tốt mới rút kinh nghiệm cho bản thân…
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                Giới trẻ luôn chịu áp lực phải ăn mặc thời thượng, đặc biệt là trong bối cảnh các nền tảng trực tuyến ngày càng phát triển. Xu hướng "outfit of the day" trên Instagram hay những trào lưu biến đổi không ngừng trên TikTok khiến giới trẻ luôn phải chạy theo để bắt kịp.
                Mặc dù nằm ở phân khúc giá tầm thấp, nhưng các sản phẩm thời trang thuộc dòng “thời trang nhanh” lại được đánh giá là dễ gây ra lãng phí. Lý do nằm ở mức giá thấp và sự thay đổi liên tục về mẫu mã khiến sản phẩm cũ mau trở nên lỗi thời, kích thích người dùng liên tục loại bỏ sản phẩm cũ, mua sắm sản phẩm mới. 
                </p>
              </div>
            </div>


          </section>

          {/* Chương 3 */}

          <section className="px-4 sm:px-6 md:px-10 lg:px-24 py-18">
            <div className="w-full max-w-7xl mx-auto">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/Group3.png"
                  alt="Đường đến trường - Nơi tận cùng Mù Cang Chải"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-24 py-12">
              <div className="space-y-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  Giữa cơn lốc hàng giả tràn lan, vậy ai sẽ chịu trách nhiệm?
                </h2>


                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                  Giữa cơn lốc hàng giả tràn lan trên các sàn thương mại điện tử và mạng xã hội, một câu hỏi nhức nhối được đặt ra: Trách nhiệm thuộc về ai? Là doanh nghiệp vô đạo đức, KOL vô tâm hay người tiêu dùng cả tin? Khi dòng chữ “TRÁCH NHIỆM” trở thành một gánh nặng không ai muốn mang, chúng ta cần nhìn rõ từng mắt xích trong chuỗi lừa đảo tinh vi này.
                </p>

                <h3 className="text-xl font-bold text-gray-900">1. Doanh nghiệp và nhãn hàng – Kẻ chủ mưu đứng sau cơn bão hàng giả</h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                  Ngày 21/5 vừa qua, Công an Hà Nội đã triệt phá kho hàng chứa hơn 100 tấn thực phẩm chức năng và thiết bị y tế giả, được ngụy trang tinh vi trong những bao bì mang nhãn hiệu nổi tiếng. Những hình ảnh từ hiện trường cho thấy quy mô sản xuất hàng giả không còn mang tính nhỏ lẻ mà là một dây chuyền công nghiệp hóa tinh vi và có tổ chức. Không chỉ một, hàng loạt vụ việc khác được phanh phui: chủ thương hiệu cà phê đá Thảo bị khởi tố vì tiêu thụ hàng giả; hay vụ bắt giữ “trùm buôn lậu” sản phẩm giả mạo các thương hiệu nổi tiếng toàn cầu.
                </p>
                <figure className="w-full">
                <img
                  src="/images/anh-chup-man-hinh-2025-05-16-luc-202347-17474018874101371871832.webp"
                  alt="FOMO len lỏi trong đời sống giới trẻ"
                  className="w-full h-auto object-cover rounded-md shadow-sm"
                />
                <figcaption className="mt-2 text-sm text-gray-600 italic">
                Lực lượng chức năng kiểm kê số thực phẩm chức năng, thiết bị y tế giả. Nguồn: Nhandan.vn
                </figcaption>
              </figure>
                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                  Phía sau những chiếc hộp sản phẩm sạch sẽ, bao bì bắt mắt và những câu khẳng định chất lượng là một chuỗi các chiêu trò tinh vi được doanh nghiệp sản xuất hàng giả dàn dựng nhằm qua mặt người tiêu dùng và cả hệ thống kiểm định. Họ dựng profile sản phẩm trên TikTok, Shopee, Tiki với hình ảnh long lanh, feedback giả, đánh giá 5 sao ảo; tạo hàng loạt fanpage và tài khoản ảo để seeding và bình luận có lợi; giả mạo chứng chỉ ISO, FDA, in QR code dẫn đến trang web giả mạo; gắn mác "hàng nội địa cao cấp" để khai thác xu hướng ủng hộ hàng Việt.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                  Nhờ những chiêu trò tinh vi được ngụy trang hợp pháp, các doanh nghiệp này ngày càng nguy hiểm hơn. Người tiêu dùng nếu thiếu kiến thức và tâm lý đề phòng rất dễ bị lôi kéo vào vở kịch đã được dựng sẵn.
                </p>

                <h3 className="text-xl font-bold text-gray-900">2. KOL/KOC/Influencer – Người chịu ảnh hưởng hay kẻ tiếp tay?</h3>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                  <p>
                    Trong thời đại mạng xã hội, KOL (người có ảnh hưởng) không chỉ đơn thuần giới thiệu sản phẩm.
                    Họ định hình thói quen tiêu dùng, tạo ra nhu cầu, và thậm chí tác động tới quyết định mua sắm của hàng triệu người trẻ.
                    Nhưng cũng chính họ – đôi khi lại là mắt xích dễ bị thao túng nhất.
                  </p>
                  <p>
                    Một đoạn video từng gây bão: Một KOL nổi tiếng quảng bá sản phẩm “giảm cân thần tốc”, vài ngày sau bị cộng đồng mạng bóc phốt,
                    và rồi là clip xin lỗi bật khóc – cô thừa nhận chính con mình từng uống loại sữa giả do cô quảng cáo.
                    Hay như trường hợp Đoàn Di Băng – quảng bá sản phẩm mỹ phẩm do chính công ty chồng sản xuất,
                    dù biết rõ chất lượng thật sự của sản phẩm là giả và kém an toàn.
                  </p>
                  <p>Ba “góc khuất” phía sau ánh hào quang của quảng cáo bắt đầu lộ diện:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Thứ nhất, “PR vì hợp đồng” – Không kiểm tra, vẫn nhận tiền.</strong> Nhiều KOL/KOC thừa nhận họ chỉ nhận sản phẩm,
                      đọc brief, quay video trong vài giờ đồng hồ mà không kiểm tra kỹ thành phần, nguồn gốc.
                      Lý do: bị ép tiến độ, sợ “mất deal” hoặc bị ràng buộc bởi hợp đồng không cho phép nêu ý kiến tiêu cực.
                      <br />
                      Vụ việc “Chuyện nhà mẹ Linh Bí” năm 2023 là minh chứng. TikToker này đã phải lên tiếng xin lỗi vì quảng cáo sai sự thật
                      một sản phẩm cho trẻ em mà cô chưa từng kiểm tra kỹ lưỡng.
                    </li>
                    <li>
                      <strong>Thứ hai, “Đã kiểm tra kỹ, vẫn bị lừa” – Khi KOL cũng là nạn nhân.</strong> Không ít người ảnh hưởng cho biết họ đã
                      đọc kỹ bảng thành phần, kiểm tra website, thậm chí thử sản phẩm trước khi nhận PR.
                      Nhưng hàng gửi cho họ là loại tốt, còn hàng đại trà lại là giả. Cả hệ thống bao bì, giấy chứng nhận, trang web đều được dựng một cách tinh vi.
                      <br />
                      BTV Quang Minh và MC Vân Hugo từng công khai xin lỗi sau khi vô tình quảng cáo cho loại sữa giả.
                      “Tôi thấy có lỗi khi để con mình uống loại sữa không rõ nguồn gốc mà mình lại là người giới thiệu”, họ chia sẻ.
                    </li>
                    <li>
                      <strong>Thứ ba, “Biết sai nhưng vẫn làm” – Lựa chọn đạo đức hay tiền bạc?</strong> Không ít KOL biết sản phẩm mình quảng cáo
                      là hàng trôi nổi, không rõ nguồn gốc. Nhưng trước sức hút của lợi nhuận, họ vẫn lựa chọn nhắm mắt PR.
                      Có trường hợp một KOL từng bị bóc phốt nhiều lần vẫn tiếp tục PR cho các thương hiệu tương tự, bất chấp dư luận.
                      <br />
                      Đáng chú ý là vụ việc của Đoàn Di Băng, với hình ảnh hào nhoáng trên TikTok, đã quảng bá mỹ phẩm do công ty của chồng sản xuất –
                      một công ty đang bị điều tra vì sản phẩm không đảm bảo chất lượng, gây ảnh hưởng đến sức khỏe người tiêu dùng.
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900">3. KOL có cần chịu trách nhiệm pháp lý?
                </h3>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800 font-serif">
                  <p>
                    Câu trả lời đang dần rõ ràng. Theo bài viết trên <strong>VOV</strong>, pháp luật Việt Nam hiện hành đã có những quy định cụ thể về
                    trách nhiệm của người quảng cáo, trong đó có cả nghệ sĩ và KOL. <strong>Luật An toàn thực phẩm</strong> và <strong>Luật Quảng cáo</strong>
                    đều nhấn mạnh rằng: nếu người quảng cáo đưa ra nội dung sai sự thật, gây nhầm lẫn, ảnh hưởng đến sức khỏe người tiêu dùng thì hoàn toàn
                    có thể bị xử lý hành chính, thậm chí <strong>truy cứu trách nhiệm hình sự</strong> nếu gây hậu quả nghiêm trọng.
                  </p>

                  <p>
                    <strong>Luật sư Bùi Khắc Long</strong>, thuộc Đoàn Luật sư TP. HCM khẳng định:
                  </p>
                  <blockquote className="border-l-4 border-red-500 pl-4 text-gray-700 italic font-serif text-base md:text-lg">
                    “Mọi công dân đều bình đẳng trước pháp luật, khi người nổi tiếng tham gia quảng cáo sản phẩm sai sự thật cần phải xử lý theo đúng mức độ vi phạm.
                    Sự nổi tiếng không thể đứng ngoài trách nhiệm pháp lý và bất kỳ hành vi nào tiếp tay cho sai phạm đều phải được xử lý công minh, đúng pháp luật.
                    Còn người tiêu dùng mua phải hàng kém chất lượng đồng nghĩa quyền lợi hợp pháp bị xâm phạm, hoàn toàn có thể khởi kiện yêu cầu tổ chức,
                    cá nhân kinh doanh bồi thường thiệt hại theo quy định tại Khoản 5 Điều 4 <strong>Luật Bảo vệ quyền lợi người tiêu dùng</strong>.”
                  </blockquote>

                  <figure className="w-full">
                    <img
                      src="/images/luat-su-bui-khac-long.png"
                      alt="FOMO len lỏi trong đời sống giới trẻ"
                      className="w-full h-auto object-cover rounded-md shadow-sm"
                    />
                    <figcaption className="mt-2 text-sm text-gray-600 italic">
                    Theo Luật sư Bùi Khắc Long: Sự nổi tiếng không thể đứng ngoài trách nhiệm pháp lý và bất kỳ hành vi tiếp tay cho sai phạm đều phải được xử lý công minh, đúng pháp luật. Nguồn: vov.vn
                    </figcaption>
                  </figure>

                  <p>
                    Cũng theo chuyên gia này, đã đến lúc Việt Nam cần một <strong>khung pháp lý chuyên biệt hơn</strong> cho hoạt động quảng cáo qua KOL – nơi vai trò,
                    trách nhiệm và giới hạn được quy định rõ ràng, tránh để những “người truyền niềm tin” trở thành công cụ tiếp tay cho gian thương.
                  </p>

                </div>




              </div>
            </section>

            

          </section>

          {/* Chương 4 */}

          <section className="px-4 sm:px-6 md:px-10 lg:px-24 py-18">

          <div className="w-full max-w-7xl mx-auto">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="/images/Group4.png"
                  alt="Đường đến trường - Nơi tận cùng Mù Cang Chải"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-24 py-12 font-serif text-base md:text-lg leading-relaxed text-gray-800 font-serif">
              <p>
                Giữa dòng chảy tiêu dùng hiện đại, người mua dễ dàng bị choáng ngợp bởi hàng hóa đủ chủng loại, bao bì bắt mắt, quảng cáo hoa mỹ.
                Nhưng ẩn sau sự tiện lợi và “giá hời” ấy là một sự thật lạnh lùng:
                <strong> người tiêu dùng Việt Nam đang trở thành nạn nhân </strong>
                trong những ván bài hàng giả ngày càng tinh vi và tàn nhẫn.
              </p>

              <p>
                Từ mỹ phẩm, thực phẩm chức năng đến thuốc chữa bệnh, không một lĩnh vực nào nằm ngoài tầm ngắm của những đường dây làm ăn phi pháp.
              </p>

              <p>
                Dưới đây là dòng thời gian các vụ bê bối hàng giả lớn nhất tại Việt Nam trong gần một thập kỷ qua –
                những câu chuyện khiến dư luận rúng động và đặt lại câu hỏi: <em>ai thực sự đang phải trả giá?</em>
              </p>

              {/* Placeholder cho video nếu chưa có */}
              <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 italic">
                <video src="/videos/video.mp4" className="w-full h-full object-cover" controls />
              </div>

              <p>
                Hàng giả không chỉ là cuộc chơi của những kẻ buôn lậu –
                <strong> đó là một tội ác nhắm vào niềm tin, sức khỏe và sự an toàn của cộng đồng. </strong>
                Người tiêu dùng – tưởng như là kẻ mua – thực ra lại chính là người gánh chịu hậu quả nặng nề nhất:
                <strong> mất tiền, mất sức khỏe, thậm chí là tính mạng.</strong>
              </p>

              <p>
                Các vụ việc nêu trên cho thấy một thực tế đau lòng:
                nếu không có sự vào cuộc quyết liệt và minh bạch từ cơ quan quản lý, báo chí, và chính người tiêu dùng –
                thì cái giá phải trả sẽ không dừng lại ở vài tỷ đồng hay vài năm tù.
                <strong> Nó có thể là cả một thế hệ đánh mất niềm tin </strong>
                vào những gì mình ăn, uống, bôi lên người và dùng để chữa bệnh.
              </p>
            </div>
          </section>

        {/* Chương 5 */}

        <section className="px-4 sm:px-6 md:px-10 lg:px-24 py-18">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/images/Group5.png"
              alt="Đường đến trường - Nơi tận cùng Mù Cang Chải"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-5 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-24 py-12 text-base md:text-lg leading-relaxed text-gray-800 font-serif">
          <p>
            Trong cuộc cách mạng truyền thông số, thế hệ trẻ – đặc biệt là <strong>Gen Z</strong> – ngày càng phụ thuộc vào mạng xã hội và influencer,
            khiến quyết định mua sắm dễ bị chi phối hơn bao giờ hết. Tại Việt Nam, các nghiên cứu đã khẳng định sức lan tỏa mạnh mẽ của KOLs trong việc định hình văn hóa mua sắm:
            ở TP.HCM, các KOLs có uy tín và tương tác tích cực đã trở thành <strong>động lực chính thúc đẩy thói quen mua sách, mỹ phẩm hay thời trang của Gen Z</strong>.
            Báo cáo của KPMG cũng chỉ ra rằng TikTok đóng vai trò quyết định trong hành vi mua sắm của giới trẻ ở khu vực châu Á – Thái Bình Dương, bao gồm Việt Nam.
          </p>

          <p>
            Bên cạnh đó, mạng xã hội trở thành một “<strong>mặt trận nóng</strong>” – nơi mà niềm tin dễ bị khai thác do tốc độ lan truyền quá nhanh, nội dung hấp dẫn và tương tác trực tiếp qua livestream hay video ngắn.
            Gen Z bị thúc đẩy bởi tâm lý <strong>FOMO (sợ bỏ lỡ)</strong>, hấp dẫn bởi trải nghiệm câu chuyện và cảm giác “nên mua ngay” – dẫn đến việc hình thành thói quen mua hàng thiếu kiểm chứng.
            Chính điều này mở đường cho <strong>sản phẩm giả – kém chất lượng</strong> dễ dàng len lỏi, bởi giới trẻ không chắc chắn được sự phân biệt giữa thật – giả, giá trị thực – hình ảnh quảng cáo bắt mắt.
          </p>

          <p>
            Theo các chuyên gia truyền thông, nếu không có truyền thông đúng đắn – minh bạch và có trách nhiệm – thị trường sẽ tiếp tục bị dẫn dắt bởi những cú hích cảm xúc nhất thời,
            trong khi <strong>niềm tin thực sự vào thương hiệu bị phai mờ</strong>.
            Trách nhiệm của truyền thông lúc này không chỉ là lan truyền thông tin, mà còn là <strong>thẩm định, xác thực nội dung</strong> để bảo vệ người trẻ khỏi những cám dỗ của thị trường hàng giả.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 text-gray-700 italic font-serif text-base md:text-lg">
            Theo TS. Trần Xuân Tiến, “hàng loạt sản phẩm giả bị phanh phui làm suy giảm niềm tin xã hội – điều vốn là nền tảng mềm cho sự phát triển bền vững của một quốc gia.”
            Ông khẳng định rằng báo chí chính thống cần đóng vai trò tiên phong để bảo vệ sự thật, định hướng dư luận, đồng thời phản biện người có sức ảnh hưởng
            nếu quảng cáo sai sự thật hoặc giới thiệu sản phẩm kém minh bạch.
          </blockquote>

          <blockquote className="border-l-4 border-red-500 pl-4 text-gray-700 italic font-serif text-base md:text-lg">
            Ông Trần Hữu Linh – Tổng Cục trưởng Quản lý thị trường – đánh giá rằng <strong>80–90% hàng giả nằm trên nền tảng số</strong>,
            đặc biệt là mạng xã hội và sàn thương mại điện tử. Ông cho rằng đây là “<em>mặt trận rất nóng trong việc chống hàng giả</em>”
            và cần kết hợp giữa kiểm tra, xử phạt và tăng cường truyền thông nhận diện.
          </blockquote>
        </div>
        <article className="space-y-5 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-24 py-12 text-base md:text-lg leading-relaxed text-gray-800 font-serif">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Góc nhìn từ người làm trong lĩnh vực truyền thông
          </h2>

          <p>
            Chị Thanh Thủy – Trưởng phòng Marketing tại một agency truyền thông – chia sẻ góc nhìn thực tế từ người trong nghề:
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
            “Làm truyền thông mà nhắm mắt chạy chiến dịch cho sản phẩm không rõ ràng thì không khác gì tiếp tay. Uy tín của agency không chỉ đến từ độ viral, mà còn từ sự minh bạch và trách nhiệm với người tiêu dùng.”
          </blockquote>

          <h3 className="text-xl font-semibold mt-6">Người làm truyền thông kiểm tra sản phẩm ra sao?</h3>
          <p>
            Trước khi nhận chiến dịch, team của chị Thủy thực hiện bước đầu tiên là rà soát sản phẩm và thương hiệu đối tác – công việc được xem là “tốn sức nhất”:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Dùng thử sản phẩm:</strong> Với các sản phẩm sức khỏe hay mỹ phẩm, yêu cầu gửi mẫu để đội thử nghiệm, đảm bảo hiểu rõ chất lượng trước khi quảng bá.
            </li>
            <li>
              <strong>Tra cứu thương hiệu:</strong> Chủ động tìm kiếm thông tin từ mạng xã hội, diễn đàn, hoặc cơ quan chức năng. Những phản hồi tiêu cực lặp lại được xem là “cờ đỏ”.
            </li>
            <li>
              <strong>Kiểm tra thông tin quảng cáo:</strong> Các tuyên bố quá hứa hẹn như “100% tự nhiên” hay “hiệu quả sau 7 ngày” đều bị đặt câu hỏi: “Đâu là bằng chứng?”
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Có quy trình thẩm định chặt chẽ</h3>
          <p>
            Theo chị Thủy, agency của chị có checklist riêng cho bước xác minh trước chiến dịch:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Giấy tờ pháp lý:</strong> Gồm giấy đăng ký kinh doanh, giấy phép quảng cáo, công bố sản phẩm, và kiểm định chất lượng (nếu có).
            </li>
            <li>
              <strong>Thành phần và công dụng:</strong> Phải có bảng thành phần chi tiết. Các sản phẩm nhạy cảm phải có cam kết không chứa chất cấm.
            </li>
            <li>
              <strong>Cam kết trách nhiệm:</strong> Đối tác phải ký xác nhận thông tin trung thực, để tránh trường hợp agency bị liên đới khi xảy ra khủng hoảng.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Có dám từ chối khách hàng “mờ ám”?</h3>
          <p>
            Dù áp lực tài chính lớn, chị Thủy khẳng định không thỏa hiệp với sự mập mờ:
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
            “Chúng tôi đã từng từ chối vài thương hiệu dù ngân sách lớn, chỉ vì họ né tránh trả lời những câu hỏi cơ bản như: ‘Sản phẩm này đã công bố lưu hành chưa?’ hay ‘Giấy kiểm định đâu?’ Xin lỗi, làm lâu năm không đồng nghĩa với minh bạch.”
          </blockquote>

          <div className="bg-gray-100 p-4 mt-4 border-l-4 border-gray-400 italic">
            “Tôi từng từ chối một chiến dịch dù ngân sách hấp dẫn, chỉ vì họ gửi bản scan giấy kiểm định mờ và né tránh trả lời. Uy tín không thể xây bằng sự mập mờ.”
          </div>

          <h3 className="text-xl font-semibold mt-6">Góc nhìn từ thế hệ trẻ trong ngành</h3>
          <p>
            Chị Nguyễn Phương – cựu sinh viên truyền thông, hiện làm tại một start-up mỹ phẩm – nhận định:
          </p>

          <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700">
            “Thế hệ mình biết nhiều hơn về truyền thông sạch, nhưng cám dỗ cũng nhiều hơn. Nếu không tỉnh táo, rất dễ trượt.”
          </blockquote>
        </article>

        <article className="pspace-y-5 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-24 py-12 text-base md:text-lg leading-relaxed text-gray-800 font-serif">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Làm truyền thông: Khi đạo đức và hồ sơ cá nhân va chạm
          </h2>

          <section>
            <h3 className="text-2xl font-semibold mt-6">Có quy trình thẩm định, rà soát giấy tờ hay không?</h3>
            <p className="py-2 text-gray-700">Có – và bắt buộc phải có.</p>
            <p>
              Agency chúng tôi có hẳn một checklist thẩm định trước chiến dịch, bao gồm:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Giấy tờ pháp lý:</strong> Gồm giấy đăng ký kinh doanh của công ty đối tác và các giấy tờ chuyên ngành: giấy phép quảng cáo, công bố sản phẩm, kiểm định chất lượng – đặc biệt với ngành hàng đặc thù như thực phẩm chức năng, mỹ phẩm, thiết bị y tế.
              </li>
              <li>
                <strong>Thành phần & công dụng:</strong> Với các sản phẩm nhạy cảm, chúng tôi yêu cầu bảng thành phần chi tiết và cam kết không chứa chất cấm. Một số start-up còn chưa nắm rõ quy định, nên chúng tôi hỗ trợ chuẩn hóa giấy tờ – nhưng không bao giờ bỏ qua các rủi ro.
              </li>
              <li>
                <strong>Cam kết trách nhiệm:</strong> Trong trường hợp đặc biệt, chúng tôi yêu cầu đối tác ký xác nhận mọi thông tin cung cấp là đúng sự thật. Đây là bước để bảo vệ đôi bên – và buộc khách hàng không thể “vô tình quên” cung cấp thông tin.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mt-6">Có dám từ chối khách hàng “mờ ám”?</h3>
            <p>
              Chị Thủy chia sẻ:
            </p>
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
              “Thẳng thắn mà nói, có. Chúng tôi từng từ chối vài thương hiệu dù ngân sách lớn, chỉ vì họ né tránh trả lời những câu hỏi cơ bản như: ‘Sản phẩm này đã công bố lưu hành chưa?’ hay ‘Giấy kiểm định chất lượng đâu?’
            </blockquote>
            <p>
              Có lần, họ gửi bản scan giấy tờ rất mờ, và khi chúng tôi hỏi lại thì chỉ nhận được câu: “Chị cứ yên tâm, bên em làm lâu năm rồi.” Nhưng làm lâu năm không có nghĩa là minh bạch.
            </p>
            <p>
              Người làm truyền thông cần đủ tỉnh táo để phân biệt giữa “đang hỗ trợ khách hàng” và “đang tiếp tay”. Nếu vì ngân sách mà làm ngơ với dấu hiệu bất thường, thì khi khủng hoảng xảy ra – agency cũng bị gọi tên, không chỉ khách hàng.
            </p>

            <blockquote className="bg-gray-100 p-4 mt-4 border-l-4 border-gray-500 italic text-gray-800">
              “Tôi từng từ chối một chiến dịch dù ngân sách hấp dẫn, chỉ vì họ gửi bản scan giấy kiểm định mờ và né tránh trả lời. Uy tín không thể xây bằng sự mập mờ.”
            </blockquote>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mt-6">Góc nhìn từ thế hệ trẻ trong ngành</h3>
            <p>
              “Thế hệ mình biết nhiều hơn về truyền thông sạch, nhưng cám dỗ cũng nhiều hơn. Nếu không tỉnh táo, rất dễ trượt.”
            </p>
            <p className="italic text-sm text-gray-600">— Chị Nguyễn Phương, nhân sự truyền thông tại một start-up mỹ phẩm</p>

            <h4 className="text-xl font-semibold mt-4">Gen Z có thực sự tỉnh táo hơn?</h4>
            <p>
              Gen Z tỉnh táo hơn ở mặt nhận thức, nhưng đồng thời cũng phải đối mặt với nhiều áp lực hơn. Ngay từ khi còn học trường Báo, tụi mình đã biết tới các khái niệm như truyền thông sạch, tính minh bạch dữ liệu... Nhiều bạn còn rất giỏi trong việc “đọc vị” các chiến dịch sai lệch.
            </p>
            <p>
              Tuy nhiên, thực tế không trắng đen rõ ràng như sách vở. Nhiều bạn có lý tưởng, nhưng khi đối mặt với KPI, deadline, hoặc mong muốn “có campaign xịn” để làm đẹp hồ sơ – thì bắt đầu thoả hiệp. Nên tỉnh táo là có, nhưng giữ được nó lâu hay không – lại là chuyện khác.
            </p>

            <h4 className="text-xl font-semibold mt-4">Lần đầu “chạm trán” với sản phẩm mờ ám</h4>
            <p>
              Lần đầu mình phát hiện bất thường là khi làm cộng tác viên truyền thông cho một thương hiệu thực phẩm chức năng. Mình được giao viết nội dung và triển khai mini campaign. Mọi thứ đều ổn cho đến khi mình hỏi xin giấy phép quảng cáo và kiểm nghiệm thành phần – và bị “seen” toàn tập.
            </p>
            <p>
              Mình tra thử trên hệ thống công bố của Bộ Y tế thì phát hiện: tên sản phẩm không tồn tại. Khi hỏi lại, quản lý chỉ nói: “Bên đó bảo cứ làm đi, họ đang làm giấy rồi.” Tối đó mình suy nghĩ rất nhiều. Mới đi làm, công việc này là bước đệm tốt. Nhưng cuối cùng mình chọn nghỉ và từ chối nhận thù lao cho phần đã làm.
            </p>
            <p>
              Vì mình tự hỏi: “Chuyện này mà bung ra, tên mình cũng có trong bài viết. Lúc đó, ai sẽ chịu trách nhiệm?”
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mt-6">Giữa “làm đẹp hồ sơ” và giữ đạo đức – chọn gì?</h3>
            <p>
              Mình chọn đạo đức cá nhân. Hồ sơ thì có thể làm lại. Nhưng lòng tin vào bản thân, và uy tín với người trong nghề – mất rồi thì khó lấy lại.
            </p>
            <p>
              Nhiều bạn rất giỏi “đánh bóng profile” – điều đó không sai. Nhưng có một ranh giới mong manh giữa “tự hào vì việc mình làm” và “bị cuốn vào vòng xoáy cần cái gì đó để khoe”. Một số bạn chọn làm những dự án viral bằng mọi giá, kể cả khi biết sản phẩm đó có vấn đề – miễn có cái ghi vào CV.
            </p>
            <p>
              Nhưng mình nghĩ đơn giản thế này: nếu ngay từ đầu đã chọn cách làm không đúng, thì dù CV có đẹp đến đâu – mình cũng không thể tự tin nhìn thẳng vào người tuyển dụng.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              “Hồ sơ thì có thể làm lại, nhưng lòng tin và đạo đức nghề nghiệp – mất rồi là mất luôn.”
            </blockquote>

            <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700 mt-2">
              “CV có thể đẹp, nhưng nếu bản thân không tự tin với cách mình đã làm, thì đẹp để làm gì?”
            </blockquote>
          </section>
        </article>



        </section>
        
        </>
      ),
    },

  ]

  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f2ed] bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">& Co.</div>
          <nav className="flex items-center gap-8">
            <Link href="/" className="text-xs uppercase hover:underline">
              Home
            </Link>
          <button
            onClick={() => {
              const targetSection = document.querySelector('#target-section');
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-xs uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
          >
            Let'sTalk
          </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] mb-8">
              <span className="block mb-4">KHI NIỀM TIN VỤN VỠ,</span>
              <span className="block mb-4">NGƯỜI TRẺ </span>
              <span className="block">VÀ CƠN BÃO HÀNG GIẢ</span>
            </h1>

            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="relative w-full rounded-lg overflow-hidden">
            <Image
              src="/images/poster.png"
              alt="Đường đến trường - Nơi tận cùng Mù Cang Chải"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* How We Work Section with Long Form Layout */}
      <section id="target-section" className="py-8 px-4">

      {/* Target Section - Add this section where you want to scroll to */}

          {/* Long form sections */}
          <div className="space-y-24">
            {sections.map((section) => (
              <div key={section.id} className="border-t border-gray-300 pt-12">
                <div className="flex items-center  ">
                  <span className="text-sm mr-4">{section.number}</span>
                  <h3 className="text-3xl md:text-4xl uppercase font-medium">{section.title}</h3>
                </div>
                <div className="py-10 md:px-12 md:py-14 lg:pl-16 lg:pr-8 tracking-wide leading-8">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl uppercase mb-12">Our Team</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="relative">
              <div className="bg-[#333333] rounded-lg p-6 text-white transform rotate-3 mb-4">
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Tomas Briks"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Tomas Briks</h3>
                <p className="text-xs">
                  A senior designer with 14 years experience. He leads our design team and has a passion for typography
                  and creating visual details.
                </p>
              </div>
              <p className="text-xs text-gray-500">
                <span className="font-medium">Edgar Po</span>
                <br />
                Works worked as a designer for 14 years, primarily in identity design and brand strategy.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-[#f0ebe5] rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Sandra Player</h3>
              <p className="text-xs">
                A diligent and experienced operator, she brings a fresh perspective to our creative process.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-[#f0ebe5] rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Katie Hopwood</h3>
              <p className="text-xs">
                Katie is PR's Studio Assistant, making sure internal operations run smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
