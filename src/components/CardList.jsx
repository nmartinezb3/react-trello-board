import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import { CardListContainer } from '../styles/CardList.styles';
import CardListHeader from './CardListHeader';

const getFilteredCards = (cards, searchText) => {
  if (searchText) {
    return cards.filter(card => card.content.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  return cards;
};

const CardList = props => {
  return (
    <div>
      <CardListHeader
        listName={props.list.name}
        onChangeListName={props.onChangeListName}
        onRemoveList={props.onRemoveList}
      />
      <Droppable droppableId={props.droppableId}>
        {(provided, snapshot) => (
          <CardListContainer
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {getFilteredCards(props.list.cards, props.searchText).map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
                onChangeCardContent={content => props.onChangeCardContent(index, content)}
              />
            ))}
            {provided.placeholder}
          </CardListContainer>
        )}
      </Droppable>
    </div>
  );
};

CardList.propTypes = {
  list: PropTypes.array,
  searchText: PropTypes.string,
  onChangeCardContent: PropTypes.func,
  onChangeListName: PropTypes.func,
  onRemoveList: PropTypes.func,
  droppableId: PropTypes.string
};
export default CardList;
