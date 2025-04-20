import doctorModel from '../models/doctorModel.js';

const bookAppointment = async (req, res) => {
  try {
    const { userId, docId, slotDate, slotTime, userData, amount } = req.body;

    const docData = await doctorModel.findById(docId).select('-password');
    delete docData.slots_booked // Remove password from doctor data

const appointmentData = {
userId,
docId,
userData ,
docData,
amount:docData.fees,
slotTime,
slotDate,
date:Date.now()
}

const newAppointment = new appointmentModel(appointmentData)
await newAppointment.save()


await doctorModel.findByIdAndUpdate(docId,{slots_booked})
res.json({success:true, message:"Appointment booked successfully"})

    if (!docData.available) {
      return res.json({ success: false, message: "Doctor is not available" });
    }

    // Get the current slots booked
    let slots_booked = docData.slots_booked;

    // If the date is not initialized yet
    if (!slots_booked[slotDate]) {
      slots_booked[slotDate] = [];
    }

    // If time slot is already booked
    if (slots_booked[slotDate].includes(slotTime)) {
      return res.json({ success: false, message: "Slot already booked" });
    }

    // Book the slot
    slots_booked[slotDate].push(slotTime);

    // Update doctor with new slots_booked
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    // (Optional) Save appointment to a separate appointmentModel here

    res.json({ success: true, message: "Appointment booked successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in booking appointment" });
  }
};

export default bookAppointment;
