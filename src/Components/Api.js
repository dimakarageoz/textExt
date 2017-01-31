import Request from 'superagent';

var getData = {
  getGroups(){
      var url = "http://api-dev.codinghamster.club/api/groups";
      return Request.get(url).then((res) => res.body);
  }
};
module.exports = getData;