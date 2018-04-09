
import { http } from './http';
import { ui } from './ui';

// Get posta on DOM load

document.addEventListener('DOMContentLoaded', getPosts);
const URL = 'http://localhost:3000/posts';


// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Get Posts
function getPosts(){
    http.get(URL)
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

// Submit Posts
function submitPost(){
    const title = document.querySelector('#title').value;
    const body =  document.querySelector('#body').value;

    const data ={
        title,
        body
    }

    // Create Post
    http.post(URL, data)
        .then(data => {
            ui.showAlert('Post added', 'alert alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(err => console.log(err))

}