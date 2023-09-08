/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
  //! Kiểm tra xem trạng thái ng dùng đã đăng nhập chưa
  isAuthenticated: false,
  //! function signIn khi ng dùng click login
  signin(callback) {
    //! set lại giá trị isAuthenticated là true
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  //! function signOut khi ng dùng click signout
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
  },
};

export { fakeAuthProvider };
