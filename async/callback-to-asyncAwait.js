class UserStorage {
    async loginUser(id, password) {

        return await setTimeout(() => {
            if (
                (id === "ellie" && password === "dream") ||
                (id === "coder" && password === "academy")
            ) {
                return id;
            } else {
                return (new Error("not found"));
            }
        }, 1000);
    }

    async getRoles(user) {
        return await setTimeout(() => {
            if (user === "ellie") {
                return ({ name: "ellie", role: "admin" });
            } else {
                return (new Error("no access"));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then((user) => alert(`hello ${user.name} and ${user.role}`))
    .catch((error) => console.log(error));