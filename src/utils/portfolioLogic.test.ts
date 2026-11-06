import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  filterSkillsByCategory,
  SkillItem,
} from './portfolioLogic';

test('validateContactForm with valid data passes', () => {
  const result = validateContactForm({
    name: 'Sai Balaji',
    email: 'sai@example.com',
    message: 'Hello, looking forward to collaborating on AIML projects!',
  });
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateContactForm flags missing or invalid fields', () => {
  const emptyResult = validateContactForm({
    name: '',
    email: '',
    message: '',
  });
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.message);

  const invalidEmailResult = validateContactForm({
    name: 'Sai',
    email: 'not-an-email',
    message: 'This is a sufficiently long message.',
  });
  assert.equal(invalidEmailResult.isValid, false);
  assert.ok(invalidEmailResult.errors.email);
  assert.equal(invalidEmailResult.errors.name, undefined);
});

test('filterSkillsByCategory filters accurately', () => {
  const sampleSkills: SkillItem[] = [
    { id: '1', name: 'Java', category: 'programming', description: 'OOP', tags: ['Backend'] },
    { id: '2', name: 'Python', category: 'programming', description: 'Basics & ML', tags: ['Data'] },
    { id: '3', name: 'HTML', category: 'web', description: 'Structure', tags: ['Frontend'] },
    { id: '4', name: 'MySQL', category: 'database', description: 'RDBMS', tags: ['DB'] },
    { id: '5', name: 'VS Code', category: 'tools', description: 'IDE', tags: ['Editor'] },
  ];

  assert.equal(filterSkillsByCategory(sampleSkills, 'all').length, 5);
  assert.equal(filterSkillsByCategory(sampleSkills, 'programming').length, 2);
  assert.equal(filterSkillsByCategory(sampleSkills, 'web').length, 1);
  assert.equal(filterSkillsByCategory(sampleSkills, 'database').length, 1);
  assert.equal(filterSkillsByCategory(sampleSkills, 'tools').length, 1);
});
