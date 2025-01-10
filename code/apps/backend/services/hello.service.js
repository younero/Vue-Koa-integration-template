const Hello = require('../models/hello.model');

class Service {
    async create(name) {
        const user = new Hello({
            name
        });
        return user.save();
    }

    async list() {
        return Hello.find();
    }

    async delete(id) {
        return Hello.findByIdAndDelete(id);
    }

    async update(id, name) {
        return Hello.findOneAndUpdate(id, {
            name
        }, {new: true});
    }
}

module.exports = new Service();