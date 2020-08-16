function validate(){
    var score = 0
    
    var correct_answer_1 = document.getElementById("q1-op1")
    var q1_answer_2 = document.getElementById("q1-op2")
    var q1_answer_3 = document.getElementById("q1-op3")
    var q1_answer_4 = document.getElementById("q1-op4")

    if (correct_answer_1.checked == true){
        score++
        alert("You have selected correct answer")
    }
    else{
        alert("You have selected an incorrect answer")
    }

    var correct_answer_2 = document.getElementById("q2-op2")
    var q2_answer_1 = document.getElementById("q2-op1")
    var q2_answer_3 = document.getElementById("q2-op3")
    var q2_answer_4 = document.getElementById("q2-op4")

    if (correct_answer_2.checked == true){
        score++
        alert("You have selected correct answer")
    }
    else{
        alert("You have selected an incorrect answer")
    }

    var correct_answer_3 = document.getElementById("q3-op3")
    var q3_answer_1 = document.getElementById("q3-op1")
    var q3_answer_2 = document.getElementById("q3-op2")
    var q3_answer_4 = document.getElementById("q3-op4")

    if (correct_answer_3.checked == true){
        score++
        alert("You have selected correct answer")
    }
    else{
        alert("You have selected an incorrect answer")
    }

    var correct_answer_4 = document.getElementById("q4-op2")
    var q4_answer_1 = document.getElementById("q4-op1")
    var q4_answer_3 = document.getElementById("q4-op3")
    var q4_answer_4 = document.getElementById("q4-op4")

    if (correct_answer_4.checked == true){
        score++
        alert("You have selected correct answer")
    }
    else{
        alert("You have selected an incorrect answer")
    }



}   

function count(){
    var numberScore = document.getElementById("score")
    numberScore = alert("Your score is : " + score)
}

