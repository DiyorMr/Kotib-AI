import React from 'react'
import { planData } from './data'
import { useTranslation } from 'react-i18next'

import './index.scss'

const Plans = () => {
	const { t } = useTranslation()

	return (
		<div className='container'>
			<div className='plans'>
				<h1 className='plans_title'>{t("Affordable Plans for")}
					<br />
					<span className='plans_need'> {t("Every Need")} </span>
				</h1>
				<div className='plans_cards'>
					{planData.map((item, index) => (
						<div className='plans_cards_sale' key={index}>
							<p className='plans_cards_sale_text'>{item.price} {t("sum")}</p>
							<p className='plans_cards_sale_text'>{item.date} {t("hour time")}</p>
							<div className='plans_cards_sale_btn'>
								<p className='plans_cards_sale_btn_text'>{t("purchase")}</p>
							</div>
						</div>
					))}
				</div>
				<div className='plan_card'>
					<div className='plan_card_body'>
						<div className="plan_card_body_info">
							<h1 className='plan_card_body_title'>{t("Big discount")}</h1>
							<div className='plan_card_body_line'></div>
						</div>
						<p className='plan_card_body_text'>17 {t("hour time")}</p>
						<div className='plan_card_price'>
							<p className='plan_card_price_desc'>{t("purchase")}</p>
						</div>
					</div>
					<div className='plan_card_body'>
						<div className="plan_card_body_info">
							<h1 className='plan_card_body_title'>{t("For businesses")}</h1>
							<div className='plan_card_body_line'></div>
						</div>
						<p className='plan_card_body_text'>
							{t("Contact us for a discounted price")}</p>
						<div className='plan_card_price'>
							<p className='plan_card_price_desc'>{t("Connection")}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Plans