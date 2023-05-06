import DTO from '../../DTO';

class CourseDTO extends DTO {
  ownerId;
  title;
  description;
  price;
  categories;

  constructor(ownerId, title, description, price, categories) {
    super();
    this.ownerId = ownerId;
    this.title = title;
    this.description = description;
    this.price = price;
    this.categories = categories;
  }
}

export default CourseDTO;
