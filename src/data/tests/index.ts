/**
 * Unified BrowseraIELTS Test Library (250 Tests):
 * - CD-IELTS Listening: 30 Practice + 20 Mock = 50 Tests
 * - CD-IELTS Reading: 30 Practice + 20 Mock = 50 Tests
 * - CD-IELTS Writing: 30 Practice + 20 Mock = 50 Tests
 * - CD-IELTS Speaking: 30 Practice + 20 Mock = 50 Tests
 * - PTE Academic: 30 Practice + 20 Mock = 50 Tests
 * TOTAL: 250 Tests
 */

import { TestItem } from '../../types';
import { READING_TESTS } from './readingTests';
import { LISTENING_TESTS } from './listeningTests';
import { WRITING_TESTS } from './writingTests';
import { SPEAKING_TESTS } from './speakingTests';
import { PTE_TESTS } from './pteTests';
import { GT_READING_TESTS } from './gtReadingTests';
import { GT_WRITING_TESTS } from './gtWritingTests';

export {
  READING_TESTS,
  LISTENING_TESTS,
  WRITING_TESTS,
  SPEAKING_TESTS,
  PTE_TESTS,
  GT_READING_TESTS,
  GT_WRITING_TESTS
};

export const ALL_TESTS: TestItem[] = [
  ...READING_TESTS,
  ...LISTENING_TESTS,
  ...WRITING_TESTS,
  ...SPEAKING_TESTS,
  ...PTE_TESTS,
  ...GT_READING_TESTS,
  ...GT_WRITING_TESTS
];

/**
 * Returns test count statistics audited by module and test type.
 */
export function getTestAuditCounts() {
  const counts = {
    total: ALL_TESTS.length,
    ielts: {
      total: 0,
      reading: { practice: 0, mock: 0, total: 0 },
      listening: { practice: 0, mock: 0, total: 0 },
      writing: { practice: 0, mock: 0, total: 0 },
      speaking: { practice: 0, mock: 0, total: 0 },
    },
    ieltsGt: {
      total: 0,
      reading: { practice: 0, mock: 0, total: 0 },
      writing: { practice: 0, mock: 0, total: 0 },
    },
    pte: {
      practice: 0,
      mock: 0,
      total: 0
    }
  };

  ALL_TESTS.forEach(t => {
    if (t.courseType === 'CD-IELTS' || t.courseType === 'CD-IELTS Academic') {
      counts.ielts.total += 1;
      const mod = t.module.toLowerCase() as 'reading' | 'listening' | 'writing' | 'speaking';
      if (counts.ielts[mod]) {
        if (t.testType === 'practice') counts.ielts[mod].practice += 1;
        if (t.testType === 'mock') counts.ielts[mod].mock += 1;
        counts.ielts[mod].total += 1;
      }
    } else if (t.courseType === 'CD-IELTS General Training') {
      counts.ieltsGt.total += 1;
      if (t.module.toLowerCase() === 'reading') {
        if (t.testType === 'practice') counts.ieltsGt.reading.practice += 1;
        if (t.testType === 'mock') counts.ieltsGt.reading.mock += 1;
        counts.ieltsGt.reading.total += 1;
      } else if (t.module.toLowerCase() === 'writing') {
        if (t.testType === 'practice') counts.ieltsGt.writing.practice += 1;
        if (t.testType === 'mock') counts.ieltsGt.writing.mock += 1;
        counts.ieltsGt.writing.total += 1;
      }
    } else if (t.courseType === 'PTE Academic') {
      if (t.testType === 'practice') counts.pte.practice += 1;
      if (t.testType === 'mock') counts.pte.mock += 1;
      counts.pte.total += 1;
    }
  });

  return counts;
}

/**
 * Fast lookup by ID with legacy alias support
 */
export function findTestById(id: string): TestItem | undefined {
  if (!id) return undefined;

  // Direct match
  const found = ALL_TESTS.find(t => t.id === id);
  if (found) return found;

  // Legacy ID mapping
  if (id === 'cd_practice_1' || id === 'read_test_1') {
    return ALL_TESTS.find(t => t.id === 'cd_practice_1' || t.id === 'cd_reading_p1');
  }
  if (id === 'cd_practice_7' || id === 'write_task_2') {
    return ALL_TESTS.find(t => t.id === 'cd_practice_7' || t.id === 'cd_writing_p7');
  }
  if (id === 'pte_practice_1' || id === 'pte_1') {
    return ALL_TESTS.find(t => t.id === 'pte_practice_1');
  }

  return undefined;
}
