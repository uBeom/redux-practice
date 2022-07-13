import { CounterController } from '@/components/CounterController';
import { useAppSelector } from '@/hooks/useApp';

export const Counter = () => {
  const value = useAppSelector(({ counter }) => counter.value);

  return (
    <>
      <div>{value}</div>
      <CounterController />
    </>
  );
};
