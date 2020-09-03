import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()

export class AuthService {
  currentUser: IUser
  loginUser(username: string, password: string){
    this.currentUser ={
      id: 1,
      firstName: 'john',
      lastName: 'papa',
      username: 'papa'
    }
  }
  isAuthenticated(){
    return !!this.currentUser
  }
  apdateCurrentUser(first:string, last:string){
    this.currentUser.firstName = first
    this.currentUser.lastName = last
  }
}
