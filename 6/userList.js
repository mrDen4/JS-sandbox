(function() {
    window.UserList = function() {
        this.users = [];
        this.add = function(user) {
          this.users.push(user);
        };
        this.getAllUsers = function() {
          console.log(this.users);
        };
      }
})();