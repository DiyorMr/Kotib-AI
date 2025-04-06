import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'


const Contact = () => {
	const { t } = useTranslation()

	return (
		<div className='container' id='contact'>
			<div className="contact">
				<h1 className='contact_title'>
					{t("Let’s get in")}
					<span> {t("touch")} </span>
				</h1>
				<p className='contact_text'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quo natus rem quae temporibus incidunt quibusdam ipsam corrupti, ad voluptatem est. Officia?
				</p>
			</div>
			<div className="contact_info">
				<div className="contact_info_card">
					<input className='contact_info_card_input' type="text" placeholder={t("Text")} />
					<input className='contact_info_card_input' type="text" placeholder={t('Email')} />
					<textarea className='contact_info_card_textarea' name="" id="" placeholder={t("Message")}></textarea>
					<button className='contact_info_card_btn'>{t("Submit")}</button>
				</div>
				<div className='contact_info_touch'>
					<div className="contact_info_touch_send">
						<div className='contact_info_touch_send_email'>
							<img src="./Email.svg" alt="" />
							<p>{t("Email")}</p>
						</div>
						<span className='line' />
						<p className='contact_info_touch_send_text'>support@aimlab.uz</p>
					</div>
					<div className="contact_info_touch_send">
						<div className='contact_info_touch_send_email'>
							<img src="./Phone.svg" alt="" />
							<p>{t("Phone")}</p>
						</div>
						<span className='line' />
						<p className='contact_info_touch_send_text'>+998930576472</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact