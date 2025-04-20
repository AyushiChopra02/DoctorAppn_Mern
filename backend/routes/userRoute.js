import bookAppointment from "../controllers/userController";
import authUser from "../middlewares/authMiddleware.js";

userRoute.post("/book-appointment",authUser, bookAppointment);

export default userRoute; 