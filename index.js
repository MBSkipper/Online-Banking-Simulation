
/*Requirements
    - Account Balance
    - Account statement (Transactions)
    - Transfer funds
        - Transfer in (Credit)
        - Transfer out (Debit)
    
    */

    const accountNumber = '2037889316'

    //-- Eye button --
    const eyeButton = document.getElementById('see-account-number')
    const accountNoText = document.getElementById('account-num-text')
    let accountNoVisible = false
    
    // -- eye button function --
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

    // -- Start of transaction list --
    const transactionList = document.getElementById('transaction-list')

    // -- Deposit function --
        function deposit() {

            //-- 1. Collect form data and reset --
            const amountIn = document.getElementById('amount-in')
            const amountToDeposit = Number(amountIn.value) //note use of value to collect input data
            amountIn.value = ''

           /*-- 2. Create element structure using DOM Methods 
            applies to rest of this function until alert code at bottom -- */
           
            const listGroupItem  = document.createElement('a') //the transaction list = series of anchor tags
            listGroupItem.classList.add('list-group-item', 'list-group-item-action') //so it represents the anchor tag
            
            //-- Top part of transaction 
            const topPart = document.createElement('div')
            topPart.classList.add('d-flex', 'w-100', 'justify-content-between')

            const h5 = document.createElement('h5')
            h5.classList.add('mb-1')
            h5.innerText = 'Deposit Transfer'

            const amount = document.createElement('div')
            amount.classList.add('money', 'fs-5', 'text-success')
            amount.innerText = `+£${amountToDeposit.toFixed(2)}`
            
            topPart.append(h5, amount)

            //-- Middle part of transaction 
            const middlePart = document.createElement('p')
            middlePart.classList.add('mb-1')
            middlePart.innerText = 'Transfer in (CREDIT)'

            //-- Last part of transaction 
            const lastPart = document.createElement('div')
            lastPart.classList.add('d-flex', 'w-100', 'justify-content-between')

            const small1 = document.createElement('small')
            small1.innerText = '03/12/2025 09:13:25'

            const small2 = document.createElement('small')
            small2.innerText = 'Available balance: 66,666.66'
            
            lastPart.append(small1, small2)

            listGroupItem.append(topPart, middlePart, lastPart)
            transactionList.append(listGroupItem)

            // 3. Show alert - show class added to alert to show it on screen
            //document.getElementById('deposit-successful').classList.add('show') - original demo code
            const alertBox = document.getElementById('deposit-successful');
            alertBox.classList.add('show');
            setTimeout(() => {
                alertBox.classList.remove('show');
                }, 3000);

        }

    // -- Send Money function
        function sendMoney() {

            //-- 1. Collect form data and reset --
            //collect
            const amountToTransfer = Number(document.getElementById('amount-to-transfer').value) 
            const transferType = document.getElementById('transfer-type').value
            const beneficiaryName = document.getElementById('beneficiary-name').value
            
            //reset
            const sendMoneyForm = document.getElementById('send-money-form')
            sendMoneyForm.reset() 


           /*-- 2. Create element structure using DOM Methods 
            applies to rest of this function until alert code at bottom -- */
           
            const listGroupItem  = document.createElement('a') //the transaction list = series of anchor tags
            listGroupItem.classList.add('list-group-item', 'list-group-item-action') //so it represents the anchor tag
            
            //-- Top part of transaction 
            const topPart = document.createElement('div')
            topPart.classList.add('d-flex', 'w-100', 'justify-content-between')

            const h5 = document.createElement('h5')
            h5.classList.add('mb-1')
            h5.innerText = `${transferType} Transfer: ${beneficiaryName}`

            const amount = document.createElement('div')
            amount.classList.add('money', 'fs-5', 'text-danger')
            amount.innerText = `-£${amountToTransfer.toFixed(2)}`
            
            topPart.append(h5, amount)

            //-- Middle part of transaction 
            const middlePart = document.createElement('p')
            middlePart.classList.add('mb-1')
            middlePart.innerText = 'Transfer out (DEBIT)'

            //-- Last part of transaction 
            const lastPart = document.createElement('div')
            lastPart.classList.add('d-flex', 'w-100', 'justify-content-between')

            const small1 = document.createElement('small')
            small1.innerText = '03/12/2025 09:13:25'

            const small2 = document.createElement('small')
            small2.innerText = 'Available balance: 66,666.66'
            
            lastPart.append(small1, small2)

            listGroupItem.append(topPart, middlePart, lastPart)
            transactionList.append(listGroupItem)

            // 3. Show alert - show class added to alert to show it on screen
            //document.getElementById('payment-successful').classList.add('show') - original demo code
            const alertBox = document.getElementById('payment-successful');
            alertBox.classList.add('show');
            setTimeout(() => {
                alertBox.classList.remove('show');
                }, 3000);


        }


   /* NOTES
   
   Requirements of website
    - Account Balance
    - Account statement (Transactions)
    - Transfer funds
        - Transfer in (Credit)
        - Transfer out (Debit)
    
    Credit element requirements
        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Debit card transaction: Next clothing </h5>
                <div class="money fs-5 text-danger">-95.25</div> 
            </div>
            <p class="mb-1">Transfer out (DEBIT)</p>
            <div class="d-flex w-100 justify-content-between">
                <small>03/12/2025 09:13:25</small>
                <small>Available balance: 66,666.66</small>
            </div>                                          
        </a>


    Deposit element requirements
        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Transfer from Ac 2065874532 </h5>
                <div class="money fs-5 text-success">500.00</div> 
            </div>
            <p class="mb-1">Transfer in (CREDIT)</p>
            <div class="d-flex w-100 justify-content-between">
                <small>03/12/2025 09:13:25</small>
                <small>Available balance: 66,666.66</small>
            </div>                                           
        </a>



    */