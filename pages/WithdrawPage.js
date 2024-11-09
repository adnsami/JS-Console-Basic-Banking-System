import PromptSync from "prompt-sync";
import { users } from "../database.js";
import { withdraw } from "../utils.js";


function WithdrawPage() {
    console.clear();
    console.log(':: BANKING MANAGEMENT SYSTEM ::');
    console.log(':: MENU::');``
    console.log();
    
    const prompt = PromptSync({sigint: true});

    const id = Number(prompt('Enter ID: '));
    const amount = Number(prompt('Enter $: '));

    // id, users, amount

    const result = withdraw(id, users, amount);
    console.log(result.message);

    prompt('Press Enter To Continue ..');
}


export default WithdrawPage;