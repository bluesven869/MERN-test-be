import { Request, Response, NextFunction } from "express";
import { UserController } from "../controllers/userController";

export class Routes {
  public userController: UserController = new UserController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!",
      });
    });

    // User
    app
      .route("/users")
      .get((req: Request, res: Response, next: NextFunction) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      }, this.userController.getUsers);

    // POST endpoint
    app.route("/user").post(this.userController.addNewUser);

    // User detail
    app
      .route("/user/:userId")
      // get specific user
      .get(this.userController.getUserWithID)
      .put(this.userController.updateUser)
      .delete(this.userController.deleteUser);
  }
}
