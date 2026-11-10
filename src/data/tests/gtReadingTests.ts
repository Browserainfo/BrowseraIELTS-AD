/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../types';

export const GT_READING_TESTS: TestItem[] = [
  {
    id: "cd_gt_reading_p1",
    testNumber: 1,
    courseType: "CD-IELTS General Training",
    testType: "practice",
    module: "Reading",
    title: "CD-IELTS GT Reading Practice 1: Public Transit Regulations, Workplace Safety & Mechanical Clocks",
    description: "Official CD-IELTS General Training Reading test with 40 questions across Section 1 (Everyday Social Survival), Section 2 (Workplace Safety & Policies), and Section 3 (General Interest Article).",
    durationMinutes: 60,
    totalQuestions: 40,
    readingData: {
      id: "cd_gt_reading_p1",
      title: "CD-IELTS GT Reading Practice 1: Public Transit Regulations, Workplace Safety & Mechanical Clocks",
      courseType: "ielts_general",
      durationMinutes: 60,
      passageTitle: "Section 1: Everyday Social Survival",
      passageSubtitle: "Public Transport Regulations, Transit Cards & Community Centre Rules",
      passageText: "SECTION 1: Everyday Social Survival (Texts A & B)\n\nText A: City Metro & Bus Transit Guidelines\nAll passengers travelling on municipal metro trains and rapid bus transit lines must validate a smart travel card or digital contactless ticket prior to boarding. Standard single fares permit travel within Zones 1 and 2 for up to ninety minutes from initial tap-in, including one transfer between bus and metro services.\nPeak travel hours are strictly defined as Monday to Friday between 06:30 and 09:00, and in the evening between 16:30 and 19:00. Off-peak travel discounts of thirty percent automatically apply outside these intervals, as well as on all official public holidays.\nRegistered full-time students under age twenty-five are entitled to apply for an academic concession pass upon presentation of valid student enrollment credentials. Children under five years old travel free of charge when accompanied by a fare-paying adult.\nBicycles are permitted on metro trains only during designated off-peak hours and must be positioned in the rear multi-purpose carriage. Folding bicycles may be carried at all times provided they remain fully folded throughout the transit journey.\nLost property items found on transit vehicles are transported directly to the Central Station Baggage Depot at 18:00 daily and retained for thirty calendar days before disposal.\n\nText B: Riverside Community Sports Centre Membership & Locker Policy\nWelcome to Riverside Sports Centre. Our modern fitness complex features an Olympic-sized indoor swimming pool, gym facilities, and squash courts. To maintain high hygiene and safety standards, all members and day-pass visitors are requested to abide by the following operational guidelines.\nIndividual membership cards must be swiped at the automated turnstiles upon every entry. Day-pass visitors may obtain a temporary electronic barcode receipt from customer service. Lockers are provided in the main changing rooms free of charge during your workout session. Users must provide their own padlock or purchase one from reception for four pounds.\nPersonal belongings must not be left overnight in changing room lockers. Any lockers remaining locked after 22:00 closing time will be opened by security personnel, and unattended contents will be transferred to lost property subject to a five-pound retrieval fee.\nSwimming pool lane allocation is updated hourly on the poolside display screen. Lanes are designated according to swimming pace: Slow, Intermediate, and Fast. Outdoor footwear is strictly prohibited on the tiled pool deck; all swimmers must shower thoroughly before entering the water.\nCancellation of booked court sessions requires at least twenty-four hours advance notification through our mobile app to receive a full refund or session credit.",
      passages: [
        {
          passageNumber: 1,
          title: "Section 1: Everyday Social Survival (Texts A & B)",
          subtitle: "City Metro & Bus Transit Guidelines & Riverside Sports Centre Locker Policy",
          text: "Text A: City Metro & Bus Transit Guidelines\nAll passengers travelling on municipal metro trains and rapid bus transit lines must validate a smart travel card or digital contactless ticket prior to boarding. Standard single fares permit travel within Zones 1 and 2 for up to ninety minutes from initial tap-in, including one transfer between bus and metro services.\nPeak travel hours are strictly defined as Monday to Friday between 06:30 and 09:00, and in the evening between 16:30 and 19:00. Off-peak travel discounts of thirty percent automatically apply outside these intervals, as well as on all official public holidays.\nRegistered full-time students under age twenty-five are entitled to apply for an academic concession pass upon presentation of valid student enrollment credentials. Children under five years old travel free of charge when accompanied by a fare-paying adult.\nBicycles are permitted on metro trains only during designated off-peak hours and must be positioned in the rear multi-purpose carriage. Folding bicycles may be carried at all times provided they remain fully folded throughout the transit journey.\nLost property items found on transit vehicles are transported directly to the Central Station Baggage Depot at 18:00 daily and retained for thirty calendar days before disposal.\n\nText B: Riverside Community Sports Centre Membership & Locker Policy\nWelcome to Riverside Sports Centre. Our modern fitness complex features an Olympic-sized indoor swimming pool, gym facilities, and squash courts. To maintain high hygiene and safety standards, all members and day-pass visitors are requested to abide by the following operational guidelines.\nIndividual membership cards must be swiped at the automated turnstiles upon every entry. Day-pass visitors may obtain a temporary electronic barcode receipt from customer service. Lockers are provided in the main changing rooms free of charge during your workout session. Users must provide their own padlock or purchase one from reception for four pounds.\nPersonal belongings must not be left overnight in changing room lockers. Any lockers remaining locked after 22:00 closing time will be opened by security personnel, and unattended contents will be transferred to lost property subject to a five-pound retrieval fee.\nSwimming pool lane allocation is updated hourly on the poolside display screen. Lanes are designated according to swimming pace: Slow, Intermediate, and Fast. Outdoor footwear is strictly prohibited on the tiled pool deck; all swimmers must shower thoroughly before entering the water.\nCancellation of booked court sessions requires at least twenty-four hours advance notification through our mobile app to receive a full refund or session credit.",
          questions: [
            {
              id: "gt_p1_q1",
              number: 1,
              type: "true_false_not_given",
              questionText: "A standard single fare ticket allows unlimited transfers between bus and metro for two hours.",
              correctAnswer: "FALSE",
              explanation: "Text A states standard single fares permit travel for up to ninety minutes and include only one transfer."
            },
            {
              id: "gt_p1_q2",
              number: 2,
              type: "true_false_not_given",
              questionText: "Passengers travelling at 10:00 AM on a Tuesday receive an automatic off-peak discount.",
              correctAnswer: "TRUE",
              explanation: "Peak hours end at 09:00 AM on weekdays, so 10:00 AM is an off-peak interval eligible for a thirty percent discount."
            },
            {
              id: "gt_p1_q3",
              number: 3,
              type: "true_false_not_given",
              questionText: "Part-time university students can obtain the academic concession pass.",
              correctAnswer: "FALSE",
              explanation: "Text A explicitly states that only 'registered full-time students' under age twenty-five are entitled to apply."
            },
            {
              id: "gt_p1_q4",
              number: 4,
              type: "true_false_not_given",
              questionText: "Senior citizens over sixty-five travel at half price on weekends.",
              correctAnswer: "NOT GIVEN",
              explanation: "Text A mentions children under five and full-time students, but gives no information regarding senior citizen fares."
            },
            {
              id: "gt_p1_q5",
              number: 5,
              type: "true_false_not_given",
              questionText: "Standard non-folding bicycles cannot be brought onto metro trains during peak morning hours.",
              correctAnswer: "TRUE",
              explanation: "Text A states bicycles are permitted 'only during designated off-peak hours'."
            },
            {
              id: "gt_p1_q6",
              number: 6,
              type: "true_false_not_given",
              questionText: "Folding bicycles must be placed in a special protective carrying bag while on the train.",
              correctAnswer: "NOT GIVEN",
              explanation: "Text A states they must remain 'fully folded throughout the transit journey', but does not mention a carrying bag."
            },
            {
              id: "gt_p1_q7",
              number: 7,
              type: "true_false_not_given",
              questionText: "Items left on transit vehicles are kept at the Central Station depot for up to thirty calendar days.",
              correctAnswer: "TRUE",
              explanation: "Text A confirms items are 'retained for thirty calendar days before disposal'."
            },
            {
              id: "gt_p1_q8",
              number: 8,
              type: "fill_blank",
              questionText: "Day-pass visitors to Riverside Sports Centre enter turnstiles using a temporary ______ receipt.",
              correctAnswer: "BARCODE",
              explanation: "Text B explains visitors obtain a 'temporary electronic barcode receipt'."
            },
            {
              id: "gt_p1_q9",
              number: 9,
              type: "fill_blank",
              questionText: "Members can buy a padlock at reception for the price of ______ pounds.",
              correctAnswer: "FOUR",
              explanation: "Text B states visitors can 'purchase one from reception for four pounds'."
            },
            {
              id: "gt_p1_q10",
              number: 10,
              type: "fill_blank",
              questionText: "Lockers remaining locked after ______ will be forcibly opened by security staff.",
              correctAnswer: "22:00",
              explanation: "Text B explicitly warns that lockers locked after 22:00 closing time will be opened."
            },
            {
              id: "gt_p1_q11",
              number: 11,
              type: "fill_blank",
              questionText: "Reclaiming items from lost property requires paying a fee of ______ pounds.",
              correctAnswer: "FIVE",
              explanation: "Text B mentions a 'five-pound retrieval fee'."
            },
            {
              id: "gt_p1_q12",
              number: 12,
              type: "fill_blank",
              questionText: "Lane designations in the swimming pool are updated on the poolside screen every ______.",
              correctAnswer: "HOUR",
              explanation: "Text B states lane allocation is 'updated hourly on the poolside display screen'."
            },
            {
              id: "gt_p1_q13",
              number: 13,
              type: "fill_blank",
              questionText: "Swimmers are not allowed to wear ______ on the tiled pool deck.",
              correctAnswer: ["FOOTWEAR", "OUTDOOR FOOTWEAR"],
              explanation: "Text B specifies 'Outdoor footwear is strictly prohibited on the tiled pool deck'. Either 'footwear' or 'outdoor footwear' accurately completes the statement."
            },
            {
              id: "gt_p1_q14",
              number: 14,
              type: "fill_blank",
              questionText: "To receive a full refund, court cancellations must be submitted at least ______ hours in advance.",
              correctAnswer: "TWENTY-FOUR",
              explanation: "Text B requires 'at least twenty-four hours advance notification'."
            }
          ]
        },
        {
          passageNumber: 2,
          title: "Section 2: Workplace Survival & Training (Texts C & D)",
          subtitle: "Emergency Fire Procedures & Flexible Working Hours Policy",
          text: "Text C: Apex Engineering – Emergency Fire Evacuation Protocols\nSafety in the workplace is the paramount responsibility of every staff member. In the event of discovering a fire or hearing the continuous building evacuation alarm, all personnel must adhere strictly to the following five-step protocol.\n1. Raise the Alarm: Immediately activate the nearest wall-mounted fire break-glass call point. Call internal security extension 3333 to report the exact room location.\n2. Cease Operations: Switch off heavy machinery and electrical equipment if safe to do so. Do not pause to collect personal coats, laptop bags, or valuables.\n3. Exit the Facility: Follow green emergency exit signage towards the nearest designated fire escape staircase. Under no circumstances must passenger or service elevators be used during an evacuation.\n4. Nominated Fire Wardens: Designated floor wardens wearing high-visibility orange vests will sweep offices and restrooms to ensure all staff and registered guests have vacated.\n5. Assembly Station: Proceed immediately to Assembly Point Delta, situated in the East Staff Car Park opposite Gate 4. Report to your department supervisor for roll-call attendance verification. Do not re-enter the building until official 'All Clear' authorization is declared by the Chief Safety Officer.\n\nText D: Employee Leave Entitlement & Flexible Working Scheme\nApex Engineering is committed to supporting work-life balance through our comprehensive leave entitlements and core-hours flexible working policy.\nAnnual Leave: Full-time employees are entitled to twenty-five working days of paid annual holiday per calendar year, in addition to standard statutory bank holidays. Vacation requests exceeding three consecutive days must be logged via the company HR portal at least four weeks prior to the proposed start date. Supervisors evaluate staffing levels to prevent operational disruptions.\nFlexible Core Hours: Standard working hours require completing thirty-seven and a half hours weekly. Staff may commence their workday between 07:30 and 09:30, and depart between 16:00 and 18:30, provided that the mandatory core window of 10:00 to 15:30 is fully attended.\nRemote Working Scheme: Following satisfactory completion of the initial six-month probationary review, employees whose roles permit home working may request up to two remote working days per working week. Formal approval from the department director and verification of high-speed broadband connectivity are mandatory prerequisites.",
          questions: [
            {
              id: "gt_p1_q15",
              number: 15,
              type: "multiple_choice",
              options: [
                "A: Call the facility manager's personal mobile phone",
                "B: Activate the nearest wall-mounted break-glass call point",
                "C: Send an urgent notification via company email",
                "D: Return to their desk to save pending computer files"
              ],
              questionText: "According to Text C, the first action upon discovering a fire is to:",
              correctAnswer: "B",
              explanation: "Step 1 of Text C states: 'Immediately activate the nearest wall-mounted fire break-glass call point.'"
            },
            {
              id: "gt_p1_q16",
              number: 16,
              type: "true_false_not_given",
              questionText: "Elevators may be operated during a fire evacuation if stairs are congested.",
              correctAnswer: "FALSE",
              explanation: "Step 3 strictly prohibits elevators: 'Under no circumstances must passenger or service elevators be used during an evacuation.'"
            },
            {
              id: "gt_p1_q17",
              number: 17,
              type: "fill_blank",
              questionText: "Fire wardens can be recognized during an emergency because they wear high-visibility ______ vests.",
              correctAnswer: "ORANGE",
              explanation: "Step 4 describes wardens wearing 'high-visibility orange vests'."
            },
            {
              id: "gt_p1_q18",
              number: 18,
              type: "fill_blank",
              questionText: "The official outdoor assembly station is Assembly Point Delta, located in the ______.",
              correctAnswer: "EAST STAFF CAR PARK",
              explanation: "Step 5 states: 'Proceed immediately to Assembly Point Delta, situated in the East Staff Car Park opposite Gate 4.'"
            },
            {
              id: "gt_p1_q19",
              number: 19,
              type: "true_false_not_given",
              questionText: "Staff can return to their desks as soon as fire engines arrive on the campus.",
              correctAnswer: "FALSE",
              explanation: "Text C states: 'Do not re-enter the building until official All Clear authorization is declared by the Chief Safety Officer.'"
            },
            {
              id: "gt_p1_q20",
              number: 20,
              type: "fill_blank",
              questionText: "Full-time personnel receive ______ working days of paid annual vacation each year.",
              correctAnswer: "TWENTY-FIVE",
              explanation: "Text D specifies 'twenty-five working days of paid annual holiday'."
            },
            {
              id: "gt_p1_q21",
              number: 21,
              type: "fill_blank",
              questionText: "Vacation requests lasting more than three days must be submitted at least ______ weeks ahead of time.",
              correctAnswer: "FOUR",
              explanation: "Text D states requests exceeding three days must be logged 'at least four weeks prior to the proposed start date'."
            },
            {
              id: "gt_p1_q22",
              number: 22,
              type: "true_false_not_given",
              questionText: "Unused annual leave days are automatically cashed out at the end of December.",
              correctAnswer: "NOT GIVEN",
              explanation: "Text D explains leave entitlement and application notice, but does not state whether unused days can be cashed out."
            },
            {
              id: "gt_p1_q23",
              number: 23,
              type: "fill_blank",
              questionText: "Under the flexible core hours system, mandatory workplace attendance is required from 10:00 to ______.",
              correctAnswer: "15:30",
              explanation: "Text D confirms: 'the mandatory core window of 10:00 to 15:30 is fully attended'."
            },
            {
              id: "gt_p1_q24",
              number: 24,
              type: "fill_blank",
              questionText: "The total required working commitment is ______ hours every week.",
              correctAnswer: "THIRTY-SEVEN AND A HALF",
              explanation: "Text D specifies: 'Standard working hours require completing thirty-seven and a half hours weekly'."
            },
            {
              id: "gt_p1_q25",
              number: 25,
              type: "true_false_not_given",
              questionText: "New employees can work from home starting from their second month of employment.",
              correctAnswer: "FALSE",
              explanation: "Text D states remote working is available only 'Following satisfactory completion of the initial six-month probationary review'."
            },
            {
              id: "gt_p1_q26",
              number: 26,
              type: "fill_blank",
              questionText: "Eligible staff members may work remotely for a maximum of ______ days per week.",
              correctAnswer: "TWO",
              explanation: "Text D states employees 'may request up to two remote working days per working week'."
            },
            {
              id: "gt_p1_q27",
              number: 27,
              type: "true_false_not_given",
              questionText: "The company provides free laptop computers and mobile phones for all remote staff.",
              correctAnswer: "NOT GIVEN",
              explanation: "Text D mentions approval from the director and broadband connectivity verification, but makes no mention of company-provided laptops."
            }
          ]
        },
        {
          passageNumber: 3,
          title: "Section 3: General Interest Extended Article",
          subtitle: "The Mechanical Evolution of Pendulum Clocks and Maritime Navigation",
          text: "Paragraph A: For centuries, humanity relied upon celestial observation, sundials, and primitive water clocks to measure the passage of time. However, these early apparatuses lacked consistent precision, frequently drifting by up to thirty minutes each day. The invention that catalyzed a technological transformation in horology was the mechanical pendulum clock, developed in 1656 by the Dutch mathematician and natural philosopher Christiaan Huygens. Inspired by Galileo Galilei's earlier mathematical analysis of the isochronous properties of swinging pendulums, Huygens realized that a suspended weight oscillating along a predictable arc could regulate the unwinding of geared wheel trains with unprecedented regularity.\n\nParagraph B: Huygens' breakthrough relied upon the anchor escapement mechanism, perfected shortly afterwards by English clockmakers. The escapement arrested and released the clock's gear train at exact intervals, transferring tiny kinetic impulses to keep the pendulum swinging while simultaneously driving the minute and hour hands forward. By reducing daily temporal errors from fifteen minutes to under fifteen seconds, pendulum clocks rapidly became indispensable instruments across astronomical observatories, academic lecture halls, and governmental bureaus across Europe.\n\nParagraph C: Despite their terrestrial success, pendulum clocks suffered from one fatal limitation: they could not function aboard sea vessels. The continuous pitch, roll, and vibration of ships tossed by ocean currents disrupted the delicate motion of suspended weights, causing clocks to stop or gain wild inaccuracies. This technological void carried tragic consequences for maritime exploration. Navigators could readily determine their latitude by measuring the angle of the midday sun or Polaris above the horizon. Calculating longitude, however, required knowing the exact time at a reference meridian (such as Greenwich) simultaneously with local solar noon. Without accurate maritime clocks, captains misjudged their east-west position by hundreds of leagues, resulting in catastrophic shipwrecks such as the Scilly naval disaster of 1707.\n\nParagraph D: In response to mounting maritime casualties, the British Parliament passed the historic Longitude Act in 1714, offering a monumental prize of twenty thousand pounds—equivalent to millions today—to anyone capable of inventing a maritime instrument that could determine longitude within thirty nautical miles on a transatlantic voyage. While academic astronomers argued that complex lunar distance tables offered the only viable solution, an obscure self-taught Yorkshire carpenter named John Harrison dedicated four decades of his life to constructing mechanical timekeepers resistant to ocean turbulence.\n\nParagraph E: Harrison bypassed pendulums entirely, substituting spring-driven balances and bimetallic temperature-compensating strips to counteract thermal expansion. His fourth timekeeper, the famed H4 chronometer completed in 1761, resembled an oversized silver pocket watch with an astonishingly fast balance wheel oscillation. When tested on a grueling transatlantic trial to Jamaica, Harrison’s H4 chronometer lost merely five seconds over eighty-one days of ocean voyage, far exceeding the accuracy thresholds demanded by Parliament. Harrison’s triumph demonstrated that mechanical precision could conquer maritime navigation, safeguarding international trade routes and fundamentally uniting global commerce.",
          questions: [
            {
              id: "gt_p1_q28",
              number: 28,
              type: "true_false_not_given",
              questionText: "Before the 17th century, timekeeping devices regularly suffered from substantial daily inaccuracies.",
              correctAnswer: "TRUE",
              explanation: "Paragraph A mentions early apparatuses lacked precision, 'frequently drifting by up to thirty minutes each day'."
            },
            {
              id: "gt_p1_q29",
              number: 29,
              type: "true_false_not_given",
              questionText: "Christiaan Huygens was the first person to conduct mathematical observations on pendulum oscillation.",
              correctAnswer: "FALSE",
              explanation: "Paragraph A states Huygens was 'Inspired by Galileo Galilei's earlier mathematical analysis of the isochronous properties of swinging pendulums'."
            },
            {
              id: "gt_p1_q30",
              number: 30,
              type: "true_false_not_given",
              questionText: "The anchor escapement mechanism helped reduce daily clock errors to under fifteen seconds.",
              correctAnswer: "TRUE",
              explanation: "Paragraph B confirms it reduced 'daily temporal errors from fifteen minutes to under fifteen seconds'."
            },
            {
              id: "gt_p1_q31",
              number: 31,
              type: "true_false_not_given",
              questionText: "Maritime navigators found it equally difficult to calculate both latitude and longitude at sea.",
              correctAnswer: "FALSE",
              explanation: "Paragraph C explains navigators 'could readily determine their latitude', while calculating longitude was the unresolved challenge."
            },
            {
              id: "gt_p1_q32",
              number: 32,
              type: "true_false_not_given",
              questionText: "The British Longitude Act of 1714 offered a financial award of twenty thousand pounds.",
              correctAnswer: "TRUE",
              explanation: "Paragraph D states Parliament offered 'a monumental prize of twenty thousand pounds'."
            },
            {
              id: "gt_p1_q33",
              number: 33,
              type: "true_false_not_given",
              questionText: "John Harrison held formal professorial degrees in astronomy from Oxford University.",
              correctAnswer: "FALSE",
              explanation: "Paragraph D describes Harrison as 'an obscure self-taught Yorkshire carpenter'."
            },
            {
              id: "gt_p1_q34",
              number: 34,
              type: "true_false_not_given",
              questionText: "Harrison's H4 chronometer lost less than ten seconds during its entire trial to Jamaica.",
              correctAnswer: "TRUE",
              explanation: "Paragraph E states H4 'lost merely five seconds over eighty-one days of ocean voyage'."
            },
            {
              id: "gt_p1_q35",
              number: 35,
              type: "multiple_choice",
              options: [
                "A: The invention of the marine chronometer by Galileo",
                "B: The introduction of the pendulum clock by Christiaan Huygens",
                "C: The creation of the first water clock in Britain",
                "D: The publication of lunar astronomical tables"
              ],
              questionText: "According to Paragraph A, what breakthrough fundamentally transformed horological accuracy in 1656?",
              correctAnswer: "B",
              explanation: "Paragraph A highlights the mechanical pendulum clock developed in 1656 by Christiaan Huygens."
            },
            {
              id: "gt_p1_q36",
              number: 36,
              type: "multiple_choice",
              options: [
                "A: Ocean water corroded their bronze escapement gears",
                "B: Ship motion disturbed the natural oscillation of swinging weights",
                "C: Wooden clock cases cracked due to tropical ocean humidity",
                "D: Captains were prohibited by naval regulations from carrying clocks"
              ],
              questionText: "Why were pendulum clocks incapable of functioning on marine vessels?",
              correctAnswer: "B",
              explanation: "Paragraph C notes that 'continuous pitch, roll, and vibration of ships tossed by ocean currents disrupted the delicate motion of suspended weights'."
            },
            {
              id: "gt_p1_q37",
              number: 37,
              type: "multiple_choice",
              options: [
                "A: Measuring the height of the midday sun above the sea horizon",
                "B: Calculating the exact local solar noon against reference meridian time",
                "C: Consulting Polaris elevation charts during clear night skies",
                "D: Counting the rotational speed of ocean currents"
              ],
              questionText: "Determining a vessel's longitude at sea required:",
              correctAnswer: "B",
              explanation: "Paragraph C confirms longitude 'required knowing the exact time at a reference meridian (such as Greenwich) simultaneously with local solar noon'."
            },
            {
              id: "gt_p1_q38",
              number: 38,
              type: "fill_blank",
              questionText: "John Harrison replaced swinging pendulums with spring-driven balances and bimetallic strips to counteract ______ expansion.",
              correctAnswer: "THERMAL",
              explanation: "Paragraph E states he used 'bimetallic temperature-compensating strips to counteract thermal expansion'."
            },
            {
              id: "gt_p1_q39",
              number: 39,
              type: "fill_blank",
              questionText: "Harrison's award-winning timekeeper, completed in 1761, was named the ______ chronometer.",
              correctAnswer: ["H4", "H-4"],
              explanation: "Paragraph E names 'His fourth timekeeper, the famed H4 chronometer completed in 1761'."
            },
            {
              id: "gt_p1_q40",
              number: 40,
              type: "fill_blank",
              questionText: "The sea trial of Harrison's chronometer tested its timekeeping accuracy over a voyage to ______.",
              correctAnswer: "JAMAICA",
              explanation: "Paragraph E states it was tested on 'a grueling transatlantic trial to Jamaica'."
            }
          ]
        }
      ],
      questions: [
        // Questions 1 to 14 (Section 1)
        {
          id: "gt_p1_q1",
          number: 1,
          type: "true_false_not_given",
          questionText: "A standard single fare ticket allows unlimited transfers between bus and metro for two hours.",
          correctAnswer: "FALSE",
          explanation: "Text A states standard single fares permit travel for up to ninety minutes and include only one transfer."
        },
        {
          id: "gt_p1_q2",
          number: 2,
          type: "true_false_not_given",
          questionText: "Passengers travelling at 10:00 AM on a Tuesday receive an automatic off-peak discount.",
          correctAnswer: "TRUE",
          explanation: "Peak hours end at 09:00 AM on weekdays, so 10:00 AM is an off-peak interval eligible for a thirty percent discount."
        },
        {
          id: "gt_p1_q3",
          number: 3,
          type: "true_false_not_given",
          questionText: "Part-time university students can obtain the academic concession pass.",
          correctAnswer: "FALSE",
          explanation: "Text A explicitly states that only 'registered full-time students' under age twenty-five are entitled to apply."
        },
        {
          id: "gt_p1_q4",
          number: 4,
          type: "true_false_not_given",
          questionText: "Senior citizens over sixty-five travel at half price on weekends.",
          correctAnswer: "NOT GIVEN",
          explanation: "Text A mentions children under five and full-time students, but gives no information regarding senior citizen fares."
        },
        {
          id: "gt_p1_q5",
          number: 5,
          type: "true_false_not_given",
          questionText: "Standard non-folding bicycles cannot be brought onto metro trains during peak morning hours.",
          correctAnswer: "TRUE",
          explanation: "Text A states bicycles are permitted 'only during designated off-peak hours'."
        },
        {
          id: "gt_p1_q6",
          number: 6,
          type: "true_false_not_given",
          questionText: "Folding bicycles must be placed in a special protective carrying bag while on the train.",
          correctAnswer: "NOT GIVEN",
          explanation: "Text A states they must remain 'fully folded throughout the transit journey', but does not mention a carrying bag."
        },
        {
          id: "gt_p1_q7",
          number: 7,
          type: "true_false_not_given",
          questionText: "Items left on transit vehicles are kept at the Central Station depot for up to thirty calendar days.",
          correctAnswer: "TRUE",
          explanation: "Text A confirms items are 'retained for thirty calendar days before disposal'."
        },
        {
          id: "gt_p1_q8",
          number: 8,
          type: "fill_blank",
          questionText: "Day-pass visitors to Riverside Sports Centre enter turnstiles using a temporary ______ receipt.",
          correctAnswer: "BARCODE",
          explanation: "Text B explains visitors obtain a 'temporary electronic barcode receipt'."
        },
        {
          id: "gt_p1_q9",
          number: 9,
          type: "fill_blank",
          questionText: "Members can buy a padlock at reception for the price of ______ pounds.",
          correctAnswer: "FOUR",
          explanation: "Text B states visitors can 'purchase one from reception for four pounds'."
        },
        {
          id: "gt_p1_q10",
          number: 10,
          type: "fill_blank",
          questionText: "Lockers remaining locked after ______ will be forcibly opened by security staff.",
          correctAnswer: "22:00",
          explanation: "Text B explicitly warns that lockers locked after 22:00 closing time will be opened."
        },
        {
          id: "gt_p1_q11",
          number: 11,
          type: "fill_blank",
          questionText: "Reclaiming items from lost property requires paying a fee of ______ pounds.",
          correctAnswer: "FIVE",
          explanation: "Text B mentions a 'five-pound retrieval fee'."
        },
        {
          id: "gt_p1_q12",
          number: 12,
          type: "fill_blank",
          questionText: "Lane designations in the swimming pool are updated on the poolside screen every ______.",
          correctAnswer: "HOUR",
          explanation: "Text B states lane allocation is 'updated hourly on the poolside display screen'."
        },
        {
          id: "gt_p1_q13",
          number: 13,
          type: "fill_blank",
          questionText: "Swimmers are not allowed to wear ______ on the tiled pool deck.",
          correctAnswer: ["FOOTWEAR", "OUTDOOR FOOTWEAR"],
          explanation: "Text B specifies 'Outdoor footwear is strictly prohibited on the tiled pool deck'. Either 'footwear' or 'outdoor footwear' accurately completes the statement."
        },
        {
          id: "gt_p1_q14",
          number: 14,
          type: "fill_blank",
          questionText: "To receive a full refund, court cancellations must be submitted at least ______ hours in advance.",
          correctAnswer: "TWENTY-FOUR",
          explanation: "Text B requires 'at least twenty-four hours advance notification'."
        },
        // Questions 15 to 27 (Section 2)
        {
          id: "gt_p1_q15",
          number: 15,
          type: "multiple_choice",
          options: [
            "A: Call the facility manager's personal mobile phone",
            "B: Activate the nearest wall-mounted break-glass call point",
            "C: Send an urgent notification via company email",
            "D: Return to their desk to save pending computer files"
          ],
          questionText: "According to Text C, the first action upon discovering a fire is to:",
          correctAnswer: "B",
          explanation: "Step 1 of Text C states: 'Immediately activate the nearest wall-mounted fire break-glass call point.'"
        },
        {
          id: "gt_p1_q16",
          number: 16,
          type: "true_false_not_given",
          questionText: "Elevators may be operated during a fire evacuation if stairs are congested.",
          correctAnswer: "FALSE",
          explanation: "Step 3 strictly prohibits elevators: 'Under no circumstances must passenger or service elevators be used during an evacuation.'"
        },
        {
          id: "gt_p1_q17",
          number: 17,
          type: "fill_blank",
          questionText: "Fire wardens can be recognized during an emergency because they wear high-visibility ______ vests.",
          correctAnswer: "ORANGE",
          explanation: "Step 4 describes wardens wearing 'high-visibility orange vests'."
        },
        {
          id: "gt_p1_q18",
          number: 18,
          type: "fill_blank",
          questionText: "The official outdoor assembly station is Assembly Point Delta, located in the ______.",
          correctAnswer: "EAST STAFF CAR PARK",
          explanation: "Step 5 states: 'Proceed immediately to Assembly Point Delta, situated in the East Staff Car Park opposite Gate 4.'"
        },
        {
          id: "gt_p1_q19",
          number: 19,
          type: "true_false_not_given",
          questionText: "Staff can return to their desks as soon as fire engines arrive on the campus.",
          correctAnswer: "FALSE",
          explanation: "Text C states: 'Do not re-enter the building until official All Clear authorization is declared by the Chief Safety Officer.'"
        },
        {
          id: "gt_p1_q20",
          number: 20,
          type: "fill_blank",
          questionText: "Full-time personnel receive ______ working days of paid annual vacation each year.",
          correctAnswer: "TWENTY-FIVE",
          explanation: "Text D specifies 'twenty-five working days of paid annual holiday'."
        },
        {
          id: "gt_p1_q21",
          number: 21,
          type: "fill_blank",
          questionText: "Vacation requests lasting more than three days must be submitted at least ______ weeks ahead of time.",
          correctAnswer: "FOUR",
          explanation: "Text D states requests exceeding three days must be logged 'at least four weeks prior to the proposed start date'."
        },
        {
          id: "gt_p1_q22",
          number: 22,
          type: "true_false_not_given",
          questionText: "Unused annual leave days are automatically cashed out at the end of December.",
          correctAnswer: "NOT GIVEN",
          explanation: "Text D explains leave entitlement and application notice, but does not state whether unused days can be cashed out."
        },
        {
          id: "gt_p1_q23",
          number: 23,
          type: "fill_blank",
          questionText: "Under the flexible core hours system, mandatory workplace attendance is required from 10:00 to ______.",
          correctAnswer: "15:30",
          explanation: "Text D confirms: 'the mandatory core window of 10:00 to 15:30 is fully attended'."
        },
        {
          id: "gt_p1_q24",
          number: 24,
          type: "fill_blank",
          questionText: "The total required working commitment is ______ hours every week.",
          correctAnswer: "THIRTY-SEVEN AND A HALF",
          explanation: "Text D specifies: 'Standard working hours require completing thirty-seven and a half hours weekly'."
        },
        {
          id: "gt_p1_q25",
          number: 25,
          type: "true_false_not_given",
          questionText: "New employees can work from home starting from their second month of employment.",
          correctAnswer: "FALSE",
          explanation: "Text D states remote working is available only 'Following satisfactory completion of the initial six-month probationary review'."
        },
        {
          id: "gt_p1_q26",
          number: 26,
          type: "fill_blank",
          questionText: "Eligible staff members may work remotely for a maximum of ______ days per week.",
          correctAnswer: "TWO",
          explanation: "Text D states employees 'may request up to two remote working days per working week'."
        },
        {
          id: "gt_p1_q27",
          number: 27,
          type: "true_false_not_given",
          questionText: "The company provides free laptop computers and mobile phones for all remote staff.",
          correctAnswer: "NOT GIVEN",
          explanation: "Text D mentions approval from the director and broadband connectivity verification, but makes no mention of company-provided laptops."
        },
        // Questions 28 to 40 (Section 3)
        {
          id: "gt_p1_q28",
          number: 28,
          type: "true_false_not_given",
          questionText: "Before the 17th century, timekeeping devices regularly suffered from substantial daily inaccuracies.",
          correctAnswer: "TRUE",
          explanation: "Paragraph A mentions early apparatuses lacked precision, 'frequently drifting by up to thirty minutes each day'."
        },
        {
          id: "gt_p1_q29",
          number: 29,
          type: "true_false_not_given",
          questionText: "Christiaan Huygens was the first person to conduct mathematical observations on pendulum oscillation.",
          correctAnswer: "FALSE",
          explanation: "Paragraph A states Huygens was 'Inspired by Galileo Galilei's earlier mathematical analysis of the isochronous properties of swinging pendulums'."
        },
        {
          id: "gt_p1_q30",
          number: 30,
          type: "true_false_not_given",
          questionText: "The anchor escapement mechanism helped reduce daily clock errors to under fifteen seconds.",
          correctAnswer: "TRUE",
          explanation: "Paragraph B confirms it reduced 'daily temporal errors from fifteen minutes to under fifteen seconds'."
        },
        {
          id: "gt_p1_q31",
          number: 31,
          type: "true_false_not_given",
          questionText: "Maritime navigators found it equally difficult to calculate both latitude and longitude at sea.",
          correctAnswer: "FALSE",
          explanation: "Paragraph C explains navigators 'could readily determine their latitude', while calculating longitude was the unresolved challenge."
        },
        {
          id: "gt_p1_q32",
          number: 32,
          type: "true_false_not_given",
          questionText: "The British Longitude Act of 1714 offered a financial award of twenty thousand pounds.",
          correctAnswer: "TRUE",
          explanation: "Paragraph D states Parliament offered 'a monumental prize of twenty thousand pounds'."
        },
        {
          id: "gt_p1_q33",
          number: 33,
          type: "true_false_not_given",
          questionText: "John Harrison held formal professorial degrees in astronomy from Oxford University.",
          correctAnswer: "FALSE",
          explanation: "Paragraph D describes Harrison as 'an obscure self-taught Yorkshire carpenter'."
        },
        {
          id: "gt_p1_q34",
          number: 34,
          type: "true_false_not_given",
          questionText: "Harrison's H4 chronometer lost less than ten seconds during its entire trial to Jamaica.",
          correctAnswer: "TRUE",
          explanation: "Paragraph E states H4 'lost merely five seconds over eighty-one days of ocean voyage'."
        },
        {
          id: "gt_p1_q35",
          number: 35,
          type: "multiple_choice",
          options: [
            "A: The invention of the marine chronometer by Galileo",
            "B: The introduction of the pendulum clock by Christiaan Huygens",
            "C: The creation of the first water clock in Britain",
            "D: The publication of lunar astronomical tables"
          ],
          questionText: "According to Paragraph A, what breakthrough fundamentally transformed horological accuracy in 1656?",
          correctAnswer: "B",
          explanation: "Paragraph A highlights the mechanical pendulum clock developed in 1656 by Christiaan Huygens."
        },
        {
          id: "gt_p1_q36",
          number: 36,
          type: "multiple_choice",
          options: [
            "A: Ocean water corroded their bronze escapement gears",
            "B: Ship motion disturbed the natural oscillation of swinging weights",
            "C: Wooden clock cases cracked due to tropical ocean humidity",
            "D: Captains were prohibited by naval regulations from carrying clocks"
          ],
          questionText: "Why were pendulum clocks incapable of functioning on marine vessels?",
          correctAnswer: "B",
          explanation: "Paragraph C notes that 'continuous pitch, roll, and vibration of ships tossed by ocean currents disrupted the delicate motion of suspended weights'."
        },
        {
          id: "gt_p1_q37",
          number: 37,
          type: "multiple_choice",
          options: [
            "A: Measuring the height of the midday sun above the sea horizon",
            "B: Calculating the exact local solar noon against reference meridian time",
            "C: Consulting Polaris elevation charts during clear night skies",
            "D: Counting the rotational speed of ocean currents"
          ],
          questionText: "Determining a vessel's longitude at sea required:",
          correctAnswer: "B",
          explanation: "Paragraph C confirms longitude 'required knowing the exact time at a reference meridian (such as Greenwich) simultaneously with local solar noon'."
        },
        {
          id: "gt_p1_q38",
          number: 38,
          type: "fill_blank",
          questionText: "John Harrison replaced swinging pendulums with spring-driven balances and bimetallic strips to counteract ______ expansion.",
          correctAnswer: "THERMAL",
          explanation: "Paragraph E states he used 'bimetallic temperature-compensating strips to counteract thermal expansion'."
        },
        {
          id: "gt_p1_q39",
          number: 39,
          type: "fill_blank",
          questionText: "Harrison's award-winning timekeeper, completed in 1761, was named the ______ chronometer.",
          correctAnswer: ["H4", "H-4"],
          explanation: "Paragraph E names 'His fourth timekeeper, the famed H4 chronometer completed in 1761'."
        },
        {
          id: "gt_p1_q40",
          number: 40,
          type: "fill_blank",
          questionText: "The sea trial of Harrison's chronometer tested its timekeeping accuracy over a voyage to ______.",
          correctAnswer: "JAMAICA",
          explanation: "Paragraph E states it was tested on 'a grueling transatlantic trial to Jamaica'."
        }
      ]
    }
  },
  {
    id: "cd_gt_reading_p2",
    testNumber: 2,
    courseType: "CD-IELTS General Training",
    testType: "practice",
    module: "Reading",
    title: "CD-IELTS GT Reading Practice 2: Municipal Recycling, Display Screen Ergonomics & The Bicycle",
    description: "Authentic CD-IELTS General Training Reading test with 40 questions covering residential waste guidelines, workstation safety regulations, and the mechanical evolution of bicycles.",
    durationMinutes: 60,
    totalQuestions: 40,
    readingData: {
      id: "cd_gt_reading_p2",
      title: "CD-IELTS GT Reading Practice 2: Municipal Recycling, Display Screen Ergonomics & The Bicycle",
      courseType: "ielts_general",
      durationMinutes: 60,
      passageTitle: "Section 1: Everyday Social Survival",
      passageSubtitle: "Municipal Household Recycling Guidelines & Local Public Library Rules",
      passageText: "SECTION 1: Everyday Social Survival (Texts A & B)\n\nText A: Borough Council Household Recycling Directory\nResidents are requested to observe the designated recycling collection schedule to ensure efficient waste processing. Blue wheeled bins are allocated exclusively for clean paper, flattened cardboard packaging, and dry newsprint. All plastic adhesive tape and polystyrene packaging must be removed prior to deposition.\nGreen bins are designated for clean food containers, aluminium beverage cans, and glass jars. Caps and lids must be separated from glass bottles before placing items in the bin. Food waste, garden clippings, and compostable organic materials must be deposited into brown organic waste caddies.\nGeneral non-recyclable household waste must be placed in black refuse bins. Hazardous waste, including automotive batteries, household paints, and fluorescent lighting tubes, must never be discarded in regular bins. These must be taken to the Civic Amenity Center on Kingsway Road, open Tuesday to Sunday from 08:30 to 17:00.\nCollections take place fortnightly on alternate Thursdays. Bins must be placed on the kerbside boundary by 07:00 on collection mornings with bin handles facing the roadway.\n\nText B: St. Jude Public Library Borrowing Privileges & Digital Access\nSt. Jude Public Library welcomes all borough residents. Library membership is free upon presentation of photo identification and proof of residential address. Members may borrow up to fifteen books, audiobooks, or magazines for a standard lending period of three weeks.\nItems may be renewed up to three times online or by telephone, provided another reader has not reserved them. Overdue fines of twenty pence per item per day apply to late returns, up to a maximum ceiling of five pounds per item.\nFree high-speed Wi-Fi is accessible throughout the building. Ten public desktop computers are available for booking in one-hour sessions. Printing and photocopying are charged at ten pence per black-and-white page and forty pence per colour page.\nStudy carrels on the upper mezzanine floor are designated as strict Silent Study Zones. Mobile phone conversations are forbidden in these designated areas.",
      passages: [
        {
          passageNumber: 1,
          title: "Section 1: Everyday Social Survival (Texts A & B)",
          subtitle: "Household Recycling Directory & St. Jude Public Library Borrowing Rules",
          text: "Text A: Borough Council Household Recycling Directory\nResidents are requested to observe the designated recycling collection schedule to ensure efficient waste processing. Blue wheeled bins are allocated exclusively for clean paper, flattened cardboard packaging, and dry newsprint. All plastic adhesive tape and polystyrene packaging must be removed prior to deposition.\nGreen bins are designated for clean food containers, aluminium beverage cans, and glass jars. Caps and lids must be separated from glass bottles before placing items in the bin. Food waste, garden clippings, and compostable organic materials must be deposited into brown organic waste caddies.\nGeneral non-recyclable household waste must be placed in black refuse bins. Hazardous waste, including automotive batteries, household paints, and fluorescent lighting tubes, must never be discarded in regular bins. These must be taken to the Civic Amenity Center on Kingsway Road, open Tuesday to Sunday from 08:30 to 17:00.\nCollections take place fortnightly on alternate Thursdays. Bins must be placed on the kerbside boundary by 07:00 on collection mornings with bin handles facing the roadway.\n\nText B: St. Jude Public Library Borrowing Privileges & Digital Access\nSt. Jude Public Library welcomes all borough residents. Library membership is free upon presentation of photo identification and proof of residential address. Members may borrow up to fifteen books, audiobooks, or magazines for a standard lending period of three weeks.\nItems may be renewed up to three times online or by telephone, provided another reader has not reserved them. Overdue fines of twenty pence per item per day apply to late returns, up to a maximum ceiling of five pounds per item.\nFree high-speed Wi-Fi is accessible throughout the building. Ten public desktop computers are available for booking in one-hour sessions. Printing and photocopying are charged at ten pence per black-and-white page and forty pence per colour page.\nStudy carrels on the upper mezzanine floor are designated as strict Silent Study Zones. Mobile phone conversations are forbidden in these designated areas.",
          questions: [
            {
              id: "gt_p2_q1",
              number: 1,
              type: "true_false_not_given",
              questionText: "Blue wheeled bins are used for disposing of garden grass clippings.",
              correctAnswer: "FALSE",
              explanation: "Text A states blue bins are for clean paper and cardboard; garden clippings go into brown organic caddies."
            },
            {
              id: "gt_p2_q2",
              number: 2,
              type: "true_false_not_given",
              questionText: "Polystyrene packaging should be discarded with blue bin paper recycling.",
              correctAnswer: "FALSE",
              explanation: "Text A instructs that 'polystyrene packaging must be removed prior to deposition'."
            },
            {
              id: "gt_p2_q3",
              number: 3,
              type: "fill_blank",
              questionText: "Hazardous waste must be taken to the Civic Amenity Center located on ______ Road.",
              correctAnswer: "KINGSWAY",
              explanation: "Text A specifies 'Kingsway Road'."
            },
            {
              id: "gt_p2_q4",
              number: 4,
              type: "true_false_not_given",
              questionText: "The Civic Amenity Center is open on Mondays.",
              correctAnswer: "FALSE",
              explanation: "Text A states it is open 'Tuesday to Sunday'."
            },
            {
              id: "gt_p2_q5",
              number: 5,
              type: "fill_blank",
              questionText: "Bins must be placed at the kerbside boundary before ______ on collection mornings.",
              correctAnswer: "07:00",
              explanation: "Text A specifies 'by 07:00 on collection mornings'."
            },
            {
              id: "gt_p2_q6",
              number: 6,
              type: "true_false_not_given",
              questionText: "Residents must pay an annual administrative fee for household bin collections.",
              correctAnswer: "NOT GIVEN",
              explanation: "Text A explains collection procedures, but mentions no council tax or administrative charges."
            },
            {
              id: "gt_p2_q7",
              number: 7,
              type: "fill_blank",
              questionText: "Library patrons may borrow up to ______ books, audiobooks, or magazines at a time.",
              correctAnswer: "FIFTEEN",
              explanation: "Text B allows borrowing 'up to fifteen books, audiobooks, or magazines'."
            },
            {
              id: "gt_p2_q8",
              number: 8,
              type: "fill_blank",
              questionText: "The standard lending duration for borrowed library items is ______ weeks.",
              correctAnswer: "THREE",
              explanation: "Text B states a 'standard lending period of three weeks'."
            },
            {
              id: "gt_p2_q9",
              number: 9,
              type: "true_false_not_given",
              questionText: "Books that have been reserved by other members cannot be renewed.",
              correctAnswer: "TRUE",
              explanation: "Text B states renewals are permitted 'provided another reader has not reserved them'."
            },
            {
              id: "gt_p2_q10",
              number: 10,
              type: "fill_blank",
              questionText: "The maximum overdue penalty fine capped on any single item is ______ pounds.",
              correctAnswer: "FIVE",
              explanation: "Text B states: 'up to a maximum ceiling of five pounds per item'."
            },
            {
              id: "gt_p2_q11",
              number: 11,
              type: "fill_blank",
              questionText: "Public desktop computers can be booked in sessions lasting ______ hour.",
              correctAnswer: "ONE",
              explanation: "Text B mentions computers are 'available for booking in one-hour sessions'."
            },
            {
              id: "gt_p2_q12",
              number: 12,
              type: "fill_blank",
              questionText: "Printing a single page in colour costs ______ pence.",
              correctAnswer: "FORTY",
              explanation: "Text B specifies 'forty pence per colour page'."
            },
            {
              id: "gt_p2_q13",
              number: 13,
              type: "true_false_not_given",
              questionText: "Whispering is permitted in the Silent Study Zones on the mezzanine floor.",
              correctAnswer: "FALSE",
              explanation: "Text B states these are 'strict Silent Study Zones' where mobile conversations are forbidden."
            },
            {
              id: "gt_p2_q14",
              number: 14,
              type: "true_false_not_given",
              questionText: "The library hosts author book readings on Saturday mornings.",
              correctAnswer: "NOT GIVEN",
              explanation: "Text B outlines borrowing privileges, computers, and silent study, but makes no mention of events."
            }
          ]
        },
        {
          passageNumber: 2,
          title: "Section 2: Workplace Survival (Texts C & D)",
          subtitle: "Workstation Ergonomics & Professional Training Grants",
          text: "Text C: Display Screen Equipment (DSE) & Ergonomics Policy\nUnder Health and Safety Executive regulations, employers must protect workers from the health risks of working with display screen equipment (DSE). Prolonged computer usage without ergonomic adjustments can contribute to repetitive strain injuries (RSI), neck fatigue, eye strain, and headaches.\n1. Seating Position: Adjust chair height so your forearms rest horizontally on the desk with elbows bent at approximately ninety degrees. Your feet should rest flat on the floor; footrests are provided upon request.\n2. Screen Placement: Position the monitor directly in front of you, approximately an arm’s length away (50–70 cm). The top edge of the screen should align with or sit slightly below eye level to prevent excessive neck flexion.\n3. Lighting & Glare: Avoid positioning screens directly facing windows to eliminate glare. Anti-glare screen filters are available from Facilities.\n4. Micro-Breaks: Take short, frequent breaks (5 to 10 minutes every hour) away from screens rather than fewer longer breaks. Alternate screen tasks with telephone conversations or filing.\n5. Optical Care: Staff who regularly use display screens are entitled to a company-funded full eyesight test every two years, and an employer contribution of seventy pounds towards corrective lenses required specifically for VDU work.\n\nText D: Employee Professional Development & Training Grant Scheme\nApex Group encourages continuous skill enhancement through our Annual Educational Grant Program.\nEligibility: Permanent full-time employees with at least twelve months of continuous service may apply for external course sponsorships up to one thousand five hundred pounds per financial year.\nEligible Programs: Training must directly correlate with current job competencies or verified advancement paths within the company. Approved programs include certified accounting qualifications (ACCA/CIMA), project management credentials (PRINCE2/PMP), and software development certifications.\nApplication Protocol: Employees must complete Form ED-4 and obtain written endorsement from their department manager prior to course registration. Retrospective funding claims for courses completed without prior approval will be rejected.\nReimbursement & Clawback: Tuition fees are paid directly to accredited training institutions upon receipt of formal enrolment confirmation. If an employee resigns voluntarily within twelve months of course completion, fifty percent of the disbursed grant must be repaid to the company.",
          questions: [
            {
              id: "gt_p2_q15",
              number: 15,
              type: "fill_blank",
              questionText: "Chair height should be adjusted so elbows form an angle of approximately ______ degrees.",
              correctAnswer: "NINETY",
              explanation: "Text C specifies 'elbows bent at approximately ninety degrees'."
            },
            {
              id: "gt_p2_q16",
              number: 16,
              type: "fill_blank",
              questionText: "The computer monitor should be located approximately an ______ length away from the user.",
              correctAnswer: ["ARM'S", "ARMS", "ARM"],
              explanation: "Text C specifies 'approximately an arm’s length away (50–70 cm)'."
            },
            {
              id: "gt_p2_q17",
              number: 17,
              type: "true_false_not_given",
              questionText: "Screens should be placed directly opposite windows to maximize natural lighting.",
              correctAnswer: "FALSE",
              explanation: "Text C cautions: 'Avoid positioning screens directly facing windows to eliminate glare.'"
            },
            {
              id: "gt_p2_q18",
              number: 18,
              type: "fill_blank",
              questionText: "Ergonomics guidelines recommend micro-breaks lasting five to ______ minutes every hour.",
              correctAnswer: "TEN",
              explanation: "Text C recommends 'short, frequent breaks (5 to 10 minutes every hour)'."
            },
            {
              id: "gt_p2_q19",
              number: 19,
              type: "fill_blank",
              questionText: "Eligible staff receive a company subsidy of ______ pounds towards VDU corrective lenses.",
              correctAnswer: "SEVENTY",
              explanation: "Text C states 'contribution of seventy pounds towards corrective lenses'."
            },
            {
              id: "gt_p2_q20",
              number: 20,
              type: "true_false_not_given",
              questionText: "Eye tests are funded by the company on an annual basis.",
              correctAnswer: "FALSE",
              explanation: "Text C states employees are entitled to an eyesight test 'every two years'."
            },
            {
              id: "gt_p2_q21",
              number: 21,
              type: "fill_blank",
              questionText: "To qualify for educational grants, employees must have worked at the company for at least ______ months.",
              correctAnswer: "TWELVE",
              explanation: "Text D states: 'at least twelve months of continuous service'."
            },
            {
              id: "gt_p2_q22",
              number: 22,
              type: "fill_blank",
              questionText: "The maximum annual educational grant available per employee is ______ pounds.",
              correctAnswer: "ONE THOUSAND FIVE HUNDRED",
              explanation: "Text D specifies: 'up to one thousand five hundred pounds per financial year'."
            },
            {
              id: "gt_p2_q23",
              number: 23,
              type: "true_false_not_given",
              questionText: "Language courses for personal recreation are eligible for the educational grant.",
              correctAnswer: "FALSE",
              explanation: "Text D states training must 'directly correlate with current job competencies or verified advancement paths'."
            },
            {
              id: "gt_p2_q24",
              number: 24,
              type: "fill_blank",
              questionText: "Before course registration, employees must complete application form ______.",
              correctAnswer: ["ED-4", "ED4"],
              explanation: "Text D states 'Employees must complete Form ED-4'."
            },
            {
              id: "gt_p2_q25",
              number: 25,
              type: "true_false_not_given",
              questionText: "Retrospective funding applications submitted after course completion will be approved if grades are high.",
              correctAnswer: "FALSE",
              explanation: "Text D explicitly warns: 'Retrospective funding claims for courses completed without prior approval will be rejected.'"
            },
            {
              id: "gt_p2_q26",
              number: 26,
              type: "fill_blank",
              questionText: "Staff who resign within a year of course completion must repay ______ percent of the grant.",
              correctAnswer: "FIFTY",
              explanation: "Text D states: 'fifty percent of the disbursed grant must be repaid'."
            },
            {
              id: "gt_p2_q27",
              number: 27,
              type: "true_false_not_given",
              questionText: "Employees who fail their certification exam are dismissed from their jobs.",
              correctAnswer: "NOT GIVEN",
              explanation: "Text D outlines reimbursement and clawback terms, but makes no mention of termination upon exam failure."
            }
          ]
        },
        {
          passageNumber: 3,
          title: "Section 3: General Interest Article",
          subtitle: "The History and Mechanical Engineering of the Bicycle",
          text: "Paragraph A: Few mechanical inventions have enjoyed as pervasive and enduring an influence upon human mobility, urban architecture, and social emancipation as the bicycle. The earliest ancestor of the modern two-wheeler was developed in 1817 by the German inventor Karl von Drais. Termed the Laufmaschine (running machine) or 'dandy horse', this primitive contrivance consisted of a wooden beam supported by two in-line wheels. Devoid of pedals, gears, or chains, the rider propelled the machine forward by vigorously pushing their feet against the ground. Despite its rudimentary construction, Drais' invention proved that a human balancing on two tandem wheels could travel at twice walking speed.\n\nParagraph B: Over the ensuing decades, inventors sought more efficient mechanical propulsion. In the 1860s, French coachbuilder Pierre Michaux and his son Ernest fitted rotary cranks and pedals directly to the front wheel hub of a two-wheeler, creating the velocipede, affectionately dubbed the 'boneshaker' due to the jarring vibrations produced by its rigid iron frame and wooden wheels over cobblestone streets. To increase travel speed without gears, engineers realized that enlarging the front wheel diameter allowed the vehicle to travel further with each pedal rotation. This gave rise to the penny-farthing in the 1870s, characterized by an enormous front wheel (up to 1.5 meters high) and a tiny rear stabilizing wheel. While fast, the penny-farthing was notoriously perilous; a rider sitting high above the center of gravity could easily be thrown over the handlebars upon striking a small stone.\n\nParagraph C: The decisive revolution that democratized cycling occurred in 1885 with John Kemp Starley's introduction of the Rover 'Safety Bicycle'. Starley abandoned the unwieldy high-wheeler in favor of two wheels of equal size, a robust diamond-shaped tubular steel frame, and a rear-wheel chain drive powered by a central bottom bracket. This configuration lowered the rider's center of gravity safely between the wheels. When John Boyd Dunlop patented the pneumatic air-filled rubber tire in 1888, the agonizing vibrations of solid rubber were eliminated, replacing bone-rattling jolts with a smooth, cushioned ride.\n\nParagraph D: Beyond recreational sport, the safety bicycle sparked profound societal transformation. For working-class laborers, it offered affordable personal transportation, freeing families from crowded urban slums and expanding employment radii. For women in the late nineteenth century, the bicycle served as a powerful instrument of liberation. Cycling demanded sensible clothing, accelerating the abandonment of restrictive Victorian corsets and heavy petticoats in favor of split skirts and bloomers. Suffragist leader Susan B. Anthony famously declared that bicycling had 'done more to emancipate women than anything else in the world'. Today, as cities worldwide battle traffic congestion and air pollution, the elegant efficiency of Starley's safety bicycle remains at the forefront of sustainable urban transit.",
          questions: [
            {
              id: "gt_p2_q28",
              number: 28,
              type: "true_false_not_given",
              questionText: "Karl von Drais' running machine utilized rotary pedal cranks attached to the rear wheel.",
              correctAnswer: "FALSE",
              explanation: "Paragraph A states the Laufmaschine was 'Devoid of pedals, gears, or chains'."
            },
            {
              id: "gt_p2_q29",
              number: 29,
              type: "true_false_not_given",
              questionText: "The velocipede earned the nickname 'boneshaker' because of harsh vibrations on cobblestone roads.",
              correctAnswer: "TRUE",
              explanation: "Paragraph B explains it was dubbed 'boneshaker' due to jarring vibrations on cobblestones."
            },
            {
              id: "gt_p2_q30",
              number: 30,
              type: "true_false_not_given",
              questionText: "Penny-farthing bicycles were designed with a large front wheel to increase speed without complex gears.",
              correctAnswer: "TRUE",
              explanation: "Paragraph B confirms 'enlarging the front wheel diameter allowed the vehicle to travel further with each pedal rotation'."
            },
            {
              id: "gt_p2_q31",
              number: 31,
              type: "true_false_not_given",
              questionText: "Penny-farthing bicycles were equipped with hydraulic disc brakes.",
              correctAnswer: "NOT GIVEN",
              explanation: "Paragraph B mentions risks of riders falling forward, but does not discuss braking mechanisms."
            },
            {
              id: "gt_p2_q32",
              number: 32,
              type: "true_false_not_given",
              questionText: "The 1885 Rover Safety Bicycle featured wheels of unequal diameter.",
              correctAnswer: "FALSE",
              explanation: "Paragraph C notes Starley adopted 'two wheels of equal size'."
            },
            {
              id: "gt_p2_q33",
              number: 33,
              type: "true_false_not_given",
              questionText: "John Boyd Dunlop's pneumatic rubber tires substantially reduced riding vibrations.",
              correctAnswer: "TRUE",
              explanation: "Paragraph C states Dunlop's tires eliminated vibrations, 'replacing bone-rattling jolts with a smooth, cushioned ride'."
            },
            {
              id: "gt_p2_q34",
              number: 34,
              type: "true_false_not_given",
              questionText: "Bicycles contributed to changes in Victorian women's clothing styles.",
              correctAnswer: "TRUE",
              explanation: "Paragraph D states cycling accelerated 'the abandonment of restrictive Victorian corsets and heavy petticoats in favor of split skirts and bloomers'."
            },
            {
              id: "gt_p2_q35",
              number: 35,
              type: "multiple_choice",
              options: [
                "A: Karl von Drais",
                "B: Pierre Michaux",
                "C: John Kemp Starley",
                "D: John Boyd Dunlop"
              ],
              questionText: "Who invented the 1885 Rover Safety Bicycle featuring a diamond frame and chain drive?",
              correctAnswer: "C",
              explanation: "Paragraph C names John Kemp Starley as introducing the Rover Safety Bicycle in 1885."
            },
            {
              id: "gt_p2_q36",
              number: 36,
              type: "multiple_choice",
              options: [
                "A: The lack of rubber tires",
                "B: The rider sitting far above the center of gravity",
                "C: Weak wooden spokes breaking on hills",
                "D: The absence of steering handlebars"
              ],
              questionText: "What was the primary safety hazard associated with riding a penny-farthing?",
              correctAnswer: "B",
              explanation: "Paragraph B explains that with 'a rider sitting high above the center of gravity', striking a stone threw them over the handlebars."
            },
            {
              id: "gt_p2_q37",
              number: 37,
              type: "multiple_choice",
              options: [
                "A: It made horse ownership more affordable for city dwellers",
                "B: It provided cheap personal mobility and contributed to women's emancipation",
                "C: It caused Victorian factories to ban workers from owning vehicles",
                "D: It eliminated all pedestrian traffic in 19th-century London"
              ],
              questionText: "According to Paragraph D, what broader social impact did the safety bicycle have?",
              correctAnswer: "B",
              explanation: "Paragraph D highlights affordable transportation for working families and its role as an instrument of female liberation."
            },
            {
              id: "gt_p2_q38",
              number: 38,
              type: "fill_blank",
              questionText: "Karl von Drais' 1817 wooden ancestor of the bicycle was known as the ______.",
              correctAnswer: ["LAUFMASCHINE", "RUNNING MACHINE", "DANDY HORSE"],
              explanation: "Paragraph A introduces the 'Laufmaschine (running machine) or dandy horse'."
            },
            {
              id: "gt_p2_q39",
              number: 39,
              type: "fill_blank",
              questionText: "The 1885 Rover Safety Bicycle utilized a durable ______ frame.",
              correctAnswer: ["DIAMOND-SHAPED", "DIAMOND SHAPED", "DIAMOND"],
              explanation: "Paragraph C specifies a 'robust diamond-shaped tubular steel frame'."
            },
            {
              id: "gt_p2_q40",
              number: 40,
              type: "fill_blank",
              questionText: "Women's rights leader Susan B. Anthony credited the bicycle with advancing women's ______.",
              correctAnswer: "EMANCIPATION",
              explanation: "Paragraph D quotes Anthony stating bicycling had 'done more to emancipate women than anything else'."
            }
          ]
        }
      ],
      questions: [
        // Questions 1 to 14
        {
          id: "gt_p2_q1",
          number: 1,
          type: "true_false_not_given",
          questionText: "Blue wheeled bins are used for disposing of garden grass clippings.",
          correctAnswer: "FALSE",
          explanation: "Text A states blue bins are for clean paper and cardboard; garden clippings go into brown organic caddies."
        },
        {
          id: "gt_p2_q2",
          number: 2,
          type: "true_false_not_given",
          questionText: "Polystyrene packaging should be discarded with blue bin paper recycling.",
          correctAnswer: "FALSE",
          explanation: "Text A instructs that 'polystyrene packaging must be removed prior to deposition'."
        },
        {
          id: "gt_p2_q3",
          number: 3,
          type: "fill_blank",
          questionText: "Hazardous waste must be taken to the Civic Amenity Center located on ______ Road.",
          correctAnswer: "KINGSWAY",
          explanation: "Text A specifies 'Kingsway Road'."
        },
        {
          id: "gt_p2_q4",
          number: 4,
          type: "true_false_not_given",
          questionText: "The Civic Amenity Center is open on Mondays.",
          correctAnswer: "FALSE",
          explanation: "Text A states it is open 'Tuesday to Sunday'."
        },
        {
          id: "gt_p2_q5",
          number: 5,
          type: "fill_blank",
          questionText: "Bins must be placed at the kerbside boundary before ______ on collection mornings.",
          correctAnswer: "07:00",
          explanation: "Text A specifies 'by 07:00 on collection mornings'."
        },
        {
          id: "gt_p2_q6",
          number: 6,
          type: "true_false_not_given",
          questionText: "Residents must pay an annual administrative fee for household bin collections.",
          correctAnswer: "NOT GIVEN",
          explanation: "Text A explains collection procedures, but mentions no council tax or administrative charges."
        },
        {
          id: "gt_p2_q7",
          number: 7,
          type: "fill_blank",
          questionText: "Library patrons may borrow up to ______ books, audiobooks, or magazines at a time.",
          correctAnswer: "FIFTEEN",
          explanation: "Text B allows borrowing 'up to fifteen books, audiobooks, or magazines'."
        },
        {
          id: "gt_p2_q8",
          number: 8,
          type: "fill_blank",
          questionText: "The standard lending duration for borrowed library items is ______ weeks.",
          correctAnswer: "THREE",
          explanation: "Text B states a 'standard lending period of three weeks'."
        },
        {
          id: "gt_p2_q9",
          number: 9,
          type: "true_false_not_given",
          questionText: "Books that have been reserved by other members cannot be renewed.",
          correctAnswer: "TRUE",
          explanation: "Text B states renewals are permitted 'provided another reader has not reserved them'."
        },
        {
          id: "gt_p2_q10",
          number: 10,
          type: "fill_blank",
          questionText: "The maximum overdue penalty fine capped on any single item is ______ pounds.",
          correctAnswer: "FIVE",
          explanation: "Text B states: 'up to a maximum ceiling of five pounds per item'."
        },
        {
          id: "gt_p2_q11",
          number: 11,
          type: "fill_blank",
          questionText: "Public desktop computers can be booked in sessions lasting ______ hour.",
          correctAnswer: "ONE",
          explanation: "Text B mentions computers are 'available for booking in one-hour sessions'."
        },
        {
          id: "gt_p2_q12",
          number: 12,
          type: "fill_blank",
          questionText: "Printing a single page in colour costs ______ pence.",
          correctAnswer: "FORTY",
          explanation: "Text B specifies 'forty pence per colour page'."
        },
        {
          id: "gt_p2_q13",
          number: 13,
          type: "true_false_not_given",
          questionText: "Whispering is permitted in the Silent Study Zones on the mezzanine floor.",
          correctAnswer: "FALSE",
          explanation: "Text B states these are 'strict Silent Study Zones' where mobile conversations are forbidden."
        },
        {
          id: "gt_p2_q14",
          number: 14,
          type: "true_false_not_given",
          questionText: "The library hosts author book readings on Saturday mornings.",
          correctAnswer: "NOT GIVEN",
          explanation: "Text B outlines borrowing privileges, computers, and silent study, but makes no mention of events."
        },
        // Questions 15 to 27
        {
          id: "gt_p2_q15",
          number: 15,
          type: "fill_blank",
          questionText: "Chair height should be adjusted so elbows form an angle of approximately ______ degrees.",
          correctAnswer: "NINETY",
          explanation: "Text C specifies 'elbows bent at approximately ninety degrees'."
        },
        {
          id: "gt_p2_q16",
          number: 16,
          type: "fill_blank",
          questionText: "The computer monitor should be located approximately an ______ length away from the user.",
          correctAnswer: ["ARM'S", "ARMS", "ARM"],
          explanation: "Text C specifies 'approximately an arm’s length away (50–70 cm)'."
        },
        {
          id: "gt_p2_q17",
          number: 17,
          type: "true_false_not_given",
          questionText: "Screens should be placed directly opposite windows to maximize natural lighting.",
          correctAnswer: "FALSE",
          explanation: "Text C cautions: 'Avoid positioning screens directly facing windows to eliminate glare.'"
        },
        {
          id: "gt_p2_q18",
          number: 18,
          type: "fill_blank",
          questionText: "Ergonomics guidelines recommend micro-breaks lasting five to ______ minutes every hour.",
          correctAnswer: "TEN",
          explanation: "Text C recommends 'short, frequent breaks (5 to 10 minutes every hour)'."
        },
        {
          id: "gt_p2_q19",
          number: 19,
          type: "fill_blank",
          questionText: "Eligible staff receive a company subsidy of ______ pounds towards VDU corrective lenses.",
          correctAnswer: "SEVENTY",
          explanation: "Text C states 'contribution of seventy pounds towards corrective lenses'."
        },
        {
          id: "gt_p2_q20",
          number: 20,
          type: "true_false_not_given",
          questionText: "Eye tests are funded by the company on an annual basis.",
          correctAnswer: "FALSE",
          explanation: "Text C states employees are entitled to an eyesight test 'every two years'."
        },
        {
          id: "gt_p2_q21",
          number: 21,
          type: "fill_blank",
          questionText: "To qualify for educational grants, employees must have worked at the company for at least ______ months.",
          correctAnswer: "TWELVE",
          explanation: "Text D states: 'at least twelve months of continuous service'."
        },
        {
          id: "gt_p2_q22",
          number: 22,
          type: "fill_blank",
          questionText: "The maximum annual educational grant available per employee is ______ pounds.",
          correctAnswer: "ONE THOUSAND FIVE HUNDRED",
          explanation: "Text D specifies: 'up to one thousand five hundred pounds per financial year'."
        },
        {
          id: "gt_p2_q23",
          number: 23,
          type: "true_false_not_given",
          questionText: "Language courses for personal recreation are eligible for the educational grant.",
          correctAnswer: "FALSE",
          explanation: "Text D states training must 'directly correlate with current job competencies or verified advancement paths'."
        },
        {
          id: "gt_p2_q24",
          number: 24,
          type: "fill_blank",
          questionText: "Before course registration, employees must complete application form ______.",
          correctAnswer: ["ED-4", "ED4"],
          explanation: "Text D states 'Employees must complete Form ED-4'."
        },
        {
          id: "gt_p2_q25",
          number: 25,
          type: "true_false_not_given",
          questionText: "Retrospective funding applications submitted after course completion will be approved if grades are high.",
          correctAnswer: "FALSE",
          explanation: "Text D explicitly warns: 'Retrospective funding claims for courses completed without prior approval will be rejected.'"
        },
        {
          id: "gt_p2_q26",
          number: 26,
          type: "fill_blank",
          questionText: "Staff who resign within a year of course completion must repay ______ percent of the grant.",
          correctAnswer: "FIFTY",
          explanation: "Text D states: 'fifty percent of the disbursed grant must be repaid'."
        },
        {
          id: "gt_p2_q27",
          number: 27,
          type: "true_false_not_given",
          questionText: "Employees who fail their certification exam are dismissed from their jobs.",
          correctAnswer: "NOT GIVEN",
          explanation: "Text D outlines reimbursement and clawback terms, but makes no mention of termination upon exam failure."
        },
        // Questions 28 to 40
        {
          id: "gt_p2_q28",
          number: 28,
          type: "true_false_not_given",
          questionText: "Karl von Drais' running machine utilized rotary pedal cranks attached to the rear wheel.",
          correctAnswer: "FALSE",
          explanation: "Paragraph A states the Laufmaschine was 'Devoid of pedals, gears, or chains'."
        },
        {
          id: "gt_p2_q29",
          number: 29,
          type: "true_false_not_given",
          questionText: "The velocipede earned the nickname 'boneshaker' because of harsh vibrations on cobblestone roads.",
          correctAnswer: "TRUE",
          explanation: "Paragraph B explains it was dubbed 'boneshaker' due to jarring vibrations on cobblestones."
        },
        {
          id: "gt_p2_q30",
          number: 30,
          type: "true_false_not_given",
          questionText: "Penny-farthing bicycles were designed with a large front wheel to increase speed without complex gears.",
          correctAnswer: "TRUE",
          explanation: "Paragraph B confirms 'enlarging the front wheel diameter allowed the vehicle to travel further with each pedal rotation'."
        },
        {
          id: "gt_p2_q31",
          number: 31,
          type: "true_false_not_given",
          questionText: "Penny-farthing bicycles were equipped with hydraulic disc brakes.",
          correctAnswer: "NOT GIVEN",
          explanation: "Paragraph B mentions risks of riders falling forward, but does not discuss braking mechanisms."
        },
        {
          id: "gt_p2_q32",
          number: 32,
          type: "true_false_not_given",
          questionText: "The 1885 Rover Safety Bicycle featured wheels of unequal diameter.",
          correctAnswer: "FALSE",
          explanation: "Paragraph C notes Starley adopted 'two wheels of equal size'."
        },
        {
          id: "gt_p2_q33",
          number: 33,
          type: "true_false_not_given",
          questionText: "John Boyd Dunlop's pneumatic rubber tires substantially reduced riding vibrations.",
          correctAnswer: "TRUE",
          explanation: "Paragraph C states Dunlop's tires eliminated vibrations, 'replacing bone-rattling jolts with a smooth, cushioned ride'."
        },
        {
          id: "gt_p2_q34",
          number: 34,
          type: "true_false_not_given",
          questionText: "Bicycles contributed to changes in Victorian women's clothing styles.",
          correctAnswer: "TRUE",
          explanation: "Paragraph D states cycling accelerated 'the abandonment of restrictive Victorian corsets and heavy petticoats in favor of split skirts and bloomers'."
        },
        {
          id: "gt_p2_q35",
          number: 35,
          type: "multiple_choice",
          options: [
            "A: Karl von Drais",
            "B: Pierre Michaux",
            "C: John Kemp Starley",
            "D: John Boyd Dunlop"
          ],
          questionText: "Who invented the 1885 Rover Safety Bicycle featuring a diamond frame and chain drive?",
          correctAnswer: "C",
          explanation: "Paragraph C names John Kemp Starley as introducing the Rover Safety Bicycle in 1885."
        },
        {
          id: "gt_p2_q36",
          number: 36,
          type: "multiple_choice",
          options: [
            "A: The lack of rubber tires",
            "B: The rider sitting far above the center of gravity",
            "C: Weak wooden spokes breaking on hills",
            "D: The absence of steering handlebars"
          ],
          questionText: "What was the primary safety hazard associated with riding a penny-farthing?",
          correctAnswer: "B",
          explanation: "Paragraph B explains that with 'a rider sitting high above the center of gravity', striking a stone threw them over the handlebars."
        },
        {
          id: "gt_p2_q37",
          number: 37,
          type: "multiple_choice",
          options: [
            "A: It made horse ownership more affordable for city dwellers",
            "B: It provided cheap personal mobility and contributed to women's emancipation",
            "C: It caused Victorian factories to ban workers from owning vehicles",
            "D: It eliminated all pedestrian traffic in 19th-century London"
          ],
          questionText: "According to Paragraph D, what broader social impact did the safety bicycle have?",
          correctAnswer: "B",
          explanation: "Paragraph D highlights affordable transportation for working families and its role as an instrument of female liberation."
        },
        {
          id: "gt_p2_q38",
          number: 38,
          type: "fill_blank",
          questionText: "Karl von Drais' 1817 wooden ancestor of the bicycle was known as the ______.",
          correctAnswer: ["LAUFMASCHINE", "RUNNING MACHINE", "DANDY HORSE"],
          explanation: "Paragraph A introduces the 'Laufmaschine (running machine) or dandy horse'."
        },
        {
          id: "gt_p2_q39",
          number: 39,
          type: "fill_blank",
          questionText: "The 1885 Rover Safety Bicycle utilized a durable ______ frame.",
          correctAnswer: ["DIAMOND-SHAPED", "DIAMOND SHAPED", "DIAMOND"],
          explanation: "Paragraph C specifies a 'robust diamond-shaped tubular steel frame'."
        },
        {
          id: "gt_p2_q40",
          number: 40,
          type: "fill_blank",
          questionText: "Women's rights leader Susan B. Anthony credited the bicycle with advancing women's ______.",
          correctAnswer: "EMANCIPATION",
          explanation: "Paragraph D quotes Anthony stating bicycling had 'done more to emancipate women than anything else'."
        }
      ]
    }
  }
];
