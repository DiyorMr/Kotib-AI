import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'



const Footer = () => {
	const { t } = useTranslation()

	return (
		<div className='footer_wrapper'>
			<div className="container">
				<div className="footer">
					<a href="#">
						<img src="./logo.svg" alt="" />
					</a>
					<ul className='footer_menu'>
						<li><a href="#how-it-works">{t("How it works")}</a></li>
						<li><a href="#features">{t("Features")}</a></li>
						<li><a href="#pricing">{t("Pricing")}</a></li>
						<li><a href="#feedbacks">{t("Blog")}</a></li>
						<li><a href="#faqs">{t("Faqs")}</a></li>
						<li><a href="#contact">{t("Contact")}</a></li>
					</ul>
				</div>
				<div className='line' />
				<div className="footer_help">
					<div className='footer_help_text'>
						<p>{t("Privacy Policy")}</p>
						<p>{t("Terms & Conditions")}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer