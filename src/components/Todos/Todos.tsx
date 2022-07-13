import { ChangeEvent, FormEvent, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useApp';
import { changeInput, insert, remove, toggle } from '@/modules/todos';
// { todo, onToggle, onRemove }
const TodoItem = ({
  todo,
}: {
  todo: { id: number; text: string; done: boolean };
}) => {
  const { id, text, done } = todo;
  const dispatch = useAppDispatch();

  const onToggle = useCallback(() => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback(() => dispatch(remove(id)), [dispatch]);

  return (
    <div>
      <input type='checkbox' onClick={onToggle} checked={done} readOnly />
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button type='button' onClick={onRemove}>
        삭제
      </button>
    </div>
  );
};
let id = 3;
export const Todos = () => {
  const { input, todos } = useAppSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useAppDispatch();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(insert({ id: id++, text: input, done: false }));
    dispatch(changeInput(''));
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(event.target.value));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type='submit'>등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};
