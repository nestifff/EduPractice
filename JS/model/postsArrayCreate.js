function getPosts(users) {

    if (users === null || users.size === 0) {
        return null
    }

    let n = users.length
    let posts = []

    let str = "Post text, very interesting post text Post text, very interesting post text" +
        " Post text, very interesting post text \n Post text, very interesting post text " +
        "Post text, very interesting post textPost text, very interesting post text Post text, very interesting post textPost text, very interesting post text"

    for (let i = 0; i < 4 * n + 2; ++i) {

        str = str + "\n Post text, very interesting post text"
        str += "\n" + i.toString()

        let link = i % 2 === 0 ? "someLink" : null

        let tags = []

        if (i % 2 === 0)
            tags.push("music")
        else
            tags.push("rock_music")

        if (i % 3 === 0)
            tags.push("review")
        else if (i % 3 === 1)
            tags.push("humor")
        else if (i % 3 === 2)
            tags.push("concert")

        if (i % 4 === 0)
            tags.push("slipknot")
        else if (i % 4 === 1)
            tags.push("nightwith")
        else if (i % 4 === 2)
            tags.push("pharaon")


        let dateTemp = 0;
        if (i % 3 === 0)
            dateTemp = i + 10
        else if (i % 3 === 1)
            dateTemp = i + 20
        else
            dateTemp = i + 40

            posts.push(new Post(i.toString(), str, new Date(2016, dateTemp, dateTemp), users[i % n], link, tags))
    }
    posts.push(new Post((4 * n + 2).toString(), str, new Date(2016, 1, 1), users[0], "", []))


    return Array.from(posts);
}