<template>
  <div class="row">
    <div class="login-flex">
      <div class="login-flex-logo">
        <img src="../assets/OptoLogo.png" alt="logo" />
        <h1>Optacredit</h1>
      </div>
      <div class="login-flex-form">
        <h1>Login</h1>

        <input type="number" placeholder="User id" />
        <input type="password" placeholder="Password" />
        <router-link to="/forgotpassword" class="login-flex-forgot"
          >Forgot Password</router-link
        >
        <router-link to="/application" class="login-flex-btn"
          >Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$bg-white: rgba(255, 255, 255, 0.9);
$bg-green-dark: rgba(24, 161, 131, 1);
$bg-green-light: rgba(32, 178, 107, 1);

$title-color: #1e9a5c;
$white: #fff;

.login-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;

  padding: 0 2rem;
  background: linear-gradient(
    108deg,
    $bg-white 40%,
    $bg-green-dark 8%,
    $bg-green-light 120%,
    transparent 50%
  );
  background-size: cover;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background: linear-gradient(to right, $bg-green-dark, $bg-green-light);
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
  }

  &-logo {
    display: flex;

    img {
      width: 70px;
      height: 70px;

      @media (max-width: 800px) {
        filter: invert(1);
      }
    }
  }

  &-logo h1 {
    display: flex;
    align-items: center;
    color: $title-color;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-left: 0.8rem;

    @media (max-width: 800px) {
      color: #fff;
    }
  }

  &-form {
    display: flex;
    flex-direction: column;
    width: 44rem;

    @media (max-width: 1289px) {
      width: 38rem;
    }

    @media (max-width: 1048px) {
      width: 22rem;
    }

    @media (max-width: 800px) {
      width: 36rem;
      justify-content: center;
      display: flex;
      align-items: center;
    }

    @media (max-width: 800px) {
      width: 18rem;
    }

    h1 {
      color: $white;
      text-align: left;
      margin-bottom: 0.9rem;
    }

    input {
      width: 60%;
      margin-bottom: 1.9rem;
      padding: 14px 12px 14px;
      border-radius: 4px;
      outline: none;
      font-size: 1rem;
      border: none;

      @media (max-width: 1048px) {
        width: 75%;
      }

      @media (max-width: 800px) {
        width: 100%;
      }
    }
  }

  &-forgot {
    text-decoration: none;
    color: $white;
    text-align: left;
  }

  &-btn {
    text-decoration: none;
    color: $white;
    text-align: left;
    margin-top: 1rem;
    text-transform: uppercase;
    background: linear-gradient(#20b26b 0%, #19bf9a 100%);
    display: inline;
    padding: 13px 10px;
    text-align: center;
    width: 30%;
    box-shadow: 0 1.5rem 1rem rgba(0, 0, 0, 0.15);

    border-radius: 4px;
  }
}
</style>
