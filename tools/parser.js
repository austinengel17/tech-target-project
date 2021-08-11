const xml2js = require('xml2js');

module.exports = async function parse(file) {
        const promise = await new Promise((resolve, reject) => {
            const parser = new xml2js.Parser({explicitArray: false});

            parser.parseString(file, (error, result) => {
                if (error) reject(error);
                else resolve(result)
            })
        })
        return promise
}