import './sectionStart.css'
import myPhoto from '../../../data/img/ya.png'

const SectionStart = () => {
  return (
		<section className='section'>
			<img src={myPhoto} alt='myPhoto' className='myPhoto' />
			<span className='spanGreen'></span>
			<h2 className='mainText'>
				Привет! Меня зовут
				<span className='spanGreen'> Константин Волков</span>, и я
				фронтенд-разработчик, специализирующийся на создании динамичных и
				отзывчивых пользовательских интерфейсов с использованием
				<span className='spanGreen'> React</span>. Несмотря на небольшой опыт
				работы, у меня есть огромное желание учиться и развиваться в этой
				области.
			</h2>
			<h2 className='mainText'>
				Кроме того, я знаком с <span className='spanGreen'>Node.js</span> и
				активно использую его вместе с
				<span className='spanGreen'> Express</span> для разработки серверной
				части веб-приложений. Мой опыт работы с
				<span className='spanGreen'> React</span> позволяет эффективно
				интегрировать фронтенд и бэкенд. Tак же имею опыт работы с базами
				данных, такими как
				<span className='spanGreen'> PostgreSQL</span> и
				<span className='spanGreen'> MongoDB.</span>
			</h2>
			<h2 className='mainText'>
				Я всегда открыт новым проектам и готов сотрудничать с командой
				профессионалов, чтобы совместно создавать качественные продукты, которые
				удовлетворяют потребности клиента. Буду рад возможности обсудить, как
				мои навыки могут помочь вам в реализации ваших идей!
			</h2>
			<h2 className='mainText'>
				В данный момент я занимаюсь разработкой социальной сети для ресторанного
				бизнеса!
			</h2>
		</section>
	)
}
 
export default SectionStart;