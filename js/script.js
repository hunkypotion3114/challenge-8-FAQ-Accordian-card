// To calculate Number of FAQ's.
function numberofN(){
    var NumberofN = document.querySelector(".FAQ").childElementCount;
    i = []
    for (n = 1; n <= NumberofN; n++) {
        i.push(n)
    }
    return i
}

// To display clicked FAQ answer.
function displayAnswer(n) {
    document.querySelector(".arrow-" + n).classList.toggle("arrow-up")
    document.querySelector(".FAQ-" + n + "-question").classList.toggle("FAQ-Question-onclick")
    document.querySelector(".FAQ-" + n + "-Ans").classList.toggle("FAQ-ans-display")
    timesCollapseFxnToBeRun(n)
}

// To run collapse FXN n-1 times.
function timesCollapseFxnToBeRun(n){
    list= numberofN()
    var listLength=list.length;
    var listIndex= n-1;
    list.splice(listIndex,1);
    for(nCollapse=1; nCollapse<=listLength;nCollapse++){
        if(list.includes(nCollapse)){
            collapseOtherAnswers(nCollapse)
        }
    }
}

// To collapse all FAQ answers accept the FAQ answer to be Displayed.
function collapseOtherAnswers(n) {
    var className = document.querySelector(".FAQ-" + n + "-Ans").classList;
    var arrowNumber = document.querySelector(".arrow-" + n).classList;
    var questionNumber = document.querySelector(".FAQ-" + n + "-question").classList;
    if (className.contains("FAQ-ans-display") && arrowNumber.contains("arrow-up") && questionNumber.contains("FAQ-Question-onclick")) {
        document.querySelector(".FAQ-" + n + "-Ans").classList.remove("FAQ-ans-display")
        document.querySelector(".arrow-" + n).classList.remove("arrow-up")
        document.querySelector(".FAQ-" + n + "-question").classList.remove("FAQ-Question-onclick")
    }
}