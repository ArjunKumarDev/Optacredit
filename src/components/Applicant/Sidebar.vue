<template>
  <div class="sidebar" v-bind:class="navVisible ? 'active' : ''">
    <div class="sidebar-title">
      <img src="../../assets/OptoLogo.png" />
      <h1>Optacredit</h1>
    </div>
    <div class="sidebar-content">
      <div class="sidebar-content-1">
        <img src="../../assets/logo.png" class="profile-pic" />
        <p>Ajeesh</p>
        <div class="sidebar-content-1-logos">
          <img src="../../assets/notification.png" />
          <img src="../../assets/settings.png" />
        </div>
      </div>
      <div class="sidebar-content-2">
        <img src="../../assets/contract.png" />
        <p>Applications</p>

        <img src="../../assets/user-profile.png" />
        <p>Co-Lender</p>

        <img src="../../assets/open-box.png" />
        <p>Products</p>

        <div>
          <div class="login-details">
            <span>Last Login</span>
            <span>12/06/18 at 3pm</span>
            <div>
              <router-link to="/" class="logout">&rarr;Logout</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["navVisible"],
};
</script>

<style lang="scss">
$title-color: #1e9a5c;
$white: #fff;

.sidebar.active {
  opacity: 1;
  position: absolute;
  z-index: 1;
  transition: all 0.4s;
}

.sidebar {
  max-width: 170px;
  height: 100vh;
  transition: all 0.2s;

  @media (max-width: 768px) {
    opacity: 0;
    position: absolute;
  }

  &-title {
    display: flex;
    padding: 13px 15px;
    border-right: 1px solid #000000;
    color: $title-color;

    @media (max-width: 768px) {
      background: white;
    }

    img {
      width: 80px;
    }

    h1 {
      margin-left: 0.4rem;
      display: flex;
      align-items: center;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  &-content {
    background: linear-gradient(to right bottom, #18a183, #20b26b);
    height: 100%;

    &-1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 1.5rem;

      &-logos {
        padding-top: 2rem;
        width: 100%;

        img {
          width: 30px;
          margin-left: 2.3rem;
          cursor: pointer;
          filter: invert(1);
        }
      }

      .profile-pic {
        height: 80px;
        width: 80px;
        border-radius: 50px;
        border: 5px solid #fff;
        object-fit: center;
      }

      p {
        margin-top: 0.5rem;
        color: $white;
        font-weight: 400;
      }
    }

    &-2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 2rem;
      cursor: pointer;

      img {
        width: 30px;
        margin-bottom: 0.7rem;
        filter: invert(1);
      }

      p {
        margin-bottom: 3rem;
        color: $white;
      }
    }
  }

  .login-details {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      color: $white;
    }

    .logout {
      color: $white;
      text-decoration: none;
    }

    div {
      margin-top: 1rem;
    }
  }
}
</style>
