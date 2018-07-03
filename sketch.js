var data;

function preload() {
    data = loadJSON("assets/student-learning.json");
}

var questions = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // this line is required due to a bug in the current version of p5
    // https://github.com/processing/p5.js/issues/2154
    data = Object.values(data);
    // any additional setup code goes here
    for (var i = 0; i < 39; i++) {
      questions.push(
        {
          x: 0,
          y: height / 40 * (i+1),
          score: 0,
          age_group: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
          ],
          full_time: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
          ],
          semester: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          ]
        }
      );
    }
}

var objnum = 0;

function draw() {
    // your "draw loop" code goes here
    background(85, 143, 246);

    /* questions */
    push();
      noStroke();
      fill(255);
      textSize(height/50);
      textAlign(CENTER, CENTER);
      for (var i = 0; i < 39; i++) {
        text(i+1, width/100, height/40*(i+1));
      }
      text("My main reasons for studying my current program are: To get a high-paying job", (width - width/50) / 2, height/40*(0+1));
      text("My main reasons for studying my current program are: To learn things that I'm interested in", (width - width/50) / 2, height/40*(1+1));
      text("My main reasons for studying my current program are: For my family", (width - width/50) / 2, height/40*(2+1));
      text("My main reasons for studying my current program are: To get an interesting job", (width - width/50) / 2, height/40*(3+1));
      text("My main reasons for studying my current program are: Because I'm good at this", (width - width/50) / 2, height/40*(4+1));
      text("My main reasons for studying my current program are: Because it is fun and exciting", (width - width/50) / 2, height/40*(5+1));
      text("My main reasons for studying my current program are: To make an impact -- on my community / country / the world", (width - width/50) / 2, height/40*(6+1));
      text("My main reasons for studying my current program are: To help me gain residency", (width - width/50) / 2, height/40*(7+1));
      text("I find that at times studying gives me a feeling of deep personal satisfaction.", (width - width/50) / 2, height/40*(8+1));
      text("I find that I have to do enough work on a topic so that I can form my own conclusions before I am satisfied.", (width - width/50) / 2, height/40*(9+1));
      text("My aim is to pass the course while doing as little work as possible.", (width - width/50) / 2, height/40*(10+1));
      text("I only study seriously what’s given out in class or in the course outlines.", (width - width/50) / 2, height/40*(11+1));
      text("I feel that virtually any topic can be highly interesting once I get into it.", (width - width/50) / 2, height/40*(12+1));
      text("I find most new topics interesting and often spend extra time trying to obtain more information about them.", (width - width/50) / 2, height/40*(13+1));
      text("I do not find my course very interesting so I keep my work to the minimum.", (width - width/50) / 2, height/40*(14+1));
      text("I learn some things by rote, going over and over them until I know them by heart, even if I do not really understand them.", (width - width/50) / 2, height/40*(15+1));
      text("I find that studying academic topics can at times be as exciting as a good novel or movie.", (width - width/50) / 2, height/40*(16+1));
      text("I test myself on important topics until I understand them completely.", (width - width/50) / 2, height/40*(17+1));
      text("I find I can get by in most assessments by memorising key sections rather than trying to understand them.", (width - width/50) / 2, height/40*(18+1));
      text("I generally restrict my study to what is specifically set as I think it is unnecessary to do anything extra.", (width - width/50) / 2, height/40*(19+1));
      text("I work hard at my studies because I find the material interesting.", (width - width/50) / 2, height/40*(20+1));
      text("I spend a lot of my free time finding out more about interesting topics which have been discussed in different classes.", (width - width/50) / 2, height/40*(21+1));
      text("I find it is not helpful to study topics in depth. It confuses me and wastes time, when all you need is a passing acquaintance with topics.", (width - width/50) / 2, height/40*(22+1));
      text("Lecturers shouldn’t expect students to spend significant amounts of time studying material that everyone knows won’t be examined.", (width - width/50) / 2, height/40*(23+1));
      text("I come to most classes with questions in mind that I want answering.", (width - width/50) / 2, height/40*(24+1));
      text("I make a point of looking at most of the suggested readings that go with the lectures.", (width - width/50) / 2, height/40*(25+1));
      text("I see no point in learning material which is not likely to be in the examination.", (width - width/50) / 2, height/40*(26+1));
      text("I find the best way to pass examinations is to try to remember answers to likely questions.", (width - width/50) / 2, height/40*(27+1));
      text("I learn information primarily from reading course material provided by the teacher.", (width - width/50) / 2, height/40*(28+1));
      text("I talk with other students to decide what I need to learn.", (width - width/50) / 2, height/40*(29+1));
      text("I talk with other students about what I'm learning.", (width - width/50) / 2, height/40*(30+1));
      text("I read all emails and forum messages for my course.", (width - width/50) / 2, height/40*(31+1));
      text("When using learning resources, I believe I need to go through the entire resource to understand the point(s).", (width - width/50) / 2, height/40*(32+1));
      text("I do my own research to find material, written, visual, aural and video, that I believe helps me understand the topic.", (width - width/50) / 2, height/40*(33+1));
      text("I feel that engaging in online forums supports my learning.", (width - width/50) / 2, height/40*(34+1));
      text("I feel that working in teams with other students supports my learning.", (width - width/50) / 2, height/40*(35+1));
      text("I feel confident that I've developed skills to work in teams successfully.", (width - width/50) / 2, height/40*(36+1));
      text("My teachers have helped me to develop skills to work in teams successfully.", (width - width/50) / 2, height/40*(37+1));
      text("I complete assessment tasks in the final few days or hours before the deadline.", (width - width/50) / 2, height/40*(38+1));
    pop();

    /* lines */
    push();
      strokeWeight(height/400);
      stroke(255);
      line(width/50, 0, width/50, height);
      for (var i = 0; i < 40; i++) {
        line(0, height/40*(i+1)-height/80, width, height/40*(i+1)-height/80);
      }
      stroke(240, 238, 42);
      var strong_disagree = map(objnum*1, 0, 2100, 0, width);
      var neutral = map(objnum*3, 0, 2100, 0, width);
      var strong_agree = map(objnum*5, 0, 2100, 0, width);
      line(strong_disagree, 0, strong_disagree, height);
      line(neutral, 0, neutral, height);
      line(strong_agree, 0, strong_agree, height);
    pop();

    /* rects */
    push();
      noStroke();
      fill(240, 238, 42, 100);
      if (mouseX>strong_disagree && mouseX<neutral) {
        rect(strong_disagree, 0, neutral - strong_disagree, height);
      } else if (mouseX>neutral && mouseX<strong_agree) {
        rect(neutral, 0, strong_agree - neutral, height);
      }
    pop();


    /* black dots */
    drawresult();

    /* rect descriptions */
    push();
      noStroke();
      textSize(width/50);
      textAlign(CENTER, CENTER);
      fill(0);
      if (mouseX>strong_disagree && mouseX<neutral) {
        text("DISAGREE", (neutral + strong_disagree) / 2, height/4);
        text("OR", (neutral + strong_disagree) / 2, height/2);
        text("SELDOM", (neutral + strong_disagree) / 2, height*3/4);
      } else if (mouseX>neutral && mouseX<strong_agree) {
        text("AGREE", (neutral + strong_agree) / 2, height/4);
        text("OR", (neutral + strong_agree) / 2, height/2);
        text("OFTEN", (neutral + strong_agree) / 2, height*3/4);
      }
    pop();

    /* details */
    push();
      noStroke();
      fill(0);
      for (var i = 0; i < questions.length; i++) {
        if (dist(mouseX, mouseY, questions[i].x, questions[i].y) < height/140) {
          var diameter = min([width, height]) * 0.9;
          var length = diameter/2;
          var high = diameter/30;
          ellipse(width/2, height/2, diameter, diameter);
          push();
            fill(255);
            textAlign(CENTER, CENTER);
            textSize(diameter/50);
            if (i == 0) {
              text("My main reasons for studying my current program are: To get a high-paying job", width/2, height/2-diameter/4);
            } else if (i == 1) {
              text("My main reasons for studying my current program are: To learn things that I'm interested in", width/2, height/2-diameter/4);
            } else if (i == 2) {
              text("My main reasons for studying my current program are: For my family", width/2, height/2-diameter/4);
            } else if (i == 3) {
              text("My main reasons for studying my current program are: To get an interesting job", width/2, height/2-diameter/4);
            } else if (i == 4) {
              text("My main reasons for studying my current program are: Because I'm good at this", width/2, height/2-diameter/4);
            } else if (i == 5) {
              text("My main reasons for studying my current program are: Because it is fun and exciting", width/2, height/2-diameter/4);
            } else if (i == 6) {
              text("My main reasons for studying my current program are:", width/2, height/2-diameter/4-diameter/50);
              text("To make an impact -- on my community / country / the world", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 7) {
              text("My main reasons for studying my current program are: To help me gain residency", width/2, height/2-diameter/4);
            } else if (i == 8) {
              text("I find that at times studying gives me a feeling of deep personal satisfaction.", width/2, height/2-diameter/4);
            } else if (i == 9) {
              text("I find that I have to do enough work on a topic", width/2, height/2-diameter/4-diameter/50);
              text("so that I can form my own conclusions before I am satisfied.", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 10) {
              text("My aim is to pass the course while doing as little work as possible.", width/2, height/2-diameter/4);
            } else if (i == 11) {
              text("I only study seriously what’s given out in class or in the course outlines.", width/2, height/2-diameter/4);
            } else if (i == 12) {
              text("I feel that virtually any topic can be highly interesting once I get into it.", width/2, height/2-diameter/4);
            } else if (i == 13) {
              text("I find most new topics interesting and often spend", width/2, height/2-diameter/4-diameter/50);
              text("extra time trying to obtain more information about them.", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 14) {
              text("I do not find my course very interesting so I keep my work to the minimum.", width/2, height/2-diameter/4);
            } else if (i == 15) {
              text("I learn some things by rote, going over and over them until I know them by heart,", width/2, height/2-diameter/4-diameter/50);
              text("even if I do not really understand them.", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 16) {
              text("I find that studying academic topics can at times be as exciting as a good novel or movie.", width/2, height/2-diameter/4);
            } else if (i == 17) {
              text("I test myself on important topics until I understand them completely.", width/2, height/2-diameter/4);
            } else if (i == 18) {
              text("I find I can get by in most assessments", width/2, height/2-diameter/4-diameter/50);
              text("by memorising key sections rather than trying to understand them.", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 19) {
              text("I generally restrict my study to what is specifically set", width/2, height/2-diameter/4-diameter/50);
              text("as I think it is unnecessary to do anything extra.", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 20) {
              text("I work hard at my studies because I find the material interesting.", width/2, height/2-diameter/4);
            } else if (i == 21) {
              text("I spend a lot of my free time finding out more about", width/2, height/2-diameter/4-diameter/50);
              text("interesting topics which have been discussed in different classes.", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 22) {
              text("I find it is not helpful to study topics in depth.", width/2, height/2-diameter/4-diameter/50);
              text("It confuses me and wastes time, when all you need is a passing acquaintance with topics.", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 23) {
              text("Lecturers shouldn’t expect students to spend significant amounts of time", width/2, height/2-diameter/4-diameter/50);
              text("studying material that everyone knows won’t be examined.", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 24) {
              text("I come to most classes with questions in mind that I want answering.", width/2, height/2-diameter/4);
            } else if (i == 25) {
              text("I make a point of looking at most of the suggested readings that go with the lectures.", width/2, height/2-diameter/4);
            } else if (i == 26) {
              text("I see no point in learning material which is not likely to be in the examination.", width/2, height/2-diameter/4);
            } else if (i == 27) {
              text("I find the best way to pass examinations is to try to remember answers to likely questions.", width/2, height/2-diameter/4);
            } else if (i == 28) {
              text("I learn information primarily from reading course material provided by the teacher.", width/2, height/2-diameter/4);
            } else if (i == 29) {
              text("I talk with other students to decide what I need to learn.", width/2, height/2-diameter/4);
            } else if (i == 30) {
              text("I talk with other students about what I'm learning.", width/2, height/2-diameter/4);
            } else if (i == 31) {
              text("I read all emails and forum messages for my course.", width/2, height/2-diameter/4);
            } else if (i == 32) {
              text("When using learning resources,", width/2, height/2-diameter/4-diameter/50);
              text("I believe I need to go through the entire resource to understand the point(s).", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 33) {
              text("I do my own research to find material, written, visual, aural and video,", width/2, height/2-diameter/4-diameter/50);
              text("that I believe helps me understand the topic.", width/2, height/2-diameter/4+diameter/50);
            } else if (i == 34) {
              text("I feel that engaging in online forums supports my learning.", width/2, height/2-diameter/4);
            } else if (i == 35) {
              text("I feel that working in teams with other students supports my learning.", width/2, height/2-diameter/4);
            } else if (i == 36) {
              text("I feel confident that I've developed skills to work in teams successfully.", width/2, height/2-diameter/4);
            } else if (i == 37) {
              text("My teachers have helped me to develop skills to work in teams successfully.", width/2, height/2-diameter/4);
            } else {
              text("I complete assessment tasks in the final few days or hours before the deadline.", width/2, height/2-diameter/4);
            }
            textAlign(CENTER, TOP);
            text("Semester of study", width/2-diameter*0.35, height/2);
            text("Full-time or part-time", width/2-diameter*0.35, height/2+4*high);
            text("Age group", width/2-diameter*0.35, height/2+8*high);
            textAlign(LEFT, BOTTOM);
            if (i >= 0 && i <= 7) {
              text("Strongly disagree", width/2-length/2, height/2-diameter/25);
            } else {
              text("Never/Rarely", width/2-length/2, height/2-diameter/25);
            }
            textAlign(RIGHT, BOTTOM);
            if (i >= 0 && i <= 7) {
              text("Strongly agree", width/2+length/2+diameter/25, height/2-diameter/25);
            } else {
              text("Almost always/Always", width/2+length/2+diameter/25, height/2-diameter/25);
            }
            textAlign(CENTER, BOTTOM);
            text("------>", width/2, height/2-diameter/25);
            textAlign(LEFT, TOP);
            text("Full-time", width/2-(length+diameter/25)/2+diameter/40+diameter/50, height/2+high*6);
            text("Part-time", width/2+diameter/40+diameter/50, height/2+high*6);

            text("15-19 years", width/2-(length+diameter/25)/2+diameter/40+diameter/50, height/2+high*10);
            text("20-24 years", width/2-(length+diameter/25)/4+diameter/40+diameter/50, height/2+high*10);
            text("25-34 years", width/2+diameter/40+diameter/50, height/2+high*10);
            text("35+ years", width/2+(length+diameter/25)/4+diameter/40+diameter/50, height/2+high*10);

            text("1", width/2-(length+diameter/25)/10*5+diameter/40+diameter/50, height/2+2*high);
            text("2", width/2-(length+diameter/25)/10*4+diameter/40+diameter/50, height/2+2*high);
            text("3", width/2-(length+diameter/25)/10*3+diameter/40+diameter/50, height/2+2*high);
            text("4", width/2-(length+diameter/25)/10*2+diameter/40+diameter/50, height/2+2*high);
            text("5", width/2-(length+diameter/25)/10*1+diameter/40+diameter/50, height/2+2*high);
            text("6", width/2+(length+diameter/25)/10*0+diameter/40+diameter/50, height/2+2*high);
            text("7", width/2+(length+diameter/25)/10*1+diameter/40+diameter/50, height/2+2*high);
            text("8", width/2+(length+diameter/25)/10*2+diameter/40+diameter/50, height/2+2*high);
            text("9", width/2+(length+diameter/25)/10*3+diameter/40+diameter/50, height/2+2*high);
            text("10", width/2+(length+diameter/25)/10*4+diameter/40+diameter/50, height/2+2*high);
          pop();

          var now_pos;
          var len;
          var col1 = [238, 50, 8];
          var col2 = [242, 176, 7];
          var col3 = [220, 237, 23];
          var col4 = [94, 207, 102];
          var col5 = [13, 211, 238];
          var col6 = [12, 21, 240];
          var col7 = [151, 110, 228];
          var col8 = [238, 15, 167];
          var col9 = [154, 167, 150];
          var col10 = [241, 231, 230];

          push();
            fill(col1);
            rect(width/2-(length+diameter/25)/2+diameter/50, height/2+high*6, diameter/50, diameter/50);
            fill(col2);
            rect(width/2+diameter/50, height/2+high*6, diameter/50, diameter/50);

            fill(col1);
            rect(width/2-(length+diameter/25)/2+diameter/50, height/2+high*10, diameter/50, diameter/50);
            fill(col2);
            rect(width/2-(length+diameter/25)/4+diameter/50, height/2+high*10, diameter/50, diameter/50);
            fill(col3);
            rect(width/2+diameter/50, height/2+high*10, diameter/50, diameter/50);
            fill(col4);
            rect(width/2+(length+diameter/25)/4+diameter/50, height/2+high*10, diameter/50, diameter/50);

            fill(col1);
            rect(width/2-(length+diameter/25)/10*5+diameter/50, height/2+2*high, diameter/50, diameter/50);
            fill(col2);
            rect(width/2-(length+diameter/25)/10*4+diameter/50, height/2+2*high, diameter/50, diameter/50);
            fill(col3);
            rect(width/2-(length+diameter/25)/10*3+diameter/50, height/2+2*high, diameter/50, diameter/50);
            fill(col4);
            rect(width/2-(length+diameter/25)/10*2+diameter/50, height/2+2*high, diameter/50, diameter/50);
            fill(col5);
            rect(width/2-(length+diameter/25)/10*1+diameter/50, height/2+2*high, diameter/50, diameter/50);
            fill(col6);
            rect(width/2+(length+diameter/25)/10*0+diameter/50, height/2+2*high, diameter/50, diameter/50);
            fill(col7);
            rect(width/2+(length+diameter/25)/10*1+diameter/50, height/2+2*high, diameter/50, diameter/50);
            fill(col8);
            rect(width/2+(length+diameter/25)/10*2+diameter/50, height/2+2*high, diameter/50, diameter/50);
            fill(col9);
            rect(width/2+(length+diameter/25)/10*3+diameter/50, height/2+2*high, diameter/50, diameter/50);
            fill(col10);
            rect(width/2+(length+diameter/25)/10*4+diameter/50, height/2+2*high, diameter/50, diameter/50);
          pop();

          /* semester of study */
          push();
          now_pos = width/2-length/2;
          for (var j = 0; j < 5; j++) {
            for (var k = 0; k < 10; k++) {
              if (k == 0) {
                fill(col1);
              } else if (k == 1) {
                fill(col2);
              } else if (k == 2) {
                fill(col3);
              } else if (k == 3) {
                fill(col4);
              } else if (k == 4) {
                fill(col5);
              } else if (k == 5) {
                fill(col6);
              } else if (k == 6) {
                fill(col7);
              } else if (k == 7) {
                fill(col8);
              } else if (k == 8) {
                fill(col9);
              } else {
                fill(col10);
              }
              len = length * questions[i].semester[j][k] / 420;
              rect(now_pos, height/2, len, high);
              now_pos += len;
            }
            fill(0);
            len = diameter / 100;
            rect(now_pos, height/2, len, high);
            now_pos += len;
          }
          pop();

          /* full-time or part-time */
          push();
            now_pos = width/2-length/2;
            for (var j = 0; j < 5; j++) {
              for (var k = 0; k < 2; k++) {
                if (k == 0) {
                  fill(col1);
                } else {
                  fill(col2);
                }
                len = length * questions[i].full_time[j][k] / 420;
                rect(now_pos, height/2+4*high, len, high);
                now_pos += len;
              }
              fill(0);
              len = diameter / 100;
              rect(now_pos, height/2+4*high, len, high);
              now_pos += len;
            }
          pop();

          /* age group */
          push();
          now_pos = width/2-length/2;
          for (var j = 0; j < 5; j++) {
            for (var k = 0; k < 4; k++) {
              if (k == 0) {
                fill(col1);
              } else if (k == 1) {
                fill(col2);
              } else if (k == 2) {
                fill(col3);
              } else {
                fill(col4);
              }
              len = length * questions[i].age_group[j][k] / 420;
              rect(now_pos, height/2+8*high, len, high);
              now_pos += len;
            }
            fill(0);
            len = diameter / 100;
            rect(now_pos, height/2+8*high, len, high);
            now_pos += len;
          }
          pop();



          break;
        }
      }
    pop();

    if (objnum < 420) {
      count(data[objnum]);
      objnum++;
    }
}

function count(tuple) {
    var ageidx, timeidx, semidx;
    if (tuple["My age group is"] == "15-19 years") {
      ageidx = 0;
    } else if (tuple["My age group is"] == "20-24 years") {
      ageidx = 1;
    } else if (tuple["My age group is"] == "25-34 years") {
      ageidx = 2;
    } else {
      ageidx = 3;
    }
    if (tuple["Are you studying full-time or part-time?"] == "Full time") {
      timeidx = 0;
    } else {
      timeidx = 1;
    }
    semidx = tuple["Which semester of study are you in?"] - 1;

    increase_agreement(tuple, "My main reasons for studying my current program are: To get a high-paying job", 0, ageidx, timeidx, semidx);
    increase_agreement(tuple, "My main reasons for studying my current program are: To learn things that I'm interested in", 1, ageidx, timeidx, semidx);
    increase_agreement(tuple, "My main reasons for studying my current program are: For my family", 2, ageidx, timeidx, semidx);
    increase_agreement(tuple, "My main reasons for studying my current program are: To get an interesting job", 3, ageidx, timeidx, semidx);
    increase_agreement(tuple, "My main reasons for studying my current program are: Because I'm good at this", 4, ageidx, timeidx, semidx);
    increase_agreement(tuple, "My main reasons for studying my current program are: Because it is fun and exciting", 5, ageidx, timeidx, semidx);
    increase_agreement(tuple, "My main reasons for studying my current program are: To make an impact -- on my community / country / the world", 6, ageidx, timeidx, semidx);
    increase_agreement(tuple, "My main reasons for studying my current program are: To help me gain residency", 7, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I find that at times studying gives me a feeling of deep personal satisfaction.", 8, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I find that I have to do enough work on a topic so that I can form my own conclusions before I am satisfied.", 9, ageidx, timeidx, semidx);
    increase_frequency(tuple, "My aim is to pass the course while doing as little work as possible.", 10, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I only study seriously what’s given out in class or in the course outlines.", 11, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I feel that virtually any topic can be highly interesting once I get into it.", 12, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I find most new topics interesting and often spend extra time trying to obtain more information about them.", 13, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I do not find my course very interesting so I keep my work to the minimum.", 14, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I learn some things by rote, going over and over them until I know them by heart, even if I do not really understand them.", 15, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I find that studying academic topics can at times be as exciting as a good novel or movie.", 16, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I test myself on important topics until I understand them completely.", 17, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I find I can get by in most assessments by memorising key sections rather than trying to understand them.", 18, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I generally restrict my study to what is specifically set as I think it is unnecessary to do anything extra.", 19, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I work hard at my studies because I find the material interesting.", 20, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I spend a lot of my free time finding out more about interesting topics which have been discussed in different classes.", 21, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I find it is not helpful to study topics in depth. It confuses me and wastes time, when all you need is a passing acquaintance with topics.", 22, ageidx, timeidx, semidx);
    increase_frequency(tuple, "Lecturers shouldn’t expect students to spend significant amounts of time studying material that everyone knows won’t be examined.", 23, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I come to most classes with questions in mind that I want answering.", 24, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I make a point of looking at most of the suggested readings that go with the lectures.", 25, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I see no point in learning material which is not likely to be in the examination.", 26, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I find the best way to pass examinations is to try to remember answers to likely questions.", 27, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I learn information primarily from reading course material provided by the teacher.", 28, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I talk with other students to decide what I need to learn.", 29, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I talk with other students about what I'm learning.", 30, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I read all emails and forum messages for my course.", 31, ageidx, timeidx, semidx);
    increase_frequency(tuple, "When using learning resources, I believe I need to go through the entire resource to understand the point(s).", 32, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I do my own research to find material, written, visual, aural and video, that I believe helps me understand the topic.", 33, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I feel that engaging in online forums supports my learning.", 34, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I feel that working in teams with other students supports my learning.", 35, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I feel confident that I've developed skills to work in teams successfully.", 36, ageidx, timeidx, semidx);
    increase_frequency(tuple, "My teachers have helped me to develop skills to work in teams successfully.", 37, ageidx, timeidx, semidx);
    increase_frequency(tuple, "I complete assessment tasks in the final few days or hours before the deadline.", 38, ageidx, timeidx, semidx);
}

function increase_score(quesnum, score, ageidx, timeidx, semidx) {
  questions[quesnum].score += score;
  questions[quesnum].age_group[score-1][ageidx]++;
  questions[quesnum].full_time[score-1][timeidx]++;
  questions[quesnum].semester[score-1][semidx]++;
  questions[quesnum].x = map(questions[quesnum].score, 0, 2100, 0, width);
}

function increase_agreement(obj, question, quesnum, ageidx, timeidx, semidx) {
  if (obj[question] == "Strongly agree") {
    increase_score(quesnum, 5, ageidx, timeidx, semidx);
  } else if (obj[question] == "Agree") {
    increase_score(quesnum, 4, ageidx, timeidx, semidx);
  } else if (obj[question] == "Neutral") {
    increase_score(quesnum, 3, ageidx, timeidx, semidx);
  } else if (obj[question] == "Disagree") {
    increase_score(quesnum, 2, ageidx, timeidx, semidx);
  } else {
    increase_score(quesnum, 1, ageidx, timeidx, semidx);
  }
}

function increase_frequency(obj, question, quesnum, ageidx, timeidx, semidx) {
  if (obj[question] == "Almost always/Always") {
    increase_score(quesnum, 5, ageidx, timeidx, semidx);
  } else if (obj[question] == "Often") {
    increase_score(quesnum, 4, ageidx, timeidx, semidx);
  } else if (obj[question] == "About half the time") {
    increase_score(quesnum, 3, ageidx, timeidx, semidx);
  } else if (obj[question] == "Somtimes") {
    increase_score(quesnum, 2, ageidx, timeidx, semidx);
  } else {
    increase_score(quesnum, 1, ageidx, timeidx, semidx);
  }
}

function drawresult() {
  questions.map(drawone);
}

function drawone(q) {
  pop();
    noStroke();
    fill(0);
    ellipse(q.x, q.y, height/70, height/70);
  push();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  questions.map(resizePos);
}

function resizePos(q, idx) {
  q.x = map(q.score, 0, 2100, 0, width);
  q.y = height / 40 * (idx + 1);
}
