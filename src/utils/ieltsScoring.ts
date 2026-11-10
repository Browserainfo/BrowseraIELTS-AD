/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Official IELTS Academic Reading Band Conversion (out of 40 raw score):
 * 39-40: 9.0 | 37-38: 8.5 | 35-36: 8.0 | 33-34: 7.5 | 30-32: 7.0
 * 27-29: 6.5 | 23-26: 6.0 | 19-22: 5.5 | 15-18: 5.0 | 13-14: 4.5
 * 10-12: 4.0 | 8-9: 3.5   | 6-7: 3.0   | 4-5: 2.5   | 2-3: 2.0
 * 1: 1.0     | 0: 0.0
 */
export function getAcademicReadingBand(rawScore: number, totalQuestions: number = 40): number {
  if (rawScore <= 0 || totalQuestions <= 0) return 0.0;
  
  // Normalize raw score to a 40-question scale if test length differs
  const normalized = totalQuestions === 40 
    ? Math.round(rawScore) 
    : Math.round((rawScore / totalQuestions) * 40);

  if (normalized >= 39) return 9.0;
  if (normalized >= 37) return 8.5;
  if (normalized >= 35) return 8.0;
  if (normalized >= 33) return 7.5;
  if (normalized >= 30) return 7.0;
  if (normalized >= 27) return 6.5;
  if (normalized >= 23) return 6.0;
  if (normalized >= 19) return 5.5;
  if (normalized >= 15) return 5.0;
  if (normalized >= 13) return 4.5;
  if (normalized >= 10) return 4.0;
  if (normalized >= 8) return 3.5;
  if (normalized >= 6) return 3.0;
  if (normalized >= 4) return 2.5;
  if (normalized >= 2) return 2.0;
  if (normalized >= 1) return 1.0;
  return 0.0;
}

/**
 * Official IELTS General Training Reading Band Conversion (out of 40 raw score):
 * 40: 9.0    | 39: 8.5    | 37-38: 8.0 | 36: 7.5    | 34-35: 7.0
 * 32-33: 6.5 | 30-31: 6.0 | 27-29: 5.5 | 23-26: 5.0 | 19-22: 4.5
 * 15-18: 4.0 | 12-14: 3.5 | 8-11: 3.0  | 5-7: 2.5   | 2-4: 2.0
 * 1: 1.0     | 0: 0.0
 */
export function getGeneralReadingBand(rawScore: number, totalQuestions: number = 40): number {
  if (rawScore <= 0 || totalQuestions <= 0) return 0.0;

  const normalized = totalQuestions === 40 
    ? Math.round(rawScore) 
    : Math.round((rawScore / totalQuestions) * 40);

  if (normalized >= 40) return 9.0;
  if (normalized >= 39) return 8.5;
  if (normalized >= 37) return 8.0;
  if (normalized >= 36) return 7.5;
  if (normalized >= 34) return 7.0;
  if (normalized >= 32) return 6.5;
  if (normalized >= 30) return 6.0;
  if (normalized >= 27) return 5.5;
  if (normalized >= 23) return 5.0;
  if (normalized >= 19) return 4.5;
  if (normalized >= 15) return 4.0;
  if (normalized >= 12) return 3.5;
  if (normalized >= 8) return 3.0;
  if (normalized >= 5) return 2.5;
  if (normalized >= 2) return 2.0;
  if (normalized >= 1) return 1.0;
  return 0.0;
}

/**
 * Official IELTS Listening Band Conversion (out of 40 raw score, both Academic & General):
 * 39-40: 9.0 | 37-38: 8.5 | 35-36: 8.0 | 32-34: 7.5 | 30-31: 7.0
 * 26-29: 6.5 | 23-25: 6.0 | 18-22: 5.5 | 16-17: 5.0 | 13-15: 4.5
 * 10-12: 4.0 | 8-9: 3.5   | 6-7: 3.0   | 4-5: 2.5   | 2-3: 2.0
 * 1: 1.0     | 0: 0.0
 */
export function getListeningBand(rawScore: number, totalQuestions: number = 40): number {
  if (rawScore <= 0 || totalQuestions <= 0) return 0.0;

  const normalized = totalQuestions === 40 
    ? Math.round(rawScore) 
    : Math.round((rawScore / totalQuestions) * 40);

  if (normalized >= 39) return 9.0;
  if (normalized >= 37) return 8.5;
  if (normalized >= 35) return 8.0;
  if (normalized >= 32) return 7.5;
  if (normalized >= 30) return 7.0;
  if (normalized >= 26) return 6.5;
  if (normalized >= 23) return 6.0;
  if (normalized >= 18) return 5.5;
  if (normalized >= 16) return 5.0;
  if (normalized >= 13) return 4.5;
  if (normalized >= 10) return 4.0;
  if (normalized >= 8) return 3.5;
  if (normalized >= 6) return 3.0;
  if (normalized >= 4) return 2.5;
  if (normalized >= 2) return 2.0;
  if (normalized >= 1) return 1.0;
  return 0.0;
}

