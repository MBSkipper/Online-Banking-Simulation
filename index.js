    
    // -- currency formatting  --
    const formatGBP = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 2,
    });
    
    
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

    // -- Account starting balance --
    let balance = 10000
    //document.getElementById('account-balance').innerText = `£${balance.toFixed(2)}` //BALANCE ORIGINAL
    document.getElementById('account-balance').innerText = formatGBP.format(balance);

    // -- Start of transaction list --
    const transactionList = document.getElementById('transaction-list')

    // -- Deposit function --
        function deposit() {

            //-- 1. Collect form data and reset --
            const amountIn = document.getElementById('amount-in')
            const amountToDeposit = Number(amountIn.value) //note use of value to collect input data
            amountIn.value = ''
            
            //-- Update balance --
            balance += amountToDeposit
            //document.getElementById('account-balance').innerText = `£${balance.toFixed(2)}` //BALANCE ORIGINAL
            document.getElementById('account-balance').innerText = formatGBP.format(balance);
            

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
            //amount.innerText = `+£${amountToDeposit.toFixed(2)}` //'BALANCE ORIGINAL`
            amount.innerText = formatGBP.format(amountToDeposit);
            
            topPart.append(h5, amount)

            //-- Middle part of transaction 
            const middlePart = document.createElement('p')
            middlePart.classList.add('mb-1')
            middlePart.innerText = 'Transfer in (CREDIT)'

            //-- Last part of transaction 
            const lastPart = document.createElement('div')
            lastPart.classList.add('d-flex', 'w-100', 'justify-content-between')

            const small1 = document.createElement('small')
            const currentDateTime = new Date()
            small1.innerText = currentDateTime.toLocaleString()//'03/12/2025 09:13:25'

            const small2 = document.createElement('small')
            //small2.innerText = `Available Balance: £${balance.toFixed(2)}` //BALANCE ORIGINAL
            small2.innerText = 'Available balance ' + formatGBP.format(balance)
            
            lastPart.append(small1, small2)

            listGroupItem.append(topPart, middlePart, lastPart)

            //-- keeps latest transaction on top of list
            const existingList = transactionList.innerHTML //makes const existingList comprise all the existing transacn in list
            transactionList.innerHTML = '' //this action empties the existing tranacn list
            transactionList.append(listGroupItem) // this action adds the deposit just made from this form as first on the list
            transactionList.innerHTML += existingList // this action adds the original transacn list below the deposit transacn above
            //note using '+=' tends to add something below what is existing 


            // 3. Show alert - shows alert on deposit screen - added each time a deposit is made
            document.getElementById('deposit-successful').innerHTML = 
            `<div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
                    Deposit successful!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
            

        }

    // -- Send Money function
        function sendMoney() {

            //-- 1. Collect form data, reset input and update webpage balance--
            //collect
            const amountToTransfer = Number(document.getElementById('amount-to-transfer').value) 
            const transferType = document.getElementById('transfer-type').value
            const beneficiaryName = document.getElementById('beneficiary-name').value
            
            //reset
            const sendMoneyForm = document.getElementById('send-money-form')
            sendMoneyForm.reset() 

            //-- Update balance
            balance -= amountToTransfer
            //document.getElementById('account-balance').innerText = `£${balance.toFixed(2)}` //'BALANCE ORIGINAL'
            document.getElementById('account-balance').innerText = formatGBP.format(balance)


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
            //amount.innerText = `-£${amountToTransfer.toFixed(2)}` //'BALANCE ORIGINAL'
            amount.innerText = formatGBP.format(amountToTransfer);
            
            topPart.append(h5, amount)

            //-- Middle part of transaction 
            const middlePart = document.createElement('p')
            middlePart.classList.add('mb-1')
            middlePart.innerText = 'Transfer out (DEBIT)'

            //-- Last part of transaction 
            const lastPart = document.createElement('div')
            lastPart.classList.add('d-flex', 'w-100', 'justify-content-between')

            const small1 = document.createElement('small')
            const currentDateTime = new Date()
            small1.innerText = currentDateTime.toLocaleString()

            const small2 = document.createElement('small')
            //small2.innerText = `Available Balance: £${balance.toFixed(2)}` //'BALANCE ORIGINAL'
            small2.innerText =  'Available balance ' + formatGBP.format(balance);
            
            lastPart.append(small1, small2)

            listGroupItem.append(topPart, middlePart, lastPart)

            //-- keeps latest transaction on top of list
            //-- note see deposit function above for notes about how this works
            const existingList = transactionList.innerHTML
            transactionList.innerHTML = ''
            transactionList.append(listGroupItem)
            transactionList.innerHTML += existingList

            // 3. Show alert - adds alert on transfer out (payment) screen - added each time a payment is made
            document.getElementById('payment-successful').innerHTML = 
            `<div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
                Payment successful!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
            
        }

   /* NOTES / COPIES OF REQUIRED CODE
   
   Requirements of website
    - Account Balance
    - Account statement (Transactions)
    - Transfer funds
        - Transfer in (Credit)
        - Transfer out (Debit)

    / -- Alert component -- full html - 
             * for deposit
             * <div class="alert alert-success alert-dismissible fade show mt-3" role="alert" id="deposit-successful">
                    Deposit successful!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            
            for transfer payment
            <div class="alert alert-success alert-dismissible fade show mt-3" role="alert" id="payment-successful">
                Payment successful!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>


    
     -- Credit element requirements --
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


     -- Deposit element requirements --
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

    -- format a number as GBP
    const formatGBP = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 2,
    });

    // to update the page:
    document.getElementById('account-balance').innerText = formatGBP.format(balance);

            
    */