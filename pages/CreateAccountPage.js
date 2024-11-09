import PromptSync from "prompt-sync";
import { users } from "../database.js";
import { createAccount } from "../utils.js";

function CreateAccountPage() {
    console.clear();
    console.log(':: BANKING MANAGEMENT SYSTEM ::');
    console.log(':: MENU::');``
    console.log();
    
    const prompt = PromptSync({sigint: true});

    const firstName = prompt('First Name: ');
    const lastName = prompt('Last Name: ');
    const username = prompt('Username: ');
    const password = prompt('Password: ');
    const email = prompt('Email: ');
    
    const user = {
        id: users.length + 1,
        firstName,
        lastName,
        username,
        password,
        email,
        balance: 0,
        transactions: [] ,
        created_at: new Date(),
    }


    const result = createAccount(user, users);
    console.log(result.message);

    prompt('Press Enter To Continue ..');
}


export default CreateAccountPage;