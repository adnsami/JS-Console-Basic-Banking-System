import PromptSync from "prompt-sync";
import { accounts } from "../database.js";
import { createAccount } from "../utils.js";

function CreateAccountPage() {
    console.clear();
    console.log(':: BANKING MANAGEMENT SYSTEM ::');
    console.log(':: MENU::');
    console.log();
    
    const prompt = PromptSync({sigint: true});

    const firstName = prompt('First Name: ');
    const lastName = prompt('Last Name: ');
    const username = prompt('Username: ');
    const password = prompt('Password: ');
    const email = prompt('Email: ');
    
    const user = {
        id: accounts.length + 1,
        firstName,
        lastName,
        username,
        password,
        email,
        created_at: new Date(),
    }

    const result = createAccount(user, accounts);
    console.log(result.message);

    prompt('Press Enter To Continue ..');
}


export default CreateAccountPage;