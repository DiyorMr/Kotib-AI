import { MoveLeft, MoveRight } from 'lucide-react'
import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { swiperData } from './data'
import './index.scss'



const Storie = () => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<div className='container' id='feedbacks'>
				<div className="storie">
					<h1 className='storie_title'>
						{t("Customer")}
						<span className='span'> {t("Success")} </span>
						<br />
						{t("Stories")}
					</h1>
					<p className='storie_text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dicta, expedita totam, quaerat ipsam soluta reiciendis ipsa minus numquam, aperiam porro blanditiis.
					</p>
				</div>
			</div>
			<Swiper
				navigation={{
					prevEl: ".swiper_box_btn_prev",
					nextEl: ".swiper_box_btn_next",
				}}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				loop={true}
				centeredSlides={true}
				slidesPerView={2.7}
				spaceBetween={60}
				modules={[Navigation, Autoplay]}
				className="swiper_box"
			>
				<div className="swiper_box_btn">
					<button className="swiper_box_btn_prev">
						<MoveLeft className='icon' />
					</button>
					<button className="swiper_box_btn_next">
						<MoveRight className='icon' />
					</button>
				</div>
				{
					swiperData.map((item, index) =>
						<SwiperSlide key={index}>
							<div className="slide_card">
								<div className='slide_card_title'>
									<img src={item.img} alt="" />
									<h1 className='slide_card_title_name'>{item.name}</h1>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolores incidunt provident quos exercitationem, obcaecati at corrupti ratione nisi. Architecto, nisi ipsam.
								</p>
							</div>
						</SwiperSlide>
					)
				}

			</Swiper>
		</Fragment>
	)
}

export default Storie