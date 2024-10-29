export function createAccount(_user, _accounts) {
    const userExists = isUserExists(_user, _accounts);

    if(!userExists) {
        _accounts.push(_user);
        return {statusCode: 200, error: false, message: 'Your Account Is Created.'}
    }

    return {statusCode: 409, error: true, message: 'User Exists'};

}

function isUserExists(_user, _accounts) {
    for(const account of _accounts) { // account = user
        if(account.username === _user.username) return true;
    }

    return false;
}