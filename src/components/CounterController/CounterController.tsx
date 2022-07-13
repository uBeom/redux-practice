import { useCallback, memo } from 'react';

import { useAppDispatch } from '@/hooks/useApp';
import { increase, decrease, increaseAmount } from '@/modules/counter';

export const CounterController = memo(() => {
  const dispatch = useAppDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseAmount = useCallback(
    () => dispatch(increaseAmount(5)),
    [dispatch],
  );

  return (
    <div>
      <button type='button' onClick={onIncrease}>
        increase
      </button>
      <button type='button' onClick={onDecrease}>
        decrease
      </button>
      <button type='button' onClick={onIncreaseAmount}>
        increaseAmount
      </button>
    </div>
  );
});
