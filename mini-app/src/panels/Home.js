import React, {useState, useEffect} from 'react';
import bridge from "@vkontakte/vk-bridge";

import {
	Panel,
	PanelHeader,
	Header,
	Group,
	Cell,
	Div,
	Footer
}	from '@vkontakte/vkui';

import {
	Icon28UserOutline,
	Icon28WorkOutline,
	Icon28WriteOutline,
	Icon28HomeOutline,
	Icon28FavoriteOutline,
	Icon28ChatsOutline,
	Icon28MessagesOutline,
	Icon28WarningTriangleOutline,
	Icon28PaperplaneOutline
}	from '@vkontakte/icons';

const Home = ({ id, go }) => {
	const [reiting, setReiting] = useState("Данные не получены");	//	Рейтинг
	const [simv, setSimv] = useState("Данные не получены");	//	Символы
	const [warning, setWarning] = useState("Данные не получены");	//	Преды
	const [ids, setIds] = useState("null");	//	ID VK
	useEffect(() => {bridge .send('VKWebAppGetUserInfo') .then(data => { setIds(data.id) });}, [ ] );
/*	Рейтинг	*/	  fetch("https://bots.boilama.xyz/ntp/stat/user.php?key=pJR295F0PqIHDTBYHgs6BBfGG&user=" + ids) .then(data => data.json()) .then(data => { if (data) {setReiting(data[0].ball)}  else {console.log('ошибка')}}) .catch(err => {console.log(err)})
/*	Символы	*/	  fetch("https://bots.boilama.xyz/ntp/prof/user.php?key=pJR295F0PqIHDTBYHgs6BBfGG&user=" + ids) .then(data => data.json()) .then(data => { if (data) {setSimv(data[0].ball)} else {console.log('ошибка')}}) .catch(err => {console.log(err)})
/*	Преды	*/	  fetch("https://bots.boilama.xyz/ntp/stat/user.php?key=pJR295F0PqIHDTBYHgs6BBfGG&user=" + ids) .then(data => data.json()) .then(data => { if (data) {setWarning(data[0].warn)} else {console.log('ошибка')}}) .catch(err => {console.log(err)})
	return(
	<Panel id={id}>
		<PanelHeader>НТП Панель</PanelHeader>
		<Group> 
			<Div>
				<Cell expandable before={<Icon28FavoriteOutline/>} description="Рейтинг" >{reiting}</Cell>
				<Cell expandable before={<Icon28MessagesOutline/>} description="Символы агента" >{simv}</Cell>
				<Cell expandable before={<Icon28WarningTriangleOutline/>} description="Предупреждений" >{warning}</Cell>
			</Div>
		</Group>
		<Group header={<Header mode="secondary">Звёзды НТП</Header>}>
			<Div>
				<Cell expandable before={<Icon28FavoriteOutline/>} mode="secondary" onClick={go} data-to="Admin">Администрация</Cell>
				<Cell expandable before={<Icon28UserOutline/>} mode="secondary" onClick={go} data-to="Drugie">Другие</Cell>
			</Div>
		</Group>
		<Group header={<Header mode="secondary">Ссылки</Header>}>
			<Div>
				<Cell href="https://vk.com/novayatp" target="_blank" expandable before={<Icon28HomeOutline/>}>Основная группа</Cell>
				<Cell href="https://vk.com/copyclub_novayatp" target="_blank" expandable before={<Icon28WriteOutline/>}>Копирайтеры НТП</Cell>
				<Cell href="https://vk.com/novayatp_team" target="_blank" expandable before={<Icon28WorkOutline/>}>NTP Team</Cell>
				<Cell href="https://vk.me/join/OgYEsCqtzFg9LdHQumyYSovCAE8gsTyJci8=" target="_blank" expandable before={<Icon28ChatsOutline/>}>Общая беседа</Cell>
				<Cell href="https://t.me/novayatp" target="_blank" expandable before={<Icon28PaperplaneOutline/>}>Телеграм канал</Cell>
			</Div> 
    	</Group>
		<Footer>С любовью, BoiLama</Footer>
		<Footer mode="secondary" onClick={go} data-to="Debug">v1.3.7</Footer>
	</Panel>
	);
};

export default Home;