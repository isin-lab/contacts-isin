import './header.css'
import { Link } from 'react-router-dom'



const Header = () => {
	return (
		<header className='header'>
			<Link to='/#' className='myLink'>
				<h1 class='logoName'>Константин Волков</h1>
				<p className='logoDirection'>webDeveloper</p>
			</Link>
			<a className='telLink' href='tel:+79522174219'>+7 952 217 42 19</a>
		</header>
	)
}

export default Header
