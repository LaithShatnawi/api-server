class Collection {
    constructor(model) {
        this.model = model;
    }

    async create(obj) {
        let newRecord = await this.model.create(obj);
        return newRecord;
    }

    async read(authId) {
        let records = null;
        if (authId) {
            records = await this.model.findOne({ where: { id: authId } });

        } else {
            records = await this.model.findAll();
        }
        return records;
    }

    async update(obj, authId) {
        let foundRedord = await this.model.findOne({ where: { id: authId } });
        let updatedRedord = await foundRedord.update(obj);
        return updatedRedord;
    }

    async delete(authId) {
        let record = await this.model.destroy({ where: { id: authId } });
        return record;
    }

    async readBooksFromAuthor(authId, model) {
        let record = await this.model.findOne({
            where: { id: authId },
            include: model,
        });
        return record;
    }
}

module.exports = Collection;