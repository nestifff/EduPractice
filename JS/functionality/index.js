let users = getUsers();
let posts = getPosts(users);

let postsArray = new PostsArray(posts);

console.log("All posts:")
for (let post of postsArray.posts) {
    console.log(post.toString())
}
console.log("\n");

console.log("getPost(\"3\")");
console.log(postsArray.getPost("3").toString());
console.log(postsArray.getPost("3").description);
console.log("\n");

console.log("after removePost(\"3\")");
postsArray.removePost("3");
for (let post of postsArray.posts) {
    console.log(post.toString())
}
console.log("\n");

console.log("getPosts(0, 10) sort by date");
let tempArr = postsArray.getPosts(0, 10);
for (let post of tempArr) {
    console.log(post.toString())
}
console.log("\n");

console.log("getPosts(20, 30) sort by date");
tempArr = postsArray.getPosts(20, 30);
console.log(tempArr);
console.log("\n");

console.log("getPosts(10, 20) sort by author");
postsArray.sortBy = SortTypesEnum.author;
tempArr = postsArray.getPosts(10, 20);
for (let post of tempArr) {
    console.log(post.toString())
}
console.log("\n");

console.log("getPosts(0, 10, {author: \"Mila\"}) sort by date");
postsArray.sortBy = SortTypesEnum.date;
tempArr = postsArray.getPosts(0, 10, {author: "Mila"});
for (let post of tempArr) {
    console.log(post.toString())
}
console.log("\n");

console.log("getPosts(0, 10, {author: \"dfdfhfg\"}) sort by date");
postsArray.sortBy = SortTypesEnum.date;
tempArr = postsArray.getPosts(0, 10, {author: "dfdfhfg"});
console.log(tempArr)
console.log("\n");

console.log("getPosts(0, 10, {date: new Date(2016, 1, 1)})");
tempArr = postsArray.getPosts(0, 10, {date: new Date(2016, 1, 1)});
for (let post of tempArr) {
    console.log(post.toString())
}
console.log("\n");

console.log("getPosts(0, 10, {hashTags: [\"music\", \"review\"]})");
tempArr = postsArray.getPosts(0, 10, {hashTags: ["music", "review"]});
for (let post of tempArr) {
    console.log(post.toString())
}
console.log("\n");

console.log("Edit post");
console.log(postsArray.getPost("2").toString());
console.log(postsArray.getPost("2").description);
let postTemp = postsArray.getPost("2");
let newPostTemp = new Post(null, "New description", null, users[0], null, ["new_hashtag_1", "new_hashtag_1"]);
postsArray.editPost("2", newPostTemp);
console.log("Edited: ")
console.log(postsArray.getPost("2").toString());
console.log(postsArray.getPost("2").description);