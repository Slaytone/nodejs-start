let a = 20;

function test() {
    console.log("HI! I'm module! a = " + a);
}

module.exports = {
    a:  a,
    func: test
};
