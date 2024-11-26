import SectionContacts from "../../components/sections/sectionContacts/sectionContacts";
import SectionSkills from "../../components/sections/sectionSkills/sectionSkills";
import SectionStart from "../../components/sections/sectionStart/sectionStart";
import SectionWeb from "../../components/sections/sectionWeb/sectionWeb";
import { MySwiper } from "../../components/swiper/swiper";
import "./mainPage.css"


const MainPage = () => {
  return (
		<main className='main'>
			<SectionStart />
			<SectionWeb />
			<SectionSkills />
			<MySwiper />
			<SectionContacts />
		</main>
	)
}
 
export default MainPage;