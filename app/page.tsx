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
                  src="/images/Group1.png"
                  alt="Đường đến trường - Nơi tận cùng Mù Cang Chải"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
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
            </div>


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
