class Storage {

        // Get all user
    static getSearchedUsersFromStorage(){
        

        let users; 

        if (localStorage.getItem("searched") === null) {
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));

        }
        return users;

    }
         // Add User
    static addSearchedUserToStorage(username){
        
        let users = this.getSearchedUsersFromStorage();

        // IndexOf 

        if (users.indexOf(username) === -1) {
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));


    }
        // Delete all users
    static clearAllSearchedUsersFromStorage(){
    
        localStorage.removeItem("searched");
    }

}