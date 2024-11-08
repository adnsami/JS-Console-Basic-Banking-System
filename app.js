import { user1, user2 } from "./data.js";
import CreateAccountPage from "./pages/CreateAccountPage.js";
import DeleteAccountPage from "./pages/DeleteAccountPage.js";
import ShowUsersPage from "./pages/ShowUsersPage.js";
import { createAccount } from "./utils.js";
import PromptSync from "prompt-sync";


const prompt = PromptSync({sigint: true});

do {
    console.clear();
    console.log(':: BANKING MANAGEMENT SYSTEM ::');
    console.log(':: MENU::');
    console.log();

    console.log('1. Create Account');
    console.log('2. Show Users');
    console.log('3. Delete User');
    console.log();
    console.log();
    const option = Number(prompt('>> '));

    switch (option) {
        case 1:
            CreateAccountPage();
            break;
        case 2:
            ShowUsersPage();
            break;
        case 3:
            DeleteAccountPage();
        default:
            break;
    }
    
  
} while(true);


// console.log('Database: ', users);
