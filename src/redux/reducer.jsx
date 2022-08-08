import { HAS_LOGED } from "./actiontypes";

const initialState = {
  has_loged: {
    "id": "96051",
    "type": "admin",
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
