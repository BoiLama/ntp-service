import React from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	Header,
	Button,
	Group,
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
	Icon28HomeOutline
}	from '@vkontakte/icons';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Новая тех Поддержка</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Коллектив НТП</Header>}>
			<Div>
				<Cell expandable before={<Icon28FavoriteCircleFillYellow/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              		Администрация
            	</Cell>
				<Cell expandable before={<Icon28UserOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              		Агенты
            	</Cell>
			</Div>
		</Group>

		<Group header={<Header mode="secondary">Ссылки</Header>}>
			<Div>
				<Cell expandable before={<Icon28HomeOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              		Основная группа
            	</Cell>
				<Cell expandable before={<Icon28WriteOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              		Копирайтеры НТП
            	</Cell>
				<Cell expandable before={<Icon28WorkOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              		NTP Team
            	</Cell>
			</Div>
		</Group>
	</Panel>
);
<Panel id="panel2">
<Cell expandable before={<Icon28WorkOutline/>} onClick={() => this.setState({ activePanel: 'persik' })}>
NTP Team
</Cell>
</Panel>

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
