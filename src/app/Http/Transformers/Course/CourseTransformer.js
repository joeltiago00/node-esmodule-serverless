class CourseTransfomer {
  make(model) {
    return {
      _id: model._id,
      owner_id: model.owner_id,
      title: model.title,
      name: model.name,
      description: model.description,
      price: model.price,
      categories: model.categories,
      rating: model.rating,
      is_visible: model.is_visible,
      created_at: model.created_at,
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

export default new CourseTransfomer();
