class DTO {
  toDatabase(withNullAttributes = true) {
    if (!withNullAttributes) {
      return this.#withoutNullAttributes();
    }

    return this.#withNullAttributes();
  }

  #withoutNullAttributes() {
    return (
      Object.entries(this)
        // eslint-disable-next-line no-unused-vars
        .filter(([key, value]) => value !== undefined)
        .reduce((obj, [key, value]) => {
          obj[
            key
              .split(/(?=[A-Z])/)
              .join('_')
              .toLowerCase()
          ] = value;

          return obj;
        }, {})
    );
  }

  #withNullAttributes() {
    return Object.entries(this).reduce((obj, [key, value]) => {
      obj[
        key
          .split(/(?=[A-Z])/)
          .join('_')
          .toLowerCase()
      ] = value;

      return obj;
    }, {});
  }
}

export default DTO;
