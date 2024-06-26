var homePageContainer = document.getElementById('home-page-container');
var signUpForm = document.getElementById('sign-up-form-container');
var signInForm = document.getElementById('sign-in-form-container');
var quizPageContainer = document.getElementById('quiz-page-container');
var testDiv = document.getElementById('test-div');
var resultDiv = document.getElementById("result-div");
var rolePage = document.getElementById("rolePage");
var name;

function showSignUp()
{
    homePageContainer.style.display = 'none';
    quizPageContainer.style.display = "none";
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
}

function showSignIn()
{
    var btnName = document.getElementById('signIn').innerHTML;

    if (btnName === 'Sign In')
    {
        homePageContainer.style.display = 'none';
        quizPageContainer.style.display = 'none';
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';   
    }
    else if (btnName === 'Sign Out')
    {
        homePageContainer.style.display = 'block';
        signUpForm.style.display = 'none';
        signInForm.style.display = 'none';
        resultDiv.style.display = 'none';
        document.getElementById('greet-div').style.display = "none";
        document.getElementById('test-timer').style.visibility = "hidden";
        document.getElementById('sign-up-button').style.display = "block";
        document.getElementById('signIn').innerHTML = "Sign In";
        document.getElementById('ins-heading').style.display = "none";
        document.getElementById('inst-list').style.display = "none";
        document.getElementById('activation-div').style.display = "none";
        document.getElementById('coming-soon-logo').style.display = "none";
        document.getElementById("menu-box").style.display = "none";
        document.getElementById("quiz-body").style.display = "none";

        var rad = document.getElementsByName("opt");
        
        for (var r = 0; r < rad.length; r++)
        {
            rad[r].checked = false;
        }

        resetTimer();
    }
}

function resetTimer()
{
    clearInterval(timer);
}

function borderStyle(x,y)
{
    document.getElementById(y).placeholder = "";

    x = document.getElementById(x);

    x.style.borderBottomColor = "mediumseagreen";
    x.style.transition = "all 1s";
    x.style.transitionTimingFunction = "ease-out";
}

function hideBorderStyle(x)
{
    x.style.borderBottomColor = "darkgrey";
}

var userName;
var userKey;
var userNameSignIn;
var userKeySignIn;
var flag2 = true;

function checkValidity()
{
    for (var i = 0; i < localStorage.length; i++)
    {
        var x = localStorage.key(i);
        var val = localStorage.getItem(x);

        var uName = document.getElementById('userName').value;
        var uKey = document.getElementById('key').value;

        if (uName === val)
        {
            alert("This Username already exists. Please choose different.");
            flag2 = false;

            document.getElementById('userName').value = "";
            document.getElementById('key').value = "";
        }
    }
}

function save()
{
    if (flag2)
    {
        userName = document.getElementById('userName').value;
        userKey = document.getElementById('key').value;

        if(userName == "" || userKey == "")
        {
            alert("User Name or Key is missing...!");
        }
        else
        {
            localStorage.setItem(userKey,userName);
            alert("Congrats! You are successfully Registered");

            document.getElementById('userName').value = "";
            document.getElementById('key').value = "";
        }    
    }
    else
    {
        alert("Cannot register with this Username!");
    }
}

function check()
{
    userNameSignIn = document.getElementById('userNameS').value;
    userKeySignIn = document.getElementById('keyS').value;

    if(userNameSignIn == "" || userKeySignIn == "")
    {
        alert("User Name or Key is missing...!");
    }
    else
    {
        userSignIn();
    }
}

