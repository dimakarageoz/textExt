import Request from 'superagent';

const url = "http://api-dev.codinghamster.club/api/groups";


var getData = {

    getGroups(){
        return Request.get(url).then((res) => res.body);
    }
};


var sendData = {
    sendGroup(newGroup){
        return Request
            .post(url)
            .send(newGroup);
    }
};

var deleteData = {

    delGroup(idDelGroup){
        const urlId = "http://api-dev.codinghamster.club/api/groups/" + idDelGroup;
        return Request
            .del(urlId)
            .query(idDelGroup);
    }

};

module.exports.getData = getData;
module.exports.sendData = sendData;
module.exports.deleteData = deleteData;
