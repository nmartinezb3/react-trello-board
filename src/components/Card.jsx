import React, { useState, useEffect, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import OutsideClickHandler from './OutsideClickHandler';
import { CardContainer, CardText, ButtonContainer } from '../styles/Card.styles';
import * as UtilsHelper from '../helpers/utils';
import ContentEditable from 'react-contenteditable';

import IconButton from './IconButton';

const Card = ({ card, index, onChangeCardContent }) => {
  const [editing, setEditing] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (editing) {
      UtilsHelper.focusCursorToEnd(ref);
    }
  }, [editing]);

  const [value, setValue] = useState(card.content);

  const onClickOutside = () => {
    setEditing(false);
    onChangeCardContent(value);
  };

  const onClickSaveEdit = () => {
    if (editing) {
      onChangeCardContent(value);
    }
    setEditing(isEditing => !isEditing);
  };

  const toggleOnHover = () => {
    setOnHover(hover => !hover);
  };
  return (
    <OutsideClickHandler shouldListenClick={editing} onClickOutside={onClickOutside}>
      <Draggable key={card.id} draggableId={card.id} index={index}>
        {provided => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
            onMouseEnter={toggleOnHover}
            onMouseLeave={toggleOnHover}
          >
            {(onHover || editing) && (
              <ButtonContainer>
                <IconButton
                  onClick={onClickSaveEdit}
                  type={editing ? 'confirm' : 'edit'}
                ></IconButton>
              </ButtonContainer>
            )}

            <CardText innerClassName="cardContentEditable">
              <ContentEditable
                innerRef={ref}
                disabled={!editing}
                html={value}
                onChange={e => setValue(e.target.value)}
              />
            </CardText>
          </CardContainer>
        )}
      </Draggable>
    </OutsideClickHandler>
  );
};

export default Card;
