import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import OutsideClickHandler from './OutsideClickHandler';
import { CardContainer } from '../styles/Card.styles';
import * as UtilsHelper from '../helpers/utils';
import ContentEditable from './ContentEditable';

import IconButton from './IconButton';

const Card = ({ card, index, onChangeCardContent, onRemoveCard }) => {
  const [editCardContent, setEditCardContent] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (editCardContent) {
      UtilsHelper.focusCursorToEnd(ref);
    }
  }, [editCardContent]);

  const [cardContent, setCardContent] = useState(card.content);

  useEffect(() => {
    setCardContent(card.content);
  }, [card.content]);

  const onClickOutside = () => {
    setEditCardContent(false);
    onChangeCardContent(cardContent);
  };

  const onClickSaveEdit = () => {
    if (editCardContent) {
      onChangeCardContent(cardContent);
    }
    setEditCardContent(iseditCardContent => !iseditCardContent);
  };
  const onClickRemoveCard = () => {
    onRemoveCard();
  };

  const handleKeyDown = e => {
    if (e.key === 'Tab') {
      e.stopPropagation();
      e.preventDefault();
      setEditCardContent(false);
      ref.current.blur();
      const name = ref.current.innerText;
      onChangeCardContent(name);
    }
  };
  return (
    <OutsideClickHandler
      shouldListenClick={editCardContent}
      onClickOutside={onClickOutside}
    >
      <Draggable
        key={card.id}
        draggableId={card.id}
        index={index}
      >
        {provided => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            {(onHover || editCardContent) && (
              <IconButton.ButtonContainer right="22px">
                <IconButton
                  onClick={onClickSaveEdit}
                  iconType={editCardContent ? 'confirm' : 'edit'}
                />
              </IconButton.ButtonContainer>
            )}
            {onHover && !editCardContent && (
              <IconButton.ButtonContainer>
                <IconButton
                  onClick={onClickRemoveCard}
                  iconType="delete"
                />
              </IconButton.ButtonContainer>
            )}

            <ContentEditable
              innerRef={ref}
              disabled={!editCardContent}
              html={cardContent}
              onChange={e => setCardContent(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </CardContainer>
        )}
      </Draggable>
    </OutsideClickHandler>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  onChangeCardContent: PropTypes.func,
  onRemoveCard: PropTypes.func
};
export default Card;
