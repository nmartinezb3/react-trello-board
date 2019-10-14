import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BoardContainer } from '../styles/Board.styles';
import CardList from '../components/CardList';
import AddForm from '../components/AddForm';
import {
  addCard,
  removeCard,
  addList,
  removeList,
  reOrderList,
  moveCardToList,
  setCardContent,
  setListName,
  duplicateCard,
  duplicateList
} from '../actions/boardActions';

const Board = props => {
  const onDragEnd = result => {
    const { source, destination, draggableId } = result;
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
        draggableId,
        destination.droppableId,
        destination.index,

      );
    }
  };
  return (
    <div>
      <BoardContainer countColumns={props.lists.length + 1}>
        <DragDropContext onDragEnd={onDragEnd}>
          {props.lists.map((list, listIndex) => (
            <CardList
              key={list.id}
              droppableId={list.id}
              list={list}
              onChangeListName={listName => props.onChangeListName(listIndex, listName)}
              onRemoveList={() => props.onRemoveList(listIndex)}
              onDuplicateList={() => props.onDuplicateList(listIndex)}
              onChangeCardContent={(cardIndex, content) => props.onChangeCardContent(listIndex, cardIndex, content)}
              onAddCard={cardContent => props.onAddCard(listIndex, cardContent)}
              onRemoveCard={cardIndex => props.onRemoveCard(listIndex, cardIndex)}
              onDuplicateCard={cardIndex => props.onDuplicateCard(listIndex, cardIndex)}
              searchText={props.search}
            />
          ))}
        </DragDropContext>
        <AddForm
          onConfirm={props.onAddList}
          placeholder="+ Add new list"
          focusPlaceholder="Enter list title"
          maxWidth="220px"
        />
      </BoardContainer>
    </div>
  );
};

Board.propTypes = {
  reOrderList: PropTypes.func,
  moveCardToList: PropTypes.func,
  lists: PropTypes.array,
  onChangeListName: PropTypes.func,
  onRemoveList: PropTypes.func,
  onDuplicateList: PropTypes.func,
  onChangeCardContent: PropTypes.func,
  search: PropTypes.string,
  onAddList: PropTypes.func,
  onAddCard: PropTypes.func,
  onRemoveCard: PropTypes.func,
  onDuplicateCard: PropTypes.func,
};
const mapStateToProps = state => ({
  lists: state.board.currentState.lists,
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  addCard: bindActionCreators(addCard, dispatch),
  removeCard: bindActionCreators(removeCard, dispatch),
  addList: bindActionCreators(addList, dispatch),
  removeList: bindActionCreators(removeList, dispatch),
  reOrderList: bindActionCreators(reOrderList, dispatch),
  moveCardToList: bindActionCreators(moveCardToList, dispatch),
  onChangeCardContent: bindActionCreators(setCardContent, dispatch),
  onChangeListName: bindActionCreators(setListName, dispatch),
  onRemoveList: bindActionCreators(removeList, dispatch),
  onDuplicateList: bindActionCreators(duplicateList, dispatch),
  onAddList: bindActionCreators(addList, dispatch),
  onAddCard: bindActionCreators(addCard, dispatch),
  onRemoveCard: bindActionCreators(removeCard, dispatch),
  onDuplicateCard: bindActionCreators(duplicateCard, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
