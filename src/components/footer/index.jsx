import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'



const Footer = () => {
	const { t } = useTranslation()

	return (
		<div className='footer_wrapper'>
			<div className="container">
				<div className="footer">
					<img src="./logo.svg" alt="" />
					<ul className='footer_menu'>
						<li><a href="#">{t("How it works")}</a></li>
						<li><a href="#">{t("Features")}</a></li>
						<li><a href="#">{t("Pricing")}</a></li>
						<li><a href="#">{t("Blog")}</a></li>
						<li><a href="#">{t("Faqs")}</a></li>
						<li><a href="#">{t("Contact")}</a></li>
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