function userSignIn()
{
    userNameSignIn = document.getElementById('userNameS').value;
    userKeySignIn = document.getElementById('keyS').value;

    if(localStorage.length == 0)
    {
        alert("Nothing in record. Please Register First");

        document.getElementById('userNameS').value = "";
        document.getElementById('keyS').value = "";
    }
    else
    {
        var flag = true;

        for (var i = 0; i < localStorage.length; i++)
        {
            var key   = localStorage.key(i);
            var value = localStorage.getItem(key);

            if(userNameSignIn === value && userKeySignIn === key)
            {
                alert("Welcome! You are successfully Signed In");

                flag = false;

                name = userNameSignIn;

                document.getElementById('userNameS').value = "";
                document.getElementById('keyS').value = "";

                // showTestPanel();
                homePageContainer.style.display = "none";
                signInForm.style.display = "none";
                rolePage.style.display = "block";
                testDiv.style.display = "none";
                document.getElementById('sign-up-button').style.display = "none";
                document.getElementById('signIn').innerHTML = "Sign Out";

                break;
            }
        }

        if(flag === true)
        {
             alert("User Name or Key is Incorrect! \nOR You are not registered \n\nNote: To register click I want to to create new account." );

             document.getElementById('keyS').focus();
             document.getElementById('keyS').value = "";
        }
    }
}
function openEducator()
{
    document.getElementById('educator-page').style.display = "block";
    quizPageContainer.style.display = "none";
    homePageContainer.style.display = "none";
    signInForm.style.display = "none"
    testDiv.style.display = "none"
    rolePage.style.display = "none";
}
var flag3 ;
var x ;
var y ;
var z ;
function subjectOnClick(subject)
{
    if (subject=="Maths") {
         flag3 = true;
         x = document.getElementById('catag1-test-list');
         y = x.getElementsByTagName('li').length;
         z = document.getElementById('catag-name');
    } else if(subject=="Science"){
         flag3 = true;
         x = document.getElementById('catag2-test-list');
         y = x.getElementsByTagName('li').length;
         z = document.getElementById('catag-name-2');
    }else {
         flag3 = true;
         x = document.getElementById('catag3-test-list');
         y = x.getElementsByTagName('li').length;
         z = document.getElementById('catag-name-3');
     }
     showListItems();
}
function showListItems()
{
    if (flag3)
    {
        for (var i = 0; i < y; i++)
        {
            x.getElementsByTagName('li')[i].style.visibility = "visible";
        }

        z.style.listStyleImage = "url('images/minus.png')";

        flag3 = false;
    } 
    
    else if (!flag3)
    {
        for (var i = 0; i < y; i++)
        {
            x.getElementsByTagName('li')[i].style.visibility = "hidden";
        }

        z.style.listStyleImage = "url('images/plus.png')";

        flag3 = true;
    }
    
}

var flag3 = true;
var x = document.getElementById('catag2-test-list');
var y = x.getElementsByTagName('li').length;
var z = document.getElementById('catag-name-2');

// function showListItems2()
// {
//     if (flag3)
//     {
//         for (var i = 0; i < y; i++)
//         {
//             x.getElementsByTagName('li')[i].style.visibility = "visible";
//         }

//         z.style.listStyleImage = "url('images/minus.png')";

//         flag3 = false;
//     } 
    
//     else if (!flag3)
//     {
//         for (var i = 0; i < y; i++)
//         {
//             x.getElementsByTagName('li')[i].style.visibility = "hidden";
//         }

//         z.style.listStyleImage = "url('images/plus.png')";

//         flag3 = true;
//     }
    
// }

// var flag5 = true;
// var x = document.getElementById('catag3-test-list');
// var y = x.getElementsByTagName('li').length;
// var z = document.getElementById('catag-name-3');

// function showListItems3()
// {
//     if (flag5)
//     {
//         for (var i = 0; i < y; i++)
//         {
//             x.getElementsByTagName('li')[i].style.visibility = "visible";
//         }

//         z.style.listStyleImage = "url('images/minus.png')";

//         flag3 = false;
//     } 
    
//     else if (!flag5)
//     {
//         for (var i = 0; i < y; i++)
//         {
//             x.getElementsByTagName('li')[i].style.visibility = "hidden";
//         }

//         z.style.listStyleImage = "url('images/plus.png')";

//         flag5 = true;
//     }
    
// }

