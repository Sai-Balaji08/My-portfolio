/**
 * Pure functions for portfolio data filtering, contact validation, and search.
 */

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

/**
 * Validates the contact form inputs without external dependencies.
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: ValidationResult['errors'] = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Please provide your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please provide your email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please provide a valid email address.';
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please enter your message.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'programming' | 'web' | 'database' | 'tools';
  description: string;
  tags: string[];
}

/**
 * Pure filter for technical skills.
 */
export function filterSkillsByCategory(
  skills: SkillItem[],
  selectedCategory: string
): SkillItem[] {
  if (!selectedCategory || selectedCategory === 'all') {
    return skills;
  }
  return skills.filter((s) => s.category === selectedCategory);
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'sustainability' | 'community' | 'portfolio' | 'all';
  featured: boolean;
}

/**
 * Filters projects by category.
 */
export function filterProjectsByCategory(
  projects: ProjectItem[],
  category: string
): ProjectItem[] {
  if (!category || category === 'all') {
    return projects;
  }
  return projects.filter((p) => p.category === category);
}
