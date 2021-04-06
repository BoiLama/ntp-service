import React from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	Header,
	Button,
	Group,
	SimpleCell,
	TabbarItem,
	Cell,
	Div,
	Avatar,
	Text
}	from '@vkontakte/vkui';

import {
	Icon28UserOutline,
	Icon28WorkOutline,
	Icon28WriteOutline,
	Icon28HomeOutline,
	Icon28FavoriteOutline
}	from '@vkontakte/icons';

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Новая тех Поддержка</PanelHeader>
		<Group header={<Header mode="secondary">Коллектив НТП</Header>}>
			<Div>
				<Cell expandable before={<Icon28FavoriteOutline/>} mode="secondary" onClick={go} data-to="Admin">
              		Администрация
            	</Cell>
				<Cell expandable before={<Icon28UserOutline/>} onClick={() => this.setState({ activePanel: 'persik' })}>
              		Агенты
            	</Cell>
			</Div>
		</Group>

		<Group header={<Header mode="secondary">Ссылки</Header>}>
			<Div>
				<Cell expandable before={<Icon28HomeOutline/>} onClick={() => this.setState({ activePanel: 'persik' })}>
              		Основная группа
            	</Cell>
				<Cell expandable before={<Icon28WriteOutline/>} onClick={() => this.setState({ activePanel: 'persik' })}>
              		Копирайтеры НТП
            	</Cell>
				<Cell expandable before={<Icon28WorkOutline/>} onClick={() => this.setState({ activePanel: 'persik' })}>
              		NTP Team
            	</Cell>
			</Div> 
      </Group>

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
