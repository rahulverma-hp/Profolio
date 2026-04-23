import * as THREE from "three";

export interface WorkTimelinePoint {
  point: THREE.Vector3,
  year: string,
  title: string,
  subtitle?: string,
  position: 'left' | 'right',
  /** Extra vertical gap (in scene units) between title block and subtitle; default applied in Timeline if unset */
  subtitleGap?: number,
  /** Extra space below the year before the title (added to base offset); use for long titles like repeated school names */
  yearTitleGap?: number,
}