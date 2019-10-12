export const focusCursorToEnd = ref => {
  ref.current.focus();
  if (typeof window.getSelection != 'undefined' && typeof document.createRange != 'undefined') {
    var range = document.createRange();
    range.selectNodeContents(ref.current);
    range.collapse(false);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (typeof document.body.createTextRange != 'undefined') {
    var textRange = document.body.createTextRange();
    textRange.moveToElementText(ref.current);
    textRange.collapse(false);
    textRange.select();
  }
};

export const randomId = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);
