class ToDatabase {
    handle(dto) {
        const props = Object.keys(dto);

        let propsSnakeCase = props.map((prop) => {
            if (dto[prop] === undefined) {
                return
            }

            const words = prop.split(/(?=[A-Z])/).map(word => word.toLowerCase())

            return words.join('_')
        })

        propsSnakeCase = propsSnakeCase.filter(function (prop) {
            return prop !== undefined;
        })

        console.log(propsSnakeCase);
        // propsSnakeCase.map((prop) => {
        //     if (d)
        // })

        process.exit()
    }
}

export default new ToDatabase()