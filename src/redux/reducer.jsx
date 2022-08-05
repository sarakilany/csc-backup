import { HAS_LOGED } from "./actiontypes";

const initialState = {
  has_loged: {
    "id": "96051",
    "type": "individual",
    "name": "Recyclobekia",
    "email": "recyclobekia@gmail.com",
    "password": "15848Asds589#efe",
    "city": "cairo",
    "zone": "nasr city",
    "address": "Apt 7, Buliding No 5, elmatar.St, nasr city, cairo",
    "tel": "0126094231",
    "landline": null,
    "class": "B",
    "badge": "green saver",
    "rank": "100",
    "points": "50",
    "contactPersonalName": "ali",
    "addressConfirmImage": null,
    "statusVerification": "verfied",
    "requests": [
      {
        "admin_Id": "2980150400022",
        "req_Id": 0,
        "req_date": "26/07/2022",
        "time_slot": "02:00AM - 03:00AM",
        "status": "pending",
        "quantity": 10.5
      },
      {
        "admin_Id": "2980150400022",
        "req_Id": 1,
        "req_date": "24/06/2022",
        "time_slot": "06:00PM - 09:00PM",
        "status": "completed",
        "quantity": 11
      }
    ]
  },

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HAS_LOGED:
      return {
        ...state,
        has_loged: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
