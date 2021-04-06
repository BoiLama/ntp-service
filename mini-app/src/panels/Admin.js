import React from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Group,
	SimpleCell
}	from '@vkontakte/vkui';

const Admin = props => (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Администрация</PanelHeader>
			<Group><SimpleCell href="https://vk.com/id216972705" target="_blank" description="HiFenix. Создатель. Работает с 07.08.2018">Артем Лебедев</SimpleCell></Group>
			<Group><SimpleCell href="https://vk.com/id266890472" target="_blank" description="BoiLama. Программист и дизайнер. Работает с 21.11.2018">Даниил Путинцев</SimpleCell></Group>
			<Group><SimpleCell href="https://vk.com/id488030898" target="_blank" description="Бурундук. Администратор. Работает с 23.09.2019">Евгений Иванов</SimpleCell></Group>
			<Group><SimpleCell href="https://vk.com/id401435625" target="_blank" description="Роджер. Администратор. Работает с 19.07.2019">Сергей Черных</SimpleCell></Group>
			<Group><SimpleCell href="https://vk.com/id331644655" target="_blank" description="Хайп. Спонсор. Работает с 04.07.2019">Егор Распутин</SimpleCell></Group>
			<Group><SimpleCell href="https://vk.com/id623860923" target="_blank" description="theyupiter. Возродитель. Работает с 22.03.2021">Евгений Змейкин</SimpleCell></Group>
	</Panel>
);

Admin.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Admin;