import type { GameId } from './games';

export type RunState = 'running' | 'updating' | 'unavailable';
export type DetectionState = 'undetected' | 'monitoring' | 'updating';

export interface GameStatus {
  gameId: GameId;
  runState: RunState;
  detectionState: DetectionState;
  availabilityLabel: string;
  /**
   * Editorial note only. Do not treat this as a live test timestamp
   * or proof that a product was scanned at a generated time.
   */
  editorialNote: string;
  placeholders: {
    userCount: string;
    detectionTests: string;
    banStatistic: string;
  };
}

export const gameStatus: Record<GameId, GameStatus> = {
  cs2: {
    gameId: 'cs2',
    runState: 'running',
    detectionState: 'undetected',
    availabilityLabel: 'Working and running',
    editorialNote:
      'CS2 is configured as undetected, up to date, and running. Replace placeholder figures before launch.',
    placeholders: {
      userCount: '[PLACEHOLDER: CS2 user count]',
      detectionTests: '[PLACEHOLDER: CS2 detection-test count]',
      banStatistic: '[PLACEHOLDER: CS2 ban statistic]',
    },
  },
  valorant: {
    gameId: 'valorant',
    runState: 'running',
    detectionState: 'undetected',
    availabilityLabel: 'Available',
    editorialNote:
      'Valorant is configured as undetected and available. Figures below are placeholders, not live telemetry.',
    placeholders: {
      userCount: '[PLACEHOLDER: Valorant user count]',
      detectionTests: '[PLACEHOLDER: Valorant detection-test count]',
      banStatistic: '[PLACEHOLDER: Valorant ban statistic]',
    },
  },
  'overwatch-2': {
    gameId: 'overwatch-2',
    runState: 'running',
    detectionState: 'monitoring',
    availabilityLabel: 'Running — monitored',
    editorialNote:
      'Overwatch 2 is configured as running with active detection monitoring. Confirm labels before publishing.',
    placeholders: {
      userCount: '[PLACEHOLDER: Overwatch 2 user count]',
      detectionTests: '[PLACEHOLDER: Overwatch 2 detection-test count]',
      banStatistic: '[PLACEHOLDER: Overwatch 2 ban statistic]',
    },
  },
  'rainbow-six-siege': {
    gameId: 'rainbow-six-siege',
    runState: 'updating',
    detectionState: 'updating',
    availabilityLabel: 'Update in progress',
    editorialNote:
      'Siege is configured as updating. Do not present this row as a live lab result until editorial data is filled in.',
    placeholders: {
      userCount: '[PLACEHOLDER: Siege user count]',
      detectionTests: '[PLACEHOLDER: Siege detection-test count]',
      banStatistic: '[PLACEHOLDER: Siege ban statistic]',
    },
  },
};

export const statusList: GameStatus[] = Object.values(gameStatus);

export function getStatus(gameId: GameId): GameStatus {
  return gameStatus[gameId];
}
