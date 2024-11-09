import PromptSync from "prompt-sync";
import { users } from "../database.js";
import { deposit } from "../utils.js";


function DepositPage() {
    console.clear();
    console.log(':: BANKING MANAGEMENT SYSTEM ::');
    console.log(':: MENU::');``
    console.log();
    
    const prompt = PromptSync({sigint: true});

    const id = Number(prompt('Enter ID: '));
    const amount = Number(prompt('Enter $: '));

    // id, users, amount

    const result = deposit(id, users, amount);
    console.log(result.message);

    prompt('Press Enter To Continue ..');
}


export default DepositPage;