import { shallowEqual } from 'react-redux';

import { CounterController } from '@/components/CounterController';
import { useAppSelector } from '@/hooks/useApp';

export const Counter = () => {
  const count = useAppSelector(
    ({ counter }) => ({ value: counter.value }),
    shallowEqual,
  );

  return (
    <>
      <div>{count.value}</div>
      <CounterController />
    </>
  );
};
