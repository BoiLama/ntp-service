import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Group,
	SimpleCell,
	Div
}	from '@vkontakte/vkui';

import {
	Icon28NameTagOutline,
	Icon28MessagesOutline,
	Icon28FavoriteOutline,
	Icon28WarningTriangleOutline,
	Icon28EmployeeOutline
}	from '@vkontakte/icons';

const Admin = props => {
	const [id, setId] = useState("null");	//	ID VK
	const [reiting, setReiting] = useState("Данные не получены");	//	Рейтинг
	const [warning, setWarning] = useState("Данные не получены");	//	Преды
	const [simv, setSimv] = useState("Данные не получены");	//	Символы
	const [role, setRole] = useState("Данные не получены");	//	Роль
	useEffect(() => {
		bridge 
		.send('VKWebAppGetUserInfo') 
		.then(data => { 
			setId(data.id)
		});
	}, [ ] );

/*	Рейтинг	*/	  fetch("https://bots.boilama.xyz/ntp/stat/user.php?key=pJR295F0PqIHDTBYHgs6BBfGG&user=" + id) .then(data => data.json()) .then(data => { if (data) {setReiting(data[0].ball)}  else {console.log('ошибка')}}) .catch(err => {console.log(err)})
/*	Преды	*/	  fetch("https://bots.boilama.xyz/ntp/stat/user.php?key=pJR295F0PqIHDTBYHgs6BBfGG&user=" + id) .then(data => data.json()) .then(data => { if (data) {setWarning(data[0].warn)} else {console.log('ошибка')}}) .catch(err => {console.log(err)})
/*	Символы	*/	  fetch("https://bots.boilama.xyz/ntp/prof/user.php?key=pJR295F0PqIHDTBYHgs6BBfGG&user=" + id) .then(data => data.json()) .then(data => { if (data) {setSimv(data[0].ball)} else {console.log('ошибка')}}) .catch(err => {console.log(err)})
/*	Роль	*/	  fetch("https://bots.boilama.xyz/ntp/role/user.php?key=pJR295F0PqIHDTBYHgs6BBfGG&user=" + id) .then(data => data.json()) .then(data => { if (data) {setRole(data[0].ball)} else {console.log('ошибка')}}) .catch(err => {console.log(err)})
	return (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="Debug"/>}>Карточка [DEBUG]</PanelHeader>
		<Group>
			<Group mode="plain">
				<Div>
					<SimpleCell before={<Icon28NameTagOutline />}>ID VK: {id}</SimpleCell>
				</Div> 
    		</Group>
			<Group mode="plain">
				<Div>
				<SimpleCell before={<Icon28MessagesOutline />} description="Символы">{simv}</SimpleCell>
				<SimpleCell before={<Icon28FavoriteOutline />} description="Рейтинг">{reiting}</SimpleCell>
				<SimpleCell before={<Icon28WarningTriangleOutline />} description="Предупреждений">{warning}</SimpleCell>
				<SimpleCell before={<Icon28EmployeeOutline />} description="Роль">{role}</SimpleCell>
				</Div> 
    		</Group>
		</Group>
	</Panel>
	);
};

Admin.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Admin;