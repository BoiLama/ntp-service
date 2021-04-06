import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Placeholder,
	Group
}	from '@vkontakte/vkui';

import {
	Icon56CheckCircleOutline
}	from '@vkontakte/icons';

const Black = props => (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Черный список</PanelHeader>
			<Group><Placeholder	icon={<Icon56CheckCircleOutline />}>Тут пока никого нет</Placeholder></Group>
	</Panel>
);

Black.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Black;