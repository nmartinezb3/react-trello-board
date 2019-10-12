import React, { useState, useEffect, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import OutsideClickHandler from './OutsideClickHandler';
import { CardContainer, CardText } from '../styles/Card.styles';
import * as UtilsHelper from '../helpers/utils';
import ContentEditable from './ContentEditable';

import IconButton from './IconButton';

const Card = ({ card, index, onChangeCardContent }) => {
  const [editCardContent, setEditCardContent] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (editCardContent) {
      UtilsHelper.focusCursorToEnd(ref);
    }
  }, [editCardContent]);

  const [cardName, setCardName] = useState(card.content);

  const onClickOutside = () => {
    setEditCardContent(false);
    onChangeCardContent(cardName);
  };

  const onClickSaveEdit = () => {
    if (editCardContent) {
      onChangeCardContent(cardName);
    }
    setEditCardContent(iseditCardContent => !iseditCardContent);
  };

  const toggleOnHover = () => {
    setOnHover(hover => !hover);
  };

  const handleKeyDown = e => {
    if (e.key === 'Tab') {
        e.stopPropagation();
        e.preventDefault();
        setEditCardContent(false);
        ref.current.blur();
        const cardName = ref.current.innerText;
        onChangeCardContent(cardName);
    }
  };
  return (
    <OutsideClickHandler shouldListenClick={editCardContent} onClickOutside={onClickOutside}>
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
            {(onHover || editCardContent) && (
              <IconButton.ButtonContainer>
                <IconButton
                  onClick={onClickSaveEdit}
                  type={editCardContent ? 'confirm' : 'edit'}
                ></IconButton>
              </IconButton.ButtonContainer>
            )}

            <ContentEditable
              innerRef={ref}
              disabled={!editCardContent}
              html={cardName}
              onChange={e => setCardName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </CardContainer>
        )}
      </Draggable>
    </OutsideClickHandler>
  );
};

export default Card;
