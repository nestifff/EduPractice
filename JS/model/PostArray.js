const SortTypesEnum = Object.freeze({"author": 1, "date": 2})

class PostsArray {

    _sortBy = SortTypesEnum.date

    constructor(posts) {
        this._posts = Array.from(posts);
    }

    addAll(newPosts) {
        let notValidatePosts = []

        for (let newPost of newPosts) {
            if (newPost.isValidate()) {
                this._posts.push(newPost)
            } else {
                notValidatePosts.push(newPost);
            }
        }
        return notValidatePosts;
    }

    getPosts(numBegin = 0, numEnd = 10, filterConfig = {}) {

        if (numBegin < 0 || numEnd > this._posts.length) return null;
        if (filterConfig === null) return null;

        if (this._sortBy === SortTypesEnum.author)
            this._posts.sort(function (post1, post2) {
                if (post1.author.name > post2.author.name) {
                    return 1;
                }
                if (post1.author.name < post2.author.name) {
                    return -1;
                }
                return 0;
            });

        else if (this._sortBy === SortTypesEnum.date)

            this._posts.sort(function (post1, post2) {
                if (post1.date > post2.date) {
                    return 1;
                }
                if (post1.date < post2.date) {
                    return -1;
                }
                return 0;
            });


        if (filterConfig.author === undefined &&
            filterConfig.date === undefined &&
            filterConfig.hashTags === undefined) {

            return this._posts.slice(numBegin, numEnd);
        }

        let posts = [];
        if (filterConfig.author !== undefined)
            posts = this._posts.filter(post => post.author.name === filterConfig.author)

        if (filterConfig.date !== undefined)
            posts = this._posts.filter(post => (post.date.getDate() === filterConfig.date.getDate() &&
                post.date.getFullYear() === filterConfig.date.getFullYear()))

        if (filterConfig.hashTags !== undefined)
            posts = this._posts.filter(post =>
                filterConfig.hashTags.every(hashTag => post.hashTags.includes(hashTag)))


        posts = posts.slice(numBegin, numEnd);
        return posts;
    }

    getPost(id) {
        return this._posts.find(post => post.id === id);
    }

    validatePost(post) {
        return post.isValidate();
    }

    addPost(post) {
        if (this._posts.find(it => it.id === post.id) || !post.isValidate()) {
            return false;
        }
        this._posts.push(post);
        return true;
    }

    editPost(id, newPost) {
        let post = this._posts.find(it => it.id === id)

        if (post === undefined) {
            return false;
        }

        let ind = this._posts.indexOf(post);
        post.edit(newPost);
        this._posts[ind] = post;

        return true;
    }

    removePost(id) {
        let post = this._posts.find(it => it.id === id)

        if (post === undefined) {
            return false;
        }
        this._posts = this._posts.filter(it => it.id !== id);
    }

    get posts() {
        return this._posts;
    }


    set sortBy(value) {
        this._sortBy = value;
    }
}
