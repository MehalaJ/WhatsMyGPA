angular.module('Universities', [])

.factory('UniversityList', function() {
  var gpa = {
    name: "GPA",
    example: "2.1, 4.0",
    type: "number",
    min: 0,
    max: 4
  };

  var commonPercentage1 = {
    name: "Percentage",
    example: "75%, 67%",
    type: "number",
    min: 0,
    max: 100,
    gpaConversion: [{
      value: 4,
      min: 90,
      max: 100
    }, {
      value: 3.9,
      min: 85,
      max: 89
    }, {
      value: 3.7,
      min: 80,
      max: 84
    }, {
      value: 3.3,
      min: 77,
      max: 79
    }, {
      value: 3,
      min: 73,
      max: 76
    }, {
      value: 2.7,
      min: 70,
      max: 72
    }, {
      value: 2.3,
      min: 67,
      max: 69
    }, {
      value: 2,
      min: 63,
      max: 66
    }, {
      value: 1.7,
      min: 60,
      max: 62
    }, {
      value: 1.3,
      min: 57,
      max: 59
    }, {
      value: 1,
      min: 53,
      max: 56
    }, {
      value: 0.7,
      min: 50,
      max: 52
    }, {
      value: 0,
      min: 0,
      max: 49
    }]
  };
  var commonLetter1 = {
    name: "Letter",
    example: "B, A+",
    type: "letter",
    gpaConversion: [{
      value: 4,
      letters: ['A+']
    }, {
      value: 3.9,
      letters: ['A']
    }, {
      value: 3.7,
      letters: ['A-']
    }, {
      value: 3.3,
      letters: ['B+']
    }, {
      value: 3,
      letters: ['B']
    }, {
      value: 2.7,
      letters: ['B-']
    }, {
      value: 2.3,
      letters: ['C+']
    }, {
      value: 2,
      letters: ['C']
    }, {
      value: 1.7,
      letters: ['C-']
    }, {
      value: 1.3,
      letters: ['D+']
    }, {
      value: 1,
      letters: ['D']
    }, {
      value: 0.7,
      letters: ['D-']
    }, {
      value: 0,
      letters: ['E', 'F']
    }]
  };

  var common12Point1 = {
    name: "12-Point",
    example: "6, 11.5",
    min: 0,
    max: 12,
    type: "number",
    gpaConversion: [{
      value: 4,
      min: 12,
      max: 12
    }, {
      value: 3.9,
      min: 11,
      max: 11
    }, {
      value: 3.7,
      min: 10,
      max: 10
    }, {
      value: 3.3,
      min: 9,
      max: 9
    }, {
      value: 3,
      min: 8,
      max: 8
    }, {
      value: 2.7,
      min: 7,
      max: 7
    }, {
      value: 2.3,
      min: 6,
      max: 6
    }, {
      value: 2,
      min: 5,
      max: 5
    }, {
      value: 1.7,
      min: 4,
      max: 4
    }, {
      value: 1.3,
      min: 3,
      max: 3
    }, {
      value: 1,
      min: 2,
      max: 2
    }, {
      value: 0.7,
      min: 1,
      max: 1
    }, {
      value: 0,
      min: 0,
      max: 0
    }]
  };
          
  var common433 = {
    name: "4.33 GPA",
    example: "3.7, 4.33",
    type: "number",
    min: 0,
    max: 4.33,
    gpaConversion: [{
      value: 4,
      min: 4.33,
      max: 4.33
    }, {
      value: 3.9,
      min: 4,
      max: 4
    }, {
      value: 3.7,
      min: 3.67,
      max: 3.67
    }, {
      value: 3.3,
      min: 3.33,
      max: 3.33
    }, {
      value: 3,
      min: 3,
      max: 3
    }, {
      value: 2.7,
      min: 2.67,
      max: 2.67
    }, {
      value: 2.3,
      min: 2.33,
      max: 2.33
    }, {
      value: 2,
      min: 2,
      max: 2
    }, {
      value: 1.7,
      min: 1.67,
      max: 1.67
    }, {
      value: 1.3,
      min: 1.33,
      max: 1.33
    }, {
      value: 1,
      min: 1,
      max: 1
    }, {
      value: 0.7,
      min: 0.67,
      max: 0.67
    }, {
      value: 0,
      min: 0,
      max: 0
    }]
  };


  return {
    universityofwaterloo: {
      name: 'University Of Waterloo',
      location: {
        city: "Waterloo",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0.25, 0.5, 0.75, 0.80, 1],
      gradeConversions: {
        gpa: gpa,
        "percentage": commonPercentage1,
        "letter": commonLetter1
      }
    },
    /*Based from:
    https://www.utsc.utoronto.ca/aacc/sites/utsc.utoronto.ca.aacc/files/tipsheets/Academic_Advising_Tipsheets/howtocalculateyourGPA.pdf
*/
    universityoftoronto: {
      name: 'University Of Toronto',
      location: {
        city: "Toronto",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0, 0.5, 1],
      sources:[' http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html','https://www.utsc.utoronto.ca/aacc/sites/utsc.utoronto.ca.aacc/files/tipsheets/Academic_Advising_Tipsheets/howtocalculateyourGPA.pdf'],
      gradeConversions: {
        gpa: gpa,
        "percentage": {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 85,
            max: 100
          }, {
            value: 3.7,
            min: 80,
            max: 84
          }, {
            value: 3.3,
            min: 77,
            max: 79
          }, {
            value: 3,
            min: 73,
            max: 76
          }, {
            value: 2.7,
            min: 70,
            max: 72
          }, {
            value: 2.3,
            min: 67,
            max: 69
          }, {
            value: 2,
            min: 63,
            max: 66
          }, {
            value: 1.7,
            min: 60,
            max: 62
          }, {
            value: 1.3,
            min: 57,
            max: 59
          }, {
            value: 1,
            min: 53,
            max: 56
          }, {
            value: 0.7,
            min: 50,
            max: 52
          }, {
            value: 0,
            min: 0,
            max: 49
          }]
        },
        "letter": {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+', 'A']
          }, {
            value: 3.7,
            letters: ['A-']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          }, {
            value: 2.7,
            letters: ['B-']
          }, {
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1.7,
            letters: ['C-']
          }, {
            value: 1.3,
            letters: ['D+']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0.7,
            letters: ['D-']
          }, {
            value: 0,
            letters: ['F', 'E', 'NC']
          }]
        }
      }
    },
    /*Based from:
   http://laps.yorku.ca/student-resources/gpa-calculator/
   ^^ That calculator isnt accurate as it treats E as a 0 in a 9 point conversion even though the chart on the same website lists it should be a 1
   Also used http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html for gpa conversions
   and http://calendars.registrar.yorku.ca/2013-2014/academic/grades/ for percentage conversions
*/
    yorkuniversity: {
      name: 'York University',
      location: {
        city: "Toronto",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0, 1, 1.5, 2, 3, 4, 5, 6, 9, 12],
      sources:['http://laps.yorku.ca/student-resources/gpa-calculator/','http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html','http://calendars.registrar.yorku.ca/2013-2014/academic/grades/'],
      gradeConversions: {
        gpa: gpa,
        "letter": {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.8,
            letters: ['A']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          }, {
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1.3,
            letters: ['D+']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0.7,
            letters: ['E']
          }, {
            value: 0,
            letters: ['F', 'NC']
          }]
        },
        "point9": {
          name: "9-Point",
          example: "5, 9",
          type: "number",
          min: 0,
          max: 9,
          gpaConversion: [{
            value: 4,
            min: 9,
            max: 9
          }, {
            value: 3.8,
            min: 8,
            max: 8
          }, {
            value: 3.3,
            min: 7,
            max: 7
          }, {
            value: 3,
            min: 6,
            max: 6
          }, {
            value: 2.3,
            min: 5,
            max: 5
          }, {
            value: 2,
            min: 4,
            max: 4
          }, {
            value: 1.3,
            min: 3,
            max: 3
          }, {
            value: 1,
            min: 2,
            max: 2
          }, {
            value: 0.7,
            min: 1,
            max: 1
          }, {
            value: 0,
            min: 0,
            max: 0
          }]
        },
        "percentage": {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 90,
            max: 100
          }, {
            value: 3.8,
            min: 80,
            max: 89
          }, {
            value: 3.3,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.3,
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1.3,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          }, {
            value: 0.7,
            min: 40,
            max: 49
          }, {
            value: 0,
            min: 0,
            max: 39
          }]
        }
      }
    },
    /*Based from:
    http://www.ryerson.ca/studentguide/academics/grades--gpa--academic-standing.html
    and
    http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html
*/
    ryersonuniversity: {
      name: 'Ryerson University',
      location: {
        city: "Toronto",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0, 0.5, 1, 2],
      sources:['http://www.ryerson.ca/studentguide/academics/grades--gpa--academic-standing.html','http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html'],
      gradeConversions: {
        gpa: gpa,
        "percentage": commonPercentage1,
        "letter": commonLetter1,
        "gpa4.3": common433
      }
    },
    /*Retrieved from http://legacy.wlu.ca/calendars/section.php?cal=1&s=505&sp=1723&ss=2151&y=53
and http://legacy.wlu.ca/page.php?grp_id=1402&p=12614
*/
    wilfridlaurieruniversity: {
      name: 'Wilfred Laurier University',
      location: {
        city: "Waterloo",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0, 0.25, 0.5, 1],
      sources:['http://legacy.wlu.ca/calendars/section.php?cal=1&s=505&sp=1723&ss=2151&y=53','http://legacy.wlu.ca/page.php?grp_id=1402&p=12614'],
      gradeConversions: {
        gpa: gpa,
        "percentage": {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 90,
            max: 100
          }, {
            value: 3.9,
            min: 85,
            max: 89
          }, {
            value: 3.7,
            min: 80,
            max: 84
          }, {
            value: 3.3,
            min: 77,
            max: 79
          }, {
            value: 3,
            min: 73,
            max: 76
          }, {
            value: 2.7,
            min: 70,
            max: 72
          }, {
            value: 2.3,
            min: 67,
            max: 69
          }, {
            value: 2,
            min: 63,
            max: 66
          }, {
            value: 1.7,
            min: 60,
            max: 62
          }, {
            value: 1.3,
            min: 57,
            max: 59
          }, {
            value: 1,
            min: 53,
            max: 56
          }, {
            value: 0.7,
            min: 50,
            max: 52
          }, {
            value: 0,
            min: 0,
            max: 49
          }]
        },
        "letter": {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.9,
            letters: ['A']
          }, {
            value: 3.7,
            letters: ['A-']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          }, {
            value: 2.7,
            letters: ['B-']
          }, {
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1.7,
            letters: ['C-']
          }, {
            value: 1.3,
            letters: ['D+']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0.7,
            letters: ['D-']
          }, {
            value: 0,
            letters: ['F', 'E', 'XF', 'DR']
          }]
        },
        "point12": common12Point1
      }
    },
    /*
    Retrived from:
      http://www.senecacollege.ca/registrar/records/senecatranscript.html
      and
      http://www.senecacollege.ca/registrar/records/gpa.html
    */
    senecacollege: {
      name: 'Seneca College',
      location: {
        city: "Toronto",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0, 0.5, 1, 5],
      sources:['http://www.senecacollege.ca/registrar/records/senecatranscript.html','http://www.senecacollege.ca/registrar/records/gpa.html'],
      gradeConversions: {
        gpa: gpa,
        "letter": {
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+', 'A']
          }, {
            value: 3.5,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          }, {
            value: 2.5,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1.5,
            letters: ['D+']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['F', 'DNA']
          }]
        },
        "percentage": {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 80,
            max: 100
          }, {
            value: 3.5,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.5,
            min: 65,
            max: 69
          }, {
            value: 2,
            min: 60,
            max: 64
          }, {
            value: 1.5,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          }, {
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    /*Based from: http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html
    and https://iss.mcmaster.ca/incoming-exchange-students/academics-undergraduate/grading-system.html
    */
    mcmasteruniversity: {
      name: 'McMaster University',
      location: {
        city: "Hamilton",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0, 2, 3, 4, 5, 6, 8, 9, 12],
      sources:['http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html','https://iss.mcmaster.ca/incoming-exchange-students/academics-undergraduate/grading-system.html'],
      gradeConversions: {
        gpa: gpa,
        percentage: commonPercentage1,
        "letter": commonLetter1,
        "point12":common12Point1
      }
    },
    queensuniversity: {
      name: 'Queen\'s University',
      location: {
        city: "Kingston",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [1,1.5,3,3.5,3.75,4,4.5,6,9,12],
      sources:['http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html','http://www.queensu.ca/english/undergrad/gradeCalculator.html','http://engineering.queensu.ca/Current-Students/Grade-Point-Index.html','http://www.queensu.ca/calendars/business/pg205.html'],
      gradeConversions: {
        gpa: gpa,
        "letter":commonLetter1,
        "percentage": commonPercentage1,
        "4.3scale": {
          name: "4.3 GPA",
          example: "4.3, 3.8",
          type: "number",
          min: 0,
          max: 4.3,
          gpaConversion: [{
             value: 4,
              min: 4.3,
              max: 4.3
            }, {
              value: 3.9,
              min: 4,
              max: 4
            }, {
              value: 3.7,
              min: 3.7,
              max: 3.7
            }, {
              value: 3.3,
              min: 3.3,
              max: 3.3
            }, {
              value: 3,
              min: 3,
              max: 3
            }, {
              value: 2.7,
              min: 2.7,
              max: 2.7
            }, {
              value: 2.3,
              min: 2.3,
              max: 2.3
            }, {
              value: 2,
              min: 2,
              max: 2
            }, {
              value: 1.7,
              min: 1.7,
              max: 1.7
            }, {
              value: 1.3,
              min: 1.3,
              max: 1.3
            }, {
              value: 1,
              min: 1,
              max: 1
            }, {
              value: 0.7,
              min: 0.7,
              max: 0.7
            }, {
              value: 0,
              min: 0,
              max: 0
          }]
        }
      }
    },
    uoit: {
      name: 'Ontario Institute of Technology (UOIT)',
      location: {
        city: "Oshawa",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [0,0.5,1,3],
      sources:['http://studentsuccess.mcmaster.ca/students/tools/gpa-conversion-chart.html','http://uoit.ca/main/current-students/academics/registration-and-records/grading.php'],
      gradeConversions: {
        gpa: gpa,
        "letter":{
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.9,
            letters: ['A']
          }, {
            value: 3.7,
            letters: ['A-']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          }, {
            value: 2.7,
            letters: ['B-']
          }, {
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['E', 'F']
          }]
        },
        "percentage": {
            name: "Percentage",
            example: "75%, 67%",
            type: "number",
            min: 0,
            max: 100,
            gpaConversion: [{
              value: 4,
              min: 90,
              max: 100
            }, {
              value: 3.9,
              min: 85,
              max: 89
            }, {
              value: 3.7,
              min: 80,
              max: 84
            }, {
              value: 3.3,
              min: 77,
              max: 79
            }, {
              value: 3,
              min: 73,
              max: 76
            }, {
              value: 2.7,
              min: 70,
              max: 72
            }, {
              value: 2.3,
              min: 67,
              max: 69
            }, {
              value: 2,
              min: 60,
              max: 66
            }, {
              value: 1,
              min: 50,
              max: 59
            },{
              value: 0,
              min: 0,
              max: 49
            }]
        },
        "4.3scale": {
          name: "4.3 GPA",
          example: "4.3, 3.8",
          type: "number",
          min: 0,
          max: 4.3,
          gpaConversion: [{
             value: 4,
              min: 4.3,
              max: 4.3
            }, {
              value: 3.9,
              min: 4,
              max: 4
            }, {
              value: 3.7,
              min: 3.7,
              max: 3.7
            }, {
              value: 3.3,
              min: 3.3,
              max: 3.3
            }, {
              value: 3,
              min: 3,
              max: 3
            }, {
              value: 2.7,
              min: 2.7,
              max: 2.7
            }, {
              value: 2.3,
              min: 2.3,
              max: 2.3
            }, {
              value: 2,
              min: 2,
              max: 2
            }, {
              value: 1,
              min: 1,
              max: 1
            }, {
              value: 0,
              min: 0,
              max: 0
          }]
        }
      }
    },
    mcgill: {
      name: 'McGill University',
      location: {
        city: "Montréal",
        state: "Quebec",
        country: "CA"
      },
      commonCreditWeights: [3,6],
      sources:['https://www.mcgill.ca/gps/files/gps/tricouncil.gpa-calculation-conversion.sept_._2011.final__0.pdf','https://www.mcgill.ca/study/2012-2013/university_regulations_and_resources/undergraduate/gi_grading_and_grade_point_averages'],
      gradeConversions: {
        gpa: gpa,
        "letter":{
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A','A+']
          }, {
            value: 3.7,
            letters: ['A-']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          }, {
            value: 2.7,
            letters: ['B-']
          }, {
            value: 2.3,
            letters: ['C+']
          }, {
            value: 2,
            letters: ['C']
          }, {
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['E', 'F']
          }]
        },
        "percentage": {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 85,
            max: 100
          }, {
            value: 3.7,
            min: 80,
            max: 84
          }, {
            value: 3.3,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.7,
            min: 65,
            max: 69
          }, {
            value: 2.3,
            min: 60,
            max: 64
          }, {
            value: 2,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        }
      }
    },
    durhamcollege: {
      name: 'Durham College',
      location: {
        city: "Oshawa",
        state: "Ontario",
        country: "CA"
      },
      commonCreditWeights: [1,3,6],
      sources:['http://www.durhamcollege.ca/wp-content/uploads/grading-and-promotion-procedure.pdf'],
      gradeConversions: {
        gpa: gpa,
        "letter":{
          name: "Letter",
          example: "B, A+",
          type: "letter",
          gpaConversion: [{
            value: 4,
            letters: ['A+']
          }, {
            value: 3.9,
            letters: ['A']
          },{
            value: 3.7,
            letters: ['A-']
          }, {
            value: 3.3,
            letters: ['B+']
          }, {
            value: 3,
            letters: ['B']
          },{
            value: 2.7,
            letters: ['C+']
          }, {
            value: 2.3,
            letters: ['C']
          }, {
            value: 2,
            letters: ['D+']
          },{
            value: 1,
            letters: ['D']
          }, {
            value: 0,
            letters: ['E', 'F']
          }]
        },
        "percentage": {
          name: "Percentage",
          example: "75%, 67%",
          type: "number",
          min: 0,
          max: 100,
          gpaConversion: [{
            value: 4,
            min: 90,
            max: 100
          },{
            value: 3.9,
            min: 85,
            max: 89
          }, {
            value: 3.7,
            min: 80,
            max: 84
          }, {
            value: 3.3,
            min: 75,
            max: 79
          }, {
            value: 3,
            min: 70,
            max: 74
          }, {
            value: 2.7,
            min: 65,
            max: 69
          }, {
            value: 2.3,
            min: 60,
            max: 64
          }, {
            value: 2,
            min: 55,
            max: 59
          }, {
            value: 1,
            min: 50,
            max: 54
          },{
            value: 0,
            min: 0,
            max: 49
          }]
        },
        "5point":{
          name:"5 Point",
          example:"5.0, 3.5",
          type:"number",
          min: 0,
          max: 5,
          gpaConversion:[{
            value: 4,
            min: 5,
            max: 5
          },{
            value: 3.9,
            min: 4.5,
            max: 4.5
          },{
            value:3.7,
            min: 4,
            max: 4
          },{
            value: 3.3,
            min: 3.5,
            max: 3.5
          },{
            value: 3,
            min: 3,
            max: 3
          },{
            value: 2.7,
            min: 2.5,
            max: 2.5
          },{
            value: 2.3,
            min: 2,
            max: 2
          },{
            value: 2,
            min: 1.5,
            max: 1.5
          },{
            value: 1,
            min: 1,
            max: 1
          },{
            value: 0,
            min: 0,
            max: 0
          }]
        }
      }
    },
    unbc:{
      name: "University of Northern British Columbia (UNBC)",
      location:{
        city:"Prince George",
        state:"British Columbia",
        country:"CA"
      },
      commonCreditWeights: [1,3,4],
      sources:['http://www.unbc.ca/assets/advising/tmp/gpa_calculation.pdf'],
      gradeConversions: {
        gpa: gpa,
        letter: commonLetter1,
        percentage:commonPercentage1,
        gpa433: common433
      }
    }
  };
});