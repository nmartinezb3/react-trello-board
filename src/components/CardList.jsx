import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import { CardListHeader, CardListContainer } from '../styles/CardList.styles';

const CardList = props => {
  return (
    <div>
      <CardListHeader>{props.name}</CardListHeader>

      <Droppable droppableId={props.droppableId}>
        {(provided, snapshot) => (
          <CardListContainer ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver}>
            {props.cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
                onChangeCardContent={content => props.onChangeCardContent(index, content)}
              ></Card>
            ))}
            {provided.placeholder}
          </CardListContainer>
        )}
      </Droppable>
    </div>
  );
};

export default CardList;
