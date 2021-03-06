import React from 'react';
import PropTypes from 'prop-types';

import {
	Panel,
	PanelHeader,
	PanelHeaderBack,
	Group,
	Banner,
	Cell,
	Div,
	CardGrid,
	ContentCard,
	Button
}	from '@vkontakte/vkui';

import {
	Icon28ArrowUpRectangleOutline,
	Icon28CancelOutline
}	from '@vkontakte/icons';

const Debug = props => {
	return (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>DEBUG</PanelHeader>
		<Group>
			<Group mode="plain">
				<Div>
				<Banner header="Достижения" subheader="Соревнуйся с другими, получай баллы, гордись." actions={<Button mode="overlay_primary">Открыть</Button>}/>
					<Cell expandable before={<Icon28CancelOutline/>} mode="secondary" onClick={props.go} data-to="Home">Home</Cell>
					<Cell expandable before={<Icon28CancelOutline/>} mode="secondary" onClick={props.go} data-to="Debug">Debug</Cell>
				</Div> 
    		</Group>
			<Group mode="plain">
				<Div>
					<Cell expandable before={<Icon28ArrowUpRectangleOutline/>} mode="secondary" onClick={props.go} data-to="State">State</Cell>
					<Cell expandable before={<Icon28ArrowUpRectangleOutline/>} mode="secondary" onClick={props.go} data-to="Drugie">Drugie</Cell>
					<Cell expandable before={<Icon28ArrowUpRectangleOutline/>} mode="secondary" onClick={props.go} data-to="Admin">Admin</Cell>
					<Cell expandable before={<Icon28ArrowUpRectangleOutline/>} mode="secondary" onClick={props.go} data-to="Black">Black</Cell>
				</Div> 
				<CardGrid size="l"> <ContentCard subtitle="Субтитл" header="Хэдр" text="Текст" caption="Кэпшион"/></CardGrid>
				<CardGrid size="l"> <ContentCard header="Поздравляем!" text="Сегодня вас приняли на работу. Изучи FAQ и готовься к работе." caption="— Администрация НТП" maxHeight={100} image="https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/></CardGrid>
    		</Group>
		</Group>
	</Panel>
	);
};

Debug.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Debug;