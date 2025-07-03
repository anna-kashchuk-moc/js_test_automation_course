function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                return resolve({
                    id: 1,
                    name: "Ivan",
                    email: "ivan@example.com",
                });
            } else {
                return reject("User is not found");
            }
        }, 1000);
    });
}

fetchUserData(1)
    .then((user) => console.log("User data: ", user))
    .catch((error) => console.error("Error: ", error));

fetchUserData(2)
    .then((user) => console.log("User data: ", user))
    .catch((error) => console.error("Error: ", error));
