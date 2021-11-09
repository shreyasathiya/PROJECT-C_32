class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter The Correct Option No....");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question1 = createElement("h3");
    this.option1 = createElement("h2");
    this.option2 = createElement("h2");
    this.option3 = createElement("h2");
    this.option4 = createElement("h2");

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
     this.input1.hide();
     this.button.hide();
     this.input2.hide();
     this.message.hide();




  }

  position(){
    this.question
  }

  text(){
    var question1 = "QUESTION:- What starts and ends with the letter'E' but has only one letter ?"
    this.question1.html(question1);
    var option1 = "1.everyone"
    this.option1.html(option1);
    var option2 = "2.envelope"
    this.option2.html(option2);
    var option3 = "3.estimate"
    this.option3.html(option3);
    var option4 = "4.everyone"
    this.option4.html(option4);

  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    var question1 = "QUESTION:- What starts and ends with the letter'E' but has only one letter ?"
    this.question1.html(question1);
    var option1 = "1.everyone"
    this.option1.html(option1);
    var option2 = "2.envelope"
    this.option2.html(option2);
    var option3 = "3.estimate"
    this.option3.html(option3);
    var option4 = "4.everyone"
    this.option4.html(option4);

    this.input1.position(200, 250);
    this.button.position(290, 300);
    this.input2.position(400, 250);
    this.question1.position(50,50);
    this.option1.position(50,80);
    this.option2.position(50,120);
    this.option3.position(50,160);
    this.option4.position(50,200);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     var greeting = "THANK YOU!.....your response has been recorded";
     this.message.html(greeting);
    })


  }
}
