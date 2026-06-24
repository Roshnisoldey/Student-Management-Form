type StepperProps = {
    currentStep : number;
};
export default function Stepper({currentStep}:StepperProps){
    return(
        <div>
            step {currentStep}
        </div>
    )
}