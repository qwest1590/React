import React from "react";
export default function ToDoShowCompleteButton({
  props: onClickShowCompleted,
}) {
  return <button onClick={onClickShowCompleted}>Show/HideCompleted</button>;
}
