import PromptSync from "prompt-sync";
import { users } from "../database.js";

function ShowUsersPage() {
    const prompt = PromptSync({sigint: true});

    console.clear();
    console.log(':: BANKING MANAGEMENT SYSTEM ::');
    console.log(':: MENU::');
    console.log();

    console.log(users);

    prompt('Press Enter To Continue ..');
}

export default ShowUsersPage;