/**
 * Official IELTS Speaking & Writing Rounding Convention:
 * The average of the four sub-scores is calculated.
 * - If the average ends in .25, it rounds UP to the next half band (e.g., 6.25 -> 6.5).
 * - If the average ends in .75, it rounds UP to the next whole band (e.g., 6.75 -> 7.0).
 * - If the average ends in .125 or .375 etc., it rounds to the closest half or whole band.
 */
export function calculateOverallBandFromCriteria(
  criteria: [number, number, number, number]
): number {
  const sum = criteria.reduce((a, b) => a + b, 0);
  if (sum === 0) return 0.0;
  
  const rawAvg = sum / 4;
  const intPart = Math.floor(rawAvg);
  const frac = rawAvg - intPart;

  if (frac < 0.25) {
    return intPart;
  } else if (frac < 0.75) {
    return intPart + 0.5;
  } else {
    return intPart + 1.0;
  }
}

/**
 * Rigorous answer evaluation matching IELTS test-checking rules:
 * - Case-insensitive and whitespace-normalized
 * - Strips unnecessary punctuation while preserving mathematical and formatting symbols
 * - Handles True/False/Not Given shortcuts ("T", "F", "NG", "YES", "NO")
 * - Handles letter-only vs full letter options strictly without first-letter false positives
 * - Handles numeric equivalence (figures vs English number words, e.g. 4 vs four, 1500 vs one thousand five hundred)
 * - Handles common time formats (e.g. 07:00 vs 7:00, 15:30 vs 3:30 pm)
 * - Handles optional leading articles ("the", "a", "an")
 */
export function evaluateAnswer(userAnswer: string | undefined | null, correctAnswer: string | string[]): boolean {
  if (!userAnswer) return false;
  const rawUser = String(userAnswer).trim();
  if (!rawUser) return false;

  const cleanUser = cleanAnswerString(rawUser);
  if (!cleanUser) return false;

  const validAnswers = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];

  for (const target of validAnswers) {
    if (!target) continue;
    const rawTarget = String(target).trim();
    const cleanTarget = cleanAnswerString(rawTarget);
    if (!cleanTarget) continue;

    // 1. Direct match (normalized)
    if (cleanUser === cleanTarget) return true;

    // 2. Leading article flexibility (e.g. "the east staff car park" vs "east staff car park")
    if (stripLeadingArticle(cleanUser) === stripLeadingArticle(cleanTarget)) return true;

    // 3. True / False / Not Given shortcuts & synonyms
    if (isTrueFalseMatch(cleanUser, cleanTarget)) return true;

    // 4. Strict multiple choice letter/option comparison (NEVER matches generic words by first letter)
    if (isMultipleChoiceMatch(rawUser, rawTarget)) return true;

    // 5. Official IELTS Number equivalence: figures (4, 1500, 37.5) vs words (four, one thousand five hundred, thirty-seven and a half)
    if (isNumericEquivalent(rawUser, rawTarget)) return true;

    // 6. Time format equivalence (e.g. "07:00" vs "7:00", "15:30" vs "3:30 pm")
    if (isTimeMatch(rawUser, rawTarget)) return true;

    // 7. Alphanumeric code or hyphen-space match (e.g. "ED-4" vs "ED4", "H-4" vs "H4", "DIAMOND-SHAPED" vs "DIAMONDSHAPED")
    if (isNumericOrCodeMatch(cleanUser, cleanTarget)) return true;
  }

  return false;
}

function cleanAnswerString(val: string): string {
  return val
    .trim()
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'\u2018\u2019\u201C\u201D]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripLeadingArticle(s: string): string {
  return s.replace(/^(the|a|an)\s+/i, '').trim();
}

const NUMBER_WORDS: Record<string, number> = {
  'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
  'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
  'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15,
  'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19,
  'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50,
  'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
  'hundred': 100, 'thousand': 1000
};

export function parseNumberFromText(text: string): number | null {
  if (!text) return null;
  let s = text.toLowerCase().trim();
  s = s.replace(/,/g, '');
  s = s.replace(/[£$€]/g, ' ');
  s = s.replace(/(\d+)p\b/g, '$1');
  s = s.replace(/\b(pounds|pound|pence|p|degrees|degree|hours|hour|weeks|week|days|day|months|month|years|year|percent|%|items|item|books|book|minutes|minute)\b/g, ' ');
  s = s.replace(/[-]/g, ' ');
  s = s.replace(/\s+/g, ' ').trim();

  // Pure digits or decimal
  if (/^\d+(\.\d+)?$/.test(s)) {
    return parseFloat(s);
  }

  // Fraction like "37 1/2"
  const fracMatch = s.match(/^(\d+)\s+1\/2$/);
  if (fracMatch) {
    return parseInt(fracMatch[1], 10) + 0.5;
  }
  if (s === '1/2' || s === 'half' || s === 'a half') {
    return 0.5;
  }

  // Mixed phrase with "and a half"
  let hasHalf = false;
  if (s.includes('and a half') || s.includes('and half')) {
    hasHalf = true;
    s = s.replace('and a half', '').replace('and half', '').trim();
  }

  const tokens = s.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return null;

  let total = 0;
  let current = 0;
  let parsedAny = false;

  for (const token of tokens) {
    if (token === 'and' || token === 'a') continue;

    if (/^\d+(\.\d+)?$/.test(token)) {
      current += parseFloat(token);
      parsedAny = true;
    } else if (NUMBER_WORDS[token] !== undefined) {
      const val = NUMBER_WORDS[token];
      parsedAny = true;
      if (val === 1000) {
        current = (current === 0 ? 1 : current) * 1000;
        total += current;
        current = 0;
      } else if (val === 100) {
        current = (current === 0 ? 1 : current) * 100;
      } else {
        current += val;
      }
    } else {
      return null;
    }
  }

  total += current;
  if (!parsedAny) return null;
  if (hasHalf) total += 0.5;
  return total;
}

