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

async function displayUserStatus(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log(`User: ${user.name}, Email: ${user.email}`);
    } catch (error) {
        console.error("Error: ", error);
    }
}

displayUserStatus(1);

displayUserStatus(3);
