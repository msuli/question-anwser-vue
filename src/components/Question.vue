<template>
    <div class="uk-panel uk-panel-box uk-width-medium-1-2">
        <h3 class="uk-panel-title uk-text-center">{{ question }}</h3>
        <div class="panel-body">
            <div class="uk-grid">
                <div class="uk-width-1-2 uk-text-center">
                    <button
                            class="uk-button uk-button-primary"
                            @click="answered(btnData[0].correct)"
                    >{{ btnData[0].answer}}
                    </button>
                </div>
                <div class=" uk-width-1-2 uk-text-center">
                    <button
                            class="uk-button uk-button-primary"
                            @click="answered(btnData[1].correct)">
                        {{ btnData[1].answer}}
                    </button>
                </div>
            </div>
            <div class="uk-grid">
                <div class="uk-width-1-2 uk-text-center">
                    <button
                            class="uk-button uk-button-primary"
                            @click="answered(btnData[2].correct)">
                        {{ btnData[2].answer}}
                    </button>
                </div>
                <div class="uk-width-1-2 uk-text-center">
                    <button class="uk-button uk-button-primary"
                            @click="answered(btnData[3].correct)">
                        {{ btnData[3].answer}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const Plus = 1;
    const Minus = 2;
    export default {
        data(){
            return {
                question: 'oops, the error occered',
                btnData: [
                    {correct: true, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0}
                ]
            }
        },
        methods: {
            answered(isCorrect){
                this.$emit('answered', isCorrect);
            },
            generateRandomNumber(max, min, except){
                const random = Math.floor(Math.random() * (max - min) + min);
                if (random === except) {
                    return this.generateRandomNumber(max, min, except);
                }
                return random;
            },
            generateQuestion(){
                const firstNumber = this.generateRandomNumber(1, 100);
                const secondNumber = this.generateRandomNumber(1, 100);
                const modeNumber = this.generateRandomNumber(1, 3);
                let correctNumber = 0;
                switch (modeNumber) {
                    case Plus: {
                        correctNumber = firstNumber + secondNumber;
                        this.question = `what's ` + firstNumber + '+' + secondNumber + '?';
                        break;
                    }
                    case Minus: {
                        correctNumber = firstNumber - secondNumber;
                        this.question = `what's ` + firstNumber + '-' + secondNumber + '?';
                        break;
                    }
                }
                this.generateAnwser(firstNumber, secondNumber, correctNumber);
            },
            generateAnwser(firstNumber,secondNumber, correctNumber){
                this.btnData[0].answer = this.generateRandomNumber(firstNumber - 10,
                    secondNumber + 10, correctNumber);
                this.btnData[0].correct = false;

                this.btnData[1].answer = this.generateRandomNumber(firstNumber - 10,
                    secondNumber + 10, correctNumber);
                this.btnData[1].correct = false;

                this.btnData[2].answer = this.generateRandomNumber(firstNumber - 10,
                    secondNumber + 10, correctNumber);
                this.btnData[2].correct = false;

                this.btnData[3].answer = this.generateRandomNumber(firstNumber - 10,
                    secondNumber + 10, correctNumber);
                this.btnData[3].correct = false;

                const correctButton = this.generateRandomNumber(0, 3);
                this.btnData[correctButton].answer = correctNumber;
                this.btnData[correctButton].correct = true;
            }
        },
        created(){
            this.generateQuestion();
        }
    }
</script>
