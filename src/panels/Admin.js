import React from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Header,
	Button,
	Group,
	SimpleCell,
	UsersStack,
	TabbarItem,
	Cell,
	Div,
	Avatar,
	Text
}	from '@vkontakte/vkui';

import {
	Icon28FavoriteCircleFillYellow,
	Icon28UserOutline,
	Icon28WorkOutline,
	Icon28WriteOutline,
	Icon28HomeOutline,
	Icon16Add,
	Icon16Like
}	from '@vkontakte/icons';

const Admin = props => (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Администрация</PanelHeader>
			<Group><SimpleCell description="HiFenix. Работает с 07.08.2018">Артем Лебедев</SimpleCell></Group>
			<Group><SimpleCell description="BoiLama. Работает с 21.11.2018">Даниил Путинцев</SimpleCell></Group>
			<Group><SimpleCell description="Бурундук. Работает с 23.09.2019">Евгений Иванов</SimpleCell></Group>
			<Group><SimpleCell description="Роджер. Работает с 19.07.2019">Серёга Черных</SimpleCell></Group>
			<Group><SimpleCell description="Хайп. Работает с 04.07.2019">Егор Распутин</SimpleCell></Group>
	</Panel>
);

Admin.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Admin;
