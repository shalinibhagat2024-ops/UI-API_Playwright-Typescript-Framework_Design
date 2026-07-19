import { UserTestData } from "@api/modules/users/data/UserTestData";
import { UserRequest } from "@api/modules/users/models/UserRequest";
import { BaseBuilder } from "@api/shared/builders/BaseBuilder";
import { faker } from "@faker-js/faker";

export class UserBuilder extends BaseBuilder<UserRequest> {
  private constructor() {
    super({
      ...UserTestData.defaultUser,

      firstName: faker.person.firstName(),

      lastName: faker.person.lastName(),

      email: faker.internet.email(),

      phone: faker.phone.number(),
    });
  }

  static create(): UserBuilder {
    return new UserBuilder();
  }

  withFirstName(firstName: string): UserBuilder {
    this.data.firstName = firstName;

    return this;
  }

  withLastName(lastName: string): UserBuilder {
    this.data.lastName = lastName;

    return this;
  }

  withAge(age: number): UserBuilder {
    this.data.age = age;

    return this;
  }

  withEmail(email: string): UserBuilder {
    this.data.email = email;

    return this;
  }

  withPhone(phone: string): UserBuilder {
    this.data.phone = phone;

    return this;
  }
}
