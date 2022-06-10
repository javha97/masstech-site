import { Typography } from '@mui/material';
import React from 'react';
import { Container, MainHeading } from '../../globalStyles';
import { UselanguageContext } from '../../languageContext';
import { HeroVideo, HeroSection } from './HeroStyles';
const Hero = () => {
	const { language } = UselanguageContext()
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Mass Tech Company</MainHeading>
				<Typography variant="h4" component="div" sx={{ color: "white", textAlign: 'center' }}>
					Манай компаний үүсэл
				</Typography>
				<Typography variant="h5" component="div" sx={{ color: "white", height: '290px', overflowY: 'scroll' }}>
					{language === 10 ? "“Масс Теч” ХХК нь 2017 онд байгуулагдсан бөгөөд ионжуулагч цацрагийн үүсгүүр ашигладаг уул уурхай, аж үйлдвэр, цацраг идэвхт ашигт малтмал, эмнэлгийн оношлогоо эмчилгээ, зам, каротожийн судалгаа, гадаад орчин, хил гаалийн салбаруудад цацрагийн үүсгүүр, цацрагийн хэмжилтийн багаж тоног төхөөрөмж, цөмийн болон цацрагийн аюулгүй байдлыг хангах хамгаалалтын хувцас хэрэгслийг дэлхийд тэргүүлэх үйлдвэрлэгчдээс албан ёсны эрхтэйгээр нийлүүлэх, худалдаалах чиглэлээр үйл ажиллагаа эрхэлдэг компани юм. Манай компани нь эх орондоо болон гадаад улсуудад цөмийн технологи, цөмийн инженер, электроникийн чиглэлээр бакалавр, магистрын зэргээ хамгаалсан мэргэжлийн, мэргэшсэн боловсон хүчинтэй. Цөмийн технологийн салбарын материаллаг баазыг бэхжүүлэх, өндөр технологийг монгол улсад нутагшуулахад төрийн болон хувийн хэвшлийн байгууллагуудтай хамтран ажиллаж нийлүүлсэн бараа бүтээгдэхүүнийхээ чанар аюулгүй байдалд мэрэгжлийн заавар зөвөлгөө өгч, цацрагийн хэмжилтийн багаж тоног төхөөрөмжүүддээ сургалт явуулж, засвар үйчилгээ хийж, хамтран ажилладаг."
						: 'lmao'}
				</Typography>

			</Container>
		</HeroSection>
	);
};

export default Hero;
