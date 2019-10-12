import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { BoardContainer } from '../styles/Board.styles';
import CardList from '../components/CardList';
import {
  addCard,
  removeCard,
  addList,
  removeList,
  reOrderList,
  moveCardToList,
  setCardContent
} from '../actions/boardActions';

const Board = props => {
  const onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      // Dropped in the same list
      props.reOrderList(source.droppableId, source.index, destination.index);
    } else {
      // Drop in other list
      props.moveCardToList(
        source.droppableId,
        source.index,
        destination.droppableId,
        destination.index
      );
    }
  };
  return (
    <div>
      <BoardContainer countColumns={2 + 3}>
        <DragDropContext onDragEnd={onDragEnd}>
          {props.lists.map((list, listIndex) => (
            <CardList
              key={list.id}
              droppableId={list.id}
              name={list.name}
              cards={list.cards}
              onChangeCardContent={(cardIndex, content) =>
                props.onChangeCardContent(listIndex, cardIndex, content)
              }
            ></CardList>
          ))}
        </DragDropContext>
      </BoardContainer>
      <button onClick={() => props.addList('La nueva lista')}> Agregar lista</button>
    </div>
  );
};

const mapStateToProps = state => ({
  lists: state.board.lists
});

const mapDispatchToProps = dispatch => ({
  addCard: (...params) => dispatch(addCard(...params)),
  removeCard: (...params) => dispatch(removeCard(...params)),
  addList: (...params) => dispatch(addList(...params)),
  removeList: (...params) => dispatch(removeList(...params)),
  reOrderList: (...params) => dispatch(reOrderList(...params)),
  moveCardToList: (...params) => dispatch(moveCardToList(...params)),
  onChangeCardContent: (...params) => dispatch(setCardContent(...params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
