import React from 'react'
import { useTranslation } from 'react-i18next'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { swiperLogoData } from './data'
import './index.scss'

const About = () => {
	const { t } = useTranslation()
	return (
		<div className='container' id='about-project'>
			<div className='about'>
				<div className='about_info'>
					<h1 className='about_info_title'>{t("Your AI-Powered")}
						<span className='about_info_title_design'> {t("Design")} </span> {t("Assistant")}
					</h1>
					<p className='about_info_text'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur  suscipit porro enim quibusdam nam? Vitae est esse similique iusto.
					</p>
					<button className='about_info_btn'>{t("Start now")}</button>
				</div>
				<div className='about_logo'>
					<img src="./about_logo.svg" className='about_logo_img' alt="about logo" />
				</div>
			</div>
			<div className='about_item'>
				<Swiper
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					loop={true}
					slidesPerView={5.5}
					spaceBetween={90}
					modules={[Autoplay]}
				>
					{
						swiperLogoData.map((item, index) =>
							<SwiperSlide key={index}>
								<img src={item} alt="aboutitem" />
							</SwiperSlide>
						)
					}
				</Swiper>

			</div>
		</div>
	)
}

export default About