function isNumericEquivalent(user: string, target: string): boolean {
  const userNum = parseNumberFromText(user);
  const targetNum = parseNumberFromText(target);
  if (userNum !== null && targetNum !== null) {
    return Math.abs(userNum - targetNum) < 0.001;
  }
  return false;
}

function isTimeMatch(user: string, target: string): boolean {
  const normalizeTime = (t: string): string | null => {
    let clean = t.toLowerCase().trim().replace(/\./g, ':');
    // Match HH:MM
    const match24 = clean.match(/^0?(\d{1,2}):(\d{2})$/);
    if (match24) {
      return `${parseInt(match24[1], 10)}:${match24[2]}`;
    }
    // Match 12h with am/pm: "7:00 am", "7 am", "7am"
    const match12 = clean.match(/^0?(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/);
    if (match12) {
      let h = parseInt(match12[1], 10);
      const m = match12[2] || '00';
      const period = match12[3];
      if (period === 'pm' && h < 12) h += 12;
      if (period === 'am' && h === 12) h = 0;
      return `${h}:${m}`;
    }
    return null;
  };

  const normUser = normalizeTime(user);
  const normTarget = normalizeTime(target);
  return Boolean(normUser && normTarget && normUser === normTarget);
}

function isTrueFalseMatch(user: string, target: string): boolean {
  const tMap: Record<string, string> = {
    't': 'true',
    'true': 'true',
    'yes': 'true',
    'y': 'true',
    'f': 'false',
    'false': 'false',
    'no': 'false',
    'n': 'false',
    'ng': 'not given',
    'not given': 'not given',
    'notgiven': 'not given'
  };

  const normUser = tMap[user];
  const normTarget = tMap[target];
  return Boolean(normUser && normTarget && normUser === normTarget);
}

function isMultipleChoiceMatch(user: string, target: string): boolean {
  const validLetters = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
  const extractChoice = (s: string): string | null => {
    const trimmed = s.trim().toLowerCase();
    if (trimmed.length === 1 && validLetters.has(trimmed)) return trimmed;
    // Matches option format like "b.", "b)", "b:", "b - option"
    const match = trimmed.match(/^([a-h])[\s\.\:\)\-]+/i);
    if (match) return match[1].toLowerCase();
    return null;
  };

  const userChoice = extractChoice(user);
  const targetChoice = extractChoice(target);

  // CRITICAL FIX: Only match when both indicate a multiple-choice option letter,
  // or one is a single-letter option and the other explicitly starts with that option letter.
  // NEVER compare words just because their first characters are identical!
  if (userChoice && targetChoice) {
    return userChoice === targetChoice;
  }
  return false;
}

function isNumericOrCodeMatch(user: string, target: string): boolean {
  const userNum = user.replace(/[^a-z0-9]/g, '');
  const targetNum = target.replace(/[^a-z0-9]/g, '');
  // Only match codes if at least 2 alphanumeric chars to avoid single character false positives
  return Boolean(userNum.length >= 2 && targetNum.length >= 2 && userNum === targetNum);
}

/**
 * Returns CEFR descriptor and official IELTS user level based on band score.
 */
export function getIeltsBandDescriptor(band: number): { label: string; cefr: string } {
  if (band >= 9.0) return { label: 'Expert User', cefr: 'C2' };
  if (band >= 8.0) return { label: 'Very Good User', cefr: 'C1/C2' };
  if (band >= 7.0) return { label: 'Good User', cefr: 'C1' };
  if (band >= 6.0) return { label: 'Competent User', cefr: 'B2' };
  if (band >= 5.0) return { label: 'Modest User', cefr: 'B1' };
  if (band >= 4.0) return { label: 'Limited User', cefr: 'B1' };
  if (band >= 3.0) return { label: 'Extremely Limited User', cefr: 'A2' };
  if (band >= 2.0) return { label: 'Intermittent User', cefr: 'A1' };
  if (band >= 1.0) return { label: 'Non-User', cefr: 'A0' };
  return { label: 'Did Not Attempt / Zero Score', cefr: 'N/A' };
}
