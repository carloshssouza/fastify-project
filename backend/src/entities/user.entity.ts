import UserRepository from "../repositories/user.repository"

export default class UserEntity {
  public createUser (data: any) {
    return new UserRepository().createUser(data)
  }

  public getAll () {
    return new UserRepository().getAll()
  }

  public getUser (_id: any) {
    return new UserRepository().getUser(_id)
  }

  public deleteUser (_id: any) {
    return new UserRepository().deleteUser(_id)
  }
}
