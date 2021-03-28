class User {

    _posts = []

    constructor(name, date) {
        this._name = name;
        this._date = date;
    }

    addPost(post) {
        if (post instanceof Post) {
            //if (post.)
            this._posts.push(post)
        }
    }

    equals(user) {
        return (this._name === user.name && this._date.getDate() === user.date.getDate())
    }

    get posts() {
        return this._posts;
    }

    get name() {
        return this._name;
    }

    get date() {
        return this._date;
    }
}