import { randomUUID } from "crypto";

export class RandomUtil {
  private static readonly characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  public static boolean(): boolean {
    return Math.random() < 0.5;
  }

  public static item<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }

  /**
   * Random String
   */
  public static string(length = 6): string {
    let value = "";

    for (let i = 0; i < length; i++) {
      value += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    }

    return value;
  }

  /**
   * Random Number
   */
  public static number(length = 5): string {
    let value = "";

    for (let i = 0; i < length; i++) {
      value += Math.floor(Math.random() * 10);
    }

    return value;
  }

  /**
   * Random Email
   */
  public static email(): string {
    return `user_${Date.now()}@automation.com`;
  }

  /**
   * Random First Name
   */
  public static firstName(): string {
    return `Auto${this.string(5)}`;
  }

  /**
   * Random Middle Name
   */
  public static middleName(): string {
    return "QA";
  }

  /**
   * Random Last Name
   */
  public static lastName(): string {
    return `User${this.string(5)}`;
  }

  /**
   * Random Employee Id
   */
  public static employeeId(): string {
    return this.number(6);
  }
  /**
   * Random Address
   */
  public static address(): string {
    return `${this.number(3)} ${this.string(8)} Street`;
  }

  /**
   * Random City
   */
  public static city(): string {
    return this.item(["Hyderabad", "Pune", "Mumbai", "Bengaluru", "Chennai"]);
  }

  /**
   * Random State
   */
  public static state(): string {
    return this.item(["Telangana", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat"]);
  }

  /**
   * Random Country
   */
  public static country(): string {
    return this.item(["India", "United States", "United Kingdom", "Australia", "Canada"]);
  }

  /**
   * Random Zip Code
   */
  public static zipCode(): string {
    return this.number(6);
  }

  /**
   * Random Mobile Number
   */
  public static mobileNumber(): string {
    return `9${this.number(9)}`;
  }

  /**
   * Random Phone Number
   */
  public static phoneNumber(): string {
    return `0${this.number(10)}`;
  }

  /**
   * Random Username
   */
  public static username(): string {
    return `user_${this.string(6)}`;
  }

  /**
   * Random Password
   */
  public static password(): string {
    return `${this.string(8)}@123`;
  }

  /**
   * Random UUID
   */
  public static uuid(): string {
    return randomUUID();
  }
}
