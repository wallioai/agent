import { Model, Document, FilterQuery } from "mongoose";
import dbConnect from "..";

abstract class Base<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.init();
    this.model = model;
  }

  private async init() {
    await dbConnect(); // Ensure database connection
    console.log("CONNECTED TO DB");
  }

  async findOne(query: FilterQuery<T>) {
    return this.model.findOne(query);
  }

  async findAll(query: FilterQuery<T> = {}) {
    return this.model.find(query);
  }

  async create(data: Partial<T>) {
    return this.model.create(data);
  }

  async update(query: FilterQuery<T>, updateData: Partial<T>) {
    return this.model.findOneAndUpdate(query, updateData, { new: true });
  }

  async delete(query: FilterQuery<T>) {
    return this.model.deleteOne(query);
  }
}

export default Base;