function showTestPanel()
{
    quizPageContainer.style.display = "block";
    homePageContainer.style.display = "none";
    signInForm.style.display = "none"
    testDiv.style.display = "none"
    rolePage.style.display = "none";

    document.getElementById('greet-div').style.display = "block";
    document.getElementById('menu-box').style.display = "block";
    document.getElementById('quiz-body').style.display = "block";
    document.getElementById('ins-heading').style.display = "block";
    document.getElementById('ins-heading').innerHTML = "Instructions";
    document.getElementById('inst-list').style.display = "block";
    document.getElementById('name').innerHTML = name;
    document.getElementById('sign-up-button').style.display = "none";
    document.getElementById('inst-before-test').style.display = "none";
    document.getElementById('test-form').style.display = "none";
    document.getElementById('signIn').innerHTML = "Sign Out";
    document.getElementById('result-div').style.display = "none";
    document.getElementById("menu-box").style.pointerEvents = "all";
    document.getElementById("menu-box").style.opacity = 1;
}

function comingSoon()
{
    document.getElementById('ins-heading').style.display = "none";
    document.getElementById('inst-list').style.display = "none";
    document.getElementById('coming-soon-logo').style.display = "block";
    document.getElementById('test-form').style.display = "none";
    document.getElementById('inst-before-test').style.display = "none";
    document.getElementById('result-div').style.display = "none";

    showListItems();

}

function testActivation(subject)
{
    if (subject=="Maths") {
        questions=mathQuestions
    } else if(subject=="Science"){
        questions=scienceQuestions
    }else {
        questions=gkQuestions;
     }
    document.getElementById('ins-heading').innerHTML = "Activation";
    document.getElementById('coming-soon-logo').style.display = "none";
    document.getElementById('inst-list').style.display = "none";
    document.getElementById('ins-heading').style.display = "block";
    document.getElementById('activation-div').style.display = "block";
    document.getElementById('inst-before-test').style.display = "none";
    document.getElementById('test-form').style.display = "none";
    resultDiv.style.display = "none";

    showListItems();
}



function activate()
{
    showListItems();

    var testKey = document.getElementById('activation-key').value;

    if (testKey === "")
    {
        showListItems();
        alert("Insert Test Key!");    
    }
    else if(testKey === "testone")
    {
        showTestForm();
    }
    else
    {
        showListItems();
        alert('Wrong Activation Key!');
    }

}

function showTestForm()
{
    document.getElementById('inst-before-test').style.display = "none";
    document.getElementById('result-div').style.display = "none";
    document.getElementById('activation-div').style.display = "none";
    showListItems();
    document.getElementById('ins-heading').innerHTML = "Fill Out this Form";
    document.getElementById('test-form').style.display = "block";
    resultDiv.style.display = "none";
    document.getElementById('activation-key').value = "";    
}

function showTestInst()
{
    document.getElementById('ins-heading').innerHTML = "Terms and Conditions";
    document.getElementById('test-form').style.display = "none";
    document.getElementById('result-div').style.display = "none";
    document.getElementById('inst-before-test').style.display = "block";

    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('edu').value = "";
    document.getElementById('institute').value = "";
}

var timer;

function startQuiz()
{
    document.getElementById('test-timer').style.visibility = "visible";
    document.getElementById("next-btn").innerHTML = "Next";
    document.getElementById('ins-heading').innerHTML = "Test 1";

    startTime();

    document.getElementById('inst-before-test').style.display = "none";
    testDiv.style.display = "block";
    document.getElementById("menu-box").style.pointerEvents = "none";
    document.getElementById("menu-box").style.opacity = 0.4;
    document.getElementById('result-div').style.display = "none";
    
    changeQuestion = 0;
    score = 0;

    showQuestion();
}

function startTime()
{
    var m = 4;
    var s = 59;

    document.getElementById('min').innerHTML = "05";
    document.getElementById('sec').innerHTML = "00";

    timer = setInterval(startTimer, 1000);

    function startTimer()
    {
        s = checkTime(s);
    
        document.getElementById('min').innerHTML = "0"+m;
        document.getElementById('sec').innerHTML = s;

        s--;

        if (s < 0)
        {
            m--;
            s = 59;
            if (m < 0)
            {
                showResult();
            }
        }   
    }
}

function checkTime(i)
{
    // add zero in front of numbers < 10
    if (i < 10)
    {
        i = "0" + i
    };
    
    return i;
}

