import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'
import Section from './section'
import { modalData } from './section/data'


const Faq = () => {
	const { t } = useTranslation()
	return (
		<div className='container' id='faqs'>
			<div className="faq">
				<div className="faq_info">
					<h1 className='faq_title'>
						{t('Frequently Asked')}
						<br />
						<span className='span'>{t("Questions")}</span>
					</h1>
					<p className='faq_text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reprehenderit sapiente necessitatibus officiis molestias inventore magnam, praesentium, iusto officia, nulla quae cupiditate.
					</p>
				</div>
				<div className="collapse_box" >
					{
						modalData.map((item, index) =>
							<Section title={item.title} key={index}>
								{item.text}
							</Section>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default Faq