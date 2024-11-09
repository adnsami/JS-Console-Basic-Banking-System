export function createAccount(_user, _users) {
    const userExists = isUserExists(_user, _users);

    if (!userExists) {
        _users.push(_user);
        return {
            statusCode: 200,
            error: false,
            message: 'Your Account Is Created.',
        };
    }

    return { statusCode: 409, error: true, message: 'User Exists' };
}

// isUserExists func checks for username match
function isUserExists(_user, _users) {
    for (const account of _users) {
        // account = user
        if (account.username === _user.username) return true;
    }

    return false;
}

// Delete Func

export function deleteAccount(id, _users) {

    if(!id) return { statusCode: 409, error: true, message: "Enter Valid ID." };
    
    let isUserExists = false;

    for (const idx in _users) {
        if (_users[idx].id === id) {
            isUserExists = !isUserExists;
            _users.splice(idx, 1);
            break;
        }
    }

    return isUserExists
        ? { statusCode: 200, error: false, message: 'The Account Is Deleted.' }
        : { statusCode: 409, error: true, message: "User Doesn't Exist" };
}



// Deposit Func

export function deposit(id, _users, amount) {

    if(!id) return { statusCode: 409, error: true, message: "Enter Valid ID." };
    
    let isUserExists = false;

    for (const idx in _users) {
        if (_users[idx].id === id) {
            isUserExists = !isUserExists;
           
            // add balance
            _users[idx].balance = _users[idx].balance + amount;

            // add transaction

            const transaction = {
                id: _users[idx].transactions.length + 1,
                created_at: new Date(),
                type: 'DEPOSIT',
                amount: amount,
            }

            _users[idx].transactions.push(JSON.stringify(transaction));

            break;
        }
    }

    return isUserExists
        ? { statusCode: 200, error: false, message: `$${amount} Is Deposited!` }
        : { statusCode: 409, error: true, message: "User Doesn't Exist" };
}


// Withdraw Func

export function withdraw(id, _users, amount) {

    if(!id) return { statusCode: 409, error: true, message: "Enter Valid ID." };


    let isUserExists = false;

    for (const idx in _users) {
        if (_users[idx].id === id) {
            isUserExists = !isUserExists;
           
            // add balance
                if(_users[idx].balance < amount)  return { statusCode: 409, error: true, message: "Not Sufficient Balance!" };
                _users[idx].balance = _users[idx].balance - amount;
            // add transaction

            const transaction = {
                id: _users[idx].transactions.length + 1,
                created_at: new Date(),
                type: 'WITHDRAW',
                amount: amount,
            }

            _users[idx].transactions.push(JSON.stringify(transaction));

            break;
        }
    }

    return isUserExists
        ? { statusCode: 200, error: false, message: `$${amount} Is Withdrawn!` }
        : { statusCode: 409, error: true, message: "User Doesn't Exist" };
}