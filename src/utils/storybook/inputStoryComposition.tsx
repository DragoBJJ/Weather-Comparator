import { useState, FC, ChangeEvent } from 'react';

type InputStoryCompositionType<T> = {
  initialValue: T;
  fieldName?: string;
  isNotClassicEvent?: boolean;
};

const inputStoryComposition =
  <T, V>(Component: FC<T>, config: InputStoryCompositionType<V>): FC<T> =>
  (props: T) => {
    const { initialValue, fieldName, isNotClassicEvent } = config;
    const [value, setValue] = useState<V>(initialValue);
    const onChangeEvent = (newValue: V) => {
      setValue(newValue);
    };
    const onChangeClassicEvent = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value as V);
    };
    const newProps = {
      ...props,
      [fieldName ?? 'value']: value,
      onChange: !isNotClassicEvent ? onChangeClassicEvent : onChangeEvent,
    };

    return <Component {...newProps} />;
  };

export default inputStoryComposition;
