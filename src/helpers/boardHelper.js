export const reOrderList = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const moveCardToList = (
  sourceList,
  destinationList,
  cardSourceIndex,
  cardDestinationIndex
) => {
  const sourceClone = Array.from(sourceList);
  const destClone = Array.from(destinationList);
  const [removed] = sourceClone.splice(cardSourceIndex, 1);

  destClone.splice(cardDestinationIndex, 0, removed);

  return { newSourceList: sourceClone, newDestinationList: destClone };
};
