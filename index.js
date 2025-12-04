
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

    const transactionList = document.getElementById('transaction-list')


        function deposit() {

            /******/
            const amountIn = document.getElementById('amount-in')
            const amountToDeposit = Number(amountIn.value)
            amountIn.value = ''
           /*******/

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
            amount.innerText = `£${amountToDeposit.toFixed(2)}`
            
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

            document.getElementById('deposit-successful').classList.add('show')

        }
        


   