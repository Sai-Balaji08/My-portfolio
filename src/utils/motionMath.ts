/**
 * Pure mathematical functions for text scroll-filling and count-up easing.
 */

/**
 * Calculates the fill progress (0 = grey, 1 = pure white) for a word at index `wordIndex`
 * given total `totalWords` and a scroll/time progress `progress` in [0, 1].
 * Uses a soft transition edge across `softEdge` words (default 3).
 */
export function calculateWordFill(
  wordIndex: number,
  totalWords: number,
  progress: number,
  softEdge: number = 3
): number {
  if (totalWords <= 0) return 0;
  const clampedProgress = Math.max(0, Math.min(1, progress));
  
  // Total virtual travel range spans from -softEdge to totalWords
  // At progress = 0, currentHead is at 0 (all grey)
  // At progress = 1, currentHead is at totalWords + softEdge (all filled)
  const currentHead = clampedProgress * (totalWords + softEdge);
  
  // Distance from head to this word:
  // If wordIndex is well behind currentHead - softEdge, it's 100% white (1.0).
  // If wordIndex is at or ahead of currentHead, it's 0% (0.0).
  if (wordIndex <= currentHead - softEdge) {
    return 1;
  }
  if (wordIndex >= currentHead) {
    return 0;
  }
  
  // In-between: linear interpolation
  const delta = currentHead - wordIndex;
  return Math.max(0, Math.min(1, delta / softEdge));
}

/**
 * Easing function for smooth counter animations (easeOutCubic / easeOutExpo).
 */
export function easeOutCubic(t: number): number {
  const p = Math.max(0, Math.min(1, t));
  return 1 - Math.pow(1 - p, 3);
}

/**
 * Interpolates an integer count from 0 to targetValue using easeOutCubic.
 */
export function interpolateCount(targetValue: number, progress: number): number {
  const eased = easeOutCubic(progress);
  return Math.round(eased * targetValue);
}
