import PromptSync from "prompt-sync";
import { users } from "../database.js";
import { createAccount, deleteAccount } from "../utils.js";

function DeleteAccountPage() {
    console.clear();
    console.log(':: BANKING MANAGEMENT SYSTEM ::');
    console.log(':: MENU::');
    console.log();

    console.log("Delete Page");
    
    const prompt = PromptSync({sigint: true});
    const id = Number(prompt('Enter ID: '));
    

    const result = deleteAccount(id, users);
    console.log(result.message);

    prompt('Press Enter To Continue ..');
}


export default DeleteAccountPage;