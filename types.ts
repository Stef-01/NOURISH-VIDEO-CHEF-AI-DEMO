export type ScreenId =
  | 'COLD_OPEN'
  | 'DISH_SELECTION'
  | 'GOAL_SELECTION'
  | 'RECIPE_CONTEXT'
  | 'LIVE_TEMPER'
  | 'CHECK_ONIONS'
  | 'COPILOT_ONIONS'
  | 'LIVE_ONIONS'
  | 'CHECK_OIL'
  | 'COPILOT_SPICE'
  | 'LIVE_MASALA'
  | 'CHECK_SALT'
  | 'COPILOT_SODIUM'
  | 'CHECK_PALAK'
  | 'COPILOT_PALAK'
  | 'COMPLETION_PHOTO'
  | 'PLATE_METHOD'
  | 'SUMMARY'
  | 'FINAL_CTA'
  | 'FINAL_RECOMMENDATIONS';

export interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  filled?: boolean;
}