const items = [
    { tittle: 'post one', body: "this is post one body" },
    { tittle: 'post two', body: "this is post two body" }
];
function getitems() {
    setTimeout(() => {
        let output = '';
        items.forEach((post, index) => {
            output += `<li> ${post.tittle}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            items.push(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('something went wrong');
            }
        }, 2000);
    });
}
function deleteAll(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            items.pop(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('something went wrong');
            }
        }, 3000);
    });
}
createPost({ tittle: 'post three', body: 'this is post three' }).then(getitems);
createPost({ tittle: 'post four', body: 'this is post three' });
createPost({ tittle: 'post five', body: 'this is post three' });
deleteAll().then(getitems).catch(() => { console.log("some error") });
