function getSession(){
    let email = guid() + "@mysocialapp.io";
    let password = guid();
    let firstName = guid();
    return new Promise((resolve, reject)=> {
        let client = new msa.MySocialApp().setAppId("u470584465854a728453");
        return client.createAccount(email, password, firstName).then(resolve).catch(reject);
    });
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}