import { Rocket, Sparkles, Upload } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'


const Works = () => {
	const { t } = useTranslation()

	return (
		<div className='container' id="how-it-works">
			<div className='works'>
				<h1 className='works_title'>
					{t("How it")}
					<span> {t("Works")} </span>
					?
				</h1>
				<p>
					{t("Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly. Follow these simple steps to turn your vision into reality.")}
				</p>
			</div>

			<div className='work_cards'>
				<div className='work_cards_item'>
					<div className='work_cards_item_card'>
						<div className="work_cards_item_card_icon">
							<Upload className='icon' />
						</div>
						<div className="work_cards_item_card_body">
							<h1 className='work_card_upload_title'>
								{t("Upload Brief")}
							</h1>
							<p className='work_card_upload_text'>
								{t("Share your project details and let our AI grasp your vision.")}
							</p>
						</div>
					</div>
				</div>
				<div className='work_cards_item'>
					<div className='work_cards_item_card'>
						<div className="work_cards_item_card_icon">
							<Sparkles className='icon' />
						</div>
						<div className="work_cards_item_card_body">
							<h1 className='work_card_upload_title'>
								{t("Generate Designs")}
							</h1>
							<p className='work_card_upload_text'>
								{t("Watch as our AI crafts unique design ideas tailored to you.")}
							</p>
						</div>
					</div>
				</div>
				<div className='work_cards_item'>
					<div className='work_cards_item_card'>
						<div className="work_cards_item_card_icon">
							<Rocket className='icon' />
						</div>
						<div className="work_cards_item_card_body">
							<h1 className='work_card_upload_title'>
								{t("Refine Creation")}
							</h1>
							<p className='work_card_upload_text'>
								{t("Perfect your chosen concept with easy-to-use AI tools.")}
							</p>
						</div>
					</div>
				</div>
				<div className='vector-top'>
					<img src="./vector1.svg" alt="" />
				</div>
				<div className='vector-bottom'>
					<img src="./vector2.svg" alt="" />
				</div>
			</div>
		</div>
	)
}

export default Works