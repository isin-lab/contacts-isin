const SectionContacts  = () => {
  return (
		<>
			<section className='section'>
				<h2 class='titleSections'>Контакты:</h2>
				<ul>
					<li>
						Email:{' '}
						<a class='link' href='mailto:volkov1305701@yandex.ru'>
							volkov1305701@ya.ru
						</a>
					</li>
					<li>
						WebSite:{' '}
						<a class='link' href='https://isinlab.ru'>
							isinlab.ru
						</a>
					</li>
					<li>
						GitHub:{' '}
						<a class='link' href='https://github.com/isin-lab'>
							isin-lab
						</a>
					</li>
					<li>
						Telegram:{' '}
						<a class='link' href='https://t.me/volkov130'>
							@volkov130
						</a>
					</li>
					<li>
						Telegram channel:{' '}
						<a class='link' href='https://t.me/cyberAndDot'>
							Кибер точка
						</a>
					</li>
				</ul>
			</section>
			<section className='section'>
				<h2 class='titleSections'>Город проживания:</h2>
				<ul>
					<li>Санкт-Петербург</li>
				</ul>
			</section>
		</>
	)
}
 
export default SectionContacts;