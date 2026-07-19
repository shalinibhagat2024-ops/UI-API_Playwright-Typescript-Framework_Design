import { UserRequest } from "@api/modules/users/models/UserRequest";
import { DataGenerator } from "@utils/data/DataGenerator";

export class UserData {
  public static valid(): UserRequest {
    return {
      firstName: "Automation",
      lastName: "Engineer",
      age: 30,
      gender: "male",
      email: DataGenerator.email(),
      phone: DataGenerator.phone(),
      username: DataGenerator.username(),
      password: DataGenerator.password(),
      birthDate: "1995-01-01",
    };
  }

  public static updated(): Partial<UserRequest> {
    return {
      firstName: "Updated",
      lastName: "User",
    };
  }
}