var mathQuestions = [
    {
        question: 'What is next in the following number series: 256, 289, 324, 361 . . . ?',
        options:
        [
            {
                option: '200',
                correct: false
            },
            {
                option: '400',
                correct: true
            },
            {
                option: '600',
                correct: false
            },
            {
                option: "800",
                correct: false
            }
        ]
    },
    {
        question: 'What is the value of Pi to two individual decimal places?',
        options:
        [
            {
                option: '3.41',
                correct: false
            },
            {
                option: '3.14',
                correct: true
            },
            {
                option: '6.07',
                correct: false
            },
            {
                option: 'None',
                correct: false
            }
        ]
    },
    {
        question: 'What is the name of a triangle that has two sides of the same length?',
        options:
        [
            {
                option: 'Equilateral Triangle',
                correct: false
            },
            {
                option: 'Scalene Triangle',
                correct: false
            },
            {
                option: 'Acute Triangle',
                correct: false
            },
            {
                option: 'Isosceles Triangle',
                correct: true
            }
        ]
    },
    {
        question: 'Solve the following equation: -15 + (-5x)=0.',
        options:
        [
            {
                option: "3",
                correct: false
            },
            {
                option: '9',
                correct: false
            },
            {
                option: '-3',
                correct: true
            },
            {
                option: '-6',
                correct: false
            }
        ]
    },
    {
        question: 'What is the largest two-digit prime number?',
        options:
        [
            {
                option: "87",
                correct: false
            },
            {
                option: '93',
                correct: false
            },
            {
                option: '83',
                correct: false
            },
            {
                option: '97',
                correct: true
            }
        ]
    },
    {
        question: "What is the difference between the largest and smallest digits?",
        options:
        [
            {
                option: "8",
                correct: false
            },
            {
                option: '7',
                correct: false
            },
            {
                option: '10',
                correct: false
            },
            {
                option: '9',
                correct: true
            }
        ]
    },
    {
        question: "What is 5% of 200?",
        options:
        [
            {
                option: "15",
                correct: false
            },
            {
                option: '10',
                correct: true
            },
            {
                option: '20',
                correct: false
            },
            {
                option: '5',
                correct: false
            }
        ]
    },
    {
        question: "What is the perimeter of a square with a side length of 6 cm?",
        options:
        [
            {
                option: "30 cm",
                correct: false
            },
            {
                option: '24 cm',
                correct: true
            },
            {
                option: '25 cm',
                correct: false
            },
            {
                option: '27 cm',
                correct: false
            }
        ]
    },
    {
        question: 'How many edges does a cube have?',
        options:
        [
            {
                option: "6",
                correct: false
            },
            {
                option: '8',
                correct: false
            },
            {
                option: '10',
                correct: false
            },
            {
                option: '12',
                correct: true
            }
        ]
    },
    {
        question: "If a circle has a diameter of 8 cm, what is its radius?",
        options:
        [
            {
                option: "6",
                correct: false
            },
            {
                option: '7',
                correct: false
            },
            {
                option: '4',
                correct: true
            },
            {
                option: '2',
                correct: false
            }
        ]
    }
];
var scienceQuestions = [
    {
        question: 'What is the powerhouse of the cell?',
        options: [
            {
                option: 'Nucleus',
                correct: false
            },
            {
                option: 'Mitochondria',
                correct: true
            },
            {
                option: 'Ribosome',
                correct: false
            },
            {
                option: 'Endoplasmic reticulum',
                correct: false
            }
        ]
    },
    {
        question: 'What is the process by which plants make their food?',
        options: [
            {
                option: 'Respiration',
                correct: false
            },
            {
                option: 'Photosynthesis',
                correct: true
            },
            {
                option: 'Fermentation',
                correct: false
            },
            {
                option: 'Transpiration',
                correct: false
            }
        ]
    },
    {
        question: 'Which gas do plants use in the process of photosynthesis?',
        options: [
            {
                option: 'Oxygen',
                correct: false
            },
            {
                option: 'Carbon dioxide',
                correct: true
            },
            {
                option: 'Nitrogen',
                correct: false
            },
            {
                option: 'Hydrogen',
                correct: false
            }
        ]
    },
    {
        question: 'What is the chemical symbol for water?',
        options: [
            {
                option: 'H2O',
                correct: true
            },
            {
                option: 'CO2',
                correct: false
            },
            {
                option: 'O2',
                correct: false
            },
            {
                option: 'NaCl',
                correct: false
            }
        ]
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        options: [
            {
                option: 'Earth',
                correct: false
            },
            {
                option: 'Mars',
                correct: true
            },
            {
                option: 'Jupiter',
                correct: false
            },
            {
                option: 'Venus',
                correct: false
            }
        ]
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: [
            {
                option: 'Gd',
                correct: false
            },
            {
                option: 'Au',
                correct: true
            },
            {
                option: 'Ag',
                correct: false
            },
            {
                option: 'Fe',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following is not a type of rock?',
        options: [
            {
                option: 'Sedimentary',
                correct: false
            },
            {
                option: 'Igneous',
                correct: false
            },
            {
                option: 'Organic',
                correct: true
            },
            {
                option: 'Metamorphic',
                correct: false
            }
        ]
    },
    {
        question: 'What is the smallest unit of matter?',
        options: [
            {
                option: 'Atom',
                correct: true
            },
            {
                option: 'Molecule',
                correct: false
            },
            {
                option: 'Cell',
                correct: false
            },
            {
                option: 'Proton',
                correct: false
            }
        ]
    },
    {
        question: 'Which gas do humans breathe out?',
        options: [
            {
                option: 'Oxygen',
                correct: false
            },
            {
                option: 'Carbon dioxide',
                correct: true
            },
            {
                option: 'Nitrogen',
                correct: false
            },
            {
                option: 'Hydrogen',
                correct: false
            }
        ]
    },
    {
        question: 'What is the force that pulls objects towards the center of the Earth?',
        options: [
            {
                option: 'Gravity',
                correct: true
            },
            {
                option: 'Magnetism',
                correct: false
            },
            {
                option: 'Friction',
                correct: false
            },
            {
                option: 'Tension',
                correct: false
            }
        ]
    }
];

var gkQuestions = [
    {
        question: 'What is the capital of France?',
        options: [
            {
                option: 'Paris',
                correct: true
            },
            {
                option: 'London',
                correct: false
            },
            {
                option: 'Berlin',
                correct: false
            },
            {
                option: 'Rome',
                correct: false
            }
        ]
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        options: [
            {
                option: 'Harper Lee',
                correct: true
            },
            {
                option: 'J.K. Rowling',
                correct: false
            },
            {
                option: 'George Orwell',
                correct: false
            },
            {
                option: 'Mark Twain',
                correct: false
            }
        ]
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: [
            {
                option: 'China',
                correct: false
            },
            {
                option: 'India',
                correct: false
            },
            {
                option: 'Japan',
                correct: true
            },
            {
                option: 'Australia',
                correct: false
            }
        ]
    },
    {
        question: 'Who is known as the "Father of Computers"?',
        options: [
            {
                option: 'Bill Gates',
                correct: false
            },
            {
                option: 'Steve Jobs',
                correct: false
            },
            {
                option: 'Charles Babbage',
                correct: true
            },
            {
                option: 'Tim Berners-Lee',
                correct: false
            }
        ]
    },
    {
        question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
        options: [
            {
                option: 'Venus',
                correct: true
            },
            {
                option: 'Mars',
                correct: false
            },
            {
                option: 'Jupiter',
                correct: false
            },
            {
                option: 'Saturn',
                correct: false
            }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: [
            {
                option: 'Leonardo da Vinci',
                correct: true
            },
            {
                option: 'Vincent van Gogh',
                correct: false
            },
            {
                option: 'Pablo Picasso',
                correct: false
            },
            {
                option: 'Michelangelo',
                correct: false
            }
        ]
    },
    {
        question: 'Which is the smallest continent in the world?',
        options: [
            {
                option: 'Europe',
                correct: false
            },
            {
                option: 'Asia',
                correct: false
            },
            {
                option: 'Australia',
                correct: true
            },
            {
                option: 'South America',
                correct: false
            }
        ]
    },
    {
        question: 'Who discovered penicillin?',
        options: [
            {
                option: 'Louis Pasteur',
                correct: false
            },
            {
                option: 'Alexander Fleming',
                correct: true
            },
            {
                option: 'Marie Curie',
                correct: false
            },
            {
                option: 'Albert Einstein',
                correct: false
            }
        ]
    },
    {
        question: 'Which is the longest river in the world?',
        options: [
            {
                option: 'Amazon',
                correct: true
            },
            {
                option: 'Nile',
                correct: false
            },
            {
                option: 'Mississippi',
                correct: false
            },
            {
                option: 'Yangtze',
                correct: false
            }
        ]
    },
    {
        question: 'What is the largest ocean in the world?',
        options: [
            {
                option: 'Atlantic',
                correct: false
            },
            {
                option: 'Indian',
                correct: false
            },
            {
                option: 'Arctic',
                correct: false
            },
            {
                option: 'Pacific',
                correct: true
            }
        ]
    }
];



var score = 0;
var changeQuestion = 0;
var ques = document.getElementById('question');
var op1 = document.getElementById('opt1');
var op2 = document.getElementById('opt2');
var op3 = document.getElementById('opt3');
var op4 = document.getElementById('opt4');

var radio1 = document.getElementById('r1');
var radio2 = document.getElementById('r2');
var radio3 = document.getElementById('r3');
var radio4 = document.getElementById('r4');

function decideNextOrFinish()
{
    var getBtn = document.getElementById("next-btn").innerHTML;
    var radios = document.getElementsByName("opt");

    if (getBtn === "Next")
    {    
        var formValid = false;

        var i = 0;

        while (!formValid && i < radios.length)
        {
            if (radios[i].checked)
            {
                formValid = true;
            }

            i++;        
        }

        if (!formValid)
        { 
            alert("You must choose any Option");
        }
        else
        {
            checkAnswer();
            changeQuestion++;     
            showQuestion();
        }
        
        return formValid;
    }

    else if (getBtn === 'Finish')
    {
        checkAnswer();
        showResult();
        resetTimer();
    }
}

var i;

function showQuestion()
{
    for(i = changeQuestion; i < questions.length; i++)
    {   
        ques.innerHTML = questions[i].question;
        op1.innerHTML = questions[i].options[0].option;
        op2.innerHTML = questions[i].options[1].option;
        op3.innerHTML = questions[i].options[2].option;
        op4.innerHTML = questions[i].options[3].option;

        radio1.value = questions[i].options[0].option;
        radio2.value = questions[i].options[1].option;
        radio3.value = questions[i].options[2].option;
        radio4.value = questions[i].options[3].option;

        break;
    }

    if (changeQuestion === 9) {
        document.getElementById("next-btn").innerHTML = "Finish";
    }
}

var userAnswer;

function checkAnswer()
{
    var radios = document.getElementsByName("opt");

    for (var k = 0; k < radios.length; k++)
    {
        if (radios[k].checked)
        {
            userAnswer = radios[k].value;
        }
    }
    
    for(var l = 0; l < 4; l++)
    {
        if (questions[i].options[l].option === userAnswer && questions[i].options[l].correct === true)
        {
            score = score + 10
        }
    }

    var rad = document.getElementsByName('opt');

    for (var r = 0; r < rad.length; r++)
    {
        rad[r].checked = false;
    }
}

function showResult()
{
    resultDiv.style.display = "block";
    testDiv.style.display = "none";
    document.getElementById('test-timer').style.visibility = "hidden";
    document.getElementById("menu-box").style.pointerEvents = "all";
    document.getElementById("menu-box").style.opacity = 1;

    document.getElementById('score').innerHTML = score + "%";

    if(score >= 70)
    {
        document.getElementById('remarks').innerHTML = "Congrats! You have passed.";
    }
    else
    {
        document.getElementById('remarks').innerHTML = "You are Fail. Continue Hard Work.";
    }

    resetTimer();
}