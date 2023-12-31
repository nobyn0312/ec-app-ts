
// ActionTypes
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

// Action Creators
export const signInAction = (userState: any) => {
  return {
    type: SIGN_IN,
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username
    }
  };
};

export const signOutAction = () => {
  return {
    type: SIGN_OUT,
    payload: {
      isSignedIn: false,
      uid: "",
      username: ""
    }
  };
};
