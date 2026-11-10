/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  evaluateAnswer,
  getAcademicReadingBand,
  getGeneralReadingBand,
  getListeningBand,
  calculateOverallBandFromCriteria,
  getIeltsBandDescriptor,
  parseNumberFromText
} from './ieltsScoring';
import { GT_READING_TESTS } from '../data/tests/gtReadingTests';

function runTestSuite(name: string, fn: () => void) {
  console.log(`Running: ${name}`);
  fn();
}

runTestSuite('IELTS Scoring Engine - Phase 1 Verification', () => {
  let passedTests = 0;
  let failedTests = 0;

  function assert(condition: boolean, testName: string, details?: string) {
    if (condition) {
      passedTests++;
      console.log(`  ✓ ${testName}`);
    } else {
      failedTests++;
      console.error(`  ✗ FAIL: ${testName} ${details ? '(' + details + ')' : ''}`);
    }
  }

  console.log('\n--- SUITE 1: ANTI-FALSE-POSITIVE SUITE (isMultipleChoiceMatch Bug Fix) ---');
  // Critical fix: first letter matching must NEVER award marks
  assert(!evaluateAnswer('dog', 'DIAMOND-SHAPED'), 'dog should NOT match DIAMOND-SHAPED');
  assert(!evaluateAnswer('elephant', 'EMANCIPATION'), 'elephant should NOT match EMANCIPATION');
  assert(!evaluateAnswer('cat', 'crocodile'), 'cat should NOT match crocodile');
  assert(!evaluateAnswer('apple', 'avocado'), 'apple should NOT match avocado');
  assert(!evaluateAnswer('banana', 'B'), 'banana should NOT match option B');
  assert(!evaluateAnswer('california', 'C'), 'california should NOT match option C');
  assert(!evaluateAnswer('delta', 'D'), 'delta should NOT match option D');
  assert(!evaluateAnswer('false', 'footwear'), 'false should NOT match footwear');
  assert(!evaluateAnswer('true', 'thermal'), 'true should NOT match thermal');
  assert(!evaluateAnswer('hour', 'H4'), 'hour should NOT match H4');
  assert(!evaluateAnswer('boat', 'B: Option text'), 'boat should NOT match B: Option text');

  console.log('\n--- SUITE 2: MULTIPLE CHOICE OPTION VALIDATION ---');
  assert(evaluateAnswer('B', 'B'), 'Exact uppercase B');
  assert(evaluateAnswer('b', 'B'), 'Case-insensitive b');
  assert(evaluateAnswer('B.', 'B'), 'Option with trailing period "B."');
  assert(evaluateAnswer('B)', 'B'), 'Option with trailing paren "B)"');
  assert(evaluateAnswer('b:', 'B'), 'Option with trailing colon "b:"');
  assert(evaluateAnswer('B - option', 'B'), 'Option with hyphen descriptor');
  assert(evaluateAnswer('B', 'B: Activate the nearest call point'), 'Single letter against full option key');
  assert(!evaluateAnswer('A', 'B'), 'Option A must not match B');
  assert(!evaluateAnswer('C', 'B'), 'Option C must not match B');
  assert(!evaluateAnswer('D', 'B'), 'Option D must not match B');

  console.log('\n--- SUITE 3: TRUE / FALSE / NOT GIVEN ---');
  assert(evaluateAnswer('TRUE', 'TRUE'), 'TRUE matches TRUE');
  assert(evaluateAnswer('true', 'TRUE'), 'true matches TRUE');
  assert(evaluateAnswer('T', 'TRUE'), 'T matches TRUE');
  assert(evaluateAnswer('t', 'TRUE'), 't matches TRUE');
  assert(evaluateAnswer('YES', 'TRUE'), 'YES matches TRUE');
  assert(evaluateAnswer('FALSE', 'FALSE'), 'FALSE matches FALSE');
  assert(evaluateAnswer('false', 'FALSE'), 'false matches FALSE');
  assert(evaluateAnswer('F', 'FALSE'), 'F matches FALSE');
  assert(evaluateAnswer('f', 'FALSE'), 'f matches FALSE');
  assert(evaluateAnswer('NO', 'FALSE'), 'NO matches FALSE');
  assert(evaluateAnswer('NOT GIVEN', 'NOT GIVEN'), 'NOT GIVEN matches NOT GIVEN');
  assert(evaluateAnswer('not given', 'NOT GIVEN'), 'not given matches NOT GIVEN');
  assert(evaluateAnswer('NG', 'NOT GIVEN'), 'NG matches NOT GIVEN');
  assert(evaluateAnswer('ng', 'NOT GIVEN'), 'ng matches NOT GIVEN');
  assert(!evaluateAnswer('FALSE', 'TRUE'), 'FALSE does NOT match TRUE');
  assert(!evaluateAnswer('TRUE', 'FALSE'), 'TRUE does NOT match FALSE');
  assert(!evaluateAnswer('NOT GIVEN', 'FALSE'), 'NOT GIVEN does NOT match FALSE');
  assert(!evaluateAnswer('banana', 'TRUE'), 'banana does NOT match TRUE');
  assert(!evaluateAnswer('football', 'FALSE'), 'football does NOT match FALSE');

  console.log('\n--- SUITE 4: NUMBER EQUIVALENCE (DIGITS VS NUMBER WORDS & UNITS) ---');
  assert(evaluateAnswer('4', 'FOUR'), 'Digit 4 matches FOUR');
  assert(evaluateAnswer('four', 'FOUR'), 'Word four matches FOUR');
  assert(evaluateAnswer('£4', 'FOUR'), 'Currency £4 matches FOUR');
  assert(evaluateAnswer('4 pounds', 'FOUR'), 'Unit "4 pounds" matches FOUR');
  assert(evaluateAnswer('5', 'FIVE'), 'Digit 5 matches FIVE');
  assert(evaluateAnswer('24', 'TWENTY-FOUR'), '24 matches TWENTY-FOUR');
  assert(evaluateAnswer('twenty four', 'TWENTY-FOUR'), 'twenty four matches TWENTY-FOUR');
  assert(evaluateAnswer('25', 'TWENTY-FIVE'), '25 matches TWENTY-FIVE');
  assert(evaluateAnswer('37.5', 'THIRTY-SEVEN AND A HALF'), '37.5 matches THIRTY-SEVEN AND A HALF');
  assert(evaluateAnswer('37 1/2', 'THIRTY-SEVEN AND A HALF'), '37 1/2 matches THIRTY-SEVEN AND A HALF');
  assert(evaluateAnswer('15', 'FIFTEEN'), '15 matches FIFTEEN');
  assert(evaluateAnswer('3', 'THREE'), '3 matches THREE');
  assert(evaluateAnswer('1', 'ONE'), '1 matches ONE');
  assert(evaluateAnswer('40', 'FORTY'), '40 matches FORTY');
  assert(evaluateAnswer('40p', 'FORTY'), '40p matches FORTY');
  assert(evaluateAnswer('40 pence', 'FORTY'), '40 pence matches FORTY');
  assert(evaluateAnswer('90', 'NINETY'), '90 matches NINETY');
  assert(evaluateAnswer('90 degrees', 'NINETY'), '90 degrees matches NINETY');
  assert(evaluateAnswer('10', 'TEN'), '10 matches TEN');
  assert(evaluateAnswer('70', 'SEVENTY'), '70 matches SEVENTY');
  assert(evaluateAnswer('£70', 'SEVENTY'), '£70 matches SEVENTY');
  assert(evaluateAnswer('12', 'TWELVE'), '12 matches TWELVE');
  assert(evaluateAnswer('1500', 'ONE THOUSAND FIVE HUNDRED'), '1500 matches ONE THOUSAND FIVE HUNDRED');
  assert(evaluateAnswer('1,500', 'ONE THOUSAND FIVE HUNDRED'), '1,500 matches ONE THOUSAND FIVE HUNDRED');
  assert(evaluateAnswer('fifteen hundred', 'ONE THOUSAND FIVE HUNDRED'), 'fifteen hundred matches ONE THOUSAND FIVE HUNDRED');
  assert(evaluateAnswer('50', 'FIFTY'), '50 matches FIFTY');
  assert(!evaluateAnswer('40', 'FOUR'), '40 does not match FOUR');
  assert(!evaluateAnswer('14', 'FOUR'), '14 does not match FOUR');
  assert(!evaluateAnswer('150', 'ONE THOUSAND FIVE HUNDRED'), '150 does not match 1500');

  console.log('\n--- SUITE 5: TIME FORMAT EQUIVALENCE ---');
  assert(evaluateAnswer('22:00', '22:00'), '22:00 matches 22:00');
  assert(evaluateAnswer('10:00 pm', '22:00'), '10:00 pm matches 22:00');
  assert(evaluateAnswer('10pm', '22:00'), '10pm matches 22:00');
  assert(evaluateAnswer('22.00', '22:00'), '22.00 matches 22:00');
  assert(evaluateAnswer('07:00', '07:00'), '07:00 matches 07:00');
  assert(evaluateAnswer('7:00', '07:00'), '7:00 matches 07:00');
  assert(evaluateAnswer('7:00 am', '07:00'), '7:00 am matches 07:00');
  assert(evaluateAnswer('15:30', '15:30'), '15:30 matches 15:30');
  assert(evaluateAnswer('3:30 pm', '15:30'), '3:30 pm matches 15:30');
  assert(!evaluateAnswer('08:00', '22:00'), '08:00 does not match 22:00');
  assert(!evaluateAnswer('10:00 am', '22:00'), '10:00 am does not match 22:00');

  console.log('\n--- SUITE 6: ARTICLES, HYPHENS & SPECIFIC GT VARIANTS ---');
  // GT Test 1 Q13
  assert(evaluateAnswer('footwear', ['FOOTWEAR', 'OUTDOOR FOOTWEAR']), 'Q13 accepts footwear');
  assert(evaluateAnswer('outdoor footwear', ['FOOTWEAR', 'OUTDOOR FOOTWEAR']), 'Q13 accepts outdoor footwear');
  // GT Test 1 Q18 Leading article
  assert(evaluateAnswer('the east staff car park', 'EAST STAFF CAR PARK'), 'Q18 accepts leading "the"');
  assert(evaluateAnswer('east staff car park', 'EAST STAFF CAR PARK'), 'Q18 accepts clean target');
  // GT Test 1 Q39 H4 code
  assert(evaluateAnswer('H4', ['H4', 'H-4']), 'Q39 accepts H4');
  assert(evaluateAnswer('H-4', ['H4', 'H-4']), 'Q39 accepts H-4');
  assert(evaluateAnswer('h4', ['H4', 'H-4']), 'Q39 accepts h4');
  // GT Test 2 Q16 Arm's
  assert(evaluateAnswer("arm's", ["ARM'S", "ARMS", "ARM"]), "Q16 accepts arm's");
  assert(evaluateAnswer('arms', ["ARM'S", "ARMS", "ARM"]), 'Q16 accepts arms');
  assert(evaluateAnswer('arm', ["ARM'S", "ARMS", "ARM"]), 'Q16 accepts arm');
  // GT Test 2 Q24 ED-4 code
  assert(evaluateAnswer('ED-4', ['ED-4', 'ED4']), 'Q24 accepts ED-4');
  assert(evaluateAnswer('ED4', ['ED-4', 'ED4']), 'Q24 accepts ED4');
  assert(evaluateAnswer('ed-4', ['ED-4', 'ED4']), 'Q24 accepts lowercase ed-4');
  // GT Test 2 Q38 Laufmaschine variants
  assert(evaluateAnswer('laufmaschine', ['LAUFMASCHINE', 'RUNNING MACHINE', 'DANDY HORSE']), 'Q38 accepts laufmaschine');
  assert(evaluateAnswer('running machine', ['LAUFMASCHINE', 'RUNNING MACHINE', 'DANDY HORSE']), 'Q38 accepts running machine');
  assert(evaluateAnswer('dandy horse', ['LAUFMASCHINE', 'RUNNING MACHINE', 'DANDY HORSE']), 'Q38 accepts dandy horse');
  // GT Test 2 Q39 Diamond-shaped variants
  assert(evaluateAnswer('diamond-shaped', ['DIAMOND-SHAPED', 'DIAMOND SHAPED', 'DIAMOND']), 'Q39 accepts diamond-shaped');
  assert(evaluateAnswer('diamond shaped', ['DIAMOND-SHAPED', 'DIAMOND SHAPED', 'DIAMOND']), 'Q39 accepts diamond shaped');
  assert(evaluateAnswer('diamond', ['DIAMOND-SHAPED', 'DIAMOND SHAPED', 'DIAMOND']), 'Q39 accepts diamond');

  console.log('\n--- SUITE 7: EMPTY, NULL & INVALID ANSWERS ---');
  assert(!evaluateAnswer('', 'FOOTWEAR'), 'Empty string is marked wrong');
  assert(!evaluateAnswer('   ', 'FOOTWEAR'), 'Whitespace-only string is marked wrong');
  assert(!evaluateAnswer(undefined, 'FOOTWEAR'), 'undefined is marked wrong');
  assert(!evaluateAnswer(null, 'FOOTWEAR'), 'null is marked wrong');

  console.log('\n--- SUITE 8: ALL 80 GT READING QUESTIONS KEY VERIFICATION ---');
  GT_READING_TESTS.forEach((test, tIdx) => {
    if (!test.readingData) return;
    let testRaw = 0;
    test.readingData.questions.forEach((q) => {
      const primaryAns = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
      const isCorrect = evaluateAnswer(primaryAns, q.correctAnswer);
      if (isCorrect) testRaw++;
      assert(isCorrect, `Test ${tIdx + 1} Q${q.number} evaluates true with key "${primaryAns}"`);
    });
    assert(testRaw === 40, `Test ${tIdx + 1} produces perfect 40/40 raw score`);
    const band = getGeneralReadingBand(testRaw);
    assert(band === 9.0, `Test ${tIdx + 1} raw 40/40 maps to GT Band 9.0 (got ${band})`);
  });

  console.log('\n--- SUITE 9: GT VS ACADEMIC READING BAND CONVERSION PRESERVATION ---');
  // GT Conversion checks
  assert(getGeneralReadingBand(40) === 9.0, 'GT 40 = 9.0');
  assert(getGeneralReadingBand(39) === 8.5, 'GT 39 = 8.5');
  assert(getGeneralReadingBand(37) === 8.0, 'GT 37 = 8.0');
  assert(getGeneralReadingBand(36) === 7.5, 'GT 36 = 7.5');
  assert(getGeneralReadingBand(34) === 7.0, 'GT 34 = 7.0');
  assert(getGeneralReadingBand(32) === 6.5, 'GT 32 = 6.5');
  assert(getGeneralReadingBand(30) === 6.0, 'GT 30 = 6.0');
  assert(getGeneralReadingBand(27) === 5.5, 'GT 27 = 5.5');
  assert(getGeneralReadingBand(23) === 5.0, 'GT 23 = 5.0');
  assert(getGeneralReadingBand(19) === 4.5, 'GT 19 = 4.5');
  assert(getGeneralReadingBand(15) === 4.0, 'GT 15 = 4.0');
  assert(getGeneralReadingBand(0) === 0.0, 'GT 0 = 0.0');

  // Academic Conversion checks (strict preservation)
  assert(getAcademicReadingBand(39) === 9.0, 'Academic 39 = 9.0');
  assert(getAcademicReadingBand(37) === 8.5, 'Academic 37 = 8.5');
  assert(getAcademicReadingBand(35) === 8.0, 'Academic 35 = 8.0');
  assert(getAcademicReadingBand(33) === 7.5, 'Academic 33 = 7.5');
  assert(getAcademicReadingBand(30) === 7.0, 'Academic 30 = 7.0');
  assert(getAcademicReadingBand(27) === 6.5, 'Academic 27 = 6.5');
  assert(getAcademicReadingBand(23) === 6.0, 'Academic 23 = 6.0');
  assert(getAcademicReadingBand(19) === 5.5, 'Academic 19 = 5.5');
  assert(getAcademicReadingBand(15) === 5.0, 'Academic 15 = 5.0');
  assert(getAcademicReadingBand(0) === 0.0, 'Academic 0 = 0.0');

  // Listening Conversion checks (strict preservation)
  assert(getListeningBand(39) === 9.0, 'Listening 39 = 9.0');
  assert(getListeningBand(35) === 8.0, 'Listening 35 = 8.0');
  assert(getListeningBand(30) === 7.0, 'Listening 30 = 7.0');

  console.log(`\n========================================`);
  console.log(`TEST SUMMARY: ${passedTests} passed, ${failedTests} failed`);
  console.log(`========================================\n`);

  if (failedTests > 0) {
    process.exit(1);
  }
});
