import User from "./schemas/User"

export default class UserRepository {
  public createUser (data: any) {
    return User.create(data)
  }

  public getAll () {
    return User.find({})
  }

  public getUser (_id: any) {
    return User.find({ _id })
  }

  public deleteUser (_id: any) {
    return User.findOneAndDelete({ _id })
  }
}
