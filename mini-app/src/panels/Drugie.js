import React from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Group,
	SimpleCell
}	from '@vkontakte/vkui';

const Drugie = props => (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Другие работники</PanelHeader>
			<Group><SimpleCell href="https://vk.com/id637062987" target="_blank" description="ozkaon. Копирайтер статей. Работает с 30.03.2021">Адольф Дмитриевич</SimpleCell></Group>
			<Group><SimpleCell href="https://vk.com/id605691307" target="_blank" description="Severus. Подкастер и составляет плейлисты. Работает с 01.04.2021">Владислав Богов</SimpleCell></Group>
	</Panel>
);

Drugie.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Drugie;
