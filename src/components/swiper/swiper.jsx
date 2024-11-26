import './swiper.css'
import { register } from 'swiper/element/bundle'

import item1 from '../../data/img/html.jpg'
import item2 from '../../data/img/mobile.jpg'
import item3 from '../../data/img/osn.jpg'
import item4 from '../../data/img/js-brow.webp'
import item5 from '../../data/img/git.jpg'
import item6 from '../../data/img/osn-js.jpg'
import item7 from '../../data/img/top-js.jpg'
import item8 from '../../data/img/react.jpg'
import item9 from '../../data/img/node.jpg'

register()

export const MySwiper = () => {

	return (
		<swiper-container
			pagination='true'
			navigation='true'
			breakpoints={JSON.stringify({
				640: {
					slidesPerView: 1,
					spaceBetween: 10,
					
				},

				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},

				1024: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			})}
		>
			<swiper-slide>
				<img className='imageSlide' src={item1} alt='i1' />
			</swiper-slide>
			<swiper-slide>
				<img className='imageSlide' src={item2} alt='i2' />
			</swiper-slide>
			<swiper-slide>
				<img className='imageSlide' src={item3} alt='i3' />
			</swiper-slide>
			<swiper-slide>
				<img className='imageSlide' src={item4} alt='i4' />
			</swiper-slide>
			<swiper-slide>
				<img className='imageSlide' src={item5} alt='i5' />
			</swiper-slide>
			<swiper-slide>
				<img className='imageSlide' src={item6} alt='i6' />
			</swiper-slide>
			<swiper-slide>
				<img className='imageSlide' src={item7} alt='i7' />
			</swiper-slide>
			<swiper-slide>
				<img className='imageSlide' src={item8} alt='i8' />
			</swiper-slide>
			<swiper-slide>
				<img className='imageSlide' src={item9} alt='i9' />
			</swiper-slide>
		</swiper-container>
	)
}
