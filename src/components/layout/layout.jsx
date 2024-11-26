import './layout.css'
import Header from '../header/header'


const Layout = ({ children }) => {
	return (
		<div className='layoutContainer'>
			<Header />
			{children}
		</div>
	)
}

export default Layout
