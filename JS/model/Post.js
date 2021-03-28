class Post {

    _likes = []

    constructor(id, description, date, author, photoLink, hashTags) {
        this._id = id;
        this._description = description;
        this._date = date;
        this._author = author;
        this._photoLink = photoLink;
        this._hashTags = hashTags;
    }

    isValidate() {

        if (this.id !== null &&
            this.description !== null &&
            this.date !== null &&
            this.author !== null) {

            if (this.description.length !== 0 && this.date instanceof Date) {
                return true;
            }
        } else {
            return false;
        }
    }

    edit(newPost) {
        if (newPost.description !== null) {
            this._description = newPost.description;
        }
        if (newPost.photoLink !== null) {
            this._photoLink = newPost.photoLink;
        }
        if (newPost.hashTags !== null) {
            this._hashTags = newPost.hashTags;
        }
        if (newPost.likes !== null) {
            this._likes = newPost.likes;
        }
    }

    addLike(user) {

        if (user !== null && user instanceof User) {
            if (this.likes.includes(user)) {
                return false;
            }
            this.likes.push(user);
            return true;
        }

        return false;
    }

    get likes() {
        return this._likes;
    }

    get id() {
        return this._id;
    }

    get description() {
        return this._description;
    }

    get date() {
        return this._date;
    }

    get author() {
        return this._author;
    }

    get photoLink() {
        return this._photoLink;
    }

    get hashTags() {
        return this._hashTags;
    }

    toString() {

        let str = `id: ${this._id}; date: ${this._date.toString()}; author: ${this._author.name}; hashTags: [${arrToString(this._hashTags)}]`;

        return str;
    }
}

function arrToString(arr) {
    let str = "";
    for (let el of arr) {
        str += el + ", ";
    }
    return str;
}

/*
let post = new Post(null, "", new Date(2021, 2, 28),
    new User("Name", new Date(2021, 2, 28)),
    "", ["music", "review"]);

console.log(post.author.name);
console.log(post.isValidate());

let arr = [new User("1", new Date(2011, 1, 1)), new User("2", new Date(2011, 1, 1))]
arr = arr.filter(it => it.name !== "2");
for (let user of arr) {
    console.log(user.name)
}
console.log(` dfgdg: ${elems(arr)}`)

function elems(arr) {
    let str = "";
    for (let el of arr) {
        str += el.name + ", ";
    }
    return str;
}*/
