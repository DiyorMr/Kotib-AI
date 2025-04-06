import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../language-switcher'
import './index.scss'

const Navbar = () => {
	const { t } = useTranslation()
	return (
		<div className="container">
			<div className='navbar'>
				<a href="logo" className='navbar_logo'>
					<img src="./logo.svg" alt="logo" />
				</a>
				<ul className='navbar_pages'>
					<li><a href="#about-project">{t("About project")}</a></li>
					<li><a href="#how-it-works">{t("How it works")}</a></li>
					<li><a href="#feedbacks">{t("Feedbacks")}</a></li>
				</ul>
				<div className='navbar_toolbar'>
					<LanguageSwitcher />
					<button className='navbar_btn'>{t("Get started")}</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar