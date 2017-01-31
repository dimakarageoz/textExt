import Request from 'superagent';

var getData = {

  getGroups(){
      var url = "http://api-dev.codinghamster.club/api/groups";
      return Request.get(url).then((res) => res.body);
  }
};


var sendData = {
    sendGroup(newGroup){
        var url = "http://api-dev.codinghamster.club/api/groups";
        return Request.post(url).send(newGroup);
    }
};

module.exports.getData = getData;
module.exports.sendData = sendData;
