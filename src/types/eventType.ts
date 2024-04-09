export type KeyboardType = React.KeyboardEvent<HTMLDivElement>;

export type KeyCode = 'Enter' | 'Space';

export const keyOptions: Record<string, KeyCode> = {
  Enter: 'Enter',
  Space: 'Space',
};

export type SwitchModeType = 'Search' | 'Filter';

export const SwitchData: SwitchModeType[] = ['Filter', 'Search'];
