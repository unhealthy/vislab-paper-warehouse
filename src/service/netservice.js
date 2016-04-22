import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

const devMainUrl = '//localhost:3000';
const $http = Vue.http;

function searchPapers(searchText, callback) {
    const url = `${devMainUrl}/papers?search=${searchText}`;
    $http.get(url).then(response => {
        callback(response);
    }, errResponse => {
        console.log(errResponse);
    });
}

function commitTags(paperID, tags, callback) {
    const url = `${devMainUrl}/papers/tags`;
    const postData = { paperID, tags };
    $http.post(url, postData, {
        header: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        callback(response);
    }, errResponse => {
        console.log(errResponse);
    });
}

function uploadImage(file, fileInfo, callback) {
    const url = `${devMainUrl}/upload/image`;
    const formData = new FormData();
    formData.append('imageFile', file);
    for (const p in fileInfo) {
        if (fileInfo.hasOwnProperty(p)) {
            formData.append(p, fileInfo[p]);
        }
    }
    $http.post(url, formData, {
        'Content-Type': 'multipart/form-data',
    }).then(response => {
        callback(response);
    }, errResponse => {
        console.log(errResponse);
    });
}

export {
searchPapers,
commitTags,
uploadImage,
};