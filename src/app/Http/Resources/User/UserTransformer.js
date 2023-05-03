class UserTransformer {
  make(model) {
    return {
      _id: model._id,
      first_name: model.first_name,
      last_name: model.last_name,
      email: model.email,
    };
  }

  collection(collection) {
    let response = [];

    for (let model of collection) {
      response.push(this.make(model));
    }

    return response;
  }
}

export default new UserTransformer();
