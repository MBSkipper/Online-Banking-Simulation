
/*Requirements
    - Account Balance
    - Account statement (Transactions)
    - Transfer funds
        - Transfer in (Credit)
        - Transfer out (Debit)
    
    */

    const accountNumber = '2037889316'

    const eyeButton = document.getElementById('see-account-number')
    const accountNoText = document.getElementById('account-num-text')
    let accountNoVisible = false
    
        eyeButton.addEventListener('click', () => {
            eyeButton.classList.toggle('fa-eye-slash')
            eyeButton.classList.toggle('fa-eye')
            accountNoVisible = !accountNoVisible
        
        if(accountNoVisible) {
            accountNoText.innerText = accountNumber
            } else {
            accountNoText.innerText = `*********${accountNumber.slice(-3)}`
            }
        })

        


    