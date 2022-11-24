class MultiStep {
    constructor() {

    }
    init(){
        this.canvas = document.querySelector(".canvas");
        this.steps = Array.from(document.querySelectorAll(".canvas"));
        this.playButton = document.querySelector(".play");

        this.addListeners();

    }

    addListeners() {
        this.playButton.addEventListener("click", () => this.startGame(1));
    }

    startGame (v) {
        const activeStep = document.querySelector(".active");
        let stepIndex = this.steps.indexOf(activeStep);
        this.steps[stepIndex].classList.remove("active");
        stepIndex += v;
        if( v === 0 ) stepIndex = 0;

        if( stepIndex < 0 || stepIndex >= this.steps.length ) stepIndex = 0;
        this.steps[stepIndex].classList.add("active");
    }
}

const multiStep = new MultiStep();
multiStep.init();