<template>
  <div class="row">
    <div class="login-flex">
      <div class="login-flex-logo">
        <img src="../assets/OptoLogo.png" alt="logo" />
        <h1>Optacredit</h1>
      </div>
      <div class="login-flex-form">
        <h1>Forget Password</h1>
        <p>We will send a reset link to your Email ID to reset your password</p>
        <input type="email" placeholder="Email Id" />
        <router-link to="/" class="login-flex-btn">Submit</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  padding: 0 5rem;
  background-image: linear-gradient(
    108deg,
    $bg-white 40%,
    $bg-green-dark 8%,
    $bg-green-light 120%,
    transparent 50%
  );
  background-size: cover;

  &-logo {
    display: flex;

    img {
      width: 70px;
      height: 70px;
    }
  }

  &-logo h1 {
    display: flex;
    align-items: center;
    color: $title-color;
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-left: 0.8rem;
  }

  &-form {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 41rem;

    p {
      color: $white;
      margin-bottom: 1.8rem;
    }

    h1 {
      color: $white;
      margin-bottom: 1.9rem;
      font-weight: 300;
    }

    input {
      width: 60%;
      margin-bottom: 1.9rem;
      padding: 14px 12px 14px;
      border-radius: 4px;
      outline: none;
      font-size: 1rem;
      border: none;
    }
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
