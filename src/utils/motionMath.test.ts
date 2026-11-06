import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateWordFill, easeOutCubic, interpolateCount } from './motionMath';

test('calculateWordFill edge cases', () => {
  // At progress 0, word 0 should be 0 (unfilled grey)
  assert.equal(calculateWordFill(0, 30, 0), 0);
  assert.equal(calculateWordFill(10, 30, 0), 0);
  assert.equal(calculateWordFill(29, 30, 0), 0);

  // At progress 1, all words should be 1 (fully white)
  assert.equal(calculateWordFill(0, 30, 1), 1);
  assert.equal(calculateWordFill(15, 30, 1), 1);
  assert.equal(calculateWordFill(29, 30, 1), 1);
});

test('calculateWordFill soft edge behavior', () => {
  const total = 30;
  const progress = 0.5; // Head at 0.5 * 33 = 16.5
  
  // Word well before head should be 1.0
  assert.equal(calculateWordFill(5, total, progress), 1);
  
  // Word ahead of head should be 0.0
  assert.equal(calculateWordFill(20, total, progress), 0);
  
  // Words in the transition window (13.5 to 16.5) should be between 0 and 1
  const midWordFill = calculateWordFill(15, total, progress);
  assert.ok(midWordFill > 0 && midWordFill < 1);
  
  // Words closer to the head should have lower fill than words earlier
  const earlierFill = calculateWordFill(14, total, progress);
  assert.ok(earlierFill >= midWordFill);
});

test('interpolateCount starts at 0 and finishes at target', () => {
  assert.equal(interpolateCount(400, 0), 0);
  assert.equal(interpolateCount(400, 1), 400);
  assert.equal(interpolateCount(230, 1), 230);
  assert.equal(interpolateCount(56, 1), 56);
  assert.equal(interpolateCount(10, 1), 10);
  
  // At 50% time, easeOutCubic produces > 50% progress (starts faster, slows down)
  const halfProgressCount = interpolateCount(100, 0.5);
  assert.ok(halfProgressCount > 50);
});
