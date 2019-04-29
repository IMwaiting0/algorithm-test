// module.js
module.exports = {
    name: "zhang",
    getName: function() {
        console.log(this.name);
    },
    changeName: function(n) {
        this.name = n;
    }
};