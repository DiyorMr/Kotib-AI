import { MoveUpRight } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import './index.scss'


const Kotib = () => {
	const { t } = useTranslation()

	return (
		<div className='container'>
			<div className='kotib'>
				<div className='kotib_info'>
					<h1 className='kotib_title'>
						<span>{t("Benefits form using our")}</span>
						<span>{t("Kotib AI")}</span>
					</h1>
					<p className='kotib_text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos hic est ducimus itaque natus dolores deserunt nobis accusamus sint, reprehenderit ex repellendus iusto temporibus?
					</p>
				</div>
				<div className='kotib_cards'>
					<div className="kotib_cards_item">
						<div className="kotib_cards_item_body">
							<p >
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, saepe consequuntur. Molestias esse hic neque.
							</p>
							<span className='kotib_cards_item_body_icon'>
								<MoveUpRight className='icon' />
							</span>
						</div>
						<h1>{t("Multi language")}</h1>
					</div>
					<div className="kotib_cards_item">
						<div className="kotib_cards_item_body">
							<p >
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, saepe consequuntur. Molestias esse hic neque.
							</p>
							<span className='kotib_cards_item_body_icon'>
								<MoveUpRight className='icon' />
							</span>
						</div>
						<h1>{t("For Personalized use")}</h1>
					</div>
					<div className="kotib_cards_item">
						<div className="kotib_cards_item_body">
							<p >
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, saepe consequuntur. Molestias esse hic neque.
							</p>
							<span className='kotib_cards_item_body_icon'>
								<MoveUpRight className='icon' />
							</span>
						</div>
						<h1>{t("Wide target audience")}</h1>
					</div>
					<div className="kotib_cards_item">
						<div className="kotib_cards_item_body">
							<p >
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, saepe consequuntur. Molestias esse hic neque.
							</p>
							<span className='kotib_cards_item_body_icon'>
								<MoveUpRight className='icon' />
							</span>
						</div>
						<h1>{t("Integrational payment")}</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Kotib