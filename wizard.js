// jshint esversion: 6

/**
 * Manages the state and behavior of a wizard component.
 *
 * @constructor
 * @param {string} el - CSS selector string representing the wizard element.
 */
class Wizard {
    constructor(el) {
        /**
         * The DOM element representing the wizard container.
         * @private
         * @type {HTMLElement}
         */
        this.wizard = document.querySelector(el);

        /**
         * A NodeList containing all step elements within the wizard.
         * Each step element should have a "data-step" attribute.
         * @private
         * @type {NodeList}
         */
        this.wizardSteps = this.wizard.querySelectorAll(".wizard-steps [data-step]");

        /**
         * The previous button element within the wizard buttons section.
         * @private
         * @type {HTMLElement}
         */
        this.wizardBtnPrev = this.wizard.querySelector(".wizard-buttons .wizard-prev");

        /**
         * The next button element within the wizard buttons section.
         * @private
         * @type {HTMLElement}
         */
        this.wizardBtnNext = this.wizard.querySelector(".wizard-buttons .wizard-next");

        /**
         * Keeps track of the currently displayed step (starts at 0).
         * @private
         * @type {number}
         */
        this.currentStep = 0;

        /**
         * Initializes the wizard functionality.
         */
        this.init();
    }

    /**
     * Shows the current step visually by adding/removing the "active" class
     * from step elements.
     * @private
     */
    showStep() {
        this.wizardSteps.forEach((step, index) => {
            step.classList.remove("active");
            if (index === this.currentStep) {
                step.classList.add("active");
            }
        });
    }

    /**
     * Initializes the wizard by setting up the initial state and event listeners.
     */
    init() {
        this.showStep();

        this.wizardBtnPrev.addEventListener("click", (e) => {
            if (this.currentStep > 0) {
                this.currentStep--;
                this.showStep();
            } else {
                console.log("You are already on the first step.");
            }
        });

        this.wizardBtnNext.addEventListener("click", (e) => {
            if (this.currentStep < this.wizardSteps.length - 1) {
                this.currentStep++;
                this.showStep();
            } else {
                console.log("You have reached the final step.");
            }
        });
    }
}
