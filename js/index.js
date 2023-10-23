const principleQ = document.getElementById("principle");
const intrestRatePercentQ = document.getElementById("intrestRatePercent");
const loanLengthQ = document.getElementById("loanLength");
const answerText = document.getElementById("answerText");

function calculateMortgage() {
    let principle = parseInt(principleQ.value);
    let intrestRateInYearsPercent = parseFloat(intrestRatePercentQ.value);
    let loanLengthInYears = parseInt(loanLengthQ.value);

    let loanLengthInMonths = loanLengthInYears * 12;
    let intrestRateInMonthsDecimal = (intrestRateInYearsPercent / 100) / 12;

    let monthlyPrinciple = (principle * (intrestRateInMonthsDecimal / (1 - (1 + intrestRateInMonthsDecimal) ** -loanLengthInMonths)));

    let totalPayment = monthlyPrinciple * loanLengthInMonths;
    let totalIntrestPaid = totalPayment - principle;

    answerText.innerText = `A $${principle} loan at ${intrestRateInYearsPercent}% intrest for ${loanLengthInYears} years would have a $${monthlyPrinciple.toFixed(2)}/mo payment with a total intrest of $${totalIntrestPaid.toFixed(2)}`;
}
