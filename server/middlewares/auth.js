import passport from "passport";

const auth = passport.authenticate("jwt", { session: false });

const authGoogle = passport.authenticate("google", {
    scope: ["profile", "email"],
});

const authGoogleCallback = passport.authenticate

export { auth, authGoogle, authGoogleCallback };
