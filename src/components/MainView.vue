<template>
  <div>
    <b-navbar type="dark" variant="primary">
      <b-navbar-brand>Add blocker</b-navbar-brand>
      <b-btn @click="showLoginForm" v-if="!isLogged">Login</b-btn>
      <!-- <b-btn @click="login" v-if="!isLogged">Login</b-btn> -->
      <b-btn @click="logout" v-if="isLogged">Logout</b-btn>
    </b-navbar>
    <b-container class="mt-2" v-if="showForm">
      <b-row>
        <b-col>
          <b-form-input
            v-model="loginForm"
            type="text"
            placeholder="Your Login"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-input
            v-model="pswForm"
            type="password"
            placeholder="Password"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-btn @click="login">Login</b-btn>
        </b-col>
      </b-row>
      <b-row>
          <b-col>
            <p>
              Don't have account yet? Forgot password? No worries - go to our
              <a href="">website</a>
            </p>
          </b-col>
        </b-row>
    </b-container>
    <b-container>
      <b-row class="mt-2" v-if="userName">
      <!-- <div>is logged: {{ isLogged }}</div> -->
        <b-col>Hi {{ userName }}</b-col>
      </b-row>
      <b-row class="mt-2" v-else>
        <b-col>You are not logged in</b-col>
      </b-row>
      <b-row class="mt-2"> </b-row>
      <b-row>
        <b-col>
          <b-btn pill size="lg" :variant="stopBtnState" @click="stopAction">
            <b-icon-power></b-icon-power>
          </b-btn>
        </b-col>

        <b-col>
          <b-btn pill size="lg" :variant="moneyBtnState" @click="moneyAction">
            <b-icon-wallet-2></b-icon-wallet-2>
          </b-btn>
        </b-col>
        <b-col>
          <b-btn pill size="lg" :variant="goodBtnState" @click="goodAction">
            <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>
          </b-btn>
        </b-col>
        <b-col>
          <b-btn pill size="lg" :variant="blockBtnState" @click="blockAction">
            <b-icon-exclamation-octagon-fill></b-icon-exclamation-octagon-fill>
          </b-btn>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <p>{{ currDescription }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {
  checkIsLogged,
  logout,
  clearStoredData,
  login,
  getUser,
} from "../utils/loginState.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      accessToken: "",
      userName: "",
      dummy: "txt",
      catblocker: null,
      currOption: null,
      selectedOption: null,
      isLogged: null,
      showForm: false,
      loginForm: "",
      pswForm: "",
    };
  },
  methods: {
    showLoginForm() {
      if (this.isLogged === false) {
        this.showForm = true;
      }
    },
    async checkIsLogged() {
      this.isLogged = await checkIsLogged();
      await browser.runtime.sendMessage("checkState");
    },
    async logout() {
      await logout();
      this.userName = null;
      await this.checkIsLogged();
    },
    async clearStoredData() {
      await clearStoredData();
      this.userName = null;
    },
    async login() {
      //! test
      try {
        this.accessToken = await login(this.loginForm, this.pswForm);
        this.loginForm = "";
        this.pswForm = " ";
        this.showForm = false;
      } catch (e) {
        console.error(`couldn't log in: ${e}`);
      }
      await this.getUser(this.accessToken);
      await this.checkIsLogged();
    },
    async getUser(accessToken) {
      this.userName = await getUser(accessToken);
    },
    async stopAction() {
      this.currOption = "stop";
      await this.sendMsgToContent("stop");
    },
    async moneyAction() {
      this.currOption = "money";
      await this.sendMsgToContent("money");
    },
    async goodAction() {
      this.currOption = "good";
      await this.sendMsgToContent("good");
    },
    async blockAction() {
      this.currOption = "block";
      await this.sendMsgToContent("block");
    },
    async sendMsgToContent(text) {
      const tabs = await browser.tabs.query({
        active: true,
        currentWindow: true,
      });
      const currTab = tabs[0].id;
      await browser.tabs.sendMessage(currTab, { message: text });
      // await browser.storage.local.set({ catblocker: true })
      chrome.storage.local.set({ catblocker: text }, () => {
        console.log(`blocker state set in storge to ${text}`);
      });
    },
  },
  async mounted() {
    // to be moved to store
    const nameObj = await browser.storage.sync.get("userName");
    this.userName = nameObj.userName;
    await this.checkIsLogged();
    // to be moved to the store
    browser.storage.onChanged.addListener((changes, area) => {
      console.log(`area to change: ${area}`);
      if (area === "local") {
        if (Object.prototype.hasOwnProperty.call(changes, "catblocker")) {
          this.catblocker = changes.catblocker.newValue;
          this.currOption = this.catblocker;
        }
      }
    });

    const result = await browser.storage.local.get("catblocker");
    this.catblocker =
      result.catblocker === undefined ? "money" : result.catblocker;
    this.currOption = this.catblocker;
    console.log(`[popup] at init current state is ${this.catblocker}`);
    // });
  },
  computed: {
    stopBtnState() {
      return this.currOption === "stop" ? "danger" : "outline-danger";
    },
    blockBtnState() {
      return this.currOption === "block" ? "primary" : "outline-primary";
    },
    moneyBtnState() {
      return this.currOption === "money" ? "primary" : "outline-primary";
    },
    goodBtnState() {
      return this.currOption === "good" ? "primary" : "outline-primary";
    },
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
    currDescription() {
      if (this.currOption === "stop") {
        return `Extension is deactivated`;
      } else if (this.currOption === "money") {
        return `Now you are earning money. We will not only block ads on websites, but also replace them with our owns. You are participating in profits!`;
      } else if (this.currOption === "good") {
        return `Sharing is carrying. We will not only block ads on websites, but also replace them with our owns. Part of profits is going to the xxx. Please check "about" tab for details`;
      } else if (this.currOption === "block") {
        return `Now we are simply blocking ads`;
      } else {
        return ``;
      }
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
