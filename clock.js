/**
 * @author medilies
 */

class Clock {
    /**
     *
     * @param {HTMLDivElement} clockEement
     */
    constructor(clockSize) {
        const clockContainer = document.querySelector("#js-clock");
        this.clockSize = clockSize;

        this.clockSecondsElement = this.createSecondsHand();
        this.clockMinutesElement = this.createMinutesHand();
        this.clockHoursElement = this.createHoursHand();
        this.clockCenterElement = this.createCenter();
        this.clockNumbersElement = this.createNumbers();

        this.clockElement = this.clockBody();
        this.clockElement.appendChild(this.clockSecondsElement);
        this.clockElement.appendChild(this.clockMinutesElement);
        this.clockElement.appendChild(this.clockHoursElement);
        this.clockElement.appendChild(this.clockCenterElement);
        this.clockElement.appendChild(this.clockNumbersElement);

        this.initClock();
        clockContainer.appendChild(this.clockElement);
    }

    initClock() {
        setInterval(() => {
            const now = new Date();
            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours();

            this.clockSecondsElement.style.transform = `rotate(${
                (seconds * 360) / 60 + 90
            }deg) translateY(-25%)`;
            this.clockMinutesElement.style.transform = `rotate(${
                (minutes * 360) / 60 + 90
            }deg) translateY(-25%)`;
            this.clockHoursElement.style.transform = `rotate(${
                ((hours % 12) * 360) / 12 + 90
            }deg) translateY(-25%)`;
        }, 1000);
    }

    clockBody() {
        const clockBody = document.createElement("div");
        clockBody.style.position = "relative";
        clockBody.style.backgroundColor = "#ccc";
        clockBody.style.width = this.clockSize;
        clockBody.style.height = this.clockSize;
        clockBody.style.border = "1px solid #000";
        clockBody.style.borderRadius = "50%";
        clockBody.style.overflow = "hidden";
        return clockBody;
    }

    createSecondsHand() {
        const secondsHandHeight = 2;
        const [clockSeconds, clockSecondsColored] = this.createHand();

        clockSeconds.style.height = secondsHandHeight + "px";

        clockSecondsColored.style.height = "100%";
        clockSecondsColored.style.width = "45%";
        clockSecondsColored.style.backgroundColor = "#c00";

        this.yCentering(clockSeconds, secondsHandHeight);

        return clockSeconds;
    }

    createMinutesHand() {
        const minutesHandHeight = 4;
        const [clockMinutes, clockMinutesColored] = this.createHand();

        clockMinutes.style.height = minutesHandHeight + "px";

        clockMinutesColored.style.height = "100%";
        clockMinutesColored.style.width = "38%";
        clockMinutesColored.style.backgroundColor = "#333";

        this.yCentering(clockMinutes);

        return clockMinutes;
    }

    createHoursHand() {
        const hoursHandHeight = 6;
        const [clockHours, clockHoursColored] = this.createHand();

        clockHours.style.height = hoursHandHeight + "px";

        clockHoursColored.style.height = "100%";
        clockHoursColored.style.width = "30%";
        clockHoursColored.style.backgroundColor = "#222";

        this.yCentering(clockHours);

        return clockHours;
    }

    /**
     * All hands are initialized at **9**
     */
    createHand() {
        const handContainer = document.createElement("div");
        handContainer.style.width = this.clockSize;
        handContainer.style.display = "flex";
        handContainer.style.justifyContent = "flex-end";
        handContainer.style.zIndex = "2";

        const hand = document.createElement("div");
        hand.style.borderRadius = "5px 0 0 5px";
        handContainer.appendChild(hand);

        const placeHolder = document.createElement("div");
        placeHolder.style.width = "50%";
        handContainer.appendChild(placeHolder);

        return [handContainer, hand];
    }

    createCenter() {
        const centerHeight = 16;
        const center = document.createElement("div");

        center.style.height = centerHeight + "px";
        center.style.width = centerHeight + "px";
        center.style.background = "#000";
        center.style.borderRadius = "50%";
        center.style.zIndex = "4";

        this.yCentering(center);

        center.style.position = "absolute";
        center.style.top = `50%`;
        center.style.left = "50%";
        center.style.transform = "translate(-50%, -50%)";

        return center;
    }

    /**
     * Numbers from 1 to 12 with their relative positionning to clock body
     */
    createNumbers() {
        const numbersContainer = document.createElement("div");
        numbersContainer.style.height = this.clockSize;
        numbersContainer.style.width = this.clockSize;
        numbersContainer.style.fontSize = "2rem";

        for (let i = 1; i <= 12; i++) {
            const number = document.createElement("div");
            number.style.position = "absolute";
            number.style.height = "100%";
            number.style.width = "100%";
            number.style.textAlign = "center";
            number.style.transform = `rotate(${30 * i}deg)`;

            const currentNumber = document.createElement("p");
            currentNumber.innerText = i;
            currentNumber.style.margin = "0.3rem";
            currentNumber.style.transform = `rotate(${-30 * i}deg)`;

            number.appendChild(currentNumber);
            numbersContainer.appendChild(number);
        }

        return numbersContainer;
    }

    yCentering(clockComponent) {
        clockComponent.style.position = "absolute";
        clockComponent.style.top = `50%`;
        clockComponent.style.transform = "translateY(-25%)";
    }
}
