function getUsers() {

    let users = []

    users.push(new User("Mike_2222", new Date(2021, 1, 22)))
    users.push(new User("Mila", new Date(2021, 0, 13)))
    users.push(new User("User_12345", new Date(2021, 2, 1)))
    users.push(new User("devil_01", new Date(2020, 11, 30)))
    users.push(new User("Michel", new Date(2021, 2, 22)))

    return users;
}