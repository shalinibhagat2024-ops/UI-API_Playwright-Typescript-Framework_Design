// import { LoginRequest } from "@api/modules/auth/models/LoginRequest";
// import { EnvironmentManager } from "@core/config/EnvironmentManager";

// export class AuthData {
//   /**
//    * Valid Admin User
//    */
//   public static admin(): LoginRequest {
//     return EnvironmentManager.getAdminUser();
//   }

//   /**
//    * Valid Standard User
//    */
//   public static standard(): LoginRequest {
//     return EnvironmentManager.getStandardUser();
//   }

//   /**
//    * Invalid Username
//    */
//   public static invalidUsername(): LoginRequest {
//     return {
//       username: "invalid",
//       password: EnvironmentManager.getAdminUser().password,
//       expiresInMins: 30,
//     };
//   }

//   /**
//    * Invalid Password
//    */
//   public static invalidPassword(): LoginRequest {
//     return {
//       username: EnvironmentManager.getAdminUser().username,
//       password: "WrongPassword",
//       expiresInMins: 30,
//     };
//   }

//   /**
//    * Empty Username
//    */
//   public static emptyUsername(): LoginRequest {
//     return {
//       username: "",
//       password: EnvironmentManager.getAdminUser().password,
//       expiresInMins: 30,
//     };
//   }

//   /**
//    * Empty Password
//    */
//   public static emptyPassword(): LoginRequest {
//     return {
//       username: EnvironmentManager.getAdminUser().username,
//       password: "",
//       expiresInMins: 30,
//     };
//   }
// }
